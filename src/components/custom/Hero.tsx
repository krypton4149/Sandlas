import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { handleHeroBookNowClick } from "@/constants";
import { Dialog, DialogContent } from "../ui/dialog";
import { X } from "lucide-react"; // Import X icon for close button

const bulletPoints = [
  "Explore the Map",
  "Choose Your Island",
  "Match Your Interests",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCallDialogOpen, setIsCallDialogOpen] = useState(false);

  const carouselImages = [
    "assets/Carousel/Home-page-carousel_1.jpg",
    "assets/Carousel/Home-page-carousel_8.jpg",// SPRING SALE
    "assets/Carousel/Home-page-carousel_2.jpg",
    "assets/Carousel/Home-page-carousel_3.jpg",
    "assets/Carousel/Home-page-carousel_5.jpg",
  ];
  const carouselMobImages = [
    "assets/Carousel/Carousel-1.jpeg",
    "assets/Carousel/Home-page-mob-carousel_8.jpg",// SPRING SALE
    "assets/Carousel/Carousel-4.jpeg",
    "assets/Carousel/Home-page-carousel_3.jpg",
    "assets/Carousel/Home-page-carousel_5.jpg",
  ];

  // useEffect(() => {
  //   const isMobile = window.innerWidth < 768;
  //   const images = isMobile ? carouselMobImages : carouselImages;
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % images.length);
  //   }, 3000);


  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     if (isMenuOpen && !target.closest(".menu-container")) {
  //       setIsMenuOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     clearInterval(interval);
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isMenuOpen, carouselImages.length]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const images = isMobile ? carouselMobImages : carouselImages;

    const slideDuration = currentSlide === 1 ? 4000 : 3000; // 4s for Spring Sale

    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, slideDuration);

    return () => clearTimeout(timeout);
  }, [currentSlide]);


  const topContainerRef = useRef<HTMLDivElement>(null);

  const calculateHeight = () => {
    if (topContainerRef.current) {
      return topContainerRef.current.offsetHeight;
    }
    return 0;
  };

  useEffect(() => {
    const element = document.getElementById("hideMe");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        const height = calculateHeight() + 30;
        if (height && element) {
          element.style.transition = "transform 0.5s ease-in-out";
          // element.style.transform = `translateY(-10px)`;
          element.style.transform = `translateY(-${height}px)`;
        }
      } else {
        if (element) {
          element.style.transition = "transform 0.5s ease-in-out";
          element.style.transform = "translateY(0)";
        }
      }
    });
  }, []);

  const handlePageRefresh = () => {
    // Get the protocol and host
    const baseUrl = window.location.protocol + "//" + window.location.host;

    // Redirect to the base URL
    window.location.href = baseUrl;
  };

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Dispatch custom event after scrolling completes
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("programmaticScrollComplete"));
      }, 1000); // Adjust timing based on your scroll animation duration
    }
  };

  return (
    <>
      <div className="relative h-[100vh] overflow-hidden">
        <div
          id="hideMe"
          className="fixed top-0 z-50 w-full"
          ref={topContainerRef}
        >
          <section
            id="top-hero-section"
            className="w-full  top-0 left-0 z-10  bg-[#f8f0db]"
          >
            <div className="flex flex-col pt-4">
              <div className="flex flex-col md:flex-row items-center w-full md:w-10/12 lg:w-10/12 xl:w-10/12 sm:mx-auto justify-center md:justify-between px-4">
                <div className="w-full flex md:w-[69px]"><img
                  src="assets/images/sandalsLogoImageThird.svg"
                  loading="lazy"
                  alt="Sandals Logo"
                  className="w-250px cursor-pointer mb-8 md:mb-0 md:-ml-20 md:pl-4" // Added ml-0 to ensure it stays left
                  onClick={() => handlePageRefresh()}
                />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4  -mr-0 md:-mr-20 pr-0 md:pr-4">
                  <img
                    src="assets/images/sandalsLogo.svg"
                    loading="lazy"
                    alt="Sandals Logo"
                    className="w-250px cursor-pointer "
                  // onClick={() => handlePageRefresh()}
                  />
                  {/* <div className="flex   items-center gap-5 ml-4">
                    <div className="flex flex-col">
                      <p className=" font-sandalsSans text-[#171724] text-base font-medium">
                        Hi Peter
                      </p>
                      <p className=" font-sandalsSans text-[#171724] text-base font-normal">
                        Member Details
                      </p>
                    </div>
                    <div className="relative">
                      <div
                        className="menu-container w-10 h-10 bg-[#eadebf] rounded-full flex items-center justify-center cursor-pointer relative z-50"
                        onClick={toggleMenu}
                      >
                        <span className="text-secondary">
                          <img
                            width={20}
                            height={20}
                            src="assets/icons/profile.svg"
                            alt="Profile Logo"
                          />
                        </span>
                      </div>
                      {isMenuOpen && (
                        <div className="menu-container absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 w-64 z-50">
                          <div className="mb-4 border-b pb-2">
                            <p className="text-gray-600">
                              Available Points Balance: 0
                            </p>
                            <p className="text-gray-600">
                              Points Value: $0(USD)
                            </p>
                          </div>
                          <nav>
                            <ul className="space-y-3">
                              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2">
                                <span className="grid-icon">
                                  <img
                                    width={20}
                                    height={20}
                                    src="assets/icons/overview.svg"
                                    alt="grid Logo"
                                  />
                                </span>
                                Overview
                              </li>
                              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2">
                                <span>
                                  <img
                                    width={20}
                                    height={20}
                                    src="assets/icons/Vector-1.svg"
                                    alt="Profile Logo"
                                  />
                                </span>
                                Profile
                              </li>
                              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2">
                                <span>
                                  <img
                                    width={20}
                                    height={20}
                                    src="assets/icons/location.svg"
                                    alt="location Logo"
                                  />
                                </span>
                                Trips
                              </li>
                              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2">
                                <span>
                                  <img
                                    width={20}
                                    height={20}
                                    src="assets/icons/star.svg"
                                    alt="rewards Logo"
                                  />
                                </span>
                                Rewards
                              </li>
                              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2">
                                <span>
                                  <img
                                    width={20}
                                    height={20}
                                    src="assets/icons/message.svg"
                                    alt="message Logo"
                                  />
                                </span>
                                Contact Us
                              </li>
                              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2">
                                <span>
                                  <img
                                    width={20}
                                    height={20}
                                    src="assets/icons/tag.svg"
                                    alt="offer Logo"
                                  />
                                </span>
                                Offers
                              </li>
                              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2">
                                <span>
                                  <img
                                    width={20}
                                    height={20}
                                    src="assets/icons/people.svg"
                                    alt="refer Logo"
                                  />
                                </span>
                                Refer a Friend
                              </li>
                              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2">
                                <span>
                                  <img
                                    width={20}
                                    height={20}
                                    src="assets/icons/login.svg"
                                    alt="logout Logo"
                                  />
                                </span>
                                Sign Out
                              </li>
                            </ul>
                          </nav>
                        </div>
                      )}
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col items-center   ">
                <h1 className="text-[#0057ff] font-sandalsScript pt-5 sm:pt-14 mb-4 md:mb-9 text-[30px] md:text-7xl font-normal text-center leading-[70px] ">
                  Find Your Caribbean
                </h1>
                <p className="text-[#0057ff] text-center px-3 mb-3 sm:mb-9 text-sm font-sansSandals md:text-xl leading-[22px] tracking-[-0.02em] ">
                  <span className="block">
                    Whatever path you take, we'll make you feel right at home.
                  </span>
                </p>
                <ul className="list-disc list-inside text-[#0057ff] text-start font-sansSandals mb-4 sm:mb-4 text-sm md:text-xl leading-[22px] tracking-[-0.02em]">
                  {bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p
                  id="hero-text"
                  className="text-[#0057ff] text-center px-4 mb-5 font-sansSandals text-sm md:text-xl leading-[22px] tracking-[-0.02em]"
                >
                  Your Future Memories start here.
                </p>
                <div className="flex items-center justify-center flex-wrap md:flex-row gap-4 sm:gap-5 -mb-7 hero-btn-section">
                  <Button
                    variant="default"
                    onClick={() => scrollToSection("explore-map")}
                    className="w-40"
                  >
                    Explore the Map
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => scrollToSection("choose-your-island")}
                    className="w-44 px-14"
                  >
                    Choose Your Island
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => scrollToSection("resort-finder")}
                    className="w-48"
                  >
                    Match Your Interests
                  </Button>
                </div>
                {/* <div>
                  <ul className="flex flex-col items-start text-[#0066FF] font-sandalsSans space-y-1 mb-5 sm:mb-7">
                    {bulletPoints.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                        style={{
                          marginLeft: `${
                            (bulletPoints.length - index - 1) * 5
                          }px`,
                        }}
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-[#0066FF] mt-2  mr-3 flex-shrink-0"></span>
                        <span className="text-[#0066FF] text-lg leading-relaxed font-sandalsSans">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </section>
        </div>

        <section className="hidden md:flex w-full  h-screen">
          <div className="w-full h-full">
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`
                   top-0 left-0 w-full h-full object-cover
                  transition-opacity duration-500 ease-in-out
                  ${currentSlide === index ? "opacity-100" : "opacity-0"}
                  ${index === 0 ? "relative" : "absolute"}
              
                `}
              />
            ))}
          </div>
        </section>
        <section className="flex md:hidden w-full h-[100vh] overflow-hidden">
          <div className="relative w-full h-full">
            {carouselMobImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-1000 ease-in-out
                ${currentSlide === index ? "opacity-100" : "opacity-0"}
              `}
              />
            ))}
          </div>
        </section>
      </div>
      <Dialog open={isCallDialogOpen} onOpenChange={setIsCallDialogOpen}>
        <DialogContent className="sm:max-w-[725px] max-w-[332px] p-0 overflow-hidden bg-amber-100 rounded-lg">
          {/* Background Image */}
          {/* <div className="relative h-32">
            <img 
              src="assets/Carousel/Home-page-carousel_1.jpg" 
              alt="Beach View"
              className="w-full h-full object-cover"
            />
          </div> */}

          {/* Close button - absolute positioned on top right */}
          <button
            onClick={() => setIsCallDialogOpen(false)}
            className="absolute top-2 right-2 p-2 hover:bg-black/10 rounded-full"
          >
            <X className="h-6 w-6 text-primary" />
          </button>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-3xl font-sandalsSlab font-normal text-[#0057ff] mb-4">
              Booking Concierge
            </h2>

            <p className="text-base font-normal text-primary font-sandalsSans  mb-6 leading-[19.2px] ">
              If you have questions or need assistance with your booking, a
              Sandals and Beaches concierge is standing by. Click to call us to
              take advantage of our current offer and book your Caribbean dream
              vacation.
            </p>

            {/* Input field */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-[350px] p-3 border bg-amber-100 border-primary rounded-full focus:outline-none placeholder-[#0057ff] focus:ring-2 focus:ring-[#0057ff]"
              />
            </div>

            {/* Start Call button */}
            <Button
              className="w-[130px] bg-[#0057ff] text-white hover:bg-[#0045cc]"
              onClick={handleHeroBookNowClick}
            >
              Start Call
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
