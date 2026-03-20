const { Connection } = require("@solana/web3.js");
const { getStakingStats, SKR_MINT_ADDRESS } = require("seeker-sdk");

async function main() {
  const mintString = SKR_MINT_ADDRESS.toBase58();
  
  // Test Jup v6
  try {
    const jupRes = await fetch(`https://price.jup.ag/v6/price?ids=${mintString}`);
    const jupData = await jupRes.json();
    console.log("Jup v6 Price:", jupData.data?.[mintString]?.price);
  } catch (e) {
    console.error("Jup error:", e.message);
  }

  // Test stake.solanamobile.com
  try {
    const stakeRes = await fetch("https://stake.solanamobile.com/");
    const html = await stakeRes.text();
    const apyMatch = html.match(/([\d\.]+)%\s*APY/i);
    if (apyMatch) {
      console.log("Found APY:", apyMatch[1]);
    } else {
      console.log("No APY found.");
    }
  } catch (e) {
    console.error("Stake HTML error:", e.message);
  }
}
main();
