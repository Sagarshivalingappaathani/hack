"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from '../config'
import './globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <div className='main'>
              <div className='gradient' />
            </div>
            <main className='app'>
              {children}
            </main>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
