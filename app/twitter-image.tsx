import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Build on Seeker - The Developer Hub for Solana Mobile";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(153, 69, 255, 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(20, 241, 149, 0.08), transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(135deg, #9945FF 0%, #14F195 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Build on Seeker
          </h1>

          <p
            style={{
              fontSize: 24,
              color: "#888",
              marginTop: 20,
              textAlign: "center",
              maxWidth: 700,
            }}
          >
            The Developer Hub for Solana Mobile
          </p>

          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 48,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 36, fontWeight: 700, color: "#FAFAFA" }}>
                19.7%
              </span>
              <span style={{ fontSize: 14, color: "#555" }}>Staking APY</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 36, fontWeight: 700, color: "#FAFAFA" }}>
                0%
              </span>
              <span style={{ fontSize: 14, color: "#555" }}>App Store Fees</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 36, fontWeight: 700, color: "#FAFAFA" }}>
                150K+
              </span>
              <span style={{ fontSize: 14, color: "#555" }}>Users</span>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 30,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 14, color: "#555" }}>
            buildonseeker.com
          </span>
          <span style={{ fontSize: 14, color: "#333" }}>•</span>
          <span style={{ fontSize: 14, color: "#555" }}>powered by seeker-sdk</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
