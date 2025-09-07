import App from "@/components/pages/app";
import { APP_URL } from "@/lib/constants";
import type { Metadata } from "next";

const frame = {
  version: "next",
  imageUrl: `${APP_URL}/images/feed.png`,
  button: {
    title: "Stack Ball Game",
    action: {
      type: "launch_frame",

      name: "Stack Ball Game MiniApp",
      url: APP_URL,
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Stack Ball Game",
    openGraph: {
      title: "Stack Ball Game",
      description: "Stack Ball Game and Monad",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return <App />;
}
