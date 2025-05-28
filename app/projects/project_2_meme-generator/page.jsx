"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        if (data.success && data.data && data.data.memes) {
          setMemes(data.data.memes);
          if (data.data.memes.length > 0) {
            setSelectedMeme(data.data.memes[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching memes:", error);
      }
    };

    fetchMemes();
  }, []);

  const handleChange = (e) => {
    const memeId = e.target.value;
    const meme = memes.find((m) => m.id === memeId);
    setSelectedMeme(meme);
  };

  const downloadMeme = () => {
    if (!selectedMeme) {
      alert("Please select a meme first!");
      return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = selectedMeme.url;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const baseFontSize = Math.floor(canvas.width * 0.1);
      ctx.font = `bold ${baseFontSize}px Impact, sans-serif`;
      ctx.fillStyle = "black";
      ctx.strokeStyle = "white";
      ctx.lineWidth = baseFontSize * 0.08;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const textX = canvas.width / 2;
      const textY = canvas.height / 2;

      const topTextLines = topText.toUpperCase().split("\n");
      let currentYTop = textY - (topTextLines.length * baseFontSize) / 2;
      topTextLines.forEach((line) => {
        ctx.strokeText(line, textX, currentYTop);
        ctx.fillText(line, textX, currentYTop);
        currentYTop += baseFontSize * 1.2;
      });

      const bottomTextLines = bottomText.toUpperCase().split("\n");
      let currentYBottom = textY + (bottomTextLines.length * baseFontSize) / 2;
      bottomTextLines.forEach((line) => {
        ctx.strokeText(line, textX, currentYBottom);
        ctx.fillText(line, textX, currentYBottom);
        currentYBottom -= baseFontSize * 1.2;
      });

      const link = document.createElement("a");
      link.download = `${selectedMeme.name}_meme.png`;  
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    img.onerror = () => {
      console.error("Failed to load image:", selectedMeme.url);
      alert("Failed to load meme image. Please try another one.");
    };
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-10 px-4 bg-gray-900 dark:bg-gray-900 relative">
      <button
        className="absolute top-4 right-4 bg-amber-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200 z-20 shadow-md"
        onClick={() => router.push("/")}
      >
        Back to Home
      </button>

      <h1 className="text-4xl sm:text-5xl font-extrabold text-center pb-4
                       bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Meme Generator 🔥
        </h1>

        <div>
          <label htmlFor="meme-select" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
            Select a Meme Template:
          </label>
          <select
            id="meme-select"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
          >
            {memes.length === 0 ? (
              <option value="">Loading memes...</option>
            ) : (
              memes.map((meme) => (
                <option key={meme.id} value={meme.id}>
                  {meme.name}
                </option>
              ))
            )}
          </select>
        </div>

        {selectedMeme ? (
          <div className="relative flex justify-center my-4">
            <div className="relative inline-block">
              <img
                src={selectedMeme.url}
                alt={selectedMeme.name}
                className="max-w-full h-auto max-h-96 object-contain rounded-lg shadow-md border border-gray-300 dark:border-gray-600"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> 
                <p
                  className="text-5xl sm:text-6xl font-bold text-black break-words px-4"
                  style={{
                    fontFamily: 'Impact, sans-serif',
                    WebkitTextStroke: '4px white',
                    textStroke: '4px white',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  {topText.toUpperCase()}
                </p>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <p
                  className="text-5xl sm:text-6xl font-bold text-black break-words px-4"
                  style={{
                    fontFamily: 'Impact, sans-serif',
                    WebkitTextStroke: '4px white',
                    textStroke: '4px white',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  {bottomText.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400">
            <p>Loading meme image...</p>
          </div>
        )}

        <div>
          <label htmlFor="top-text" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
            Top Text:
          </label>
          <input
            id="top-text"
            type="text"
            placeholder="Enter top text for your meme"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
          />
        </div>

        <div>
          <label htmlFor="bottom-text" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
            Bottom Text:
          </label>
          <input
            id="bottom-text"
            type="text"
            placeholder="Enter bottom text for your meme"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
          />
        </div>

        <button
          onClick={downloadMeme}
          className="w-full p-4 bg-green-500 text-white font-bold rounded-lg shadow-lg
                     hover:bg-green-600 transition-all duration-300 transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
        >
          Download Meme
        </button>
      </div>
   
  );
};

export default Page;


