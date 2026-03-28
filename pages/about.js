import Head from 'next/head';
import Events from '../components/event/Events';
import Screen from '../components/screen/Screen';
import BottomGlitter from '../components/StyledText/BottomGlitter';

function About() {
  return (
    <Screen>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Codebase Club is a student-led technical community dedicated to fostering a strong coding culture, encouraging collaboration, and organizing events across domains like Web Development, App Development, AI/ML, Blockchain, Cloud Computing, and Open Source."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, Codebase, About Codebase, Hackathon & Coding Club, IIIT Kota, Rajasthan"
        />
      </Head>
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
        <div className="mt-12 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="About Codebase" />
          <div className="mt-6">
            <p className="text-lg">
              Codebase Club is the official coding and development club of the
              institution, founded with the vision of fostering a collaborative
              coding culture among students. Over time, the club has grown both
              in strength and scope, expanding into diverse domains and
              organizing a wide range of technical activities.
            </p>
          </div>
        </div>
        <div className="mt-20 mb-6 sm:mt-8 sm:mb-4">
          <BottomGlitter text="Our Activities" />
          <div className="mt-6">
            <p className="text-lg">
              We organize a national level hackathon, Hackatron every year. The
              first version of this hackathon was held in Date month year.
              Checkout more at{' '}
              <a className="text-blue" href="">
                website link
              </a>
              <br />
              Organize sessions and workshops on various technology stacks
              including Development, Open Source, and more.
              <br />
              Host coding competitions and technical events throughout the year,
              including during Techfest.
              <br />
              Build real-world projects aimed at solving practical problems.
              Check out our work on GitHub. See more about our coding culture at
              our official site{' '}
              <a className="text-blue" href="">
                websitelink
              </a>{' '}
            </p>
          </div>
        </div>

        <Events />
      </section>
    </Screen>
  );
}

export default About;
