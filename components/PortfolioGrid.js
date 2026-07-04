"use client";

import { useEffect, useMemo, useState } from "react";
import ProtectedImage from "./ProtectedImage";

const INITIAL_LOAD_COUNT = 10;
const LOAD_STEP = 10;

export default function PortfolioGrid({ data }) {
  const [category, setCategory] = useState("All Works");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);
  const [openAlbum, setOpenAlbum] = useState(null);

  const items = useMemo(() => {
    if (category === "All Works") {
      return data.items.filter((item) => item.type === "album");
    }

    if (category === "Weddings") {
      return data.items.filter((item) => item.category === category);
    }

    return [];
  }, [category, data.items]);

  const albumItem = items.find((item) => item.type === "album") || null;
  const regularItems = items.filter((item) => item.type !== "album");
  const visibleItems = regularItems.slice(0, visibleCount);
  const hasMoreItems = visibleItems.length < regularItems.length;
  const albumImages = albumItem?.albumImages || [];
  const visibleAlbumImages = albumImages.slice(0, visibleCount);

  useEffect(() => {
    if (category !== "All Works") {
      setVisibleCount(INITIAL_LOAD_COUNT);
      return;
    }

    setVisibleCount(INITIAL_LOAD_COUNT);
  }, [category]);

  useEffect(() => {
    if (category !== "All Works") {
      return;
    }

    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 400;

      if (nearBottom && visibleCount < albumImages.length) {
        setVisibleCount((count) => Math.min(count + LOAD_STEP, albumImages.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [albumImages.length, category, visibleCount]);

  const handleCategoryChange = (nextCategory) => {
    setCategory(nextCategory);
    setVisibleCount(INITIAL_LOAD_COUNT);
    setOpenAlbum(null);
  };

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
            onClick={() => handleCategoryChange(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {category === "Weddings" && albumItem ? (
        <div className="mb-section-gap rounded-[2rem] border border-outline-variant bg-surface-container-lowest p-4 shadow-sm md:p-6">
          <button
            className="w-full rounded-[1.5rem] border border-outline-variant/70 bg-gradient-to-br from-surface-container-low to-surface-container-high p-4 text-left shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-0.5 md:p-6"
            onClick={() =>
              setOpenAlbum((current) =>
                current === albumItem.title ? null : albumItem.title
              )
            }
            type="button"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-container text-2xl text-on-secondary-container">
                  📁
                </div>
                <div>
                  <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface-variant">
                    Wedding Album
                  </p>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {albumItem.title}
                  </h3>
                </div>
              </div>
              <div className="rounded-full border border-outline-variant px-4 py-2 text-sm font-medium text-on-surface-variant">
                {albumItem.imageCount} Photos
              </div>
            </div>
          </button>

          {openAlbum === albumItem.title ? (
            <div className="mt-6 space-y-4">
              <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">
                {albumItem.description}
              </p>
              <div className="masonry-grid">
                {albumItem.albumImages.map((image, index) => (
                  <div
                    key={`${albumItem.title}-${index}`}
                    className="masonry-item overflow-hidden rounded-[1.25rem] border border-outline-variant bg-surface-container-lowest"
                  >
                    <ProtectedImage
                      alt={`${albumItem.title} photo ${index + 1}`}
                      className="h-auto w-full object-cover"
                      src={image}
                      width={900}
                      height={1200}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {category === "All Works" ? (
        <div className="masonry-grid">
          {visibleAlbumImages.map((image, index) => (
            <div
              key={`all-works-${index}`}
              className="masonry-item overflow-hidden rounded-[1.25rem] border border-outline-variant bg-surface-container-lowest"
            >
              <ProtectedImage
                alt={`Wedding album photo ${index + 1}`}
                className="h-auto w-full object-cover"
                src={image}
                width={900}
                height={1200}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      ) : null}

      {category === "Weddings" ? (
        <div className="masonry-grid">
          {visibleItems.map((item) => (
            <div
              key={`${item.title}-${item.category}`}
              className="masonry-item group relative overflow-hidden bg-surface-container-lowest"
            >
              <ProtectedImage
                alt={item.title}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                src={item.image}
                width={900}
                height={1200}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-2 font-label-md text-label-md uppercase tracking-wider text-secondary-fixed">
                  {item.category}
                </span>
                <h3 className="font-headline-md text-headline-md text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {category === "Weddings" && hasMoreItems ? (
        <div className="mt-section-gap flex justify-center">
          <button
            className="h-12 px-8 border-2 border-outline text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors duration-300 hover:bg-surface-container-low"
            onClick={() => setVisibleCount((count) => count + 6)}
            type="button"
          >
            View More Stories
          </button>
        </div>
      ) : null}
    </>
  );
}
