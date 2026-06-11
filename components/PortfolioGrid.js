"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export default function PortfolioGrid({ data }) {
  const [category, setCategory] = useState("All Works");
  const items = useMemo(() => {
    if (category === "All Works") {
      return data.items;
    }

    return data.items.filter((item) => item.category === category);
  }, [category, data.items]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-stack-md mb-section-gap">
        {data.categories.map((cat) => (
          <button
            key={cat}
            className={`px-6 py-3 font-label-md text-label-md rounded-full transition-colors ${
              category === cat
                ? "bg-secondary-container text-on-secondary-container shadow-sm"
                : "bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container-low"
            }`}
            onClick={() => setCategory(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {items.map((item) => (
          <div
            key={`${item.title}-${item.category}`}
            className="masonry-item group relative overflow-hidden bg-surface-container-lowest"
          >
            <Image
              alt={item.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              src={item.image}
              width={900}
              height={1200}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="font-label-md text-label-md text-secondary-fixed mb-2 uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="font-headline-md text-headline-md text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-section-gap flex justify-center">
        <button
          className="h-12 px-8 border-2 border-outline text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-low transition-colors duration-300"
          type="button"
        >
          View More Stories
        </button>
      </div>
    </>
  );
}
