import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OG_IMAGE } from "@/lib/site";

// Social share card (LinkedIn, WhatsApp, Slack, X, iMessage…), written to
// /og.png at build time. A route handler rather than the opengraph-image
// convention so the static export keeps the .png extension and the host
// serves it as image/png.
export const dynamic = "force-static";

export async function GET() {
  const mark = await readFile(join(process.cwd(), "public/favicon.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 85% 10%, rgba(255,122,71,0.32) 0%, rgba(255,122,71,0.06) 40%, transparent 65%), #0d1117",
          color: "#f0f6fc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* Satori (next/og) only understands plain <img>. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={72} height={72} alt="" />
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            MuggleShip
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: -2.5,
            }}
          >
            <div style={{ display: "flex" }}>FBA Prep & eCommerce</div>
            <div style={{ display: "flex" }}>
              Fulfillment,
              <span style={{ color: "#ff7a47", marginLeft: 22 }}>
                from the UK.
              </span>
            </div>
          </div>
          <div style={{ fontSize: 30, color: "#b1bac4", maxWidth: 960 }}>
            Bedford warehouse · Cross-border shipping · Amazon price
            automation, analytics & listing tools
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#8b949e",
          }}
        >
          <div style={{ display: "flex" }}>www.muggleship.com</div>
          <div
            style={{
              display: "flex",
              padding: "14px 30px",
              borderRadius: 999,
              background: "#ff7a47",
              color: "#06080b",
              fontWeight: 700,
            }}
          >
            Get a free quote
          </div>
        </div>
      </div>
    ),
    { width: OG_IMAGE.width, height: OG_IMAGE.height },
  );
}
