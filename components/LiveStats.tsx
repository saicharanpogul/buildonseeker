"use client";

import { useEffect, useState } from "react";
import { HARDCODED_STATS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientGlow } from "@/components/ui/GradientGlow";
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

  return (
    <SectionWrapper id="live-stats" className="relative py-24 lg:py-32">
      <GradientGlow
        color="green"
        size="lg"
        className="-right-32 top-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12">
        <SectionHeading
          title="Live Ecosystem Stats"
          subtitle="Real numbers from the Seeker ecosystem. On-chain data powered by seeker-sdk."
          gradient
        />

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Devices Shipped"
            value={
              <AnimatedNumber
                target={HARDCODED_STATS.devicesShipped}
                suffix="+"
              />
            }
          />
          <StatCard
            label="Power Users"
            value={
              <AnimatedNumber
                target={HARDCODED_STATS.powerUsers}
                suffix="+"
              />
            }
          />
          <StatCard
            label="dApps in Store"
            value={
              <AnimatedNumber
                target={HARDCODED_STATS.dappsInStore}
                suffix="+"
              />
            }
          />
          <StatCard
            label="Weekly Active Wallets"
            value={
              <AnimatedNumber
                target={HARDCODED_STATS.weeklyActiveWallets}
                suffix="+"
              />
            }
          />
        </div>

        {liveData ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
              label="Total SKR Staked (TVL)"
              value={
                <AnimatedNumber
                  target={liveData.totalValueLocked}
                  formatter={(val) =>
                    new Intl.NumberFormat("en-US", {
                      maximumFractionDigits: 0,
                    }).format(val)
                  }
                />
              }
              suffix="SKR"
              live={isLive}
            />
            <StatCard
              label="Share Price"
              value={
                <AnimatedNumber
                  target={liveData.sharePriceMultiplier}
                  decimals={3}
                  suffix="x"
                />
              }
              live={isLive}
            />
            <StatCard
              label="Guardians"
              value={
                <AnimatedNumber target={liveData.guardianCount} />
              }
              live={isLive}
            />
            <StatCard
              label="Min Stake"
              value={
                <AnimatedNumber
                  target={liveData.minStakeAmount}
                  formatter={(val) =>
                    new Intl.NumberFormat("en-US", {
                      maximumFractionDigits: 0,
                    }).format(val)
                  }
                />
              }
              suffix="SKR"
              live={isLive}
            />
            <StatCard
              label="Vault Address"
              value={
                <a
                  href={`https://solscan.io/account/${liveData.vaultAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan underline-offset-4 hover:underline"
                >
                  {truncateAddress(liveData.vaultAddress, 6)}
                </a>
              }
              live={isLive}
            />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
              label="Total SKR Staked"
              value={HARDCODED_STATS.skrStaked}
              suffix="+"
            />
            <p className="col-span-full text-center text-sm text-text-muted">
              Live on-chain stats loading...
            </p>
          </div>
        )}

        {!isLive && liveData === null && (
          <p className="mt-4 text-center text-xs text-text-muted">
            (cached data — live stats temporarily unavailable)
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}
