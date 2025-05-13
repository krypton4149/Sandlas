// components/Header.jsx

const Header = () => {
  return (
    <header className="w-full bg-[#f8f0db] py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <img
            src="images/sandalsLogo.svg"
            alt="Sandals Logo"
            loading="lazy"
            className="h-12 mb-8"
          />
          <h1
            className="text-[#0066FF] text-5xl font-bold italic"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            WHERE TO NEXT?
          </h1>
        </div>
        <div className="w-[5.9rem] absolute -bottom-8">
          <a
            href="http://ltobe.sandals.com/"
            className="block bg-[#0057ff] px-2.5 py-1.5 rounded-xl text-white font-sandalsSans text-base cursor-pointer border-[1.5px] border-transparent hover:bg-white hover:text-[#171724] hover:border-[#171724] transition-colors duration-200"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
