function Header() {
  return (
    <header className="w-full bg-black/30 backdrop-blur-md border-b border-white/10 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg mb-4">
      <div className="flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-amber-500 animate-pulse" />
        <div>
          <h1 className="text-white/90 font-bold text-xl tracking-wide">
            Image <span className="text-amber-500 font-light">Gallery</span>
          </h1>
          <p className="text-white/50 text-xs mt-0.5">
            Random Images
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-xs font-medium text-white/70">
        <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[11px] sm:text-xs">
          Limit:{" "}
          <span className="text-amber-400 font-semibold">15 items / page</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
