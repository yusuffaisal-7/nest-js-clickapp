import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface ClickFormData {
  campaign_id: string;
  ad_network: string;
  device_id: string;
  referrer: string;
}

function ClickTracker() {
  const { register, handleSubmit, reset } = useForm<ClickFormData>();

  const onSubmit = async (data: ClickFormData) => {
    try {
      const response = await axios.post('/api/click', {
        ...data,
        ip: '127.0.0.1', // In a real app, this would be handled by the server
        user_agent: navigator.userAgent,
      });
      console.log('Click tracked:', response.data);
      reset();
    } catch (error) {
      console.error('Error tracking click:', error);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Track New Click</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Campaign ID
          </label>
          <input
            type="text"
            {...register('campaign_id')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ad Network
          </label>
          <input
            type="text"
            {...register('ad_network')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Device ID
          </label>
          <input
            type="text"
            {...register('device_id')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Referrer
          </label>
          <input
            type="text"
            {...register('referrer')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Track Click
        </button>
      </form>
    </div>
  );
}

export default ClickTracker;