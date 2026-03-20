const { Connection } = require("@solana/web3.js");
const { getStakingStats, SKR_MINT_ADDRESS } = require("seeker-sdk");

async function main() {
  const mintString = SKR_MINT_ADDRESS.toBase58();
  console.log("SKR Mint:", mintString);
  const jupRes = await fetch(`https://api.jup.ag/price/v2?ids=${mintString}`);
  const jupData = await jupRes.json();
  console.log("Jup Data:", jupData);
}
main();
