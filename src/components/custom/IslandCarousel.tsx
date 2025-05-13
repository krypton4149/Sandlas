import { Dialog, DialogContent } from "../ui/dialog";
import { useState, useEffect } from "react";

import { X } from "lucide-react";

type Island = {
  name: string;
  image: string;
  description?: {
    tagline: string;
    images: string[];
    content: string[];
  };
};

const islands: Island[] = [
  // // { name: "Antigua", image: "assets/images/splash/antigua.webp" },
  // { name: "Barbados", image: "assets/images/splash/barbados.jpg" },
  // { name: "Bahamas", image: "assets/images/splash/bahamas.webp" },
  // { name: "Curacao", image: "assets/images/splash/curacao.webp" },
  // { name: "Grenada", image: "assets/images/splash/grenada.jpeg" },
  // { name: "Jamaica", image: "assets/images/splash/jamaica.webp" },
  // { name: "Saint Lucia", image: "assets/images/splash/saintlucia.webp" },
  // { name: "Saint Vincent", image: "assets/images/splash/Vincent.jpg" },
  // { name: "Turks and Caicos", image: "assets/images/splash/Turks.webp" },
  // { name: "Antigua", image: "assets/images/splash/antigua.webp" },

  {
    name: "Antigua",
    image: "assets/images/sandalSplashImages/antiguaSecondImage124.jpg",
    description: {
      tagline: "The Land of 365 Beaches",
      images: [
        "assets/images/AntiguaImages/imageOne.jpg",
        "assets/images/AntiguaImages/imageSecond.jpg",
        "assets/images/AntiguaImages/imageThird.jpg",
      ],
      content: [
        "Where the Atlantic meets the Caribbean, Antigua draws visitors with its year-round tropical climate, numerous reef-lined beaches, lush rainforests, and rich maritime history.",
        "Discover the pristine sands of Barbuda's 17-Mile Beach and marvel at the majestic Pillars of Hercules, dramatic rock formations rising from the sea.For panoramic views, visit Shirley Heights Lookout.",
        " Antigua's rich history is evident in St. John's colonial architecture and UNESCO-listed Nelson's Dockyard.For some local flavor, try dishes like saltfish and fungi while sipping rum punch.",
        "With adventure, culture, and history, Antigua promises an unforgettable tropical escape.",
      ],
    },
  },
  {
    name: "Barbados",
    image: "assets/images/sandalSplashImages/barbadosImageSecond125.jpg",
    description: {
      tagline: "The Land of Flying Fish",
      images: [
        "assets/images/BarbadosImages/imageOne.jpg",
        "assets/images/BarbadosImages/imageSecond.jpg",
        "assets/images/BarbadosImages/imageThird.jpg",
      ],
      content: [
        "Renowned for its breathtaking beaches, beautiful botanical gardens, local rum, and cultural traditions like afternoon tea and cricket, this coral island blends British tradition with a Caribbean spirit.",
        "The capital, Bridgetown, is home to colonial charm and the UNESCO-listed Historic Garrison, which reflects Barbados' rich history.",
        "Stroll through Hunte's Gardens or unwind on Carlisle Bay and Crane Beach.",
        "Enjoy the island's rum-making history at Mount Gay, the world's oldest rum distillery.",
        "Its vibrant music scene, particularly during the island's annual Crop Over Festival, along with its cuisine featuring flying fish and cou cou, makes this island a must-visit.",
      ],
    },
  },
  {
    name: "Bahamas",
    image: "assets/images/sandalSplashImages/bahamasImagesecond219.jpg",
    description: {
      tagline: "The Island of Song",
      images: [
        "assets/images/BahamasImages/imageOne.jpg",
        "assets/images/BahamasImages/imageSecond.jpg",
        "assets/images/BahamasImages/imageThird.jpg",
      ],
      content: [
        "This archipelago of 700 islands is renowned for its pristine beaches, crystal-clear waters, vibrant marine life, world-class scuba diving, and rich musical traditions.",
        "Swim with the famous pigs at Big Major Cay, then retreat to the secluded shores of Rose Island, surrounded by vibrant coral reefs.",
        "Dive into the marine life of Thunderball Grotto, a legendary underwater cave, or enjoy a dolphin encounter at the nearby Blue Lagoon Island.",
        "With its lively Junkanoo festival and delicious conch fritters, the Bahamas is a vibrant tropical paradise brimming with music, culture, and charm.",
      ],
    },
  },
  {
    name: "Curacao",
    image: "assets/images/sandalSplashImages/curcaoImagesecond 217.jpg",
    description: {
      tagline: "The Sweet Island",
      images: [
        "assets/images/CuracaoImages/imageOne.jpg",
        "assets/images/CuracaoImages/imageSecond.jpg",
        "assets/images/CuracaoImages/imageThird.jpg",
      ],
      content: [
        "Known as 'Dushi,' a Papiamentu word meaning 'sweet,' this Dutch Caribbean island is renowned for its calm, turquoise waters, rich culture, and diverse landscapes.",
        "Take a boat trip to Klein Curaçao, a deserted island with crystal-clear waters and pristine beaches.",
        "Visit Dolphin Academy to swim with dolphins or unwind at the beautiful Cas Abao Beach.",
        "Visit Shete Boka National Park, which offers rugged coastlines and hidden coves.",
        "Beyond its natural beauty, visitors encounter a rich culture through the local language, vibrant street art, traditional music, and the island's famous native liqueur, blue curaçao.",
      ],
    },
  },
  {
    name: "Grenada",
    image: "assets/images/sandalSplashImages/grenadaImagesecond123.jpg",
    description: {
      tagline: "The Spice Island",
      images: [
        "assets/images/GrenadaImages/imageOne.jpg",
        "assets/images/GrenadaImages/imageSecond.jpg",
        "assets/images/GrenadaImages/imageThird.jpg",
      ],
      content: [
        "Grenada's spice plantations provide a sensory journey through nutmeg, cinnamon, ginger, and cloves.",
        "Discover chocolate-making traditions at historic estates or dive into the world's first underwater sculpture park.",
        "The national dish, 'oil down,' perfectly captures the island's rich mix of African, French, and British influences.",
        "Grenada is filled with lush landscapes and vibrant cultural experiences, offering a peaceful getaway amid stunning natural beauty.",
        "Exotic flora is showcased in Palm Tree Gardens, or you can unwind on Great Anse Beach, renowned for its calm waters and picturesque sunsets.",
        "Nature lovers will appreciate Levera National Park, or a hike to Seven Sister Falls.",
      ],
    },
  },
  {
    name: "Jamaica",
    image: "assets/images/sandalSplashImages/jamaicaImageSecond216.jpg",
    description: {
      tagline: "The Land of Wood and Water",
      images: [
        "assets/images/JamaicaImages/imageOne.jpg",
        "assets/images/JamaicaImages/imageSecond.jpg",
        "assets/images/JamaicaImages/imageThird.jpg",
      ],
      content: [
        "Jamaica is a paradise for those searching for adventure, culture, music, and warm hospitality.",
        "As the birthplace of reggae music and Bob Marley, Jamaica invites music lovers to connect with its rich musical heritage, including visits to Marley’s home in Nine Mile. ",
        "Nature and adventure lovers can relax on the soft sands of Seven Mile Beach or visit the iconic Dunn’s River Falls to climb the waterfall or bathe in its refreshing pools.",
        "Reggae rhythms resonate at the multitude of music venues, while jerk shacks serve up spicy local flavors.",
        "The island’s well-known phrase “Irie” embodies its easygoing, 'no worries' attitude.",
      ],
    },
  },
  {
    name: "Saint Vincent",
    image: "assets/images/sandalSplashImages/saintvincentImageSecond220.jpg",
    description: {
      tagline: "A Hidden Gem",
      images: [
        "assets/images/SaintVincentImages/imageOne.jpg",
        "assets/images/SaintVincentImages/imageSecond.jpg",
        "assets/images/SaintVincentImages/imageThird.jpg",
      ],
      content: [
        "Saint Vincent, situated in the Windward Islands in the West Indies, is celebrated for its lush landscapes, black sand beaches, cultural traditions, and rich maritime history.",
        "Discover the pristine beauty of the Tobago Cays, a group of uninhabited islands ideal for snorkeling and sailing.",
        "Unwind on the secluded Mopion sandbar. Hike the Vermont Nature Trail to explore vibrant flora and fauna, or relax on peaceful Princess Margaret Beach.",
        "Don't miss the La Soufrière Cross Country Trail, which leads to the island's active volcano and offers breathtaking views.",
        "Saint Vincent also boasts a lively music scene, with colorful festivals and a strong cultural heritage.",
      ],
    },
  },
  {
    name: "Saint Lucia",
    image: "assets/images/sandalSplashImages/saintluciaImageSecond218.jpg",
    description: {
      tagline: " A Volcanic Wonder",
      images: [
        "assets/images/SaintLuciaImages/imageOne.jpg",
        "assets/images/SaintLuciaImages/imageSecond.jpg",
        "assets/images/SaintLuciaImages/imageThird.jpg",
      ],
      content: [
        "Saint Lucia is renowned for its volcanic beauty and secluded retreats.",
        "Marvel at the iconic Pitons, twin volcanic peaks that rise above the island, and hike the Tet Paul Nature Trail for stunning views of this UNESCO World Heritage site.",
        "Relax on the secluded sands of Anse Mamin Beach or visit the Soufrière Drive-In Volcano for a geothermal experience.",
        "Experience an adrenaline rush as you soar above the rainforest on the Rainforest Aerial Tram.",
        "Saint Lucia's Creole influences are evident in its cuisine, music, and tropical flavors, such as green fig and saltfish.",
      ],
    },
  },
  {
    name: "Turks and Caicos",
    image: "assets/images/splash/Turks.webp",
    description: {
      tagline: " The String Islands",
      images: [
        "assets/images/TurksAndCaicosImages/imageOne.jpg",
        "assets/images/TurksAndCaicosImages/imageSecond.jpg",
        "assets/images/TurksAndCaicosImages/imageThird.jpg",
      ],
      content: [
        "This archipelago consists of eight major islands and numerous uninhabited cays, defined by their crystal-clear waters and breathtaking beaches.",
        "Turks and Caicos has the world’s third-largest coral reef, making it an ideal destination for divers and snorkelers.",
        "Grace Bay, often voted the #1 beach in the world, is perfect for sunbathing and watersports.",
        "Explore the vibrant marine life at Emerald Reef or delve into the island’s history at Cheshire Hall Plantation.",
        "Turks and Caicos’ pirate legacy, stunning tropical beauty, and welcoming culture make it the perfect escape.",
      ],
    },
  },
];

