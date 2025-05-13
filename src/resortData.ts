export type Resort = {
  ResortTitle: string;
  ResortLink: string;
  Island: string;
  ResortDescription: string;
  IdealFor: { name: string; background: string; textColor: string }[];
  IdealFor2?: { name: string; background: string; textColor: string }[];
  IdealFor3?: { name: string; background: string; textColor: string }[];
  Tags: string;
  Images: string;
  Beaches: string;
  Pool: string;
  Map?: string; // Optional field
  Dining: string;
  watersports?: string; // Optional field
  IslandTours?: string; // Optional field
  City?: string; // Optional field
  Tabs: { name: string; images: string[] }[];
};

export const resortData: Resort[] = [
  {
    ResortTitle: "Sandals Montego Bay",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=9AEC9B341730ABB6920E71BBD17FCFD3FC24D82949767244CEEABCC867016575&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=GC&RST_CODE=SMB&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Jamaica",
    City: "Montego Bay",
    ResortDescription:
      "Step into the place where it all began—the first-ever Sandals Resort.\nNestled on Jamaica’s largest exclusive white-sand beach.\nJust a swift 10-minute drive from Sangster International Airport.\nLocated near Montego Bay’s lively attractions and nightlife.\nStay at one resort, play at two with full exchange privileges at nearby Sandals Royal Caribbean.\nSip cocktails at Latitudes Overwater Bar or say 'I do' at our Overwater Wedding Chapel.\nTwelve unique dining spots and six vibrant bars—your taste buds are in for a treat.\nFitness center and Red Lane® Spa.\nSeven pools and three whirlpools await for your relaxation and fun.\nPaddleboards, kayaks, snorkeling, and motorized water sports like waterskiing, windsurfing, tubing, and more—all included.",

    IdealFor: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],
    IdealFor2: [
      { name: "Foodies", background: "#D0F759", textColor: "#000000" },
    ],
    IdealFor3: [
      { name: "Nearby Airport", background: "#B85328", textColor: "#FFFFFF" },
    ],

    Tags: "adults-only, adults-only,-18+, skypool-and-swim-up-suites, more-social, motorized-watersports, glass-bottom-boat, caribbean, teppanyaki, french, italian, long-stretch, scuba-on-property, motorized-watersports, tennis, swim-up-suites, jerk-shack, british-pub,  steakhouse, sushi, distance-to-airport-less-than-45-minutes \n",
    Images:
      "images/Sandals Montego Bay/1 - Carousel_ResortHero_Slider/Sandals-SMB-BeachAerial-6.jpg",
    Beaches:
      "images/Sandals Montego Bay/1 - Carousel_ResortHero_Slider/Sandals-SMB-BeachAerial-6.jpg",
    Pool: "images/Sandals Montego Bay/3 - Pools/Sandals-SMB-Swim-Up.jpg",
    Map: "",
    Dining:
      "images/Sandals Montego Bay/5 - Dining & Bars/Sandals-SMB-Cricketers2.jpg",
    watersports: "",
    IslandTours: "",
    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Overview/Sandals-Montego-Bay_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Overview/Sandals-Montego-Bay_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Overview/Sandals-Montego-Bay_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Overview/Sandals-Montego-Bay_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Beaches/Sandals-Montego-Bay_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Beaches/Sandals-Montego-Bay_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Beaches/Sandals-Montego-Bay_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Beaches/Sandals-Montego-Bay_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Pools/Sandals-Montego-Bay_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Pools/Sandals-Montego-Bay_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Pools/Sandals-Montego-Bay_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Pools/Sandals-Montego-Bay_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Dining/Sandals-Montego-Bay_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Dining/Sandals-Montego-Bay_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Dining/Sandals-Montego-Bay_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Montego-Bay/Dining/Sandals-Montego-Bay_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Montego_Bay_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Royal Caribbean",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=8EDF1AAB272BC3533329DD4651C2A521EA65D4AA61D6A4B3EF13205AF20B9543&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=BCS&RST_CODE=SRC&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Jamaica",
    City: "Montego Bay",
    ResortDescription:
      "​Jamaica’s only resort with its own private offshore island and secluded beach.\n​Home to the Caribbean’s first Over-the-Water Bungalows & Villas.\n​Just a quick 10-minute drive from Sangster International Airport.\n​Close to Montego Bay’s attractions and buzzing nightlife.\n​Enjoy British-style afternoon tea daily in our charming Tea Room.\n​Nine unique dining experiences and six bars.\n​Fitness center and Red Lane® Spa.\n​Eight freshwater pools, a scuba dive pool, and six whirlpools.\n​Paddleboarding, kayaking, snorkeling, Hobie Cats, windsurfing, and more.",

    IdealFor: [
      { name: "Secluded Privacy", background: "#BD9EFF", textColor: "#000000" },
    ],
    IdealFor2: [
      { name: "Tranquility", background: "#FFBEA9", textColor: "#000000" },
    ],
    IdealFor3: [
      { name: "Nearby Airport", background: "#B85328", textColor: "#FFFFFF" },
    ],

    Tags: "adults-only, adults-only,-18+, skypool-and-swim-up-suites, over-the-water-accommodations, cove-beach, more-tranquil, glass-bottom-boat, caribbean, indian, french, italian, offshore-island, scuba-on-property, over-the-water-villas, jerk-shack, british-pub, distance-to-airport-less-than-45-minutes \n",
    Images:
      "images/Sandals Royal Caribbean/1 - Carousel_ResortHero_Slider/Sandals-Royal-Caribbean-Offshore-Island.jpg",
    Beaches:
      "images/Sandals Royal Caribbean/4 - Beaches/Sandals-SRC-BeachAerial-7.jpg",
    Pool: "images/Sandals Royal Caribbean/3 - Pools/Sandals-Royal-Caribbean-Swim-ups.jpg",
    Map: "",
    Dining: "images/Sandals Royal Caribbean/5 - Dining & Bars/src-104.jpg",
    watersports: "",
    IslandTours:
      "images/Sandals Royal Caribbean/Offshore island/Sandals-SRC-BeachAerial-3.jpg",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Overview/Sandals-Royal-Caribbean_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Overview/Sandals-Royal-Caribbean_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Overview/Sandals-Royal-Caribbean_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Overview/Sandals-Royal-Caribbean_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Beaches/Sandals-Royal-Caribbean_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Beaches/Sandals-Royal-Caribbean_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Beaches/Sandals-Royal-Caribbean_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Beaches/Sandals-Royal-Caribbean_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Pools/Sandals-Royal-Caribbean_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Pools/Sandals-Royal-Caribbean_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Pools/Sandals-Royal-Caribbean_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Pools/Sandals-Royal-Caribbean_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Dining/Sandals-Royal-Caribbean_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Dining/Sandals-Royal-Caribbean_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Dining/Sandals-Royal-Caribbean_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Caribbean/Dining/Sandals-Royal-Caribbean_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Royal_Caribbean_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Negril",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=2A561B112353EB71AFB1D2F62100E5DE9530C321C4C831D321D11AD849AD9DFC&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=DL&RST_CODE=SNG&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Jamaica",
    City: "Negril",
    ResortDescription:
      "Set on the longest and best stretch of Negril's Seven Mile Beach.\nOffers some of the most picture-perfect sunsets in the Caribbean.\nEvery room is just steps away from the beach.\nPowdery white sand and turquoise waters.\nEasy access to deep-sea fishing.\nEight unique dining experiences and six bars.\nFitness center and Red Lane® Spa\nThree freshwater pools, one scuba dive pool, and three whirlpools.\nPaddleboards, kayaks, Aqua Trikes and motorized sports like waterskiing, windsurfing, wakeboarding, tubing, and more\n",
    IdealFor: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],
    IdealFor2: [
      {
        name: "Watersports Enthusiasts",
        background: "#17B9A4",
        textColor: "#000000",
      },
    ],
    IdealFor3: [
      { name: "Divers", background: "#52E8DF", textColor: "#000000" },
    ],

    Tags: "adults-only, adults-only,-18+, skypool-and-swim-up-suites, more-tranquil, more-intimate, italian, long-stretch, scuba-on-property, glass-bottom-boat, tennis, sky-pool-suite, swim-up-suite, motorized-watersports, teppanyaki, distance-to-airport-more-than-an-hour  \n",
    Images:
      "images/Sandals Negril/1 - Carousel_ResortHero_Slider/Sandals-Negril-Aerial.jpg",
    Beaches: "images/Sandals Negril/4 - Beaches/Sandals-Negril-Aerial.jpg",
    Pool: "images/Sandals Negril/3 - Pools/Sandals-Negril-Pool.jpg",
    Map: "",
    Dining: "images/Sandals Negril/5 - Dining & Bars/Sandals-Negril-Bar.jpg",
    watersports:
      "images/Sandals Negril/6 - Watersports/Sandals-Negril-Scuba-Pool.jpg",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Negril/Overview/Sandals-Negril_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Overview/Sandals-Negril_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Overview/Sandals-Negril_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Overview/Sandals-Negril_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Negril/Beaches/Sandals-Negril_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Beaches/Sandals-Negril_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Beaches/Sandals-Negril_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Beaches/Sandals-Negril_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Negril/Pools/Sandals-Negril_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Pools/Sandals-Negril_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Pools/Sandals-Negril_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Pools/Sandals-Negril_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Negril/Dining/Sandals-Negril_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Dining/Sandals-Negril_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Dining/Sandals-Negril_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Negril/Dining/Sandals-Negril_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Negril_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Ochi",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=73DD8CA9734D454424335E3132CFC949D84B7C7C4990B3C0597C3C4A466A192E&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=ML&RST_CODE=SGO&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Jamaica",
    City: "Ocho Rios",
    ResortDescription:
      "An expansive resort set on over 100 acres.\nAccess to Jamaica's most popular golf course, Upton Estate Golf and Country Club — green fees and transfers included.\nHome to Sandals' first speakeasy bar, the Rabbit Hole.\nSixteen unique dining experiences and eleven bars.\nFitness center and two Red Lane® Spas with a solarium.\nSeven freshwater pools, one scuba dive pool, 98 villa pools, and 22 whirlpools.\nClose to the world-famous Dunn's River Falls and Martha Brae bamboo river rafting.\n",
    IdealFor: [
      {
        name: "Natural Attractions",
        background: "#C7B600",
        textColor: "#000000",
      },
    ],
    IdealFor2: [
      { name: "Divers", background: "#52E8DF", textColor: "#000000" },
    ],
    IdealFor3: [
      { name: "Foodies", background: "#D0F759", textColor: "#000000" },
    ],

    Tags: "adults-only, adults-only,-18+, cove-beach, more-expansive, more-social, french, italian, scuba-on-property, golf, glass-bottom-boat, tennis, jerk-shack, sushi, teppanyaki, distance-to-airport-more-than-an-hour  \n",
    Images:
      "images/Sandals Ochi/1 - Carousel_ResortHero_Slider/Sandals-Ochi-Main-Pool.jpg",
    Beaches: "images/Sandals Ochi/4 - Beaches/Sandals-Ochi-Beach.jpg",
    Pool: "images/Sandals Ochi/3 - Pools/Sandals-Ochi-Great-House-Village.jpg",
    Map: "",
    Dining: "images/Sandals Ochi/5 - Dining & Bars/Sandals-Ochi-Kellys.jpg",
    watersports:
      "images/Sandals Ochi/6 - Watersports/Sandals-Ochi-Beach-Kayaks.jpg",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Ochi/Overview/Sandals-Ochi_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Overview/Sandals-Ochi_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Overview/Sandals-Ochi_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Overview/Sandals-Ochi_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Ochi/Beaches/Sandals-Ochi_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Beaches/Sandals-Ochi_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Beaches/Sandals-Ochi_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Beaches/Sandals-Ochi_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Ochi/Pools/Sandals-Ochi_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Pools/Sandals-Ochi_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Pools/Sandals-Ochi_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Pools/Sandals-Ochi_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Ochi/Dining/Sandals-Ochi_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Dining/Sandals-Ochi_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Dining/Sandals-Ochi_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Ochi/Dining/Sandals-Ochi_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Ochi_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Royal Plantation",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=2AA320CC6B1840F6CAE86060A0126F54B47696A5F4E55864E9E185193BD3AC5E&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=LR&RST_CODE=BRP&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Jamaica",
    City: "Ocho Rios",
    ResortDescription:
      "An all-butler, all-oceanview suites boutique resort offering authentic Jamaican charm.\nFeatures two private cove beaches with beach service.\nAccess to Jamaica's most popular golf course, Upton Estate Golf and Country Club–green fees and transfers included.\nOffers full exchange privileges at Sandals Ochi and Sandals Dunn's River.\nHome to Jamaica's only champagne and caviar bar.\n24-hour in-suite dining always available.\nFive unique dining experiences and three bars.\nFitness center and Red Lane® Spa.\nTwo freshwater pools and one whirlpool.\nClose to the world-famous Dunn's River Falls and Martha Brae bamboo river rafting.",
    IdealFor: [
      { name: "Tranquility", background: "#FFBEA9", textColor: "#000000" },
    ],
    IdealFor2: [
      { name: "Quaint Luxury", background: "#CFBBA0", textColor: "#000000" },
    ],
    IdealFor3: [
      {
        name: "Natural Attractions",
        background: "#C7B600",
        textColor: "#000000",
      },
    ],

    // "Ideal For": "Tranquility, natural attractions, secluded privacy, beach lovers, golf enthusiasts.",

    Tags: "adults-only, adults-only,-18+, more-tranquil, golf, caribbean, french, italian, more-intimate, cove-beach, glass-bottom-boat, golf, tennis, british-pub, distance-to-airport-more-than-an-hour  \n",
    Images:
      "images/Sandals Royal Plantation/1 - Carousel_ResortHero_Slider/croissantsandcaviar_sandalsroyalplantation-15.jpg",
    Beaches: "",
    Pool: "",
    Map: "",
    Dining: "",
    watersports: "",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Overview/Sandals-Royal-Plantation_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Overview/Sandals-Royal-Plantation_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Overview/Sandals-Royal-Plantation_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Overview/Sandals-Royal-Plantation_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Beaches/Sandals-Royal-Plantation_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Beaches/Sandals-Royal-Plantation_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Beaches/Sandals-Royal-Plantation_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Beaches/Sandals-Royal-Plantation_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Pools/Sandals-Royal-Plantation_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Pools/Sandals-Royal-Plantation_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Pools/Sandals-Royal-Plantation_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Pools/Sandals-Royal-Plantation_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Dining/Sandals-Royal-Plantation_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Dining/Sandals-Royal-Plantation_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Dining/Sandals-Royal-Plantation_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Plantation/Dining/Sandals-Royal-Plantation_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Royal_Plantation_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals South Coast",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=29530A68B01BAC452876B27637C7D20DFDC18245161186CFC7B496F06D187155&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=IGB&RST_CODE=SWH&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Jamaica",
    City: "Whitehouse",
    ResortDescription:
      "Protected by rolling hills and 500 acres of nature preserve.\nSet on a two-mile stretch of Jamaica's white-sand beach.\nOver-the-water collection includes bungalows, Serenity Wedding Chapel, and Latitudes Overwater Bar.\nRondoval Village features the Caribbean's longest swim-up pool.\nBeachside food trucks like Chicken Dippers and the Taco Truck.\nTennis and pickleball courts with nearby attractions like Pelican Bar and YS Falls.\nFitness center and Red Lane® Spa.\nFour beachfront freshwater pools, including Jamaica's largest zero-entry pool.\nNine unique dining experiences and seven bars.\nPaddleboarding, kayaking, snorkeling, Hobie Cats, windsurfing, and more.\n",
    IdealFor: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],
    IdealFor2: [
      {
        name: "Watersports Enthusiasts",
        background: "#17B9A4",
        textColor: "#000000",
      },
    ],
    IdealFor3: [
      {
        name: "Pickleball Lovers",
        background: "#24368C",
        textColor: "#FFFFFF",
      },
    ],

    // "Ideal For": "Secluded privacy, natural attractions, beach lovers, water sports enthusiasts.",

    Tags: "adults-only, adults-only,-18+, over-the-water-accommodations, more-tranquil, glass-bottom-boat, french, italian, more-social, more-expansive, scuba-on-property, caribbean, long-stretch, tennis, pickle-ball, motorized-watersports, over-the-water-villa, rondoval-suite, swim-up-suite, jerk-shack, sushi, distance-to-airport-more-than-an-hour  \n",
    Images:
      "images/Sandals Royal Plantation/1 - Carousel_ResortHero_Slider/croissantsandcaviar_sandalsroyalplantation-15.jpg",
    Beaches: "images/Sandals Royal Plantation/4 - Beaches/SRP_Beach_Detail.jpg",
    Pool: "images/Sandals Royal Plantation/3 - Pools/croissantsandcaviar_sandalsroyalplantation-4.jpg",
    Map: "",
    Dining:
      "images/Sandals Royal Plantation/5 - Dining & Bars/SRP_PAPILLON_TERRACE_.jpg",
    watersports: "",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-South-Coast/Overview/Sandals-South-Coast_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Overview/Sandals-South-Coast_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Overview/Sandals-South-Coast_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Overview/Sandals-South-Coast_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-South-Coast/Beaches/Sandals-South-Coast_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Beaches/Sandals-South-Coast_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Beaches/Sandals-South-Coast_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Beaches/Sandals-South-Coast_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-South-Coast/Pools/Sandals-South-Coast_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Pools/Sandals-South-Coast_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Pools/Sandals-South-Coast_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Pools/Sandals-South-Coast_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-South-Coast/Dining/Sandals-South-Coast_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Dining/Sandals-South-Coast_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Dining/Sandals-South-Coast_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-South-Coast/Dining/Sandals-South-Coast_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_South_Coast_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Dunns River",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=AAD025A0D11F36D173BA75EA049157217F6BB4E1AF375E6B6A319F8DC0DF8670&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=CL&RST_CODE=SDR&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Jamaica",
    City: "Ocho Rios",
    ResortDescription:
      "Sandals' newest property in Jamaica, located in the heart of Ocho Rios.\nMinutes away from Jamaica's iconic Dunn's River Falls.\nOffers full exchange privileges at all nearby Sandals Resorts.\nA quick 10-minute drive from Ian Fleming International Airport.\nAccess to Jamaica's most popular golf course, Upton Estate Golf and Country Club–green fees and transfers included.\nFeatures Caribbean culinary concepts like Blum Coffee Shop and Dunn's Rum Club.\nTwelve unique dining experiences and nine bars.\nFitness center and Red Lane® Spa.\nFive freshwater pools and two whirlpools",
    IdealFor: [
      {
        name: "Adventure Seekers",
        background: "#FF5D18",
        textColor: "#000000",
      },
    ],
    IdealFor2: [
      { name: "Foodies", background: "#D0F759", textColor: "#000000" },
    ],
    IdealFor3: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],

    // "Ideal For": "Natural attractions, adventure seekers, luxury travelers, food enthusiasts.",
    Tags: "adults-only, adults-only,-18+, skypool-and-swim-up-suites, cove-beach, more-social, motorized-watersports, glass-bottom-boat, tennis, caribbean, sushi, french, italian, more-expansive, scuba-on-property, rondoval-suite, swim-up-suite, golf, rum-club, jerk-shack, distance-to-airport-more-than-an-hour  \n",
    Images:
      "images/Sandals Dunn's River/1 - Carousel_ResortHero_Slider/Sandals_Dunns_River_Beach.jpg",
    Beaches:
      "images/Sandals Dunn's River/4 - Beaches/Sandals_Dunns_River_Beach.jpg",
    Pool: "images/Sandals Dunn's River/3 - Pools/Sandals_Dunns_River_Pool_Whirlpool.jpg",
    Map: "",
    Dining:
      "images/Sandals Dunn's River/5 - Dining & Bars/Sandals_Dunns_River_SKYBAR.jpg",
    watersports: "",
    IslandTours: "images/Sandals Dunn's River/7 - Tours/Dunns_River_Falls.jpg",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Dunns-River/Overview/Sandals-Dunns-River_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Overview/Sandals-Dunns-River_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Overview/Sandals-Dunns-River_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Overview/Sandals-Dunns-River_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Dunns-River/Beaches/Sandals-Dunns-River_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Beaches/Sandals-Dunns-River_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Beaches/Sandals-Dunns-River_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Beaches/Sandals-Dunns-River_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Dunns-River/Pools/Sandals-Dunns-River_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Pools/Sandals-Dunns-River_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Pools/Sandals-Dunns-River_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Pools/Sandals-Dunns-River_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Dunns-River/Dining/Sandals-Dunns-River_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Dining/Sandals-Dunns-River_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Dining/Sandals-Dunns-River_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Dunns-River/Dining/Sandals-Dunns-River_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Dunns_River_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Royal Bahamian",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=5FCE8B4BE7F1F69E14E6ABCAC1904ABE4D26316922EDE42A9D6025FEA764C6EB&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=LO&RST_CODE=SRB&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Bahamas",
    City: "Nassau",
    ResortDescription:
      "A beachfront resort with a private offshore island, Sandals Barefoot Cay, offering two more beaches ideal for relaxing and snorkeling.\nJust a quick 15-minute drive from Lynden Pindling International Airport.\nEasy access to duty-free shopping, tours, and casinos in downtown Nassau.\nAll-new Coconut Grove lounge area with food trucks, a bar, and nightly entertainment.\nOffers Island Inclusive, an off-site dining program to experience local restaurants.\nTwelve unique dining experiences, including two food trucks, and eight bars.\nFitness center and three Red Lane® Spa locations.\nSeven freshwater pools and three whirlpools.",

    IdealFor: [
      {
        name: "Natural Attractions",
        background: "#C7B600",
        textColor: "#000000",
      },
    ],
    IdealFor2: [
      { name: "Foodies", background: "#D0F759", textColor: "#000000" },
    ],
    IdealFor3: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],

    // "Ideal For": "Local immersion, food enthusiasts, lively entertainment, beach lovers.",

    Tags: "adults-only, adults-only,-18+, cove-beach, more-expansive, motorised-watersport, pickle-ball, caribbean, steakhouse, french, italian, more-social, offshore-island, scuba-on-property, tennis, british-pub, sushi, teppanyaki, distance-to-airport-less-than-45-minutes \n",
    Images:
      "images/Sandals Royal Bahamian/1 - Carousel_ResortHero_Slider/SRB - Aerial Beach 1.jpg",
    Beaches:
      "images/Sandals Royal Bahamian/4 - Beaches/SRB - Aerial Barefoot Cay 2.jpg",
    Pool: "images/Sandals Royal Bahamian/3 - Pools/SRB - Aerial East Bay Pool 2.jpg",
    Map: "",
    Dining:
      "images/Sandals Royal Bahamian/5 - Dining & Bars/la_Plume_10077_RET.jpg",
    watersports: "images/Sandals Royal Bahamian/6 - Watersports/SBS_ 1399.jpg",
    IslandTours: "images/Sandals Royal Bahamian/7 - Tours/Pig_Island_0298.jpg",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Overview/Sandals-Royal-Bahamian_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Overview/Sandals-Royal-Bahamian_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Overview/Sandals-Royal-Bahamian_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Overview/Sandals-Royal-Bahamian_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Beaches/Sandals-Royal-Bahamian_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Beaches/Sandals-Royal-Bahamian_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Beaches/Sandals-Royal-Bahamian_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Beaches/Sandals-Royal-Bahamian_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Pools/Sandals-Royal-Bahamian_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Pools/Sandals-Royal-Bahamian_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Pools/Sandals-Royal-Bahamian_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Pools/Sandals-Royal-Bahamian_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Dining/Sandals-Royal-Bahamian_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Dining/Sandals-Royal-Bahamian_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Dining/Sandals-Royal-Bahamian_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Bahamian/Dining/Sandals-Royal-Bahamian_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Royal_Bahamian_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Grenada",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=364D75278C2DBA9057A2143504F4C7165E6C4A63F5E36FF220207106C746867B&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=PR&RST_CODE=SLS&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Grenada",
    City: "St. George’s",
    ResortDescription:
      "Located on Pink Gin Beach in the exotic 'Spice Isle.'\nOnly a 5-minute drive from Maurice Bishop International Airport.\nA volcanic island featuring exotic black-sand beaches.\nClose proximity to Grenada’s tours, nature attractions, and vibrant nightlife.\nFeatures world-class scuba diving and an underwater sculpture park.\nLocal ingredients like nutmeg and chocolate are infused throughout the resort’s menus and spa treatments.\nTen unique dining experiences and six bars.\nFitness center and Red Lane® Spa.\nFive freshwater pools, one scuba dive pool, and two whirlpools.\nEasy access to deep-sea fishing adventures.",
    IdealFor: [{ name: "Divers", background: "#52E8DF", textColor: "#000000" }],
    IdealFor2: [
      {
        name: "Adventure Seekers",
        background: "#FF5D18",
        textColor: "#000000",
      },
    ],
    IdealFor3: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],

    // "Ideal For": "Natural attractions, diving enthusiasts, adventure seekers, nature lovers.",

    Tags: "adults-only, adults-only,-18+, skypool-and-swim-up-suites, rondoval-villas, cove-beach, more-tranquil, more-intimate, glass-bottom-boat, french, italian, scuba-on-property, swim-up-suite, tennis, british-pub, sushi, teppanyaki, steakhouse, distance-to-airport-less-than-45-minutes \n",
    Images:
      "images/Sandals Grenada/1 - Carousel_ResortHero_Slider/GRENEDA_SANDALS_DISKIN-161.jpg",
    Beaches:
      "images/Sandals Grenada/4 - Beaches/Sandals-Grenada-02-2022-Beaches 2-5156.jpg",
    Pool: "images/Sandals Grenada/3 - Pools/GRENEDA_SANDALS_DISKIN-161.1.jpg",
    Map: "",
    Dining:
      "images/Sandals Grenada/5 - Dining & Bars/GRENEDA_SANDALS_DISKIN-146.jpg",
    watersports:
      "images/Sandals Grenada/6 - Watersports/Sandals-Grenada-02-2022-Beaches-4212.jpg",
    IslandTours:
      "images/Sandals Grenada/7 - Tours/Sandals-Grenada-02-2022-Grand-Anse-Beach-4581.jpg",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Grenada/Overview/Sandals-Grenada_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Overview/Sandals-Grenada_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Overview/Sandals-Grenada_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Overview/Sandals-Grenada_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Grenada/Beaches/Sandals-Grenada_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Beaches/Sandals-Grenada_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Beaches/Sandals-Grenada_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Beaches/Sandals-Grenada_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Grenada/Pools/Sandals-Grenada_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Pools/Sandals-Grenada_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Pools/Sandals-Grenada_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Pools/Sandals-Grenada_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Grenada/Dining/Sandals-Grenada_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Dining/Sandals-Grenada_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Dining/Sandals-Grenada_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grenada/Dining/Sandals-Grenada_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Grenada_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Barbados",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=AE9854BEE9E9B3AF35ECD74688FA34A5A0FD84B229A002501CFEEC4F5BB5B9F8&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=DL&RST_CODE=SBD&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Barbados",
    City: "St. Lawrence",
    ResortDescription:
      'An enchanting paradise situated on the pristine Dover Beach.\nA quick 15-minute drive from Grantley Adams International Airport.\nSet along the largest and longest river pool in Barbados.\nWalking distance to shopping and nightlife in St. Lawrence Gap.\n"Stay at One, Play at Two" full exchange privileges with Sandals Royal Barbados.\nGlobal Beer Bar and four-lane bowling at Lover\'s Lanes.\nEleven unique dining experiences and eight bars.\nFitness center and Red Lane® Spa.\nThree freshwater pools and two whirlpools.\nWater sports include Hobie Cats, paddleboarding, kayaking, and glass-bottom boat tours.\n',

    IdealFor: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],
    IdealFor2: [
      { name: "Divers", background: "#52E8DF", textColor: "#000000" },
    ],
    IdealFor3: [
      {
        name: "WaterSports Enthusiasts",
        background: "#17B9A4",
        textColor: "#000000",
      },
    ],

    // "Ideal For": "Beach lovers, activity seekers, pool enthusiasts, foodies.",

    Tags: "long-stretch, skypool-and-swim-up-suites, more-expansive, bowling, more-social, bowling, caribbean, indian, french, italian, adults-only, adults-only,-18+,-18+, more-expansive, swim-up-suite, tennis, glass-bottom-boat, bowling, teppanyaki, sushi, steakhouse, distance-to-airport-less-than-45-minutes \n",
    Images:
      "images/Sandals Barbados/1 - Carousel_ResortHero_Slider/IMG_9234.jpg",
    Beaches:
      "images/Sandals Barbados/5 - Dining & Bars/SBR_TIKI_BEACH_BAR_0290.jpg",
    Pool: "",
    Map: "",
    Dining: "",
    watersports: "",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Barbados/Overview/Sandals-Barbados_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Barbados/Overview/Sandals-Barbados_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Barbados/Overview/Sandals-Barbados_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Barbados/Overview/Sandals-Barbados_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Barbados/Beaches/Sandals-Barbados_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Barbados/Beaches/Sandals-Barbados_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Barbados/Beaches/Sandals-Barbados_Beaches_3.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Barbados/Pools/Sandals-Barbados_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Barbados/Pools/Sandals-Barbados_Pools_2.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Barbados/Dining/Sandals-Barbados_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Barbados/Dining/Sandals-Barbados_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Barbados/Dining/Sandals-Barbados_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Barbados/Dining/Sandals-Barbados_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Barbados_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Royal Barbados",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=7444331F2DDAC612F77C0732C599033E2814CFBD0589464D12ED91168427B77A&NOOFADULTS=2&NOOFCHILDREN=0&CAT_CODE=JP&RST_CODE=SBR&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Barbados",
    City: "St. Lawrence",
    ResortDescription:
      " Award-winning accommodations like SkyPool Suites, Swim-Up Suites, and Millionaire Suites.\nEvery suite includes a private Tranquility Soaking Tub™ for two.\n\"Stay at One, Play at Two\" full exchange privileges with Sandals Barbados.\nHome to the largest infinity pool in the Eastern Caribbean.\nSandals' first rooftop pool, restaurant, and bar overlooking the ocean.\nGlobal Beer Bar and four-lane bowling alley at Lover's Lanes.\nTen unique dining experiences and six bars.\nFitness center and a 15,000 sq ft Red Lane® Spa.\nEight freshwater pools, one scuba dive pool, and four whirlpools.\nPADI-certified scuba diving and equipment, with 27 dive sites.\n",
    IdealFor: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],
    IdealFor2: [
      { name: "Divers", background: "#52E8DF", textColor: "#000000" },
    ],
    IdealFor3: [
      { name: "Pool Enthusiasts", background: "#CDFFFF", textColor: "#000000" },
    ],

    // "Ideal For": "Pool enthusiasts, foodies, diving lovers.",

    Tags: "adults-only, adults-only,-18+, skypool-and-swim-up-suites, rondoval-villas, long-stretch, more-social, bowling, caribbean, sushi, teppanyaki, indian, french, italian, more-expansive, swim-up-suite, skypool-suite, rondovol-villa, glass-bottom-boat, tennis, bowling, steakhouse, jerk shack, distance-to-airport-less-than-45-minutes \n",
    Images:
      "images/Sandals Royal Barbados/1 - Carousel_ResortHero_Slider/SBR_SAINT_LAWRENCE_HOUSE_EXT_MAGIC_072.jpg",
    Beaches:
      "images/Sandals Royal Barbados/4 - Beaches/SBR_MAIN_POOL_DRONE_0113.jpg",
    Pool: "images/Sandals Royal Barbados/3 - Pools/SBR_MAIN_POOL_DRONE_0053.jpg",
    Map: "",
    Dining:
      "images/Sandals Royal Barbados/5 - Dining & Bars/SBR_THE_GREENHOUSE_INT_V3_062.jpg",
    watersports: "",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Overview/Sandals-Royal-Barbados_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Overview/Sandals-Royal-Barbados_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Overview/Sandals-Royal-Barbados_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Overview/Sandals-Royal-Barbados_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Beaches/Sandals-Royal-Barbados_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Beaches/Sandals-Royal-Barbados_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Beaches/Sandals-Royal-Barbados_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Beaches/Sandals-Royal-Barbados_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Pools/Sandals-Royal-Barbados_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Pools/Sandals-Royal-Barbados_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Pools/Sandals-Royal-Barbados_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Pools/Sandals-Royal-Barbados_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Dining/Sandals-Royal-Barbados_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Dining/Sandals-Royal-Barbados_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Dining/Sandals-Royal-Barbados_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Barbados/Dining/Sandals-Royal-Barbados_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Royal_Barbados_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Halcyon Beach",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=87E93DE1351DA4D5F971F68A4B9A6017AAE9843B843B772F32925672CF33F4D0&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=PL&RST_CODE=SHC&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Saint Lucia",
    City: "Castries",
    ResortDescription:
      "A tropical paradise along pristine white-sand beaches.\nFrench-Caribbean style buildings no taller than two stories.\nThe most laid-back Sandals resort in Saint Lucia.\n\"Stay at One, Play at Three\" full exchange privileges with other Sandals resorts on the island.\nHome to Saint Lucia's longest swim-up pool.\nComplimentary green fees and access to Cap Estate Golf & Country Club.\nSeven unique dining experiences, including one truck, and seven bars.\nStunning over-the-water restaurant, Kelly's Dockside.\nFitness center and Red Lane® Spa.\nTwo freshwater pools, one saltwater pool, and three whirlpools.",

    IdealFor: [
      { name: "Tranquility", background: "#FFBEA9", textColor: "#000000" },
    ],
    IdealFor2: [
      { name: "Pool Enthusiasts", background: "#CDFFFF", textColor: "#000000" },
    ],
    IdealFor3: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],

    // "Ideal For": "Tranquility, pool lovers, golfers' paradise.",

    Tags: "adults-only, adults-only,-18+, skypool-and-swim-up-suites, more-tranquil, long-stretch, italian, more-intimate, golf, swim-up-suite, rondovol-villa, teppanyaki, sushi, distance-to-airport-more-than-an-hour \n",
    Images:
      "images/Sandals Halcyon Beach/1 - Carousel_ResortHero_Slider/SHC Drone.jpg",
    Beaches: "images/Sandals Halcyon Beach/4 - Beaches/SHC Drone.jpg",
    Pool: "",
    Map: "",
    Dining: "",
    watersports: "images/Sandals Halcyon Beach/6 - Watersports/DJI_0164.jpg",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Overview/Sandals-Halcyon-Beach_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Overview/Sandals-Halcyon-Beach_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Overview/Sandals-Halcyon-Beach_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Overview/Sandals-Halcyon-Beach_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Beaches/Sandals-Halcyon-Beach_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Beaches/Sandals-Halcyon-Beach_Beaches_2.jpg",
        ],
      },
      {
        name: "Pools",
        images: [],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Dining/Sandals-Halcyon-Beach_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Dining/Sandals-Halcyon-Beach_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Dining/Sandals-Halcyon-Beach_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Halcyon-Beach/Dining/Sandals-Halcyon-Beach_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Halcyon_Beach_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Regency La Toc",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=4CD1860EC26D75C4F74651624ACC2CDBCD0E8FB9B27DDD0344FFC3E255DEDDB9&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=HL&RST_CODE=SLU&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Saint Lucia",
    City: "Gros-Islet",
    ResortDescription:
      'Known as the "Emerald of the Caribbean" with sparkling emerald waters.\nSet on a 220-acre estate known for its lush, tropical scenery.\nHalf-mile, crescent-shaped beach off a sloping hillside.\n"Stay at One, Play at Three" full exchange privileges with other Sandals resorts on the island.\nSunset Bluff Suites offer 180-degree views, private infinity pools, and whirlpools.\nComplimentary green fees and access to Cap Estate Golf & Country Club.\nPADI-certified scuba diving and equipment, with world-famous reefs and wrecks.\nNine unique dining experiences and eight bars.\nThree freshwater pools and four whirlpools.',

    IdealFor: [
      { name: "Golf Enthusiasts", background: "#0A5447", textColor: "#FFFFFF" },
    ],
    IdealFor2: [
      { name: "Divers", background: "#52E8DF", textColor: "#000000" },
    ],
    IdealFor3: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],

    // "Ideal For": " Golf enthusiasts, pool lovers, beach lovers, diving aficionados.",

    Tags: "adults-only, adults-only,-18+, cove-beach, more-social, golf, french, italian, teppanyaki, british-pub, more-expansive, swim-up-suite, rondoval-villa, sushi,",
    Images:
      "images/Sandals Regency La Toc/1 - Carousel_ResortHero_Slider/SLU Drone 3.jpg",
    Beaches: "images/Sandals Regency La Toc/4 - Beaches/SLU Drone 4-2.jpg",
    Pool: "images/Sandals Regency La Toc/3 - Pools/SLU Drone 1.jpg",
    Map: "",
    Dining: "",
    watersports: "",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Overview/Sandals-Regency-La-Toc_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Overview/Sandals-Regency-La-Toc_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Overview/Sandals-Regency-La-Toc_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Overview/Sandals-Regency-La-Toc_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Beaches/Sandals-Regency-La-Toc_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Beaches/Sandals-Regency-La-Toc_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Beaches/Sandals-Regency-La-Toc_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Beaches/Sandals-Regency-La-Toc_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Pools/Sandals-Regency-La-Toc_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Pools/Sandals-Regency-La-Toc_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Pools/Sandals-Regency-La-Toc_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Pools/Sandals-Regency-La-Toc_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Dining/Sandals-Regency-La-Toc_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Dining/Sandals-Regency-La-Toc_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Dining/Sandals-Regency-La-Toc_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Regency-La-Toc/Dining/Sandals-Regency-La-Toc_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Regency_La_Toc_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Grande St Lucian",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=874827DB4071A7346F5DFCE4EE51121E6CF752B6D60CBA4B8C03E6FADAAA73AD&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=DL&RST_CODE=SGL&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Saint Lucia",
    City: "Gros-Islet",
    ResortDescription:
      'Located on the Rodney Bay peninsula, known for the calmest waters in Saint Lucia.\nMile-long beach with views of volcanic mountains.\nLagoon swim-up rooms with direct pool access from the patio.\n"Stay at One, Play at Three" full exchange privileges with other Sandals resorts on the island.\nComplimentary green fees and access to Cap Estate Golf & Country Club.\nFeatures nine Over-the-Water Bungalows and an Over-the-Water Wedding Chapel.\nTwelve unique dining experiences and seven bars.\nPADI-certified scuba diving and equipment, with world-famous reefs and wrecks.\nFive freshwater pools, one scuba dive pool, and three whirlpools.\nFitness center and Red Lane® Spa.',

    IdealFor: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],
    IdealFor2: [
      { name: "Golf Enthusiasts", background: "#0A5447", textColor: "#FFFFFF" },
    ],
    IdealFor3: [
      { name: "Divers", background: "#52E8DF", textColor: "#000000" },
    ],

    // "Ideal For": "Beach lovers, golf enthusiasts, foodies, diving lovers. ",

    Tags: "adults-only, adults-only,-18+, skypool-and-swim-up-suites, rondoval-villas, more-social, over-the-water-accommodations, more-expansive, scuba-on-property, motorized-watersports, indian, french, italian, long-stretch-of-beach, golf, over-the-water-villas, rondoval villa, swim-up-suite, tennis, british-pub, jerk-shack, sushi, teppanyaki, distance-to-airport",
    Images:
      "images/Sandals Grande St. Lucian/1 - Carousel_ResortHero_Slider/DJI_0091.jpg",
    Beaches:
      "images/Sandals Grande St. Lucian/4 - Beaches/SGL Lifestyle Drone.jpg",
    Pool: "images/Sandals Grande St. Lucian/3 - Pools/DJI_0874.jpg",
    Map: "",
    Dining: "",
    watersports: "",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Overview/Sandals-Grande-St-Lucian_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Overview/Sandals-Grande-St-Lucian_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Overview/Sandals-Grande-St-Lucian_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Overview/Sandals-Grande-St-Lucian_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Beaches/Sandals-Grande-St-Lucian_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Beaches/Sandals-Grande-St-Lucian_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Beaches/Sandals-Grande-St-Lucian_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Beaches/Sandals-Grande-St-Lucian_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Pools/Sandals-Grande-St-Lucian_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Pools/Sandals-Grande-St-Lucian_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Pools/Sandals-Grande-St-Lucian_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Pools/Sandals-Grande-St-Lucian_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Dining/Sandals-Grande-St-Lucian_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Dining/Sandals-Grande-St-Lucian_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Dining/Sandals-Grande-St-Lucian_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-St-Lucian/Dining/Sandals-Grande-St-Lucian_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Grande_St_Lucian_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Royal Curacao",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=43C73CB2C12953DF646D25A8AF9470BD7DE83D4A6103D864686B9852CE91223B&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=BLX&RST_CODE=SCR&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Curacao",
    City: "Santa Barbara",
    ResortDescription:
      "Set on 44 oceanfront acres within a protected 3,000-acre Santa Barbara Estate.\n​Located alongside the protected Underwater Marine Park with over 70 dive sites.\n​Enjoy Willemstad and its cultural attractions, and natural and historic sites.\n​Features Sandals' first two-level Dos Awa Infinity Pool overlooking the ocean.\n​Access to an 18-hole Pete Dye Golf Course at a discounted rate.\n​Offers Island Inclusive, an off-site dining program to experience local restaurants.\n​Three freshwater pools, one natural water pool, and two whirlpools.\n​Eleven unique dining experiences, including food trucks, and thirteen bars.\n​Fitness center and Red Lane® Spa.",
    IdealFor: [{ name: "Divers", background: "#52E8DF", textColor: "#000000" }],
    IdealFor2: [
      { name: "Golf Enthusiasts", background: "#0A5447", textColor: "#FFFFFF" },
    ],
    IdealFor3: [
      { name: "Pool Enthusiasts", background: "#CDFFFF", textColor: "#000000" },
    ],

    // "Ideal For": "Food and drink enthusiasts, diving lovers, golf lovers, pool enthusiasts, adventure seekers. ",

    Tags: "adults-only, adults-only,-18+, cove-beach, golf, caribbean, french, italian, more-expansive, more-social, scuba-on-property, swim-up-suite, rondoval-villa, steakhouse, sushi,",
    Images:
      "images/Sandals Royal Curacao/1 - Carousel_ResortHero_Slider/croissantsandcaviar_sandalsroyalcuracao_resort-8.jpg",
    Beaches: "images/Sandals Royal Curacao/4 - Beaches/untitled-194(B).jpg",
    Pool: "images/Sandals Royal Curacao/3 - Pools/untitled-185.jpg",
    Map: "",
    Dining:
      "images/Sandals Royal Curacao/5 - Dining & Bars/Food Truck Toteki SCR_FOOD_TRUCKS_V2_0309.jpg",
    watersports:
      "images/Sandals Royal Curacao/6 - Watersports/untitled-124.jpg",
    IslandTours: "images/Sandals Royal Curacao/7 - Tours/untitled-30.jpg",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Overview/Sandals-Royal-Curacao_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Overview/Sandals-Royal-Curacao_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Overview/Sandals-Royal-Curacao_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Overview/Sandals-Royal-Curacao_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Beaches/Sandals-Royal-Curacao_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Beaches/Sandals-Royal-Curacao_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Beaches/Sandals-Royal-Curacao_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Beaches/Sandals-Royal-Curacao_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Pools/Sandals-Royal-Curacao_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Pools/Sandals-Royal-Curacao_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Pools/Sandals-Royal-Curacao_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Pools/Sandals-Royal-Curacao_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Dining/Sandals-Royal-Curacao_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Dining/Sandals-Royal-Curacao_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Dining/Sandals-Royal-Curacao_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Royal-Curacao/Dining/Sandals-Royal-Curacao_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Royal_Curacao_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Grande Antigua",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=59F3902B87F730339F8CD18B979D431F6767FF372CE1468B6C797E7B51468D26&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=DL&RST_CODE=SAT&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Antigua",
    City: "St. John's",
    ResortDescription:
      "Consistently voted the \"World's Most Romantic Resort.\"\n​Located on Dickenson Bay, Antigua's famous white-sand beach.\n​A quick 15-minute drive from V.C. Bird International Airport.\n​Close to tours, shopping, and Antigua's capital, St. John's.\n​Home to the original Rondoval Suites.\n​Features the largest pool in the Eastern Caribbean.\n​Eleven unique dining experiences and seven bars.\n​Six freshwater pools and six whirlpools.\n​Fitness center and Red Lane® Spa.",
    // "IdealFor": "Nature lovers",
    // "IdealFor2": "Pool enthusiasts,",
    // "IdealFor3": "Beach lovers",
    IdealFor: [
      {
        name: "Natural Attractions",
        background: "#C7B600",
        textColor: "#000000",
      },
    ],
    IdealFor2: [
      { name: "Pool Enthusiasts", background: "#CDFFFF", textColor: "#000000" },
    ],
    IdealFor3: [
      {
        name: "Watersports Enthusiasts",
        background: "#17B9A4",
        textColor: "#000000",
      },
    ],

    // "Ideal For": "Nature lovers, pool enthusiasts, water sports lovers, beach lovers. ",

    Tags: "long-stretch, rondoval-villas, more-intimate, adults-only, adults-only,-18+,-18+, more-intimate, scuba-on-property, tennis, rondoval-villa, british-pub",
    Images:
      "images/Sandals Grande Antigua/1 - Carousel_ResortHero_Slider/SANDALS_07_2019_BEACH_PADDLEBOARD_COUPLE_6830-370-123.jpg",
    Beaches: "images/Sandals Grande Antigua/4 - Beaches",
    Pool: "images/Sandals Grande Antigua/3 - Pools/7H6A7577.jpg",
    Map: "",
    Dining:
      "images/Sandals Grande Antigua/5 - Dining & Bars/SANDALS_07_2019_BEACH_DINNER_489-434-140.jpg",
    watersports: "images/Sandals Grande Antigua/6 - Watersports/7H6A6522.jpg",
    IslandTours: "images/Sandals Grande Antigua/7 - Tours/3A6A9655.jpg",

    Tabs: [
      {
        name: "Overview",
        images: [
          // Img2, Img2,
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Overview/Sandals-Grande-Antigua_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Overview/Sandals-Grande-Antigua_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Overview/Sandals-Grande-Antigua_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Overview/Sandals-Grande-Antigua_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Beaches/Sandals-Grande-Antigua_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Beaches/Sandals-Grande-Antigua_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Beaches/Sandals-Grande-Antigua_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Beaches/Sandals-Grande-Antigua_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Pools/Sandals-Grande-Antigua_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Pools/Sandals-Grande-Antigua_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Pools/Sandals-Grande-Antigua_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Pools/Sandals-Grande-Antigua_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Dining/Sandals-Grande-Antigua_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Grande-Antigua/Dining/Sandals-Grande-Antigua_Dining-Bars_2.jpg",
          // "assets/images/Sandals_Images/Sandals-Grande-Antigua/Dining/Sandals-Grande-Antigua_Dining-Bars_3.jpg",
          // "assets/images/Sandals_Images/Sandals-Grande-Antigua/Dining/Sandals-Grande-Antigua_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Grande_Antigua_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Sandals Saint Vincent",
    ResortLink:
      "https://obe.sandals.com/?subSessionId=4DD07785FAA79BCEF0758D2C05193664280B0DBBF6384748CD11705F9DA87B33&NOOFADULTS=2&NOOFCHILDREN=0&referral=157130&CAT_CODE=CBM&RST_CODE=SSV&STARTDATE=&DEPARTUREDATE=&COOKIENAME=quickquote&brand=sandals&EVENT=ehOBE.dspHome&DEPARTURE_FROM=&ARRIVAL_GATEWAY=&SEATTYPE=economy&SV13=",
    Island: "Saint Vincent",
    City: "Buccament",
    ResortDescription:
      "An exotic, undiscovered destination nestled between two seas at the edge of the Lesser Antilles.\nSuites tucked away on a private cove.\nHome to a collection of 32 islands filled with natural wonders, including waterfalls, rainforests, volcanic peaks, and sandy shores.\nFeatures Sandals' first two-story overwater villas.\nFood and beverage concepts inspired by the local cuisine.\nInnovative suites featuring media rooms and fitness rooms with equipment.\nOver 45 black-sand and coral garden scuba dive sites to explore.\nEleven unique dining experiences and nine bars.\nFitness center and Red Lane® Spa.\nFour freshwater pools, one scuba dive pool, and two whirlpools.",
    IdealFor: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],
    IdealFor2: [
      { name: "Foodies", background: "#D0F759", textColor: "#000000" },
    ],
    IdealFor3: [
      {
        name: "Divers",
        background: "#52E8DF",
        textColor: "#000000",
      },
    ],

    // "Ideal For": "Nature lovers, adventure seekers, diving enthusiasts, foodies.",

    Tags: "adults-only, adults-only,-18+, more-social, pickle-ball, italian, more-expansive, cove-beach, scuba-on-property, tennis, overwater-villas, swim-up-suites, steakhouse, sushi, jerk-shack, distance-to-airport-less-than-45-minutes\n",
    Images:
      "images/Sandals Saint Vincent/1 - Carousel_ResortHero_Slider/Sandals-Saint-Vincent-aerial-beach.jpg",
    Beaches:
      "images/Sandals Saint Vincent/4 - Beaches/Sandals-Saint-Vincent-beach.jpg",
    Pool: "images/Sandals Saint Vincent/3 - Pools/Sandals-Saint-Vincent-Heart-Shape-Pool.jpg",
    Map: "",
    Dining:
      "images/Sandals Saint Vincent/5 - Dining & Bars/BUTCHES BOOTH_030.jpg",
    watersports:
      "images/Sandals Saint Vincent/6 - Watersports/SSV - Saint Vincent Destination 76.jpg",
    IslandTours:
      "images/Sandals Saint Vincent/7 - Tours/SSV - Saint Vincent Destination 42.jpg",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Overview/Sandals-Saint-Vincent_Overview_1.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Overview/Sandals-Saint-Vincent_Overview_2.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Overview/Sandals-Saint-Vincent_Overview_3.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Overview/Sandals-Saint-Vincent_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Beaches/Sandals-Saint-Vincent_Beaches_1.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Beaches/Sandals-Saint-Vincent_Beaches_2.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Beaches/Sandals-Saint-Vincent_Beaches_3.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Beaches/Sandals-Saint-Vincent_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Pools/Sandals-Saint-Vincent_Pools_1.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Pools/Sandals-Saint-Vincent_Pools_2.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Pools/Sandals-Saint-Vincent_Pools_3.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Pools/Sandals-Saint-Vincent_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Dining/Sandals-Saint-Vincent_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Dining/Sandals-Saint-Vincent_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Dining/Sandals-Saint-Vincent_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Sandals-Saint-Vincent/Dining/Sandals-Saint-Vincent_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Sandals_Saint_Vincent_Resort-Map.jpg",
        ],
      },
    ],
  },
  // {
  //   ResortTitle: "Beaches Ocho Rios",
  //   ResortLink:
  //     "https://obe.beaches.com/?subSessionId=995562DE7A8A6ABF7DF59594C92055DDB2B2D7F7C52D2D7411F99B3444F2853C&CAT_CODE=DK&RST_CODE=BBO&COOKIENAME=quickquote&noOfChildren=0&noOfAdults=2&ireferrer=BV13&BYPASSFORM=&EVENT=ehOBE.dspHome&childrenAges=&DEPARTURE_FROM=&noOfInfant=0&infantsBirthdays=&brand=beaches&ARRIVAL_GATEWAY=&SEATTYPE=economy",
  //   Island: "Jamaica",
  //   City: "Ocho Rios",
  //   ResortDescription:
  //     "Set on 22 acres of tropical gardens and two private white-sand cove beaches. \nAccess to Jamaica’s most popular golf course, Upton Estate Golf and Country Club.\nPirates Island Waterpark features waterslides, kid-friendly pools, and a lazy river perfect for all ages.\nPADI-certified scuba diving and equipment.\nKids Camp & Nursery with certified nannies (INA and IBCCES certified).\nSesame Street® themed activities with daily character appearances.\nThe Caribbean’s first certified Autism Center.\nSeven unique dining experiences and seven bars.\nFitness center and Red Lane® Spa.\nLocated next to the world-famous Dunn’s River Falls and Martha Brae bamboo river rafting.\n",
  //   IdealFor: [
  //     { name: "Family Fun", background: "#FF31A0", textColor: "#000000" },
  //   ],
  //   IdealFor2: [
  //     {
  //       name: "Watersports Enthusiasts",
  //       background: "#17B9A4",
  //       textColor: "#000000",
  //     },
  //   ],
  //   IdealFor3: [
  //     { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
  //   ],

  //   // "Ideal For": "Family fun, water sports, golfers' paradise.",

  //   Tags: "families-with-kids,-under-18, glass-bottom-boat, more-tranquil, scuba-on-property, tennis, french, golf, cove-beach, italian, distance-to-airport-more-than-an-hour \n",
  //   Images:
  //     "images/Beaches Ocho Rios/1 - Carousel_ResortHero_Slider/BBO_Beach.jpg",
  //   Beaches: "images/Beaches Ocho Rios/4 - Beaches/BBO_Beach_2_Drone_.jpg",
  //   Pool: "images/Beaches Ocho Rios/3 - Pools/BBO_Pool_Bar.jpg",
  //   Map: "",
  //   Dining: "images/Beaches Ocho Rios/5 - Dining & Bars/OPA_2301.jpg",
  //   watersports:
  //     "images/Beaches Ocho Rios/6 - Watersports/BBO_Drone_Waterpark_Detail.jpg",
  //   IslandTours: "",

  //   Tabs: [
  //     {
  //       name: "Overview",
  //       images: [
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Overview/Beaches-Ocho-Rios_Overview_1.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Overview/Beaches-Ocho-Rios_Overview_2.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Overview/Beaches-Ocho-Rios_Overview_3.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Overview/Beaches-Ocho-Rios_Overview_4.jpg",
  //       ],
  //     },
  //     {
  //       name: "Beaches",
  //       images: [
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Beaches/Beaches-Ocho-Rios_Beaches_1.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Beaches/Beaches-Ocho-Rios_Beaches_2.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Beaches/Beaches-Ocho-Rios_Beaches_3.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Beaches/Beaches-Ocho-Rios_Beaches_4.jpg",
  //       ],
  //     },
  //     {
  //       name: "Pools",
  //       images: [
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Pools/Beaches-Ocho-Rios_Pools_1.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Pools/Beaches-Ocho-Rios_Pools_2.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Pools/Beaches-Ocho-Rios_Pools_3.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Pools/Beaches-Ocho-Rios_Pools_4.jpg",
  //       ],
  //     },
  //     {
  //       name: "Dining",
  //       images: [
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Dining/Beaches-Ocho-Rios_Dining-Bars_1.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Dining/Beaches-Ocho-Rios_Dining-Bars_2.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Dining/Beaches-Ocho-Rios_Dining-Bars_3.jpg",
  //         "assets/images/Sandals_Images/Beaches-Ocho-Rios/Dining/Beaches-Ocho-Rios_Dining-Bars_4.jpg",
  //       ],
  //     },
  //     {
  //       name: "Map",
  //       images: [
  //         "assets/images/Sandals_Images/Resort-Maps/Beaches_Ocho_Rios_Resort-Map.jpg",
  //       ],
  //     },
  //   ],
  // },
  {
    ResortTitle: "Beaches Negril",
    ResortLink:
      "https://obe.beaches.com/?subSessionId=F534D19BC8C1DA71F82F36371F837D070AF3605EF42B358E6CCB6D709BB58889&CAT_CODE=BCD&RST_CODE=BNG&COOKIENAME=quickquote&noOfChildren=0&noOfAdults=2&ireferrer=BV13&BYPASSFORM=&EVENT=ehOBE.dspHome&childrenAges=&DEPARTURE_FROM=&noOfInfant=0&infantsBirthdays=&brand=beaches&ARRIVAL_GATEWAY=&SEATTYPE=economy",
    Island: "Jamaica",
    City: "Negril",
    ResortDescription:
      "Located on the best and widest stretch of Negril’s Seven Mile Beach. \nExpansive three- and four-bedroom butler suites for the whole family.\nHome to Pirates Island Waterpark with eight waterslides and several toddler pools.\nSesame Street® themed activities with daily character appearances.\nKids Camp & Nursery with certified nannies (INA and IBCCES certified).\nThe Caribbean’s first certified Autism Centers.\nState-of-the-art fitness center and Red Lane® Spa.\nPADI-certified scuba diving and equipment.\nThirteen unique dining experiences and five bars.\n",
    IdealFor: [
      { name: "Family Fun", background: "#FF31A0", textColor: "#000000" },
    ],
    IdealFor2: [
      {
        name: "Watersports Enthusiasts",
        background: "#17B9A4",
        textColor: "#000000",
      },
    ],
    IdealFor3: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],

    // "Ideal For": "Family fun, water sports, beach lovers.",

    Tags: "families-with-kids,-under-18, more-social, glass-bottom-boat, caribbean, motorized-watersports, teppanyaki, sushi, long-stretch, scuba-on-property, tennis, distance-to-airport-more-than-an-hour \n",
    Images:
      "images/Beaches Negril/1 - Carousel_ResortHero_Slider/DJI_0935 copy.jpg",
    Beaches: "images/Beaches Negril/4 - Beaches/Beaches Negril_Beach_4.jpg",
    Pool: "images/Beaches Negril/3 - Pools/DJI_0820.jpg",
    Map: "",
    Dining: "images/Beaches Negril/5 - Dining & Bars/Brava.jpg",
    watersports: "images/Beaches Negril/6 - Watersports/DJI_0796.jpg",
    IslandTours: "",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Beaches-Negril/Overview/Beaches-Negril_Overview_1.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Overview/Beaches-Negril_Overview_2.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Overview/Beaches-Negril_Overview_3.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Overview/Beaches-Negril_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Beaches-Negril/Beaches/Beaches-Negril_Beaches_1.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Beaches/Beaches-Negril_Beaches_2.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Beaches/Beaches-Negril_Beaches_3.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Beaches/Beaches-Negril_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Beaches-Negril/Pools/Beaches-Negril_Pools_1.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Pools/Beaches-Negril_Pools_2.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Pools/Beaches-Negril_Pools_3.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Pools/Beaches-Negril_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Beaches-Negril/Dining/Beaches-Negril_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Dining/Beaches-Negril_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Dining/Beaches-Negril_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Beaches-Negril/Dining/Beaches-Negril_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Beaches_Negril_Resort-Map.jpg",
        ],
      },
    ],
  },
  {
    ResortTitle: "Beaches Turks and Caicos",
    ResortLink:
      "https://obe.beaches.com/?subSessionId=F6F17A8AF19B03B70A7DF52D7C1E07562A1948F82F1C46CA8D738BBA00958A61&CAT_CODE=DD&RST_CODE=BTC&COOKIENAME=quickquote&noOfChildren=0&noOfAdults=2&ireferrer=BV13&BYPASSFORM=&EVENT=ehOBE.dspHome&childrenAges=&DEPARTURE_FROM=&noOfInfant=0&infantsBirthdays=&brand=beaches&ARRIVAL_GATEWAY=&SEATTYPE=economy",
    Island: "Turks and Caicos",
    City: "Providenciales",
    ResortDescription:
      "Situated on world-renowned Grace Bay Beach — 12 miles of powdery white sand and turquoise waters.\nJust a quick 15-minute drive from Providenciales International Airport.\nExpansive three- and four-bedroom butler suites for the whole family.\nHome to Pirates Island Waterpark, featuring a surf simulator, eight waterslides, and a kids-only swim-up bar.\nTwenty-two unique dining experiences and fourteen bars, from casual stops to elevated dinners.\nSesame Street® themed activities with daily character appearances.\nRanked one of the top ten best scuba diving destinations in the world.\nState-of-the-art fitness center and Red Lane® Spa.\nTen pools, four whirlpools, and one scuba diving pool.\nProfessional instruction for water sports, including Hobie Cats, paddleboarding, and kayaking.\n",
    IdealFor: [
      { name: "Family Fun", background: "#FF31A0", textColor: "#000000" },
    ],
    IdealFor2: [
      {
        name: "Watersports Enthusiasts",
        background: "#17B9A4",
        textColor: "#000000",
      },
    ],
    IdealFor3: [
      { name: "Beach Goers", background: "#FEE14C", textColor: "#000000" },
    ],

    // "Ideal For": "Family fun, water sports, beach lovers, diving enthusiasts.",

    Tags: "families-with-kids,-under-18, long-stretch, glass-bottom-boat, caribbean, indian, french, jerk-shack, italian, more-social, more-expansive, scuba-on-property, tennis, teppanyaki, sushi, british-pub, distance-to-airport: less-than-45-minutes\n",
    Images:
      "images/Beaches Turks and Caicos/1 - Carousel_ResortHero_Slider/DJI_20240120093216_0798_D-Edit.1.jpg",
    Beaches:
      "images/Beaches Turks and Caicos/4 - Beaches/DJI_20240120093216_0798_D-Edit.jpg",
    Pool: "images/Beaches Turks and Caicos/3 - Pools/BTC_ITALIAN_POOL20-6-963-Edit.jpg",
    Map: "",
    Dining:
      "images/Beaches Turks and Caicos/5 - Dining & Bars/DSC_7834-Edit1.jpg",
    watersports:
      "images/Beaches Turks and Caicos/6 - Watersports/221213_BeachesTC_S19_DRONE_Waterpark_07250_SB_RGB.jpg",
    IslandTours:
      "images/Beaches Turks and Caicos/7 - Tours/221213_BeachesTC_S26_DRONE_Horses_09216_SB_RGB.jpg",

    Tabs: [
      {
        name: "Overview",
        images: [
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Overview/Beaches-Turks-and-Caicos_Overview_1.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Overview/Beaches-Turks-and-Caicos_Overview_2.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Overview/Beaches-Turks-and-Caicos_Overview_3.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Overview/Beaches-Turks-and-Caicos_Overview_4.jpg",
        ],
      },
      {
        name: "Beaches",
        images: [
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Beaches/Beaches-Turks-and-Caicos_Beaches_1.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Beaches/Beaches-Turks-and-Caicos_Beaches_2.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Beaches/Beaches-Turks-and-Caicos_Beaches_3.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Beaches/Beaches-Turks-and-Caicos_Beaches_4.jpg",
        ],
      },
      {
        name: "Pools",
        images: [
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Pools/Beaches-Turks-and-Caicos_Pools_1.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Pools/Beaches-Turks-and-Caicos_Pools_2.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Pools/Beaches-Turks-and-Caicos_Pools_3.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Pools/Beaches-Turks-and-Caicos_Pools_4.jpg",
        ],
      },
      {
        name: "Dining",
        images: [
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Dining/Beaches-Turks-and-Caicos_Dining-Bars_1.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Dining/Beaches-Turks-and-Caicos_Dining-Bars_2.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Dining/Beaches-Turks-and-Caicos_Dining-Bars_3.jpg",
          "assets/images/Sandals_Images/Beaches-Turks-and-Caicos/Dining/Beaches-Turks-and-Caicos_Dining-Bars_4.jpg",
        ],
      },
      {
        name: "Map",
        images: [
          "assets/images/Sandals_Images/Resort-Maps/Beaches_Turks_and_Caicos_Resort-Map.jpg",
        ],
      },
    ],
  },
];
