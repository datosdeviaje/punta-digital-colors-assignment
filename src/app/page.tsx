"use client";

import { useState } from "react";
import { COLORS, IColor } from "./Data";
import ColorCard from "./components/ColorCard";
import "./globals.css";

export default function Home() {
  const [search, setSearch] = useState("");

  function filterFunction(color: IColor) {
    if (search === "") return true;
    return color.Color.toLowerCase().includes(search.toLowerCase());
  }

  return (
    <div className="container">
      <input
        type="text"
        className="searchBar"
        placeholder="Search colors..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="colorGrid">
        {COLORS.filter(filterFunction).map((color, i) => (
          <ColorCard key={i} colorData={color} />
        ))}
      </div>
    </div>
  );
}
