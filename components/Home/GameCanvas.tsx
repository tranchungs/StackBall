"use client";

import FarcasterPixelGame from "./FarcasterPixelGame";
import UnityPage from "./UnityGame";

export default function Game() {
  console.log("Game rendered");
  return (
    <>
      <FarcasterPixelGame />
      <UnityPage />
    </>
  );
}
