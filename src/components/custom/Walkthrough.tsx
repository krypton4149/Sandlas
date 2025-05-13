import { useEffect, useState, useRef } from "react";
import { joyrideDeatils } from "@/constants";
import TourStepContent from "../TourStepContent";

interface WalkthroughProps {
  onTourEnd: () => void;
  start: boolean;
}

// Define the tour guide element IDs
const TOUR_GUIDE_IDS = {
  MAP_HEADING: "map-heading",
  ISLAND_CAROUSEL: "island-carousel",
  RESORT_FINDER: "resort-finder",
  FOOTER: "footer",
} as const;

// Define the tour steps with their content
const TOUR_STEPS = [
  {
    id: TOUR_GUIDE_IDS.MAP_HEADING,
    content: {
      heading: joyrideDeatils?.step1?.heading,
      description: joyrideDeatils?.step1?.description,
    },
    placement: "top",
  },
  {
    id: TOUR_GUIDE_IDS.ISLAND_CAROUSEL,
    content: {
      heading: joyrideDeatils?.step2?.heading,
      description: joyrideDeatils?.step2?.description,
    },
    placement: "top",
  },
  {
    id: TOUR_GUIDE_IDS.RESORT_FINDER,
    content: {
      heading: joyrideDeatils?.step3?.heading,
      description: joyrideDeatils?.step3?.description,
    },
    placement: "top",
  },
];

