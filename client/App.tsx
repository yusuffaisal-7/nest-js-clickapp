import React from 'react';
import ClickTracker from './components/ClickTracker';
import ClicksTable from './components/ClicksTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Mobile Attribution Platform
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <ClickTracker />
          <div className="mt-8">
            <ClicksTable />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;