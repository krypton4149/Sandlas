import footerLogo from "../../../public/assets/images/footer-logo.svg";
import sandalsFooterImageFirst from "../../../public/assets/images/sandalsFooterImageFirst.svg";
import sandalsFooterFacebookLogo from "../../../public/assets/images/sandalsFooterFacebookLogo126.svg";
import sandalsFooterInstagramLogo from "../../../public/assets/images/sandalsFooterInstagramLogo128.svg";
import sandalsFooterCrossLogo from "../../../public/assets/images/sandalsFooterCrossLogo127.svg";
import {
  contactUsClick,
  cookiesAndPrivacyPolicyClick,
  facebookClick,
  instagramClick,
  privacyChoiceClick,
  termsAndConditionClick,
  twitterClick,
} from "@/constants";

const Footer = () => {
  return (
    <div
      className="bg-quaternary pt-24 mt-16  bg-contain bg-no-repeat bg-bottom overflow-hidden h-[245px] sm:h-[500px]"
      style={{ backgroundImage: `url(${footerLogo})` }}
    >
      <div className="max-w-7xl mx-auto px-3 -mt-12">
        <div className="flex flex-col md:flex-row justify-between space-y-7 sm:space-y-12 md:space-y-0">
          <div className="flex flex-row md:flex-col  justify-between items-start">
            <div className="bg-quaternary">
              <img
                src={sandalsFooterImageFirst}
                alt="sandals-Footer-Image-First"
                className="w-[150px] h-auto sm:h-[40px]"
              />
            </div>
            <div className="flex gap-4">
              <div>
                <img
                  src={sandalsFooterFacebookLogo}
                  alt="sandals-Footer-Facebook-Logo"
                  className="max-w-full h-auto sm:h-[30px] cursor-pointer"
                  onClick={facebookClick}
                />
              </div>
              <div>
                <img
                  src={sandalsFooterCrossLogo}
                  alt="sandals-Footer-Cross-Logo"
                  className="max-w-full h-auto sm:h-[30px] cursor-pointer"
                  onClick={twitterClick}
                />
              </div>
              <div>
                <img
                  src={sandalsFooterInstagramLogo}
                  alt="sandals-Footer-Instagram-Logo"
                  className="max-w-full h-auto sm:h-[30px] cursor-pointer"
                  onClick={instagramClick}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <h2
              className="text-[rgba(248,240,219,1)]  text-xs sm:text-base cursor-pointer leading-4 tracking-[-0.02em]"
              onClick={termsAndConditionClick}
            >
              Terms & Conditions
            </h2>
            <h2
              className="text-[rgba(248,240,219,1)]  text-xs sm:text-base leading-4 cursor-pointer tracking-tight"
              onClick={contactUsClick}
            >
              Contact Us
            </h2>
            <h2
              className="text-[rgba(248,240,219,1)]  text-xs sm:text-base leading-4 cursor-pointer tracking-tight"
              onClick={cookiesAndPrivacyPolicyClick}
            >
              Cookies & Privacy Policy
            </h2>
            <h2
              className="text-[rgba(248,240,219,1)]  text-xs sm:text-base leading-4 cursor-pointer tracking-tight"
              onClick={privacyChoiceClick}
            >
              Your Privacy Choices
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