const IslandCarousel = ({
  setActiveTab,
  setSelectedIsland,
  setFinderType,
}: {
  setActiveTab: (value: string) => void;
  setSelectedIsland: (value: string) => void;
  setFinderType: (value: string) => void;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedIslandData, setSelectedIslandData] = useState<Island | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  // const handleIslandClick = (islandName: string) => {
  //   setActiveTab("Overview");

  //   setSelectedIsland(islandName);
  //   setFinderType(islandName)

  // };

  const handleIslandClick = (island: Island) => {
    setSelectedIslandData(island);
    setIsDialogOpen(true);
    setFinderType(island.name);
  };

  const handleExploreClick = (islandName: string) => {
    // First update the state
    setIsDialogOpen(false);
    setActiveTab("Overview");
    setSelectedIsland(islandName);
    setFinderType(islandName);

    // Wait for dialog to close and state to update
    setTimeout(() => {
      const resortSection = document.getElementById("resort-gallery");
      if (resortSection) {
        // Increased offset to ensure the Joyride tooltip is fully visible
        window.scrollTo({
          top: resortSection.offsetTop, // Increased from 120 to 200px for better visibility
          behavior: "smooth",
        });
      }
    }, 150); // Slightly increased timeout to ensure state updates complete
  };

  useEffect(() => {
    if (!isDialogOpen) return;

    const interval = setInterval(() => {
      if (selectedIslandData?.description?.images) {
        setCurrentImageIndex((prev) =>
          prev === selectedIslandData.description!.images.length - 1
            ? 0
            : prev + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDialogOpen, selectedIslandData]);

  const scrollLeft = () => {
    const container = document.querySelector(
      ".islandCarousel .flex.overflow-x-auto"
    );
    if (container) {
      if (container.scrollLeft === 0) {
        // If at the start, scroll to the end
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollBy({ left: -340, behavior: "smooth" });
      }
    }
  };
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const isAtBottom =
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 1;
    setShowScrollIcon(
      !isAtBottom && element.scrollHeight > element.clientHeight
    );
  };
  const scrollRight = () => {
    const container = document.querySelector(
      ".islandCarousel .flex.overflow-x-auto"
    );
    if (container) {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1
      ) {
        // If at the end, scroll back to start
        container.scrollLeft = 0;
      } else {
        container.scrollBy({ left: 340, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (isDialogOpen) {
      // Check if content is scrollable when dialog opens
      const dialogContent = document.querySelector('[role="dialog"]');
      if (dialogContent) {
        setShowScrollIcon(
          dialogContent.scrollHeight > dialogContent.clientHeight
        );
      }
    }
  }, [isDialogOpen]);

  return (
    <div className="islandCarousel relative" id="choose-your-island">
      <div className="py-8 px-3 md:px-0">
        <h2
          id="island-carousel"
          className="text-[#0066FF] text-4xl w-full overflow-visible max-w-7xl mx-auto md:w-10/12 lg:w-11/12 md:px-0 font-sandalsSlab"
        >
          Choose Your Island
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-[90rem] mx-auto px-4">
        <button
          onClick={scrollLeft}
          className="hidden md:block flex-none bg-[#0066FF] text-white rounded-full p-2 shadow-lg hover:bg-[#0057cc] transition-colors"
          aria-label="Scroll left"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="w-full overflow-visible max-w-7xl mx-auto md:w-10/12 lg:w-11/12">
          <div
            className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            {islands.map((island, index) => (
              <div
                key={index}
                className="flex-none w-[320px] snap-center md:snap-start md:w-[calc(33.333%-16px)]"
                onClick={() => handleIslandClick(island)}
              >
                <div
                  className="h-[200px] md:aspect-auto md:h-[170px] lg:h-[250px] w-full relative rounded-[32px] overflow-hidden cursor-pointer group shadow-lg"
                  data-island={island.name.toLowerCase().replace(/\s+/g, "-")}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <p className="absolute left-4 bottom-4 font-sandalsScript text-white text-4xl z-20">
                    {island.name}
                  </p>
                  <img
                    src={island.image}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="hidden md:block flex-none bg-[#0066FF] text-white rounded-full p-2 shadow-lg hover:bg-[#0057cc] transition-colors"
          aria-label="Scroll right"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {isDialogOpen && showScrollIcon && (
          <div className="fixed bottom-[7svh] opacity-50 left-1/2 !-translate-x-1/2 animate-bounce z-[9999]">
            <div className="w-10 h-10 bg-[#0066FF] rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        )}
        <DialogContent
          onScroll={handleScroll}
          className="sm:max-w-[800px] max-w-[340px] h-auto max-h-[98vh] overflow-y-auto p-6 bg-[#f8f0db] rounded-lg my-4"
        >
          {/* Close button */}
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute right-3 top-3"
          >
            <X className="h-4 w-4 text-[#0066FF]" />
          </button>

          {selectedIslandData && (
            <div className="flex flex-col">
              {/* Island Name */}
              <h2 className="text-[#0066FF] text-4xl font-sandalsScript text-center">
                {selectedIslandData.name}
              </h2>

              {/* Tagline */}
              <p className="text-[#0066FF] font-sandalsSans text-center text-base mb-4">
                {selectedIslandData.description?.tagline}
              </p>

              {/* Image Container */}
              <div className="relative w-full aspect-[16/9] mb-6">
                {selectedIslandData.description?.images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentImageIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedIslandData.name} view ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}

                {/* Carousel Indicators */}
                <div className="absolute bottom-[-1.2rem] left-1/2 transform -translate-x-1/2 flex gap-2">
                  {selectedIslandData.description?.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1 rounded-full transition-all ${
                        currentImageIndex === index
                          ? "w-20 bg-[#0066FF]"
                          : "w-20 bg-[#D9D9D9]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Description Content */}
              <div className="space-y-2 mt-2">
                {selectedIslandData.description?.content.map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      className="text-[#0066FF] font-sandalsSans text-base"
                    >
                      {paragraph}
                    </p>
                  )
                )}

                {/* Explore Button */}
                <div className="flex justify-center py-2">
                  <button
                    className="bg-[#0066FF] text-white py-3 px-8 rounded-full font-sandalsSans hover:bg-[#0057cc] transition-colors"
                    onClick={() => handleExploreClick(selectedIslandData.name)}
                  >
                    Explore Our {selectedIslandData.name} Resorts
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IslandCarousel;
