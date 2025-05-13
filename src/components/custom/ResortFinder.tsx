import { Resort, resortData } from "@/resortData";
import { useState } from "react";
import FilterSection from "./FilterSection";

const ResortFinder = ({
  setShowResortData,
  setShowNoResults,
  setActiveTab,
  setFinderType,
}: {
  setShowResortData: (resorts: Resort[]) => void;
  setShowNoResults: (show: boolean) => void;
  showNoResults: boolean;
  setActiveTab: (tab: string) => void;
  setFinderType: (value: string) => void;
}) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({
    guestProfile: [],
    beachType: [],
    resortMood: [],
    watersports: [],
    activities: [],
    food: [],
  });

  const [filterCount, setFilterCount] = useState(0);

  const handleFilterSelect = (filter: string, category: string) => {
    if (filterCount > 3 && !selectedFilters[category].includes(filter)) {
      return; // Prevent selecting more than 4 filters
    }

    setSelectedFilters((prev) => {
      const currentFilters = prev[category] || [];
      const isSelected = currentFilters.includes(filter);

      // Special handling for guestProfile category
      if (category === "guestProfile") {
        // If clicking on an already selected filter, just deselect it
        if (isSelected) {
          setFilterCount((count) => count - 1);
          return {
            ...prev,
            [category]: [],
          };
        }
        // If selecting a new filter, clear any existing selection and set the new one
        setFilterCount((count) => {
          const oldCount = prev[category].length > 0 ? count - 1 : count;
          return oldCount + 1;
        });
        return {
          ...prev,
          [category]: [filter],
        };
      }
      // Update filter count
      setFilterCount((count) => (isSelected ? count - 1 : count + 1));

      // Remove filter if already selected
      if (isSelected) {
        return {
          ...prev,
          [category]: currentFilters.filter((f) => f !== filter),
        };
      }

      // Add filter if not selected
      return {
        ...prev,
        [category]: [...currentFilters, filter],
      };
    });
  };

  const handleUpdateResults = () => {
    setFinderType("filter");

    // Get all selected resorts that match the filters
    const matchingResorts = resortData.filter((resort) => {
      // Must match guest profile if selected
      if (
        selectedFilters.guestProfile.length > 0 &&
        !selectedFilters.guestProfile.some((profile) =>
          resort.Tags.toLowerCase().includes(
            profile.toLowerCase().replace(/\s+/g, "-")
          )
        )
      ) {
        return false;
      }

      // Check other filters
      const allSelectedFilters = Object.entries(selectedFilters)
        .filter(([category]) => category !== "guestProfile") // Exclude guestProfile as it's already checked
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .flatMap(([_, filters]) => filters);

      // Count how many selected filters match the resort's tags
      const matchCount = allSelectedFilters.filter((filter: string) =>
        resort.Tags.toLowerCase().includes(
          filter.toLowerCase().replace(/\s+/g, "-")
        )
      ).length;

      // Resort must match all selected filters
      return matchCount === allSelectedFilters.length;
    });

    // setSelectedResorts(matchingResorts);
    setShowResortData(matchingResorts);
    setShowNoResults(matchingResorts.length === 0);

    // Scroll to results if there are matches

    if (matchingResorts.length > 0) {
      setActiveTab("Overview");
      const galleryElement = document.querySelector(".gallery");
      if (galleryElement) {
        // Add a small delay to ensure state updates have completed
        setTimeout(() => {
          galleryElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      // Add a small delay to ensure the DOM has updated
      setTimeout(() => {
        const noResultsSection = document.querySelector(".gallery-no-result");
        if (noResultsSection) {
          noResultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  const handleReset = () => {
    setSelectedFilters({
      guestProfile: [],
      beachType: [],
      resortMood: [],
      watersports: [],
      activities: [],
      food: [],
    });
    setFilterCount(0);
    // setSelectedResorts([]);
    setShowNoResults(false);
  };

  return (
    <FilterSection
      selectedFilters={selectedFilters}
      onFilterSelect={handleFilterSelect}
      onUpdateResults={handleUpdateResults}
      onReset={handleReset}
    />
  );
};

export default ResortFinder;
