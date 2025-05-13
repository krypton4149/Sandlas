import Walkthrough from ".";
// import useMobile from "src/hooks/useMobile";

interface WalkthroughModelProps {
  setSelectedIsland: (island: string) => void;
  setActiveTab: (tab: string) => void;
}

const WalkthroughModel = ({
  setSelectedIsland,
  setActiveTab,
}: WalkthroughModelProps) => {
  // Remove any existing tour completion flags

  const tourCompleted = sessionStorage.getItem("tourCompleted") === "true";

  const handleTourEnd = () => {
    sessionStorage.setItem("tourCompleted", "true");
  };

  return (
    <>
      {!tourCompleted && (
        // Always start the tour with start={true}
        <Walkthrough
          start={true}
          onTourEnd={handleTourEnd}
          setSelectedIsland={setSelectedIsland}
          setActiveTab={setActiveTab}
        />
      )}
    </>
  );
};

export default WalkthroughModel;
