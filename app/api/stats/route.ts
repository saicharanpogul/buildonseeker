import { Connection } from "@solana/web3.js";
import { getStakingStats } from "seeker-sdk";
import { NextResponse } from "next/server";

export const revalidate = 300;

export async function GET() {
  try {
    const connection = new Connection(
      process.env.RPC_URL || "https://api.mainnet-beta.solana.com"
    );
    const stats = await getStakingStats(connection);
    return NextResponse.json({
      totalValueLocked: stats.totalValueLocked,
      sharePriceMultiplier: stats.sharePriceMultiplier,
      guardianCount: stats.guardianCount,
      minStakeAmount: stats.minStakeAmount,
      vaultAddress: stats.vaultAddress,
    });
  } catch (error) {
    console.error("Failed to fetch staking stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
