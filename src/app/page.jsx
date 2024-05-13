import HeroSectionStyleThree from "@/components/hero/styleThree";
import sliderData from "@/data/hero/index-three.json";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import List1 from "@/components/list/list1";
import listData from "@/data/products.json";
import Services from "@/components/services";
import Slogan from "@/components/slogan";
import LuxuryYachtCharter from "@/components/luxuryYachtCharter";
import PrivateYachtRental from "@/components/privateYachtRental";
import SlideBottom from "@/components/slideBottom";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "İstanbul Yacht Charter",
    description: "İstanbul Yacht Charter",
  };
}

export default function Page({ params, searchParams }) {
  const aboutData = {
    title: "LUXURY YACHT CHARTERS IN THE ISTANBUL BOSPHORUS",
    content: [
      "We organize Istanbul yacht charter service for our valued customers, and our previous customers include large multinational companies, corporations and individuals from around the world for events such as conferences, weddings or dec in Istanbul.",
      "For them, such a unique venue as a boat rental in Istanbul is often a highlight for entertaining discerning guests – yachting with cocktails or dining out while swimming in beautiful Istanbul."
    ],
    buttonName: "LUXURY YACHT RESERVATION"
  }
  return (
    <>
      <div className="ltn__slider-area ltn__slider-3 section-bg-2">
        <HeroSectionStyleThree data={sliderData} />
      </div>
      <AboutUsStyleOne sectionSpace="pt-80 pb-40" data={aboutData} />
      <Services />
      <List1 data={listData} title={"EXCLUSIVE YACHT HIRE ISTANBUL"} />
      <Slogan />
      <LuxuryYachtCharter />
      <PrivateYachtRental />
      <SlideBottom />
    </>
  );
}
