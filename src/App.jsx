import React from "react";
import Image from "./Components/Image";
import PageCounter from "./Components/PageCounter";
import Header from "./Components/Header";

function App() {
  const [images, setImage] = React.useState([]);
  const [index, setIndex] = React.useState(1);

  React.useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://picsum.photos/v2/list?page=${index}&limit=50`,
      ).then((Response) => Response.json());

      setImage(data);
    };

    getData();
  }, [index]);

  let printImages = (
    <h3 className="text-white/85 text-xl font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wide animate-pulse">
      Loading...
    </h3>
  );

  if (images.length > 0) {
    printImages = images.map((item) => {
      const optimizedImageUrl = `https://picsum.photos/id/${item.id}/400/400`;
      return (
        <div key={item.id} className="flex flex-col items-center">
          <Image
            optimizedImageUrl={optimizedImageUrl}
            image={item.url}
            author={item.author}
          />
        </div>
      );
    });
  }

  return (
    <div className="bg-[url('https://img.magnific.com/free-photo/people-enjoying-art-exhibition_53876-139909.jpg?semt=ais_hybrid&w=740&q=80')] bg-no-repeat bg-center bg-cover bg-black/50 bg-blend-overlay h-screen w-full p-5 select-none flex flex-col justify-between">
      <Header />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-y-auto scroll-smooth gap-6 p-4 h-[85%] w-full custom-scrollbar">
        {printImages}
      </div>
      <div className="flex items-center justify-center gap-5 h-[15%]">
        <button
          disabled={index === 1}
          className="bg-amber-600 hover:bg-amber-600/90 disabled:opacity-40 text-white active:scale-95 rounded-lg flex justify-center items-center text-lg font-semibold px-5 py-2.5 cursor-pointer disabled:cursor-not-allowed transition-all shadow-md"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setImage([]);
            }
          }}
        >
          Prev
        </button>
        <div>
          <PageCounter currentPage={index} />
        </div>
        <button
          className="bg-amber-600 hover:bg-amber-600/90 text-white active:scale-95 rounded-lg flex justify-center items-center text-lg font-semibold px-5 py-2.5 cursor-pointer transition-all shadow-md"
          onClick={() => {
            setIndex(index + 1);
            setImage([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
