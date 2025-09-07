import React, { useEffect, useState } from "react";
import { useFrame } from "@/components/farcaster-provider";
const FarcasterPixelGame: React.FC = () => {
  const [showAddPrompt, setShowAddPrompt] = useState(false);
  const { actions } = useFrame();
  // Check if user has seen the prompt before
  useEffect(() => {
    const hasSeenPrompt =
      localStorage.getItem("pixel-game-prompt-seen") === "true";
    if (!hasSeenPrompt) {
      setShowAddPrompt(true);
    }
  }, []);

  const handleAddClick = () => {
    try {
      actions?.addMiniApp();

      localStorage.setItem("pixel-game-prompt-seen", "true");
      setShowAddPrompt(false);
    } catch (error) {}
  };

  const handleNotNowClick = () => {
    // User clicked "Not now" - just close the prompt
    localStorage.setItem("pixel-game-prompt-seen", "false");
    setShowAddPrompt(false);
  };

  // Show add miniApp prompt overlay
  if (showAddPrompt) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        {/* Top black area with logo */}
        <div className="flex-1 flex items-center justify-center bg-black">
          <div className="text-center">
            <h1 className="text-white text-6xl font-bold tracking-wider mb-2">
              STACK BALL
            </h1>
            <p className="text-gray-400 text-lg">CANVAS GAME</p>
          </div>
        </div>

        {/* Bottom modal */}
        <div className="bg-white rounded-t-3xl p-6 pb-8">
          {/* App icon with + badge */}
          <div className="flex justify-center mb-6 -mt-12">
            <div className="relative">
              <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">//</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white text-lg font-bold">+</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Add Stack Ball to Farcaster
          </h2>

          {/* Options */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-5 h-4 border-2 border-gray-800 rounded-sm bg-white"></div>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Add to Farcaster</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-gray-800 rounded-full bg-white relative">
                  <div className="absolute inset-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-gray-900 font-medium">
                  Enable notifications
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleNotNowClick}
              className="flex-1 py-4 px-6 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium text-lg hover:bg-gray-50 transition-colors"
            >
              Not now
            </button>

            <button
              onClick={handleAddClick}
              className="flex-1 py-4 px-6 rounded-xl bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transition-colors"
            >
              Add
            </button>
          </div>

          {/* Bottom indicator */}
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default FarcasterPixelGame;
