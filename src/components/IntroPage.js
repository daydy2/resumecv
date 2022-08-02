import React from 'react';
import Meboy from '../images/meboy.jpg';
import Shoppy from '../images/shoppy1.jpg'
import {AiOutlineHtml5, AiOutlineLinkedin} from 'react-icons/ai';
import {TbBrandCss3, TbBrandJavascript, TbBrandNextjs, TbBrandBootstrap} from 'react-icons/tb';
import {GrGithub} from 'react-icons/gr';
import {FaSass, FaReact} from 'react-icons/fa';


const IntroPage = () => {
    const date = new Date();
    const year = date.getFullYear();
    const age = year - 1999;
  return (
    <div>
        <main className="mainIntro">
            <section className="sectionIntro">
                <div className="div__introName">
                    <h5 className="div__h5-intoHello">Hi, I'm Daniel! <span className="div__span-shaking">👋</span></h5>
                    <h3 className="div__h3-intoJob">A Frontend Developer<span className="div__span-line">|</span></h3>
                    
                </div>
                <div className="div__introDesc">
                    <p className="div__p-desc">
                        I'm a frontend developer with a few years experience in <span className="div__p-descSpan">designing and developing detail oriented user interfaces.</span>
                    </p>
                    <p className="div__p-contactme">
                        <a href="#chatMe">Happy to chat anytime!</a>
                    </p>
                </div>
            </section>
            <section className="sectionAbout">
                <div className="div__aboutMe">
                    <h3 className="div__h3-header">About me</h3>
                    <div className="div__aboutFlex">
                        <div className="div__aboutFlex-img">
                            <div className="div__aboutFlex-imgBg">
                                <img src={Meboy} alt="Ige Daniel" className='img__me img-fluid' />
                            </div>                       
                            
                        </div>
                        <div className="div__aboutFlex-p">
                            <p className="p-common">Ige Daniel Olumide is a {age} years old recent graduate 🎓 from the department of Electrical 
                                and Electronics Engineering, University of Lagos. A qualified frontend developer based in Lagos 💥, with proven experience in developing, creating and maintaining user interfaces. 
                                Capable of learning with and without supervision and also ready to provide out of box solution to problems. Passionate about learning the
                                intricacies of web development with the desire to apply such skills on a larger development team. Eager to become better at delivering
                                more efficient user interface.
                            </p>
                            <p className="p-common">
                                Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things ✍️ at my blog.
                            </p>
                            <p className="p-common">
                            In my free time you can find me websurfing 🛹, reading webnovels 📚 , at game console 🎮, at the beach 🏖 or on tech meetups 👩‍💻 and conferences around Lagos.
                            </p>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="sectionSkills">
                <h3 className="div__h3-header">My skills</h3>
                <ul className="skillsList">
                    <li className="skillsListItem">
                        <AiOutlineHtml5 size={98} className='icons-html'/>
                        <span className='icons-html skillsName'>html</span>
                    </li>
                    <li className="skillsListItem">
                        <TbBrandCss3 size={98} className='icons-css'/>
                        <span className = 'icons-css skillsName'>css</span>
                    </li>
                    <li className="skillsListItem">
                        <TbBrandJavascript size={98} className='icons-jvs'/>
                        <span className = 'icons-jvs skillsName'>javascript</span>
                    </li>
                    <li className="skillsListItem">
                        <FaSass size={98} className='icons-sass'/>
                        <span className = 'icons-sass skillsName'>sass/scss</span>
                    </li>
                    <li className="skillsListItem">
                        <FaReact size={98} className='icons-react'/>
                        <span className = 'icons-react skillsName'>react</span>
                    </li>
                    <li className="skillsListItem">
                        <TbBrandNextjs size={98}className='icons-nextjs'/>
                        <span className = 'icons-nextjs skillsName'>nextjs</span>
                    </li>
                    <li className="skillsListItem">
                        <TbBrandBootstrap size={98} className='icons-boots' />
                        <span className = 'icons-boots skillsName'>bootstrap</span>
                    </li>
                </ul>
            </section>
            <section className="sectionWorks">
                <h3 className="div__h3-header">my works</h3>
                <ul className="workList">
                    <li className="workListItem">
                        <a href="https://shopfries.herokuapp.com" target='_blank'><img src={Shoppy} alt="shopipy clone web app" className="workImg img-fluid" /></a>
                        <p className="p-common workListSummary"> A landing page clone of Shopify ecommerce website <i class="fa-solid fa-arrow-right-long"></i></p>
                    </li>
                    
                </ul>
            </section>      
            
        </main>
        <footer className="footer">
        <div className="div__footerEmail">
            <h4 className="div__h4-heading">I'm always happy to talk.</h4>
            <p className="div__p-footerMail">Contact me anytime at 📧: <span className="div__span-email">igedanielolumide@gmail.com</span></p>
            <p className="div__p-cw">Ige Daniel {year}, Portfolio 1.0!</p>
            <a name="chatMe"></a>
        </div>
        <ul className="footerLink">
            <li className="footerLinkItem">
                <a href="https://www.linkedin.com/in/daniel-ige-47433422a/" target='_blank' className="anc">
                   <AiOutlineLinkedin size={70} className='icons-linkedIn'/>
                   <p className="linked">LinkedIn</p>
                </a>
            </li>
            <li className="footerLinkItem">
                <a href="https://github.com/daydy2" target='_blank' className="anc">
                    <GrGithub size={70} className='icons-github'/>
                    <p className="linked">Github</p>
                </a>
            </li>
        </ul>

        </footer>
    </div>
  )
}

export default IntroPage