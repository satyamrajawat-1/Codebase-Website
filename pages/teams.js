import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import { TeamData2k23, TeamData2k24 } from '../lib/data/TeamData';

function Teams() {
  return (
    <Screen>
      <Head>
        <title>Our Amazing Team ✨</title>
        <meta name="description" content="Codebase club, IIIT KOTA" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, Codebase, Team of Codebase, Hackathon & Coding Club, IIIT KOTA"
        />
      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Team" />
          <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3>
        </div>
        <h2 className={Styles.postHead}>Core Members</h2>
        <div className={Styles.cardContainer}>
          {TeamData2k23.slice(0, 11).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k23/${item.imageSrc}.jpeg`}
                lazyImageSrc={`/teams/2k23/lazy/${item.imageSrc}-min.jpeg`}
                socials={item.socials}
              />
            );
          })}
        </div>

        <h2 className={Styles.postHead}>Our 2K24 Members</h2>
        <div className={`${Styles.cardContainer}`}>
          {TeamData2k24.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k24/${item.imageSrc}.jpeg`}
                lazyImageSrc={`/teams/2k24/lazy/${item.imageSrc}-min.jpeg`}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default Teams;
