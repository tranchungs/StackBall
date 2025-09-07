import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
    accountAssociation: {
      header:
        "eyJmaWQiOjEwMjU0MzcsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwMEE2ZkJjOTIwODg0MUIyNzJEYkE0OUE0ODdkM0E2YkVkMDVmQ2JjIn0",
      payload: "eyJkb21haW4iOiJwaXhlbC1nYW1lLWhhemVsLnZlcmNlbC5hcHAifQ",
      signature:
        "MHg3OTJkMjUzNDI1YjNiNWM1ZTcwYjNmYzM4YjEwMTY0ZTUyMzE2NTBjMmRkMjBjODVmNzBjMDQ1ZGM2NDUyMTQzMWE3YzVmYmU1MWRiMzgyNDZiNmFjNzdlYWY4NzcwOTA4Yzc0N2YwNGExM2Q4YTRkY2I1NmExMGI1ZTgxNjIyMzFj",
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
