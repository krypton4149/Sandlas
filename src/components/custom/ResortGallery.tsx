import { useState, useEffect } from "react";
// import { Plus, Minus } from "lucide-react";
import { ZoomIn, ZoomOut } from "lucide-react";

import { Button } from "../ui/button";
// import { Dialog } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { handleHeroBookNowClick } from "@/constants";
import { Dialog, DialogContent } from "../ui/dialog";

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
  // Map?: string;
  Dining: string;
  watersports?: string;
  IslandTours?: string;
  City?: string;
  Tabs: { name: string; images: string[] }[];
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { handleBookNowClick } from "@/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ResortDetailWalkthrough from "./ResortDetailWalkthrough";

const ResortGallery = ({
  resorts,
  selectedIsland,
  showNoResults,
  activeTab,
  setActiveTab,
}: {
  finderType: string;

  resorts: Resort[];
  selectedIsland: string;
  showNoResults: boolean;
  activeTab: string;
  setActiveTab: (value: string) => void;
}) => {
  const formatDashes = (text: string) => {
    return text.replace(/\s+/g, "-");
  };

  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [isCallDialogOpen, setIsCallDialogOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  // Add this useEffect to handle carousel changes
  useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      setActiveCarouselIndex(api.selectedScrollSnap());
      setActiveTab("Overview");
    };

    api.on("select", handleSelect);

    // Cleanup
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, setActiveTab]);

  const handleClickToCall = () => {
    setIsCallDialogOpen(true);
  };
  // const [activeTabImages, setActiveTabImages] = useState([]);

  // Add this helper function to determine visible page numbers

  const getVisiblePageNumbers = (total: number, current: number) => {
    // If total resorts is less than or equal to 5, show all pages
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i);
    }

    // For more than 5 resorts, show 5 numbers centered around current page
    let start = Math.max(0, current - 2);
    const end = Math.min(total - 1, start + 4);

    // Adjust start if we're near the end to always show 5 numbers if possible
    if (end - start < 4) {
      start = Math.max(0, end - 4);
    }

    return Array.from(
      { length: Math.min(5, end - start + 1) },
      (_, i) => start + i
    );
  };

  const handleActiveCarouselIndex = (pageIndex: number) => {
    if (!api) return;
    api.scrollTo(pageIndex);
    // The activeCarouselIndex will be updated by the "select" event handler
  };

  // Add navigation handlers
  const handlePrevious = () => {
    if (!api) return;
    if (activeCarouselIndex === 0) {
      // If on first item, go to last item
      // Use scrollTo with true for immediate to avoid showing intermediate slides
      api.scrollTo(resorts.length - 1, true);
    } else {
      api.scrollPrev();
    }
    // The activeCarouselIndex will be updated by the "select" event handler
  };

  const handleNext = () => {
    if (!api) return;
    if (activeCarouselIndex === resorts.length - 1) {
      // If on last item, go to first item
      // Use scrollTo with true for immediate to avoid showing intermediate slides
      api.scrollTo(0, true);
    } else {
      api.scrollNext();
    }
    // The activeCarouselIndex will be updated by the "select" event handler
  };

  // useEffect(() => setTabState("Overview"), [selectedIsland]);

  const handleTabClick = (tab: { name: string; images?: string[] }) => {
    setActiveTab(tab.name);
    // setActiveTabImages(tab.images);
  };

  const handleScrollBackToIslandSection = () => {
    const carouselElement = document.querySelector(".islandCarousel");
    if (carouselElement) {
      // Add a small delay to ensure state updates have completed

      carouselElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Reset zoom when closing preview
  useEffect(() => {
    if (!isPreviewOpen) {
      setScale(1);
    }
  }, [isPreviewOpen]);

  const getCurrentTabImages = () => {
    // Add safety checks
    if (
      !resorts ||
      !resorts[activeCarouselIndex] ||
      !resorts[activeCarouselIndex].Tabs
    ) {
      return [];
    }

    const currentTab = resorts[activeCarouselIndex].Tabs.find(
      (tab: { name: string; images?: string[] }) => tab.name === activeTab
    );
    return currentTab?.images || [];
  };

  const toggleZoom = () => {
    setScale((prev) => (prev === 1 ? 2 : 1));
  };

  const handleZoomIn = () => {
    setScale((prev) => (prev === 1 ? 2 : 1)); // Toggle between 1x and 2x zoom
  };

  const handleZoomOut = () => {
    setScale(1); // Reset to 1x zoom
  };

  // const handleZoom = () => {
  //   setScale((prev) => (prev === 1 ? 2 : 1));
  // };

  // Mobile-only image preview section
  // const renderMobileImagePreview = (img: string, index: number) => {
  //   return (
  //     <div
  //       key={index}
  //       className={`mb-2 w-full ${
  //         activeTab === "Map" ? "h-[400px]" : "h-[200px]"
  //       }`}
  //       onClick={() => {
  //         // Only open preview on mobile
  //         if (window.innerWidth < 1024) {
  //           setSelectedImage(index);
  //           setIsPreviewOpen(true);
  //         }
  //       }}
  //     >
  //       <img
  //         src={img}
  //         alt={`${resorts[activeCarouselIndex].ResortTitle} ${activeTab}`}
  //         className="w-full h-full object-cover rounded-xl"
  //         onError={(e) => {
  //           const target = e.target as HTMLImageElement;
  //           target.parentElement!.style.display = "none";
  //         }}
  //       />
  //     </div>
  //   );
  // };

  // Render mobile tab content
  const renderMobileTabContent = () => {
    // Add safety check at the beginning of the function
    if (!resorts || !resorts[activeCarouselIndex]) {
      return null;
    }

    const currentImages = getCurrentTabImages();

    return (
      <div className="mt-4 lg:hidden">
        {activeTab === "Overview" ? (
          <div className="mb-6">
            <ul className="space-y-2 text-sm opacity-90">
              {resorts[activeCarouselIndex].ResortDescription.split("\n").map(
                (item, index) =>
                  item.length > 0 && (
                    <li
                      key={index}
                      className="flex items-start font-sandalsSans"
                    >
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  )
              )}
            </ul>
          </div>
        ) : (
          <>
            {/* Main Selected Image */}
            {currentImages.length > 0 && (
              <div className="mb-3">
                <img
                  src={
                    currentImages[
                      Math.min(selectedImage, currentImages.length - 1)
                    ]
                  }
                  alt={`${resorts[activeCarouselIndex].ResortTitle} ${activeTab}`}
                  className="w-full h-[250px] object-cover rounded-xl"
                  onClick={() => setIsPreviewOpen(true)}
                />
              </div>
            )}

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {currentImages.map((img: string, index: number) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    index === selectedImage
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${resorts[activeCarouselIndex].ResortTitle} ${activeTab} thumbnail`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.parentElement!.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Description under images */}
            <div className="mb-6">
              <ul className="space-y-2 text-sm opacity-90">
                {resorts[activeCarouselIndex].ResortDescription.split("\n").map(
                  (item, index) =>
                    item.length > 0 && (
                      <li
                        key={index}
                        className="flex items-start font-sandalsSans"
                      >
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    )
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    );
  };

  // Add this useEffect to reset selectedImage when tab changes
  useEffect(() => {
    setSelectedImage(0); // Reset to first image when tab changes
  }, [activeTab]);

  // Add state to track if resort tour has been shown
  const [showResortTour, setShowResortTour] = useState(false);

  // When resorts change, check if we should show the tour
  useEffect(() => {
    if (resorts.length > 0) {
      const resortTourCompleted =
        sessionStorage.getItem("resortTourCompleted") === "true";
      if (!resortTourCompleted) {
        setShowResortTour(true);
      }
    }
  }, [resorts]);

  const handleResortTourEnd = () => {
    sessionStorage.setItem("resortTourCompleted", "true");
    setShowResortTour(false);
  };

  // Enhanced map scroll function with retry mechanism
  const scrollToMap = () => {
    const findAndScrollToMap = (retryCount = 0) => {
      const mapElement = document.querySelector(".map") as HTMLIFrameElement;

      if (mapElement) {
        mapElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (retryCount < 5) {
        // Retry a few times if map element not found
        setTimeout(() => {
          findAndScrollToMap(retryCount + 1);
        }, 200);
      } else {
        console.log("Map element not found after retries");
      }
    };

    findAndScrollToMap();
  };

  // Add this useEffect near your other useEffects
  useEffect(() => {
    if (isPreviewOpen) {
      // Disable scroll on body when preview is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll when preview is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPreviewOpen]);

  if (showNoResults) {
    return (
      <div
        className="mx-auto h-72  flex justify-center items-center  bg-secondary text-primary mt-5 relative overflow-hidden  pb-8 font-sandalsSlab text-2xl gallery-no-result"
        id="no-results-section"
      >
        <h2 className=" text-center hover:text-[#0066FF] transition-colors">
          Your selections don't match any resort.
          <div className="text-base mt-2 flex w-full justify-center">
            <Button onClick={handleScrollBackToIslandSection}>
              Please try again
            </Button>
          </div>
        </h2>
      </div>
    );
  }
  return (
    <div
      id="resort-gallery"
      className={`mx-auto  flex justify-center items-center bg-secondary relative overflow-hidden pb-8 mt-10 lg:mt-0 w-full ${
        resorts.length > 0 ? "block" : "hidden"
      }`}
    >
      {/* Show the resort detail walkthrough only when needed */}
      {showResortTour && resorts.length > 0 && (
        <ResortDetailWalkthrough onTourEnd={handleResortTourEnd} />
      )}

      <button
        onClick={handlePrevious}
        className="absolute 2xl:left-60 disabled:opacity-50 left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center z-10"
        disabled={resorts.length === 1}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <button
        onClick={handleNext}
        className="absolute 2xl:right-60 disabled:opacity-50 right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center z-10"
        disabled={resorts.length === 1}
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      <Carousel className="w-full max-w-[100%] lg:max-w-7xl" setApi={setApi}>
        <CarouselContent className="-ml-0.5 mb-8">
          {resorts.length > 0 ? (
            <>
              {resorts.map((resort, index) => (
                <CarouselItem
                  key={index}
                  className="lg:pl-5 basis-full w-full transition-all duration-300 px-2 lg:px-0"
                >
                  <div className="grid grid-cols-8 gap-4 py-6 lg:py-11 px-3 lg:px-8">
                    {/* Left Section */}
                    <div className="col-span-8 lg:col-span-3 bg-quaternary text-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 overflow-hidden">
                      {/* Resort Image */}
                      <div className="flex flex-col lg:flex-col gap-5">
                        <div className="overflow-hidden mb-3">
                          <img
                            src={`assets/images/Sandals_Images/${formatDashes(
                              resort.ResortTitle
                            )}/Carousel_ResortHero_Slider/${formatDashes(
                              resort.ResortTitle
                            )}_Carousel_ResortHero_Slider_1.jpg`}
                            alt={resort.ResortTitle}
                            className="w-full h-[200px] lg:h-[240px] rounded-2xl lg:rounded-3xl object-cover"
                          />
                        </div>

                        {/* Title and Location */}
                        <div>
                          <h2
                            id="island-carousel-item"
                            className="text-xl lg:text-2xl font-sandalsSlab mb-2"
                          >
                            {resort.ResortTitle}
                          </h2>
                          <h4 className="text-base lg:text-lg mb-4 lg:mb-5 font-sandalsSans">
                            {resort.City}
                            {resort.City && ", "}
                            {resort.Island}
                          </h4>
                          {/* Mobile Tabs Section */}
                          <div className="block lg:hidden mb-6">
                            <div className="flex gap-3 overflow-x-auto pb-2 w-full">
                              {resort?.Tabs?.map(
                                (tab: { name: string; images?: string[] }) => {
                                  const isActiveTab = activeTab === tab.name;
                                  return (
                                    <div
                                      key={tab.name}
                                      className="flex-shrink-0"
                                    >
                                      <Button
                                        onClick={() => handleTabClick(tab)}
                                        variant="ghost"
                                        size="sm"
                                        className={`text-white rounded-none overflow-x-scroll whitespace-nowrap ${
                                          isActiveTab
                                            ? "border-b-4 border-white"
                                            : "border-b-4 border-transparent"
                                        }`}
                                      >
                                        {tab.name}
                                      </Button>
                                    </div>
                                  );
                                }
                              )}
                            </div>

                            {/* Mobile Tab Content */}
                            {renderMobileTabContent()}
                          </div>
                          <div className="mb-6  sm:hidden">
                            <h2 className="text-lg lg:text-xl font-sandalsSlab mb-3 lg:mb-4">
                              Ideal For
                            </h2>
                            <div className="flex flex-nowrap lg:flex-nowrap gap-2 lg:gap-3 text-tertiary font-medium font-sandalsSans">
                              <div
                                style={{
                                  backgroundColor:
                                    resort.IdealFor?.[0]?.background,
                                  color: resort.IdealFor?.[0]?.textColor,
                                }}
                                className="rounded-2xl lg:rounded-3xl px-2 py-3 lg:py-4 w-full lg:w-auto lg:flex-1 h-14 lg:h-16 flex justify-center items-center"
                              >
                                <span className="text-xs lg:text-sm text-center">
                                  {resort.IdealFor[0].name}
                                </span>
                              </div>
                              <div
                                style={{
                                  backgroundColor:
                                    resort.IdealFor2?.[0]?.background,
                                  color: resort.IdealFor2?.[0]?.textColor,
                                }}
                                className="rounded-2xl lg:rounded-3xl px-2 py-3 lg:py-4 w-full lg:w-auto lg:flex-1 h-14 lg:h-16 flex justify-center items-center"
                              >
                                <span className="text-xs lg:text-sm text-center">
                                  {resort.IdealFor2?.[0]?.name}
                                </span>
                              </div>
                              <div
                                style={{
                                  backgroundColor:
                                    resort.IdealFor3?.[0]?.background,
                                  color: resort.IdealFor3?.[0]?.textColor,
                                }}
                                className="rounded-2xl lg:rounded-3xl px-2 py-3 lg:py-4 w-full lg:w-auto lg:flex-1 h-14 lg:h-16 flex justify-center items-center"
                              >
                                <span className="text-xs lg:text-sm text-center leading-snug">
                                  {resort.IdealFor3?.[0].name}
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* <div className="flex  sm:hidden gap-4 mb-6">
                            <Button
                              onClick={() => handleBookNowClick(resort)}
                              variant="Quarter"
                              className="w-full"
                            >
                              Book Now
                            </Button>
                            <Button className="w-full">Click To Call</Button>
                          </div> */}
                          <div className="flex gap-4 w-full sm:hidden mb-6 flex-col">
                            <Button variant="Tertiary" onClick={scrollToMap}>
                              Back To Map
                            </Button>
                          </div>
                        </div>

                        {/* Desktop Content */}
                        <div className="hidden lg:block">
                          <div className="mb-6 lg:mb-8">
                            <ul className="space-y-2 lg:space-y-3 text-sm opacity-90">
                              {resort.ResortDescription.split("\n").map(
                                (item, index) =>
                                  item.length > 0 && (
                                    <li
                                      key={index}
                                      className="flex items-start font-sandalsSans"
                                    >
                                      <span className="mr-2">•</span>
                                      {item}
                                    </li>
                                  )
                              )}
                            </ul>
                          </div>

                          <div className="mb-6 lg:mb-8">
                            <h2 className="text-lg lg:text-xl font-sandalsSlab mb-3 lg:mb-4">
                              Ideal For
                            </h2>
                            <div className="flex flex-wrap lg:flex-nowrap gap-2 lg:gap-3 text-tertiary font-medium font-sandalsSans">
                              <div
                                style={{
                                  backgroundColor:
                                    resort.IdealFor?.[0]?.background,
                                  color: resort.IdealFor?.[0]?.textColor,
                                }}
                                className="rounded-2xl lg:rounded-3xl px-2 py-3 lg:py-4 w-[calc(50%-4px)] lg:w-auto lg:flex-1 h-14 lg:h-16 flex justify-center items-center"
                              >
                                <span className="text-xs lg:text-sm text-center">
                                  {resort.IdealFor[0].name}
                                </span>
                              </div>
                              <div
                                style={{
                                  backgroundColor:
                                    resort.IdealFor2?.[0]?.background,
                                  color: resort.IdealFor2?.[0]?.textColor,
                                }}
                                className="rounded-2xl lg:rounded-3xl px-2 py-3 lg:py-4 w-[calc(50%-4px)] lg:w-auto lg:flex-1 h-14 lg:h-16 flex justify-center items-center"
                              >
                                <span className="text-xs lg:text-sm text-center">
                                  {resort.IdealFor2?.[0]?.name}
                                </span>
                              </div>
                              <div
                                style={{
                                  backgroundColor:
                                    resort.IdealFor3?.[0]?.background,
                                  color: resort.IdealFor3?.[0]?.textColor,
                                }}
                                className="rounded-2xl  lg:rounded-3xl px-2 py-3 lg:py-4 w-full lg:w-auto lg:flex-1 h-14 lg:h-16 flex justify-center items-center"
                              >
                                <span className="text-xs lg:text-sm text-center leading-snug">
                                  {resort.IdealFor3?.[0].name}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-4 mb-6">
                            <Button
                              onClick={() => handleBookNowClick(resort)}
                              // className="w-full"
                              className="rounded-2xl lg:rounded-3xl px-2 py-3 lg:py-4 w-[calc(50%-4px)] lg:w-auto lg:flex-1 h-14 lg:h-16 flex justify-center items-center text-base"
                            >
                              Book Now
                            </Button>
                            <Button
                              variant="Quarter"
                              className="rounded-2xl lg:rounded-3xl px-2 py-3 lg:py-4 w-[calc(50%-4px)] lg:w-auto lg:flex-1 h-14 lg:h-16 flex justify-center items-center text-base"
                              onClick={handleClickToCall}
                            >
                              Click To Call
                            </Button>
                          </div>
                          <div className="flex gap-4 w-full  mb-6 flex-col">
                            <Button
                              variant="Tertiary"
                              className="rounded-2xl lg:rounded-3xl px-2 py-3 lg:py-4 w-[calc(50%-4px)] lg:w-auto lg:flex-1 h-14 lg:h-16 flex justify-center items-center text-base"
                              onClick={scrollToMap}
                            >
                              Back To Map
                            </Button>
                          </div>
                          {/* <Button
                            onClick={() => {
                              handleBookNowClick(resort);
                            }}
                            className="w-full"
                          >
                            Book Now
                          </Button> */}
                        </div>
                      </div>
                    </div>
                    <Dialog
                      open={isCallDialogOpen}
                      onOpenChange={setIsCallDialogOpen}
                    >
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
                            If you have questions or need assistance with your
                            booking, a Sandals and Beaches concierge is standing
                            by. Click to call us to take advantage of our
                            current offer and book your Caribbean dream
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

                    {/* Right Section - Hidden on Mobile */}
                    <div className="hidden lg:block lg:col-span-5">
                      {/* Tabs */}
                      <div className="mt-5 lg:mt-0">
                        <div className="flex justify-between  gap-4 lg:gap-0 items-center mb-5">
                          <div className="flex gap-4 xl:gap-6">
                            {resort?.Tabs?.map(
                              (tab: { name: string; images?: string[] }) => {
                                const isActiveTab = activeTab === tab.name;
                                return (
                                  <div key={tab.name}>
                                    <Button
                                      onClick={() => handleTabClick(tab)}
                                      variant="ghost"
                                      size="sm"
                                      className={` text-black rounded-none  ${
                                        isActiveTab
                                          ? "border-b-4  border-primary"
                                          : "border-b-4  border-transparent"
                                      }`}
                                    >
                                      {tab.name}
                                    </Button>
                                  </div>
                                );
                              }
                            )}
                          </div>

                          <div className="flex gap-2.5 w-full lg:w-auto justify-end">
                            <Button variant="outline" onClick={scrollToMap}>
                              Back To Map
                            </Button>
                            <Button
                              onClick={() => {
                                handleBookNowClick(resort);
                              }}
                              variant="default"
                            >
                              Book Now
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-3 lg:gap-4">
                          {resort.Tabs.find(
                            (tab: { name: string }) => tab.name === activeTab
                          )?.images?.length ? (
                            <>
                              {resort.Tabs.find(
                                (tab: { name: string }) =>
                                  tab.name === activeTab
                              )?.images?.map((img: string, index: number) => {
                                return (
                                  <div
                                    className={`cursor-pointer ${
                                      activeTab === "Map"
                                        ? "col-span-4"
                                        : "col-span-2"
                                    }`}
                                    key={index + img}
                                    onClick={() => {
                                      setSelectedImage(index);
                                      setIsPreviewOpen(true);
                                    }}
                                  >
                                    <img
                                      src={img}
                                      alt={`${resort.ResortTitle} ${activeTab}`}
                                      className={`${
                                        activeTab === "Map"
                                          ? "h-[900px] lg:h-[930px]"
                                          : "h-[250px]"
                                      } w-full  object-cover rounded-3xl
                                       
                                      
                                      `}
                                      onError={(e) => {
                                        const target =
                                          e.target as HTMLImageElement;
                                        target.parentElement!.style.display =
                                          "none"; // Hide only the img element
                                      }}
                                    />
                                  </div>
                                );
                              })}
                            </>
                          ) : (
                            <h3 className="col-span-4 text-center mt-28 text-xl font-sandalsSlab ">
                              No data available for {activeTab}.
                            </h3>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </>
          ) : (
            <>
              {selectedIsland && (
                <>
                  <div className="mx-auto h-72  flex justify-center items-center  bg-secondary text-primary mt-5 relative overflow-hidden  pb-8 font-sandalsSlab text-2xl gallery-no-result">
                    <h2>
                      Oops, we couldn't find a resort like this, and try again
                    </h2>
                  </div>
                </>
              )}
            </>
          )}
        </CarouselContent>

        <div className="flex items-center justify-center mt-4">
          <div className="absolute bottom-4 w-full flex gap-2 justify-center items-center">
            <button
              onClick={handlePrevious}
              className="h-10 w-10 rounded-full bg-primary text-white flex disabled:opacity-50 items-center justify-center"
              disabled={resorts.length === 1}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            {getVisiblePageNumbers(resorts.length, activeCarouselIndex).map(
              (pageIndex) => (
                <button
                  key={pageIndex}
                  // onClick={() => setActiveCarouselIndex(pageIndex)}
                  onClick={() => handleActiveCarouselIndex(pageIndex)}
                  className={`text-primary cursor-pointer text-xs font-medium h-10 w-10 flex items-center justify-center rounded-full border-[1.5px] border-primary ${
                    activeCarouselIndex === pageIndex
                      ? "bg-primary text-white"
                      : "bg-transparent"
                  }`}
                >
                  {(pageIndex + 1).toString().padStart(2, "0")}
                </button>
              )
            )}

            {resorts.length > 5 && activeCarouselIndex < resorts.length - 3 && (
              <span className="text-primary px-2">...</span>
            )}

            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-primary disabled:opacity-50 text-white flex items-center justify-center"
              disabled={resorts.length === 1}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Carousel>
      {/* Mobile-only Image Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsPreviewOpen(false);
            }
          }}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setIsPreviewOpen(false);
              }}
              className="absolute top-4 right-4 z-10 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            {/* Update zoom controls to show current state */}
            <div className="absolute top-5 right-16 flex gap-3 z-10">
              <button
                onClick={handleZoomOut}
                className="h-8 w-8 rounded-lg bg-black text-white flex items-center justify-center disabled:opacity-50"
                disabled={scale === 1}
              >
                <ZoomOut className="h-5 w-5" />
              </button>
              <button
                onClick={handleZoomIn}
                className="h-8 w-8 rounded-lg bg-black text-white flex items-center justify-center disabled:opacity-50"
                disabled={scale === 2}
              >
                <ZoomIn className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setSelectedImage((prev) =>
                  prev > 0 ? prev - 1 : getCurrentTabImages().length - 1
                );
              }}
              className="absolute left-4 z-10 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Update the main image container */}
            <div
              className={`${
                scale > 1 ? "fixed inset-0 " : "relative h-[calc(100vh-96px)]"
              } flex items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => {
                if (scale > 1) {
                  e.stopPropagation();
                }
              }}
            >
              <div
                className={`relative ${
                  scale > 1 ? "overflow-auto scrollbar-hide" : "overflow-hidden"
                }`}
                style={{
                  maxWidth: scale > 1 ? "100vw" : "100%",
                  maxHeight: scale > 1 ? "100%" : "90%",
                  width: "100%",
                  height: "100%",
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                <style>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <img
                  src={getCurrentTabImages()[selectedImage]}
                  alt={`${resorts[activeCarouselIndex].ResortTitle} ${activeTab}`}
                  className={`object-contain transition-transform duration-200 ${
                    scale === 1 ? "cursor-zoom-in" : "cursor-zoom-out"
                  }`}
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "center",
                    width: "100%",
                    height: "100%",
                  }}
                  onClick={toggleZoom}
                />
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setSelectedImage((prev) =>
                  prev < getCurrentTabImages().length - 1 ? prev + 1 : 0
                );
              }}
              className="absolute right-4 z-10 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnail carousel */}
            {scale <= 1 && activeTab !== "Map" && (
              <div className="fixed bottom-0 left-0 right-0  py-4">
                <div className="flex justify-center gap-2 px-4 overflow-x-auto overflow-y-hidden">
                  {getCurrentTabImages().map((img: string, index: number) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                        index === selectedImage
                          ? "border-blue-600"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${resorts[activeCarouselIndex].ResortTitle} ${activeTab} thumbnail`}
                        className="w-full h-full object-cover transition-transform duration-200"
                        style={{ transform: `scale(${scale})` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResortGallery;
