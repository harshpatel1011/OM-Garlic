import React, { useState, useEffect } from 'react';
import { TopAlertBar } from './components/TopAlertBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { QuickStats } from './components/QuickStats';
import { WhyChooseUs } from './components/WhyChooseUs';
import { IndustriesSection } from './components/IndustriesSection';
import { ProductsSection } from './components/ProductsSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { GrandOpeningSection } from './components/GrandOpeningSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OrderModal } from './components/OrderModal';

export function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>();
  const [selectedVolume, setSelectedVolume] = useState<string | undefined>();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenOrder = (product?: string, volume?: string) => {
    setSelectedProduct(product);
    setSelectedVolume(volume);
    setOrderModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#1F2937] font-sans antialiased">
      {/* Top Notification Announcement Bar */}
      <TopAlertBar isVisible={!isScrolled} />

      {/* Floating Glassmorphism Pill Navbar */}
      <Navbar
        isScrolled={isScrolled}
        onOpenOrderModal={() => handleOpenOrder()}
      />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenOrderModal={() => handleOpenOrder()}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* Infinite Moving Marquee Ticker */}
        <InfiniteMarquee />

        {/* Key Metrics / Quick Stats */}
        <QuickStats />

        {/* Why Choose OM Enterprise (Kevalon-style Mobile Circular Carousel + Desktop 3-Column Split View) */}
        <WhyChooseUs onOpenOrderModal={() => handleOpenOrder()} />

        {/* Industries We Serve (Homes, Hotels, Restaurants, Food Industries) */}
        <IndustriesSection
          onOpenOrderModal={(industry) =>
            handleOpenOrder(undefined, industry ? `For ${industry}` : undefined)
          }
        />

        {/* Products Showcase (Mobile Touch Swipe + Desktop Grid) */}
        <ProductsSection
          onOpenOrderModal={(product) => handleOpenOrder(product)}
        />

        {/* Interactive Kitchen Labor & Waste Savings Calculator */}
        <SavingsCalculator
          onOpenOrderModal={(volume) => handleOpenOrder(undefined, volume)}
        />

        {/* Grand Opening Ceremony (Patel Family & Kathwada Venue) */}
        <GrandOpeningSection onOpenOrderModal={() => handleOpenOrder()} />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Contact & Instant WhatsApp Order Section */}
        <ContactSection />
      </main>

      {/* Rich Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation Dock */}
      <MobileBottomNav onOpenOrderModal={() => handleOpenOrder()} />

      {/* Desktop Floating Pulsing WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Global Interactive Quick Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        defaultProduct={selectedProduct}
        defaultVolume={selectedVolume}
      />
    </div>
  );
}

export default App;
