import React from 'react';
import Navbar from '../../components/website/common/Navbar';
import SearchSection from '../../components/website/faqPage/SearchSection';
import Questions from '../../components/website/faqPage/Questions';
import GetQuote from '../../components/website/common/GetQuote';
import Footer from '../../components/website/common/Footer';
import ButtonGrid from '../../components/website/faqPage/ButtonGrid';

function faq() {
  return (
    <>
      <Navbar
        bg='#1A97CF'
        text1='white'
        text2='transparent'
        btn1Text='white'
        btn1Bg='transparent'
        btn2Text='#1A97CF'
        btn2Bg='white'
      />
      <SearchSection />
      <Questions />
      <GetQuote />
      <Footer />
    </>
  );
}

export default faq;
