import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Minimal monogram favicon.
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
          background: "#07080c",
          color: "#7c83ff",
          fontSize: 17,
          fontWeight: 700,
          borderRadius: 8,
          border: "1px solid #2a2d3a",
        }}
      >
        AK
      </div>
    ),
    { ...size },
  );
}
