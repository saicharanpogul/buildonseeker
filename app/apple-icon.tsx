import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0F 0%, #1a1a24 100%)",
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 800,
            background: "linear-gradient(135deg, #9945FF 0%, #14F195 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -5,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
