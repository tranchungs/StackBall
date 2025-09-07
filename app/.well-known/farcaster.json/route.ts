import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
    accountAssociation: {
      header:
        "eyJmaWQiOjEwMjU0MzcsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwMEE2ZkJjOTIwODg0MUIyNzJEYkE0OUE0ODdkM0E2YkVkMDVmQ2JjIn0",
      payload: "eyJkb21haW4iOiJzdGFjay1iYWxsLWtvaGwudmVyY2VsLmFwcCJ9",
      signature:
        "MHhhNTA0ZGIyZTMzZjg4ZjhkZjE3OGI0ZDA1YTg5NTIzOTA0ZDBiMmExZWY1ZTQ0ZDlkZTBiMTI2MDExM2FiYWNlMWUzNjVmMmE3YmFmNWQzNWIzYTk1ODhjYjYwN2VhMzJhNDc2MzI4NDM3OWUyYjMzZWFjZjc3M2Y3OWZmZTQyMTFi",
    },
    frame: {
      version: "1",
      name: "Stack Ball Game",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["monad", "farcaster", "miniapp", "base", "game", "ball"],
      primaryCategory: "developer-tools",
      buttonTitle: "Play Game",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
