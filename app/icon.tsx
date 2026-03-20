import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            background: "linear-gradient(135deg, #9945FF 0%, #14F195 100%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -2,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
