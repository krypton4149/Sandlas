// App.jsx
import Hero from "@/components/custom/Hero";
import IslandCarousel from "@/components/custom/IslandCarousel";
import ResortFinder from "@/components/custom/ResortFinder";
import ResortGallery from "@/components/custom/ResortGallery";
import { useEffect, useState } from "react";
import Footer from "./components/custom/Footer";
import { resortData } from "./resortData";
import Walkthrough from "./components/custom/Walkthrough";

type Resort = {
  ResortTitle: string;
  ResortLink: string;

  Island: string;
  ResortDescription: string;
  IdealFor: { name: string; background: string; textColor?: string }[];
  IdealFor2?: { name: string; background: string; textColor?: string }[];
  IdealFor3?: { name: string; background: string; textColor?: string }[];
  Tags: string;
  Images: string;
  Beaches: string;
  Pool: string;
  Map?: string;
  Dining: string;
  watersports?: string;
  IslandTours?: string;
  City?: string;
  Tabs: { name: string; images: string[] }[];
};

const App = () => {
  const [showResortData, setShowResortData] = useState<Resort[]>([]);

  const [selectedIsland, setSelectedIsland] = useState<string>("");
  const [showNoResults, setShowNoResults] = useState(false);

  const [activeTab, setActiveTab] = useState("Overview");

  // const [startWalkthrough, setStartWalkthrough] = useState(false);
  const [finderType, setFinderType] = useState("filter");

  // Check if tour is already completed
  const tourCompleted = sessionStorage.getItem("tourCompleted") === "true";
  const urlParams = window.location.search.replace("?", "");
  // Get resort name from URL parameters
  useEffect(() => {
    if (urlParams) {
      const resortTitle = urlParams
        .replace(/=$/, "")
        .split("-")
        .map((word) =>
          word === "and"
            ? word
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");

      const matchingResort = resortData.find(
        (resort) => resort.ResortTitle === resortTitle
      );
      if (matchingResort) {
        const element = document.getElementById("resort-gallery");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setShowResortData([matchingResort]);
        setShowNoResults(false);
      }
    }
  }, [urlParams]); // Run once on component mount

  useEffect(() => {
    if (selectedIsland) {
      const filtered = resortData.filter(
        (resort: Resort) => resort.Island === selectedIsland
      );
      if (filtered.length === 0) {
        setShowNoResults(true);
      } else {
        setShowNoResults(false);
        setShowResortData(filtered);
      }
    }
  }, [selectedIsland]);

  // useEffect(() => {
  //   if (selectedIsland) {
  //     const galleryElement = document.querySelector(".gallery");
  //     if (galleryElement) {
  //       galleryElement.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });

  //       // Start walkthrough immediately after scroll
  //       setTimeout(() => {
  //         setStartWalkthrough(true);
  //       }, 800); // Adjust timing if needed
  //     }
  //   }
  // }, [selectedIsland]);

  const onTourEnd = () => {
    sessionStorage.setItem("tourCompleted", "true");
  };

  return (
    <div className="bg-secondary" id="body">
      {/* Only show walkthrough if tour is not completed */}
      {!tourCompleted && <Walkthrough start={true} onTourEnd={onTourEnd} />}
      <div id="hero">
        <Hero />
      </div>
      <div className="">
        <div className="gallery" id="resort-gallery">
          <ResortGallery
            finderType={finderType}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            resorts={showResortData}
            selectedIsland={selectedIsland}
            showNoResults={showNoResults}
          />
        </div>
        <div className="pt-10 pb-8 px-3 md:px-0" id="explore-map">
          <h2
            id="map-heading"
            className="text-[#0066FF] text-2xl sm:text-4xl w-full overflow-visible max-w-7xl mx-auto md:w-10/12 lg:w-11/12 md:px-0 font-sandalsSlab  "
          >
            Explore the Map
          </h2>
        </div>

        {/* <iframe
          className="map h-[500px] md:h-[750px]"
          src="https://my.atlist.com/map/75cf0a96-2b41-48d5-91cf-e3127778fbe8?share=true"
          allow="geolocation 'self' https://my.atlist.com"
          margin-bottom="-5px"
          width="100%"
          // height="750px"
          loading="lazy"
          scrolling="no"
          id="atlist-embed"
        ></iframe> */}

        <iframe
          className="map h-[500px] md:h-[750px]"
          src="https://my.atlist.com/map/d46f736e-be84-4079-8ba9-67230e8a474a?share=true"
          allow="geolocation 'self' https://my.atlist.com"
          margin-bottom="-5px"
          width="100%"
          // height="400px"
          loading="lazy"
          scrolling="no"
          id="atlist-embed"
        ></iframe>

        <IslandCarousel
          setActiveTab={setActiveTab}
          setSelectedIsland={setSelectedIsland}
          setFinderType={setFinderType}
        />

        <div id="resort-finder">
          <ResortFinder
            setActiveTab={setActiveTab}
            setShowResortData={setShowResortData}
            setShowNoResults={setShowNoResults}
            showNoResults={showNoResults}
            setFinderType={setFinderType}
          />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
