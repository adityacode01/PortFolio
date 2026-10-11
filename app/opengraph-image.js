import { ImageResponse } from "next/og";
import { site } from "@/config/portfolio";

export const alt = `${site.name}: ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#07080c",
          backgroundImage: "radial-gradient(circle at 85% 0%, rgba(124,131,255,0.28), rgba(7,8,12,0) 55%)",
          color: "#e9e7e1",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#8b8f9c" }}>{site.role}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 108, lineHeight: 1.02, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 38, color: "#8b8f9c" }}>
            Building useful web products, end to end.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
