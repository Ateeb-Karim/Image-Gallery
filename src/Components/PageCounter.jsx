function PageCounter({ currentPage }) {
  return (
    <div className="flex items-center justify-center bg-black/40 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-inner">
      <span className="text-white/60 text-xs uppercase tracking-widest font-medium mr-2">
        Page No.
      </span>
      <span className="text-amber-400 font-bold text-lg px-2 py-0.5 bg-amber-500/10 rounded-md border border-amber-500/20 min-w-8 text-center">
        {currentPage}
      </span>
    </div>
  );
}

export default PageCounter;