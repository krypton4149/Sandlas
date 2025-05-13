export const handleHeroBookNowClick = () => {
  window.open("http://obe.sandals.com/", "_blank");
};

type ResortType = { ResortTitle: string; ResortLink: string };
export const handleBookNowClick = (resort: ResortType) => {
  window.open(`${resort.ResortLink}`, "_blank");
};

export const termsAndConditionClick = () => {
  window.open("https://www.sandals.com/terms-conditions/", "_blank");
};
export const cookiesAndPrivacyPolicyClick = () => {
  window.open("https://www.sandals.com/privacy-policy/", "_blank");
};
export const contactUsClick = () => {
  window.open("https://www.sandals.com/contact/", "_blank");
};
export const privacyChoiceClick = () => {
  window.open("https://www.sandals.com/privacy-preferences/", "_blank");
};
export const facebookClick = () => {
  window.open("https://www.facebook.com/sandalsresorts/", "_blank");
};
export const instagramClick = () => {
  window.open("https://www.instagram.com/sandalsresorts/", "_blank");
};
export const twitterClick = () => {
  window.open("https://www.twitter.com/sandalsresorts/", "_blank");
};

export const logging = (message: string) => {
  return console.log(message, "a");
};

export const joyrideDeatils = {
  step1: {
    heading: "Explore The Caribbean",
    description: "Click any resort pin on the map to explore more or book now.",
  },
  step2: {
    heading: "Scroll All Islands",
    description:
      "Scroll to locate your desired destination and click to explore each island's resorts.",
  },
  step3: {
    heading: "Discover the Resort That's Right For You",
    description:
      "Select your favorite activities to find the resorts that match your preferences.",
  },
  step4: {
    heading: "Go Further",
    description:
      "Check out each resort's top attractions to help you decide where to book your Sandals or Beaches vacation.",
    subHeading:
      "Use our Book Now button to discover more resort details and room availability.",
  },
};

export const COLORS = {
  PRIMARY: {
    BRIGHT_BLUE: "#1F7BF2",
    BACKGROUND: "#F8F0DB",
    BUTTON_BACKGROUND: "#0057FF",
  },
  SECONDARY: {
    WHITE: "#FFFFFF",
  },
  TERTIARY: {
    BLACK: "#1F1F1F",
  },
  OVERLAY: {
    BLACK_70: "rgba(0, 0, 0, 0.7)",
    BLACK_15: "rgba(0, 0, 0, 0.15)",
  },
  TEXT: {
    GRAY: "#666666",
  },
};

export const seewhatincludedFeatures = [
  {
    icon: "assets/images/SeeWhatIncludeIcons/Specialtyrestaurantsandbars.svg",
    title: "Specialty Restaurants and Bars",
  },
  {
    icon: "assets/images/SeeWhatIncludeIcons/scubaDivingIcon.svg",
    title: "Scuba Diving",
  },
  {
    icon: "assets/images/SeeWhatIncludeIcons/snorkelingIcon.svg",
    title: "Snorkeling",
  },
  {
    icon: "assets/images/SeeWhatIncludeIcons/waterSportsIcon.svg",
    title: "Water Sports",
  },
  {
    icon: "assets/images/SeeWhatIncludeIcons/landsportsIcon.svg",
    title: "Land Sports",
  },
  {
    icon: "assets/images/SeeWhatIncludeIcons/fitnessIcon.svg",
    title: "Fitness Center",
  },
  {
    icon: "assets/images/SeeWhatIncludeIcons/tipsTaxesAndGratuities.svg",
    title: "Tips, Taxes and Gratuities",
  },
  {
    icon: "assets/images/SeeWhatIncludeIcons/liquorsAndWinesIcon.svg",
    title: "Premium Liquors & Wines",
  },
  {
    icon: "assets/images/SeeWhatIncludeIcons/barsPerResortIcon.svg",
    title: "Up To 13 Bars Per Resort",
  },
  {
    icon: "assets/images/SeeWhatIncludeIcons/transfersBusIcon.svg",
    title: "Airport Transfers",
  },
];
