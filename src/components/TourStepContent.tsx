import React from "react";
import { X } from "lucide-react";

interface TourStepContentProps {
  heading: string;
  description: string;
  isMobile: boolean;
  stepNumber: number;
  totalSteps: number;
  bulletPoints?: string[];
  isCenterAlligned?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
  isResortPrompt?: boolean;
  subHeading?: string;
}

const TourStepContent: React.FC<TourStepContentProps> = ({
  heading,
  description,
  subHeading,
  isMobile,
  bulletPoints = [],
  isCenterAlligned = false,
  showCloseButton = false,
  isResortPrompt = false,
  onClose,
}) => {
  return (
    <div className="grid col-span-3 bg-secondary relative">
      <div className={`flex flex-col ${isCenterAlligned && "items-center"}`}>
        <div className="flex justify-between items-start w-full">
          <h3
            className={`text-base font-medium font-sandalsSans text-primary !leading-5 mb-3 md:text-base 2xl:text-base 2xl:-top-20 2xl:mb-2 ${
              isMobile ? "text-base" : "text-base"
            } ${isCenterAlligned ? "text-center" : "text-start"}`}
          >
            {heading}
          </h3>

          {showCloseButton && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-black/10 rounded-full -mt-1 -mr-1"
            >
              <X className="h-5 w-5 text-primary" />
            </button>
          )}
        </div>

        <p
          className={`font-sandalsSans font-normal sm:leading-7 text-primary !leading-4 md:text-base  text-start text-base`}
        >
          {description}
        </p>
        {bulletPoints.length > 0 && (
          <ul
            className={`${
              isCenterAlligned && "mr-[20%]"
            } list-disc list-inside text-primary text-start`}
          >
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>

      {subHeading && (
        <p className="mt-3 font-sandalsSans font-normal sm:leading-7 text-primary !leading-4 md:text-base  text-start text-base">
          {subHeading}
        </p>
      )}

      {/* Triangular down arrow at bottom center */}
      {!isResortPrompt && (
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50 ">
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-secondary  border-r-[10px] border-r-transparent" />
        </div>
      )}
    </div>
  );
};

export default TourStepContent;
