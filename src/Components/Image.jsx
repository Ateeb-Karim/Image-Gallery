export default function Image({ image, author, optimizedImageUrl }) {
  return (
    <>
      <a
        href={image}
        target="_blank"
        rel="noreferrer"
        className="group block w-44"
      >
        <div className="h-40 w-44 overflow-hidden rounded-xl bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
          <img
            src={optimizedImageUrl}
            alt={author}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h2 className="font-semibold text-base text-white/90 mt-2 text-center truncate drop-shadow-md group-hover:text-amber-400 transition-colors">
          {author}
        </h2>
      </a>
    </>
  );
}
