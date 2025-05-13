import { useEffect, useState, useRef } from "react";
import { joyrideDeatils } from "@/constants";
import TourStepContent from "../TourStepContent";
import useMobile from "../../hooks/useMobile";

interface ResortDetailWalkthroughProps {
  onTourEnd: () => void;
}

const ResortDetailWalkthrough = ({
  onTourEnd,
}: ResortDetailWalkthroughProps) => {
  const isMobile = useMobile();
  const [isVisible, setIsVisible] = useState(true);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tourCompleted, setTourCompleted] = useState(false);

  // Check if tour is completed
  useEffect(() => {
    const isTourCompleted =
      sessionStorage.getItem("resortTourCompleted") === "true";
    setTourCompleted(isTourCompleted);
  }, []);

  // Update tooltip position and visibility on scroll
  useEffect(() => {
    if (tourCompleted) return;

    const updatePosition = () => {
      const targetElement = document.getElementById("island-carousel-item");
      if (!targetElement || !tooltipRef.current) return;

      const targetRect = targetElement.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      // Calculate position
      let top = isMobile
        ? targetRect.bottom + 20
        : targetRect.top - tooltipRect.height - 20;
      let left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;

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

      // Check if target is still in view
      const isTargetInView =
        targetRect.top < window.innerHeight &&
        targetRect.bottom > 0 &&
        targetRect.left < window.innerWidth &&
        targetRect.right > 0;

      // Update visibility based on target visibility
      if (!isTargetInView && isVisible) {
        setIsVisible(false);
        sessionStorage.setItem("resortTourCompleted", "true");
        setTourCompleted(true);
        onTourEnd();
      } else if (isTargetInView && !isVisible) {
        setIsVisible(true);
      }

      // Update position
      setTooltipPosition({ top, left });
    };

    // Initial position update
    updatePosition();

    // Update position on scroll and resize
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isVisible, isMobile, tourCompleted, onTourEnd]);

  const handleClose = () => {
    sessionStorage.setItem("resortTourCompleted", "true");
    setTourCompleted(true);
    onTourEnd();
  };

  // Add click outside handler
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  if (tourCompleted) return null;

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
          isVisible ? "tooltip-enter" : "tooltip-exit"
        }`}
        style={{
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
          transform: "none",
          transition: "top 0.3s ease-out, left 0.3s ease-out",
          pointerEvents: isVisible ? "auto" : "none",
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
            heading={joyrideDeatils?.step4?.heading}
            description={joyrideDeatils?.step4?.description}
            isMobile={isMobile}
            stepNumber={1}
            totalSteps={1}
            showCloseButton={true}
            onClose={handleClose}
          />
        </div>
      </div>
    </>
  );
};

export default ResortDetailWalkthrough;
