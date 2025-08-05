// import OurCertifications from "./certificate/page";
// import ContactSection from "./contact/page";
// import FAQSection from "./faq/page";
// import FeaturesAndTrust from "./features/page";
// import Component from "./first/page";
// import Footer from "./footer/page";
// import NewsUpdates from "./news/page";
// import PreferredPartner from "./preffered/page";
// import InCarProvisions from "./provision/page";
// import OurServices from "./Service/page";
// import WhyEntrex from "./Why/page";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
//         <Component />
//         <WhyEntrex />
//         <OurServices/>
//         <InCarProvisions/>
//         <PreferredPartner/>
//         <FeaturesAndTrust/>
//         <OurCertifications/>
//         <FAQSection/>
//         <NewsUpdates/>
//         <ContactSection/>
//         <Footer/>
//       {/* </main> */}
//     </div>
//   );
// }


import OurCertifications from "./certificate/page";
import ContactSection from "./contact/page";
import FAQSection from "./faq/page";
import FeaturesAndTrust from "./features/page";
import Component from "./first/page";
import Footer from "./footer/page";
import NewsUpdates from "./news/page";
import PreferredPartner from "./preffered/page";
import InCarProvisions from "./provision/page";
import OurServices from "./Service/page";
import WhyEntrex from "./Why/page";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen w-full">
      <main className="flex flex-col w-full">
        <section className="w-full"><Component /></section>
        <section className="w-full"><WhyEntrex /></section>
        <section className="w-full"><OurServices /></section>
        <section className="w-full"><InCarProvisions /></section>
        <section className="w-full"><PreferredPartner /></section>
        <section className="w-full"><FeaturesAndTrust /></section>
        <section className="w-full"><OurCertifications /></section>
        <section className="w-full"><FAQSection /></section>
        <section className="w-full"><NewsUpdates /></section>
        <section className="w-full"><ContactSection /></section>
      </main>
      <Footer />
    </div>
  );
}