const Walkthrough = ({ onTourEnd, start }: WalkthroughProps) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tourCompleted, setTourCompleted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);

  // Track which steps have been shown AND closed/scrolled past
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  // Track the highest step that can be shown (based on completed steps)
  const [highestAllowedStep, setHighestAllowedStep] = useState<number>(0);

  // Check if tour is completed
  useEffect(() => {
    const isTourCompleted = sessionStorage.getItem("tourCompleted") === "true";
    setTourCompleted(isTourCompleted);

    // Try to restore progress if available
    const completedStepsStr = sessionStorage.getItem("completedTourSteps");
    if (completedStepsStr) {
      try {
        const completedArray = JSON.parse(completedStepsStr);
        setCompletedSteps(new Set(completedArray));
        setHighestAllowedStep(
          Math.min(completedArray.length, TOUR_STEPS.length - 1)
        );
      } catch (e) {
        console.error("Failed to parse completed steps from storage", e);
      }
    }
  }, []);

  // Update session storage when completed steps change
  useEffect(() => {
    if (completedSteps.size > 0) {
      sessionStorage.setItem(
        "completedTourSteps",
        JSON.stringify([...completedSteps])
      );
    }
  }, [completedSteps]);

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Main scroll handler - check element positions and update active step
  useEffect(() => {
    if (!start || tourCompleted) return;

    // Function to check element positions and update active step
    const checkElementPositions = () => {
      // TOP_THRESHOLD determines how far from the top the element should be to trigger
      const TOP_THRESHOLD = 100; // pixels from top

      // We'll find the highest step that's currently at the top of the screen
      // and is allowed to be shown (based on completion of previous steps)
      let highestVisibleStep: number | null = null;

      for (let i = 0; i <= highestAllowedStep; i++) {
        // Skip if this step has already been completed
        if (completedSteps.has(i)) continue;

        const element = document.getElementById(TOUR_STEPS[i].id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        // Check if element is near the top of the screen
        if (rect.top >= 0 && rect.top <= TOP_THRESHOLD) {
          highestVisibleStep = i;
          break; // Take the first (highest) one we find
        }
      }

      // Special handling for programmatic scroll
      if (isProgrammaticScroll) {
        for (let i = 0; i <= highestAllowedStep; i++) {
          if (completedSteps.has(i)) continue;

          const element = document.getElementById(TOUR_STEPS[i].id);
          if (!element) continue;

          const rect = element.getBoundingClientRect();

          if (rect.top < window.innerHeight && rect.bottom > 0) {
            highestVisibleStep = i;
            break;
          }
        }

        setIsProgrammaticScroll(false);
      }

      // Update the active step if we found one
      if (highestVisibleStep !== null) {
        setActiveStep(highestVisibleStep);
        setIsVisible(true);
      } else if (activeStep !== null) {
        // If the current active step is no longer visible, mark it as completed
        // and hide the tooltip
        if (!isProgrammaticScroll) {
          const element = document.getElementById(TOUR_STEPS[activeStep].id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < 0 || rect.top > TOP_THRESHOLD) {
              markStepComplete(activeStep);
              setIsVisible(false);
            }
          }
        }
      }
    };

    // Mark a step as completed and update allowed steps
    const markStepComplete = (step: number) => {
      setCompletedSteps((prev) => {
        const newSet = new Set(prev);
        newSet.add(step);
        return newSet;
      });

      // If this was the highest allowed step, increment the highest allowed
      if (step === highestAllowedStep) {
        setHighestAllowedStep((prev) =>
          Math.min(prev + 1, TOUR_STEPS.length - 1)
        );
      }
    };

    // Check positions on scroll
    window.addEventListener("scroll", checkElementPositions);

    // Also check periodically to handle edge cases
    const interval = setInterval(checkElementPositions, 500);

    // Initial check
    checkElementPositions();

    return () => {
      window.removeEventListener("scroll", checkElementPositions);
      clearInterval(interval);
    };
  }, [
    start,
    tourCompleted,
    activeStep,
    highestAllowedStep,
    completedSteps,
    isProgrammaticScroll,
  ]);

  // Handle programmatic scrolling event
  useEffect(() => {
    const handleProgrammaticScroll = () => {
      if (!start || tourCompleted) return;
      setIsProgrammaticScroll(true);
    };

    window.addEventListener(
      "programmaticScrollComplete",
      handleProgrammaticScroll
    );

    return () => {
      window.removeEventListener(
        "programmaticScrollComplete",
        handleProgrammaticScroll
      );
    };
  }, [start, tourCompleted]);

  // Update tooltip position when active step changes
  useEffect(() => {
    if (activeStep === null || !isVisible) return;

    const updatePosition = () => {
      const element = document.getElementById(TOUR_STEPS[activeStep].id);
      if (!element || !tooltipRef.current) return;

      const targetRect = element.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      // Position based on placement
      let top, left;
      const placement = TOUR_STEPS[activeStep].placement;

      switch (placement) {
        case "top":
          top = targetRect.top - tooltipRect.height - 20;
          left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
          break;
        case "bottom":
          top = targetRect.bottom + 20;
          left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
          break;
        case "left":
          top = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2;
          left = targetRect.left - tooltipRect.width - 20;
          break;
        case "right":
          top = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2;
          left = targetRect.right + 20;
          break;
        default:
          top = targetRect.bottom + 20;
          left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
      }

      // Center horizontally on mobile
      if (isMobile) {
        left = window.innerWidth / 2 - tooltipRect.width / 2;
      }

      // Adjust for screen boundaries
      const padding = 20;
      top = Math.max(
        padding,
        Math.min(window.innerHeight - tooltipRect.height - padding, top)
      );
      left = Math.max(
        padding,
        Math.min(window.innerWidth - tooltipRect.width - padding, left)
      );

      setTooltipPosition({ top, left });
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [activeStep, isVisible, isMobile]);

  // Handle tour completion
  useEffect(() => {
    if (!start || tourCompleted) return;

    // Check if all steps have been completed
    if (completedSteps.size === TOUR_STEPS.length) {
      // Start fade out animation
      setIsFadingOut(true);

      // Mark as completed after animation
      setTimeout(() => {
        sessionStorage.setItem("tourCompleted", "true");
        setTourCompleted(true);
        onTourEnd();
      }, 500);
    }
  }, [start, tourCompleted, onTourEnd, completedSteps]);

  // Handle closing the tooltip
  const handleClose = () => {
    if (activeStep !== null) {
      // Mark current step as completed
      setCompletedSteps((prev) => {
        const newSet = new Set(prev);
        newSet.add(activeStep);
        return newSet;
      });

      // Update highest allowed step if this was the current highest
      if (activeStep === highestAllowedStep) {
        setHighestAllowedStep((prev) =>
          Math.min(prev + 1, TOUR_STEPS.length - 1)
        );
      }

      // Hide the tooltip
      setIsVisible(false);
      setActiveStep(null);
    }
  };

  // Handle clicks outside the tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible, activeStep]);

  // Don't render if not needed
  if ((activeStep === null || !start || tourCompleted) && !isFadingOut) {
    return null;
  }

  const currentStep = TOUR_STEPS[activeStep !== null ? activeStep : 0];

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-10px); }
        }
        
        .tooltip-enter {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .tooltip-exit {
          animation: fadeOut 0.5s ease-out forwards;
        }
      `}</style>
      <div
        ref={tooltipRef}
        className={`box-border max-w-7xl mx-auto w-screen fixed z-[1000] ${
          isFadingOut
            ? "tooltip-exit"
            : isVisible
            ? "tooltip-enter"
            : "tooltip-exit"
        }`}
        style={{
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
          transition: "top 0.3s ease-out, left 0.3s ease-out",
          pointerEvents: isVisible && !isFadingOut ? "auto" : "none",
          opacity: isFadingOut ? 1 : isVisible ? 1 : 0,
        }}
        onAnimationEnd={() => {
          if (isFadingOut) {
            sessionStorage.setItem("tourCompleted", "true");
            setTourCompleted(true);
            onTourEnd();
          }
        }}
      >
        <div
          className="bg-secondary rounded-lg shadow-lg p-4 border-2 border-[#0066FF]/20"
          style={{
            width: isMobile ? "calc(100vw - 40px)" : "450px",
            maxWidth: "90vw",
            marginLeft: 15,
            outline: "15px solid rgba(153, 206, 250, 0.3)",
          }}
        >
          <TourStepContent
            heading={currentStep.content.heading}
            description={currentStep.content.description}
            isMobile={isMobile}
            stepNumber={activeStep !== null ? activeStep + 1 : 1}
            totalSteps={TOUR_STEPS.length}
            showCloseButton={true}
            onClose={handleClose}
          />
        </div>
      </div>
    </>
  );
};

export default Walkthrough;
