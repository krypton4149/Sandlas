import { useState, useEffect, useCallback } from "react";
import Joyride, { CallBackProps, Step, EVENTS, STATUS } from "react-joyride";
import TourStepContent from "../TourStepContent";
import useMobile from "../../hooks/useMobile";
import { COLORS, joyrideDeatils } from "@/constants";

interface State {
  run: boolean;
  stepIndex: number;
  steps: Step[];
}

interface WalkthroughProps {
  start: boolean;
  onTourEnd: () => void;
  setSelectedIsland: (island: string) => void;
  setActiveTab: (tab: string) => void;
}

import React from "react";

interface TourStepContentProps {
  heading: string;
  description: string;
  isMobile: boolean;
  stepNumber: number;
  totalSteps: number;
  bulletPoints?: string[];
  subHeading?: string;
}

const TourStepContentFirst: React.FC<TourStepContentProps> = ({
  heading,
  subHeading,
  description,
  isMobile,
  bulletPoints = [],
  //   stepNumber,
  //   totalSteps,
}) => {
  console.log(bulletPoints);
  return (
    <div className="& grid col-span-3 start-1 bg-secondary">
      <div className=" flex flex-col ">
        <h3
          className={` text-base font-medium font-sandalsSans text-primary    md:text-base 2xl:text-base 2xl:-top-20   text-start   ${
            isMobile ? "text-base" : "text-base"
          }`}
        >
          {heading}
        </h3>
        <h3
          className={` text-base font-medium font-sandalsSans text-primary  sm:mb-12  md:text-base 2xl:text-base 2xl:-top-20 2xl:mb-4  text-start   ${
            isMobile ? "text-base" : "text-base"
          }`}
        >
          {subHeading}
        </h3>
        <p
          className={` text-base font-normal sm:leading-7 text-primary leading-5 md:text-sm 2xl:text-sm 2xl:normal  text-start   ${
            isMobile ? "text-sm" : "text-sm"
          }`}
        >
          {description}
        </p>
        {bulletPoints.length > 0 && (
          <ul className="list-disc list-inside text-primary text-start ml-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="font-sandalsSans text-base">
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Walkthrough = ({
  start,
  onTourEnd,
  setSelectedIsland,
  setActiveTab,
}: WalkthroughProps) => {
  const isMobile = useMobile();
  const totalSteps = 4;

  const styles = {
    spotlight: {
      border: "2px solid #1F7BF2",
      borderRadius: "8px",
      boxShadow: "0 0 15px rgba(31, 123, 242, 0.3)",
      minWidth: isMobile ? "500px" : "2200px",
      maxWidth: isMobile ? "320px" : "650px",
      padding: "24px",
      margin: "0 auto",
    },
    buttonNext: {
      outline: "2px solid transparent",
      outlineOffset: "2px",
      backgroundColor: COLORS.PRIMARY.BACKGROUND,
      borderRadius: "5px",
      color: COLORS.PRIMARY.BUTTON_BACKGROUND,
      marginRight: "40px",
      // padding: "12px 24px",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      textAlign: "left" as const,
    },
    buttonBack: {
      outline: "2px solid transparent",
      borderRadius: "5px",
      border: `1px solid ${COLORS.PRIMARY.BRIGHT_BLUE}`,
      padding: "12px 24px",
      fontSize: "16px",
      fontWeight: "500",
      marginRight: "15px",
      cursor: "pointer",
    },
    buttonSkip: {
      color: COLORS.TEXT.GRAY,
      fontSize: "16px",
      fontWeight: "500",
      padding: "12px",
      cursor: "pointer",
    },
    options: {
      arrowColor: COLORS.SECONDARY.WHITE,
      backgroundColor: COLORS.PRIMARY.BACKGROUND,
      textColor: COLORS.TERTIARY.BLACK,
      overlayColor: "rgba(0,0,0,0)",
      primaryColor: COLORS.PRIMARY.BRIGHT_BLUE,
      width: isMobile ? 300 : 600,
      zIndex: 1000,
      beaconSize: 36,
    },
    tooltip: {
      padding: "20px",
      margin: isMobile ? "0px 0px 0px 2px " : "0px 0px 0px 0px ",
      backgroundColor: COLORS.PRIMARY.BACKGROUND,
      boxShadow: `0 4px 20px ${COLORS.OVERLAY.BLACK_15}`,
      width: isMobile ? "400px" : "580px",
      outline: "25px solid rgba(0, 0, 0, 0.7)",
      textAlign: "left" as const,
    },
    buttonClose: {
      position: "absolute" as const,
      top: "16px",
      right: "20px",
      backgroundColor: "transparent",
      border: "none",
      color: COLORS.PRIMARY.BRIGHT_BLUE,
      fontSize: "24px",
      fontWeight: "900",
      cursor: "pointer",
      padding: "5px",
      zIndex: 1000,
    },
    tooltipContainer: {
      width: "100%",
      padding: "0px",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "flex-start",
    },
    tooltipContent: {
      padding: "0px  8px",
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: "1.6",
      textAlign: "left" as const,
      width: "100%",
    },
    tooltipTitle: {
      fontSize: isMobile ? "20px" : "20px",
      fontWeight: "600",
      marginBottom: "12px",
      color: COLORS.TERTIARY.BLACK,
    },
  };
  const generateSteps = useCallback(
    (): Step[] => [
      {
        content: (
          <TourStepContentFirst
            heading={joyrideDeatils?.step1?.heading}
            // subHeading={joyrideDeatils?.step1?.subHeading}
            description={joyrideDeatils?.step1?.description}
            isMobile={isMobile}
            stepNumber={1}
            // bulletPoints={joyrideDeatils?.step1?.bulletPoints}
            totalSteps={4}
          />
        ),
        floaterProps: {
          styles: {
            arrow: {
              display: "none",
              // color: COLORS.PRIMARY.BACKGROUND,
            },
          },
        },

        locale: {
          next: "Start Tour",
          nextLabelWithProgress: (
            <span
              style={{
                fontFamily: "sandalsSans",
                fontWeight: 500,
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Start Tour{" "}
              <span
                style={{
                  fontFamily: "sandalsSans",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                →
              </span>
            </span>
          ),
        },

        target: "#hero",
        placement: isMobile ? "center" : "top-start",
        styles: {
          options: {
            zIndex: 500,
          },
          tooltip: {
            marginTop: "75px",
            marginLeft: "245px", // Add left margin
            width: isMobile ? "400px" : "543px",
          },

          buttonNext: {
            outline: "2px solid transparent",
            outlineOffset: "2px",
            backgroundColor: COLORS.PRIMARY.BACKGROUND,
            borderRadius: "5px",
            color: COLORS.PRIMARY.BUTTON_BACKGROUND,
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            position: "relative" as const,
            left: "",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            margin: "0px 20px",

            marginTop: "-20px",
            padding: "12px 0", // Remove horizontal padding
          },
        },
        data: {
          next: "#atlist-embed",
        },
        disableBeacon: true,
        showSkipButton: false,
        hideCloseButton: true,
      },
      {
        content: (
          <TourStepContent
            heading={joyrideDeatils?.step2?.heading}
            description={joyrideDeatils?.step2?.description}
            isMobile={isMobile}
            stepNumber={2}
            totalSteps={4}
          />
        ),
        floaterProps: {
          styles: {
            arrow: {
              // display: "none",
              color: COLORS.PRIMARY.BACKGROUND,
            },
          },
        },

        locale: {
          next: "Explore Map",
          nextLabelWithProgress: (
            <span
              style={{
                fontFamily: "sandalsSans",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Prefer to explore by destination? Use our island explorer scroll
              feature{" "}
              <span
                style={{
                  fontFamily: "sandalsSans",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                →
              </span>
            </span>
          ),
        },
        target: "#atlist-embed",
        placement: isMobile ? "bottom" : "top",
        data: {
          next: "#island-carousel",
        },
      },
      {
        content: (
          <TourStepContent
            heading={joyrideDeatils?.step3?.heading}
            description={joyrideDeatils?.step3?.description}
            isMobile={isMobile}
            stepNumber={3}
            totalSteps={4}
          />
        ),
        floaterProps: {
          styles: {
            arrow: {
              // display: "none",
              color: COLORS.PRIMARY.BACKGROUND,
            },
          },
        },

        styles: {
          tooltip: {
            width: isMobile ? "400px" : "543px",
          },
        },
        locale: {
          next: "Explore Map",
          nextLabelWithProgress: (
            <span
              style={{
                fontFamily: "sandalsSans",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Prefer to find resorts that match your interests? Use our filters
              menu.{" "}
              <span
                style={{
                  fontFamily: "sandalsSans",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                →
              </span>
            </span>
          ),
        },
        target: "#island-carousel",
        placement: isMobile ? "bottom" : "top",
        data: {
          next: "#resort-finder",
        },
      },
      {
        content: (
          <TourStepContent
            heading={joyrideDeatils?.step4?.heading}
            description={joyrideDeatils?.step4?.description}
            isMobile={isMobile}
            stepNumber={4}
            totalSteps={4}
          />
        ),
        floaterProps: {
          styles: {
            arrow: {
              color: COLORS.PRIMARY.BACKGROUND,
            },
          },
        },
        locale: {
          last: "Next Step",
          nextLabelWithProgress: (
            <span
              style={{
                fontFamily: "sandalsSans",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Next Step{" "}
              <span
                style={{
                  fontFamily: "sandalsSans",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                →
              </span>
            </span>
          ),
        },

        target: "#resort-finder",
        placement: isMobile ? "bottom" : "top",
        data: {
          next: "#hero",
        },
        styles: {
          buttonNext: {
            outline: "2px solid transparent",
            outlineOffset: "2px",
            backgroundColor: COLORS.PRIMARY.BACKGROUND,
            borderRadius: "5px",
            color: COLORS.PRIMARY.BUTTON_BACKGROUND,
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            position: "relative" as const,
            left: "",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            margin: "0px 8px",
            padding: "12px 0",
          },
        },
      },
    ],
    [isMobile, totalSteps, setSelectedIsland, setActiveTab]
  );

  const [{ run, steps }, setState] = useState<State>({
    run: false,
    stepIndex: 0,
    steps: generateSteps(),
  });

  useEffect(() => {
    // Start the tour immediately without any conditions
    setState({
      steps,
      run: true,
      stepIndex: 0,
    });
  }, [steps]); // Only depend on steps

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type, index } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED];

    if (type === EVENTS.STEP_AFTER && index === 3) {
      // When moving from step 4 (which is now the last step)
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (finishedStatuses.includes(status)) {
      sessionStorage.setItem("tourCompleted", "true");
      sessionStorage.setItem("tourStepIndex", "0");
      setState({ steps, run: false, stepIndex: 0 });
      onTourEnd();
    }
  };

  useEffect(() => {
    if (start) {
      const tourCompleted = sessionStorage.getItem("tourCompleted") === "true";

      if (!tourCompleted) {
        sessionStorage.removeItem("tourStepIndex");
        setState({
          steps,
          run: true,
          stepIndex: 0,
        });
      }
    }
  }, [start, steps]);

  return (
    <Joyride
      continuous
      callback={handleJoyrideCallback}
      run={run}
      steps={steps}
      scrollToFirstStep
      disableCloseOnEsc
      disableOverlay={false}
      hideBackButton
      showProgress
      styles={styles}
      disableOverlayClose={true}
      spotlightClicks={true}
    />
  );
};

export default Walkthrough;
