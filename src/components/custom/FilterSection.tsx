import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { X } from "lucide-react";
import { seewhatincludedFeatures } from "../../constants";
const FilterSection = ({
  selectedFilters,
  onFilterSelect,
  onUpdateResults,
  onReset,
}: {
  selectedFilters: Record<string, string[]>;
  onFilterSelect: (filter: string, category: string) => void;
  onUpdateResults: () => void;
  onReset: () => void;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isIncludedDialogOpen, setIsIncludedDialogOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownElements = document.querySelectorAll(".dropdown-content");
      const clickedInsideDropdown = Array.from(dropdownElements).some(
        (element) => element.contains(event.target as Node)
      );

      if (!clickedInsideDropdown && openDropdown !== null) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const filterCategories = {
    guestProfile: ["Adults Only, 18+", "Families with Kids, Under 18"],
    beachType: ["Cove Beach", "Long Stretch"],
    resortMood: [
      "More Tranquil",
      "More Intimate",
      "More Social",
      "More Expansive",
    ],
    signatureAccommodations: [
      "Rondoval Villas",
      "Over-The-Water Accommodations",
      "SkyPool and Swim Up Suites",
    ],
  };

  const renderFilterContent = (category: string, filters: string[]) => {
    const isGuestProfile = category === "guestProfile";
    const isOpen = openDropdown === category;

    return (
      <>
        {/* Desktop View */}
        <div className="hidden md:flex flex-wrap gap-2 ml-6">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={`${selectedFilters[category]?.includes(filter)
                ? "default"
                : "secondary"
                }`}
              onClick={() => onFilterSelect(filter, category)}
            >
              <h3 className="font font-medium">{filter}</h3>
            </Button>
          ))}
        </div>

        {/* Mobile View Custom Dropdown */}
        <div className="md:hidden w-full">
          {/* Dropdown Header */}
          <div
            className="w-full border border-primary rounded-full bg-secondary md:bg-white  p-3 flex  justify-between items-center cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown(isOpen ? null : category);
            }}
          >
            <span className="text-primary font-medium md:font-normal">
              {selectedFilters[category]?.length > 0
                ? "Select " + category.replace(/([A-Z])/g, " $1").trim()
                : filters[0]}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Selected Options Tags */}
          {selectedFilters[category]?.length > 0 && (
            <div className="flex  flex-wrap gap-2 mt-2">
              {selectedFilters[category].map((filter) => (
                <div
                  key={filter}
                  className="bg-[#0066FF] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  <span>{filter}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onFilterSelect(filter, category);
                    }}
                    className="hover:bg-blue-700 rounded-full"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Dropdown Content */}
          {isOpen && (
            <div className="dropdown-content w-[225px] border border-primary rounded-xl bg-[#F8F0DB] md:bg-white mt-1 absolute z-50">
              {filters.map((filter) => (
                <div
                  key={filter}
                  className="flex space-x-1.5 items-center justify-between p-3 border-b last:border-b-0 cursor-pointer"
                  onClick={() => {
                    onFilterSelect(filter, category);
                    if (isGuestProfile) {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <span className="text-primary font-medium md:font-normal">{filter}</span>
                  {isGuestProfile ? (
                    <input
                      type="radio"
                      checked={selectedFilters[category]?.[0] === filter}
                      onChange={() => {
                        onFilterSelect(filter, category);
                        setOpenDropdown(null);
                      }}
                      name={category}
                      className="h-6 w-7 appearance-none rounded-sm  bg-[#EFE1C1] relative
                        after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2
                        after:border-[#0066FF] after:border-r-2 after:border-b-2 after:w-1.5 after:h-2.5 after:rotate-45
                        after:hidden checked:after:block"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      checked={selectedFilters[category]?.includes(filter)}
                      onChange={() => onFilterSelect(filter, category)}
                      className="h-6 w-7 appearance-none rounded-sm  bg-[#EFE1C1] relative
                        after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2
                        after:border-[#0066FF] after:border-r-2 after:border-b-2 after:w-1.5 after:h-2.5 after:rotate-45
                        after:hidden checked:after:block"
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div
        id="matchInterests"
        className="w-full overflow-visible max-w-7xl mx-auto md:w-10/12 lg:w-11/12 px-3 md:px-0"
      >
        <div className=" z-10 bg-secondary py-4">
          <div className="flex lg:flex-row flex-col justify-between items-start">
            <div className=" text-primary w-full">
              <div className="flex justify-between">
                <h2 className="text-2xl sm:text-4xl font-sandalsSlab ">
                  Match Your Interests
                </h2>{" "}
              </div>
              <h3 className="text-sm sm:text-base font-sandalsSans font-normal mt-4">
                Sandals and Beaches vacations are all-inclusive, offering
                unlimited access to a variety of activities and amenities at every
                resort.
              </h3>
              {/* Added Pills Section */}
              {/* <div className="flex flex-wrap  gap-2.5 mt-3">
                {inclusiveFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="bg-primary text-white px-4 py-2 rounded-full text-xs sm:text-sm  font-sandalsSans sm:font-medium"
                  >
                    {feature}
                  </div>
                ))}
              </div> */}
              <div className="flex justify-center md:justify-start flex-wrap  gap-2.5 mt-4">
                <Button onClick={() => setIsIncludedDialogOpen(true)}>
                  See What's Included
                </Button>
              </div>
              <h3 className="text-sm sm:text-base font-sandalsSans font-normal  max-w-x mt-4">
                Select and submit your guest profile and up to three additional
                preferences to find your personalized resort match.
              </h3>
              <div className="tag-breadcrumb"></div>
            </div>
          </div>
          {Object.entries(filterCategories).map(([category, filters]) => (
            <div
              key={category}
              className={`flex sm:flex-row flex-row items-center sm:items-center gap-3 sm:gap-0 border-b border-primary py-4  ${category === "guestProfile" ? "pb-4" : ""
                }`}
            >
              <h3 className="text-primary  max-w-32 min-w-32 capitalize font-sandalsSans font-medium text-base">
                {category.replace(/([A-Z])/g, " $1").trim()}
                {category === "guestProfile" ? (
                  <>
                    <br />
                    <span className="text-blue-600 capitalize font-sandalsSans font-normal text-sm">
                      {" "}
                      Required
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-blue-600 font-normal capitalize  text-sm">
                      {" "}
                      Optional
                    </span>
                  </>
                )}
              </h3>

              {renderFilterContent(category, filters)}
            </div>
          ))}
        </div>
        <div className="md:flex hidden md:flex-row w-full lg:w-auto flex-col  mt-4 lg:mt-0 gap-3">
          <Button variant="outline" onClick={onUpdateResults}>
            Submit Preferences
          </Button>
          <Button variant="outline" onClick={onReset}>
            Reset Filters
          </Button>
        </div>

        <Dialog
          open={isIncludedDialogOpen}
          onOpenChange={setIsIncludedDialogOpen}
        >
          <DialogContent className="p-6 bg-[#f8f0db] rounded-2xl w-full max-w-2xl mx-auto">
            <button
              onClick={() => setIsIncludedDialogOpen(false)}
              className="absolute right-5 top-5 p-1"
            >
              <X className="h-4 w-4 text-[#0066FF]" />
            </button>

            <h2 className="text-[#0066FF] text-[34px] font-normal font-sandalsSlab text-center ">
              Every Vacation Includes
            </h2>

            <div className="grid grid-cols-4 gap-x-6">
              {seewhatincludedFeatures.slice(0, 8).map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-2">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-[100px] h-[100px] object-contain "
                    />
                  </div>
                  <p className="text-[#0066FF] text-base font-medium font-sandalsSans leading-tight">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-x-10 mb-4">
              {seewhatincludedFeatures.slice(8).map((feature, index) => (
                <div
                  key={index + 8}
                  className="flex flex-col items-center text-center "
                >
                  <div className="relative mb-2">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-[100px] h-[100px] object-contain "
                    />
                  </div>
                  <p className="text-[#0066FF] max-w-[100px] text-base font-medium font-sandalsSans leading-tight">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                className="w-[200px] bg-[#0066FF] text-white rounded-full py-2 text-sm font-sandalsSans hover:bg-[#0057cc] transition-colors"
                onClick={() => {
                  setIsIncludedDialogOpen(false);
                  const filterSection = document.getElementById("matchInterests");
                  if (filterSection) {
                    filterSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Find Your Ideal Vacation
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex md:hidden w-full bg-regal-blue shadow-[0_-4px_4px_rgba(0,0,0,0.3)] pt-5 px-3 -mb-11 gap-3">

        <Button variant="outline" className="inline-flex font-normal items-center justify-center gap-2 whitespace-nowrap rounded-full font-sandalsSans transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300 bg-transparent border-[1.5px] border-black text-black h-9 px-7 py-7" onClick={onReset}>
          Reset
        </Button>
        <Button variant="outline" className="inline-flex font-normal items-center justify-center gap-2 whitespace-nowrap rounded-full font-sandalsSans transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300 bg-primary text-secondary border-transparent border-[1.5px] h-9 px-7 py-7 w-full" onClick={onUpdateResults}>
          Submit Preferences
        </Button>
      </div>
    </>
  );
};

export default FilterSection;
