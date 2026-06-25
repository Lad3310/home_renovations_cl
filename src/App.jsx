import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import OwnerOperated from "./components/OwnerOperated.jsx";
import Gallery from "./components/Gallery.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import ServiceArea from "./components/ServiceArea.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <OwnerOperated />
        <Gallery />
        <WhyChooseUs />
        <QuoteForm />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
