'use client';
import React from 'react';
import { useConnect } from 'wagmi';

export default function WalletOptions() {
  const { connectors, connect } = useConnect();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Connect Your Wallet
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Choose a wallet provider to get started.
        </p>
        <div className="space-y-4">
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500  text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mx-auto">
                <span>{connector.name}</span>
                <span className="text-sm font-medium">Connect</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
