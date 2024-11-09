'use client';
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import { useAccount, useDisconnect, useBalance } from 'wagmi';
import WalletOptions from '@/components/WalletOptions';

export default function HomePage() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balanceData } = useBalance({ address });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isConnected ? (
        <>
          <Navbar />
          <section className="w-full flex-center flex-col mt-5 pt-5">
            <h1 className="head_text text-center">
              Discover & Share
              <br className="max-md:hidden" />
              <span className="orange_gradient text-center"> AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">
              Promptopia is an open-source AI prompting tool for the modern world to
              discover, create and share creative prompts
            </p>
            <p className="text-lg text-center mt-10">Balance: {balanceData?.formatted} {balanceData?.symbol}</p>
          </section>
        </>
      ) : (
        <WalletOptions />
      )}
    </>
  );
}
