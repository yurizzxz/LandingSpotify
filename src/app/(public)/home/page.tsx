import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-1 left-5 w-[500px] h-[500px] bg-green-500 rounded-full blur-[130px] opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-green-800 rounded-full blur-[150px] opacity-5"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-12 max-w-6xl w-full px-6">
        <div className="text-left text-white max-w-lg">
          <h1 className="text-5xl font-bold">
            <span className="text-green-400">Discover</span> Your Soundtrack
          </h1>
          <p className="mt-4 text-lg opacity-75">
            Explore millions of songs, create playlists, and experience music like never before.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg">
              Start Listening →
            </button>

          </div>
        </div>

        <div className="w-[400px]">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" 
            alt="Spotify Logo" 
            className="w-full object-contain"
          />
        </div>
      </div>
    </main>
  );
}
