"use client";

import { useEffect, useState } from "react";
import { HARDCODED_STATS } from "@/lib/constants";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { truncateAddress } from "@/lib/utils";

interface LiveStatsData {
  totalValueLocked: number;
  sharePriceMultiplier: number;
  guardianCount: number;
  minStakeAmount: number;
  vaultAddress: string;
}

export function LiveStats() {
  const [liveData, setLiveData] = useState<LiveStatsData | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/stats");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: LiveStatsData = await res.json();
        setLiveData(data);
        setIsLive(true);
      } catch {
        setIsLive(false);
      }
    }
    fetchStats();
  }, []);

  const skrPrice = HARDCODED_STATS.skrPrice;
  const tvlUsd = liveData
    ? liveData.totalValueLocked * skrPrice
    : 25_000_000;

  return (
    <SectionWrapper id="live-stats" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-green">
              Ecosystem
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Real numbers, on-chain proof
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Live data from Solana mainnet via{" "}
              <a
                href="https://github.com/saicharanpogul/seeker-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-green hover:underline"
              >
                seeker-sdk
              </a>
            </p>
          </div>
          {isLive && (
            <div className="flex items-center gap-2 text-sm text-accent-green">
              <span className="live-dot" />
              Live from Solana
            </div>
          )}
        </div>

        {/* Hero stats row — the big bullish numbers */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="stat-card p-6">
            <p className="text-sm font-medium text-text-secondary">Total Value Locked</p>
            <p className="mt-2 font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              $<AnimatedNumber target={tvlUsd / 1_000_000} decimals={1} suffix="M" />
            </p>
            <p className="mt-1 text-xs text-text-muted">
              {liveData ? (
                <><AnimatedNumber target={liveData.totalValueLocked} formatter={(v) => new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(v)} /> SKR staked</>
              ) : (
                "4.3B+ SKR staked"
              )}
            </p>
          </div>

          <div className="stat-card p-6">
            <p className="text-sm font-medium text-text-secondary">Devices Shipped</p>
            <p className="mt-2 font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              <AnimatedNumber target={HARDCODED_STATS.devicesShipped} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-text-muted">Seeker devices worldwide</p>
          </div>

          <div className="stat-card p-6">
            <p className="text-sm font-medium text-text-secondary">Active Users</p>
            <p className="mt-2 font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              <AnimatedNumber target={HARDCODED_STATS.powerUsers} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-text-muted">Crypto-native power users</p>
          </div>

          <div className="stat-card p-6">
            <p className="text-sm font-medium text-text-secondary">Platform Fees</p>
            <p className="mt-2 font-heading text-3xl font-bold text-accent-green lg:text-4xl">
              0%
            </p>
            <p className="mt-1 text-xs text-text-muted">Developers keep everything</p>
          </div>
        </div>

        {/* On-chain live stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="stat-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-text-muted">Share Price</p>
              {isLive && <span className="live-dot" />}
            </div>
            <p className="mt-2 font-heading text-2xl font-bold text-text-primary">
              {liveData ? (
                <AnimatedNumber target={liveData.sharePriceMultiplier} decimals={3} suffix="x" />
              ) : (
                "—"
              )}
            </p>
          </div>

          <div className="stat-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-text-muted">Active Guardians</p>
              {isLive && <span className="live-dot" />}
            </div>
            <p className="mt-2 font-heading text-2xl font-bold text-text-primary">
              {liveData ? (
                <AnimatedNumber target={liveData.guardianCount} />
              ) : (
                "—"
              )}
            </p>
          </div>

          <div className="stat-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-text-muted">Weekly Active Wallets</p>
            </div>
            <p className="mt-2 font-heading text-2xl font-bold text-text-primary">
              <AnimatedNumber target={HARDCODED_STATS.weeklyActiveWallets} suffix="+" />
            </p>
          </div>

          <div className="stat-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-text-muted">Vault</p>
              {isLive && <span className="live-dot" />}
            </div>
            <p className="mt-2 font-mono text-sm text-accent-cyan">
              {liveData ? (
                <a
                  href={`https://solscan.io/account/${liveData.vaultAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {truncateAddress(liveData.vaultAddress, 6)}
                </a>
              ) : (
                "—"
              )}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
