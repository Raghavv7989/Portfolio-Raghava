"use client";

export function GridOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex justify-center w-full h-full opacity-[0.03]">
      <div className="w-full max-w-[1400px] h-full grid grid-cols-4 md:grid-cols-12 gap-6 px-6 md:px-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-full border-x border-slate ${i >= 4 ? 'hidden md:block' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
