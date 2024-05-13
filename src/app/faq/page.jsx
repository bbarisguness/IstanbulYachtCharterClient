import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import Acordion from "@/components/accordion";
import CounterUp from "@/components/counterUp";

export default function Page() {
  return (
    <>
      <ShopBreadCrumb
        title="Frequently asked questions"
        sectionPace=""
        currentSlug="About UsFAQ"
      />
      <Acordion />
      <CounterUp />
    </>
  );
}
