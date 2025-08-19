import React from 'react';
import AppLayout from '../components/AppLayout';
import Hero from '../components/sections/Hero';
import LanguageTicker from '../components/sections/LanguageTicker';
import Sourcing from '../components/sections/Sourcing';
import FineCacao from '../components/sections/FineCacao';
import CraftBakes from '../components/sections/CraftBakes';
import SupportChat from '../components/common/SupportChat';
import ProductListing from '../components/sections/productListing';

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <LanguageTicker />
      <ProductListing/>
      <Sourcing />
      <FineCacao />
      <CraftBakes />
      <SupportChat/>
    </AppLayout>
  );
};

export default Home;
