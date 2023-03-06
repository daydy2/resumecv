import React from "react";
import Meboy from "../images/meboy.jpg";
import brdImg from "../images/brd.png";
import fullShop from "../images/fullShop.png";
import Shoppy from "../images/download.png";
import { AiOutlineHtml5, AiOutlineLinkedin } from "react-icons/ai";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandBootstrap,
} from "react-icons/tb";
import { GrGithub } from "react-icons/gr";
import { FaSass, FaReact } from "react-icons/fa";
import { DiNodejs, DiMongodb } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const IntroPage = () => {
  const date = new Date();
  const year = date.getFullYear();
  const age = year - 1999;

  // const {innerHeight, innerWidth} = window
  // console.log(innerHeight, innerWidth)
  return (
    <div>
      <main className="mainIntro">
        <section className="sectionIntro">
          <div className="div__introName">
            <h1 className="div__h5-intoHello">
              Hi,{" "}
              <span className="div__h5-intoHelloDan">
                I'm Daniel! <span className="div__span-shaking">👋</span>
              </span>{" "}
            </h1>
            <h3 className="div__h3-intoJob">
              A MERN Developer<span className="div__span-line">|</span>
            </h3>
          </div>
          <div className="div__introDesc">
            <p className="div__p-desc">
              I'm a MERN developer with a more than a year experience in{" "}
              <span className="div__p-descSpan">
                designing and developing detail oriented user interfaces.
              </span>
            </p>
            <p className="div__p-contactme">
              <a href="#chatMe">Happy to chat anytime!</a>
            </p>
          </div>
        </section>
        <section className="sectionAbout">
          <div className="div__aboutMe" data-aos="fade-up">
            <h2 className="div__h3-header">About me</h2>
            <div className="div__aboutFlex">
              {/* <div className="div__aboutFlex-img"> */}
              <div className="div__aboutFlex-imgBg">
                <img
                  src={Meboy}
                  alt="Ige Daniel"
                  className="img__me img-fluid"
                />
              </div>

              {/* </div> */}
              {/* <div className="div__aboutFlex-p"> */}
              <p className="p-common p-overflow">
                Ige Daniel Olumide is a {age} years old recent graduate 🎓 from
                the department of Electrical and Electronics Engineering,
                University of Lagos. A qualified frontend developer based in
                Lagos 💥, with self drivien passion in developing and
                maintaining user interfaces. Capable of learning with and
                without supervision and also ready to provide out of box
                solution to problems. Passionate about learning the intricacies
                of web development with the desire to apply such skills on a
                larger development team. Eager to become better at delivering
                more efficient user interface.
              </p>
              <p className="p-common">
                Aside from my job, I like to create and contribute to open
                source projects. That helps me to learn a ton of new stuff, grow
                as a developer and support other open source projects. Also I
                enjoy writing technical things ✍️ at my blog.
              </p>
              <p className="p-common">
                In my free time you can find me websurfing 🛹, reading webnovels
                📚 , at game console 🎮, at the beach 🏖 or on tech meetups 👩‍💻
                and conferences around Lagos.
              </p>
              {/* </div> */}
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1jxl5ICcsdv09oVzFnpxvhblZpt80QIE4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="downloadrsm btn"
          >
            {" "}
            <i class="fa-solid fa-download"></i> resume
          </a>
        </section>
        <section className="sectionSkills">
          <h2 className="div__h3-header" data-aos="fade-up">
            My skills
          </h2>
          <ul className="skillsList">
            <li
              className="skillsListItem"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <AiOutlineHtml5 size={84} className="icons-html" />
              <span className="icons-html skillsName">html</span>
              <progress id="percent-loaded" value="100" max="100">
                100 %
              </progress>
            </li>
            <li
              className="skillsListItem"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <TbBrandCss3 size={84} className="icons-css" />
              <span className="icons-css skillsName">css</span>
              <progress id="percent-loaded" value="100" max="100">
                100 %
              </progress>
            </li>
            <li
              className="skillsListItem"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <TbBrandJavascript size={84} className="icons-jvs" />
              <span className="icons-jvs skillsName">javascript</span>
              <progress id="percent-loaded" value="100" max="100">
                100 %
              </progress>
            </li>
            <li
              className="skillsListItem"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <FaSass size={84} className="icons-sass" />
              <span className="icons-sass skillsName">sass/scss</span>
              <progress id="percent-loaded" value="100" max="100">
                100 %
              </progress>
            </li>
            <li
              className="skillsListItem"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <FaReact size={84} className="icons-react" />
              <span className="icons-react skillsName">react</span>
              <progress id="percent-loaded" value="100" max="100">
                100 %
              </progress>
            </li>
            <li
              className="skillsListItem"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <TbBrandNextjs size={84} className="icons-nextjs" />
              <span className="icons-nextjs skillsName">nextjs</span>
              <progress id="percent-loaded" value="60" max="100">
                60 %
              </progress>
            </li>
            <li
              className="skillsListItem"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <TbBrandBootstrap size={84} className="icons-boots" />
              <span className="icons-boots skillsName">bootstrap</span>
              <progress id="percent-loaded" value="100" max="100">
                100 %
              </progress>
            </li>
            <li
              className="skillsListItem"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <DiNodejs size={84} className="icons-boots" />
              <span className="icons-boots skillsName">NODE.JS</span>
              <progress id="percent-loaded" value="100" max="100">
                100 %
              </progress>
            </li>
            <li
              className="skillsListItem"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <DiMongodb size={84} className="icons-boots" />
              <span className="icons-boots skillsName">MongoDB</span>
              <progress id="percent-loaded" value="100" max="100">
                100 %
              </progress>
            </li>
          </ul>
        </section>
        <section className="sectionWorks">
          <h2 className="div__h3-header" data-aos="fade-up">
            frontend works
          </h2>
          <ul className="workList">
            <li
              className="workListItem"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <a
                href="https://shopfries.herokuapp.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Shoppy}
                  alt="shopipy clone web app"
                  className="workImg img-fluid"
                />
              </a>
              <p className="p-common workListSummary">
                {" "}
                A landing page clone of Shopify ecommerce website{" "}
                <i class="fa-solid fa-arrow-right-long"></i>
              </p>
            </li>
            <li
              className="workListItem"
              data-aos="fade-left"
              data-aos-duration="1600"
            >
              <a
                href="https://iptrackr.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/p6khgutnfr78zbs9kje7.jpg"
                  alt="ip tracker website"
                  className="workImg img-fluid"
                />
              </a>
              <p className="p-common workListSummary">
                {" "}
                A simple api website to track ip address{" "}
                <i class="fa-solid fa-arrow-right-long"></i>
              </p>
            </li>

            <li
              className="workListItem"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <a
                href="https://movie-streaming-app-f4013.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/b9847a149683171.Y3JvcCwxMDM5LDgxMywxOTgsMA.png"
                  alt="shopipy clone web app"
                  className="workImg img-fluid"
                />
              </a>
              <p className="p-common workListSummary">
                {" "}
                A movie web app designed for streaming and downloads
                <i class="fa-solid fa-arrow-right-long"></i>
              </p>
            </li>
            {/* <li className="workListItem">
                            <a href="https://shopfries.herokuapp.com" target='_blank' rel="noreferrer"><img src={Shoppy} alt="shopipy clone web app" className="workImg img-fluid" /></a>
                            <p className="p-common workListSummary"> A landing page clone of Shopify ecommerce website <i class="fa-solid fa-arrow-right-long"></i></p>
                        </li> */}
          </ul>
          <h2 className="div__h3-header" data-aos="fade-up">
            backend works
          </h2>

          <ul className="workList">
            <li
              className="workListItem"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <a
                href="https://brd-practical-r9mciizkb-daydy2.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={brdImg}
                  alt="shop ejs app"
                  className="workImg img-fluid"
                />
              </a>
              <p className="p-common workListSummary">
                {" "}
                A simple project to implement user, vendor and admin role based
                app <i class="fa-solid fa-arrow-right-long"></i>
              </p>
            </li>
            <li
              className="workListItem"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <a
                href="https://ecommerce-exp-node-j0dhbwx04-daydy2.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={fullShop}
                  alt="shop ejs app"
                  className="workImg img-fluid"
                />
              </a>
              <p className="p-common workListSummary">
                {" "}
                A full ecommerce shopping website <i class="fa-solid fa-arrow-right-long"></i>
              </p>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <div className="div__footerEmail">
          <h4 className="div__h4-heading">I'm always happy to talk.</h4>
          <p className="div__p-footerMail">
            Contact me anytime at 📧:{" "}
            <span className="div__span-email">igedanielolumide@gmail.com</span>
          </p>
          <p className="div__p-cw">Ige Daniel {year}, Portfolio 1.0!</p>
          <a name="chatMe"></a>
        </div>
        <ul className="footerLink">
          <li className="footerLinkItem">
            <a
              href="https://www.linkedin.com/in/daniel-ige-47433422a/"
              target="_blank"
              rel="noreferrer"
              className="anc"
            >
              <AiOutlineLinkedin size={56} className="icons-linkedIn" />
              <p className="linked">LinkedIn</p>
            </a>
          </li>
          <li className="footerLinkItem">
            <a
              href="https://github.com/daydy2"
              target="_blank"
              rel="noreferrer"
              className="anc"
            >
              <GrGithub size={56} className="icons-github" />
              <p className="linked">Github</p>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default IntroPage;
