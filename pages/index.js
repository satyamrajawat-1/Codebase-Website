/* eslint-disable jsx-a11y/media-has-caption */
import Notice from '@/components/Notice';
import Head from 'next/head';
import GridGallery from '../components/gridGallery/GridGallery';
import HomeAbout from '../components/homeAbout/HomeAbout';
import Screen from '../components/screen/Screen';
import TechStack from '../components/techStack/TechStack';
import Video from '../components/video/Video';

export default function Home() {
  return (
    <Screen>
      <Notice />
      <Head>
        <title>Codebase - Hackathon & Coding Club, IIIT KOTA</title>
        <meta
          name="description"
          content="Codebase is the official club of IIIT KOTA that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, Codebase, Hackathon & Coding Club, IIIT KOTA"
        />
      </Head>
      <Video />
      <HomeAbout />
      <TechStack />
      <GridGallery />
    </Screen>
  );
}
