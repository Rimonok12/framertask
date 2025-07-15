import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import OurExpertise from '@/components/OurExpertise';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Newsletter from '@/components/Newsletter';
import ContactBooking from '@/components/ContactBooking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="">
      {/* <Head>
        <title>SecureMyRide - Vehicle Security Installation in London</title>
      </Head> */}
      <Head>
        <title>SecureMyRide - Vehicle Security Installation in London</title>

        <meta
          name="description"
          content="SecureMyRide offers expert vehicle security systems in London, including Ghost immobiliser installation, mobile GPS tracker setup, and anti-theft device installation. Trusted London vehicle security specialists with mobile services across all boroughs."
        />
        <meta
          name="keywords"
          content="Ghost immobiliser installation London, Vehicle security systems London, Car GPS tracker installation, Mobile vehicle security London, Anti-theft device installation, London vehicle security specialists, mobile service across London, Barking and Dagenham, Camden, Hackney, Islington, Croydon, Westminster"
        />
        <meta
          property="og:title"
          content="SecureMyRide - Trusted Vehicle Security Installation in London"
        />
        <meta
          property="og:description"
          content="Protect your vehicle with SecureMyRide's expert mobile installation of Ghost immobilisers, GPS trackers, and anti-theft devices. Serving all London boroughs."
        />
        <meta property="og:url" content="https://securemyride.co.uk/" />
      </Head>

      {/* Hero Section */}
      <HeroSection />
      {/* {Our Expertise} */}
      <OurExpertise />
      {/* {About} */}
      <About />
      {/* {Testimonials} */}
      <Testimonials />
      {/* {HowITWORKS} */}
      <HowItWorks />

      <WhyChooseUs />

      <Newsletter />

      <ContactBooking />

      <Footer />
    </div>
  );
}
