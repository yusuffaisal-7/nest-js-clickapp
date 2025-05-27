import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import axios from 'axios';

interface Click {
  click_id: string;
  campaign_id: string;
  ad_network: string;
  device_id: string;
  fingerprint: string;
  timestamp: string;
}

const columnHelper = createColumnHelper<Click>();

const columns = [
  columnHelper.accessor('click_id', {
    header: 'Click ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('campaign_id', {
    header: 'Campaign',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('ad_network', {
    header: 'Ad Network',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('device_id', {
    header: 'Device ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('fingerprint', {
    header: 'Fingerprint',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('timestamp', {
    header: 'Timestamp',
    cell: (info) => new Date(info.getValue()).toLocaleString(),
  }),
];

function ClicksTable() {
  const { data: clicks = [], isLoading } = useQuery({
    queryKey: ['clicks'],
    queryFn: async () => {
      const response = await axios.get('/api/click');
      return response.data;
    },
  });

  const table = useReactTable({
    data: clicks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Recent Clicks
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClicksTable;