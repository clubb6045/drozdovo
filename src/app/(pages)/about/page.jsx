import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AwardsSection from "@components/sections/Awards";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import ContactInfoSection from "@components/sections/ContactInfo";
import ServicesTwoSection from "@components/sections/ServicesTwo";

const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), { ssr: false });
const TestimonialSlider = dynamic(() => import("@components/sliders/Testimonial"), { ssr: false });
const CompanySlider = dynamic(() => import("@components/sliders/Company"), { ssr: false });
const ProcessSlider = dynamic(() => import("@components/sliders/Process"), { ssr: false });
const CompanyTwoSlider = dynamic(() => import("@components/sliders/CompanyTwo"), { ssr: false });

export const metadata = {
  title: {
    default: "О компании",
  },
  description: AppData.settings.siteDescription,
}

const About = () => {
  return (
    <>
      <PageBanner pageTitle={"О нас"} breadTitle={"О компании"} bgImage={"/img/photo/20.jpg"} />
      <ServicesTwoSection />
      <ContactInfoSection />
      {/* <CompanyTwoSlider /> */}
      <ProcessSlider paddingTop={"0"} />
      {/* <CompanySlider />
      <PartnersSlider bgStyle={"soft"} />
      <AwardsSection />
      <TestimonialSlider showPartners={0} /> */}
      <CallToActionTwoSection />
    </>
  );
};
export default About;