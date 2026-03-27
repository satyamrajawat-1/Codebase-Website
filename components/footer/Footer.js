import Link from 'next/link';
import BottomGlitter from '../StyledText/BottomGlitter';
import Styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${Styles.footer} container-70`}>
      <div className="py-12 mt-20 sm:mt-4 md:mt-12">
        <h4 className="text-2xl mb-10 pl-3">Contacts</h4>
        <BottomGlitter text="Get In Touch" />
      </div>

      <div className={Styles.linksContainer}>
        <div className="flex-2 md:flex-1">
          <div className="mb-3 flex flex-col">
            <h3 className="text-2xl">Write</h3>
            <h4 className="text-lg font-extralight">
              <a href="mailto:codebase@gmail.com">codebase@gmail.com</a>
            </h4>
          </div>
          <div className="my-3 flex flex-col">
            <h3 className="text-2xl">Meet</h3>
            <h4 className="text-lg font-extralight">
              IIIT Kota, Rajasthan <br />
              Kota-325003 <br />
              Rajasthan, India
            </h4>
          </div>
        </div>
      </div>

      <div className={Styles.copyrightBottom}>
        <h6>
          © {new Date().getFullYear()} Codebase Club. All rights
          reserved.
        </h6>

        <h6 className="flex items-center">
          Crafted with&nbsp;<span className="text-2xl">♥</span>&nbsp;by Satyam and Shyam.
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
