
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import MainFeature from '../components/MainFeature'
import ContentOne from '../components/ContentOne'
import ContentTwo from '../components/ContentTwo'
import Faq from './../components/Faq';
import CallTwoAct from './../components/CallTwoAct';
import Footer from './../components/Footer';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
         <Head>
        <title>
        Blissful Balance
        </title>
        <meta
          name="description"
          content="Blissful Balance The Brand New For You!"
          key="desc"
        />
      </Head>

      <Hero />
      <MainFeature/> 
      <ContentOne/>
      <ContentTwo/>
      <Faq/>
      <CallTwoAct/>
      <Footer/>
    </div>
    
  );
}; 