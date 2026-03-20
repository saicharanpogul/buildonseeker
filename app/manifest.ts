import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Build on Seeker | Developer Hub",
    short_name: "Seeker Hub",
    description: "The Developer Hub for Solana Mobile's Seeker ecosystem. Live stats, dev tools, and grants.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0F",
    theme_color: "#14F195",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
