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
      <Head>
        <title>SecureMyRide - Vehicle Security Installation in London</title>
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
