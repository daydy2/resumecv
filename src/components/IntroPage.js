import React from 'react';


const IntroPage = () => {
    const date = new Date();
    const year = date.getFullYear();
    const age = year - 1999;
  return (
    <main className="mainIntro">
        <section className="sectionIntro">
            <div className="div__introName">
                <h5 className="div__h5-intoHello">Hi, I'm Daniel! <span className="div__span-shaking">👋</span></h5>
                <h3 className="div__h3-intoJob">A Frontend Developer<span className="div__span-line">|</span></h3>
                <a id="contactme"></a>
            </div>
            <div className="div__introDesc">
                <p className="div__p-desc">
                    I'm a frontend developer with a few years experience in <span className="div__p-descSpan">designing and developing detail oriented user interfaces.</span>
                </p>
                <p className="div__p-contactme">
                    <a href="contactme">Happy to chat anytime!</a>
                </p>
            </div>
        </section>
        <section className="sectionAbout">
            <div className="div__aboutMe">
                <h3 className="div__h3-header">About me</h3>
                <p className="div__p-aboutME">Ige Daniel Olumide is a {age} years old recent graduate 🎓 from the department of Electrical 
                    and Electronics Engineering, University of Lagos. A qualified frontend developer based in Lagos 💥, with proven experience in developing, creating and maintaining user interfaces. 
                    Capable of learning with and without supervision and also ready to provide out of box solution to problems. Passionate about learning the
                    intricacies of web development with the desire to apply such skills on a larger development team. Eager to become better at delivering
                    more efficient user interface.
                </p>
                <p className="div__p-aboutME">
                    Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things ✍️ at my blog.
                </p>
                <p className="div__p-aboutME">
                In my free time you can find me websurfing 🛹, reading webnovels 📚 , at game console 🎮, at the beach 🏖 or on tech meetups 👩‍💻 and conferences around Lagos.
                </p>
            </div>
            
        </section>
        
    </main>
  )
}

export default IntroPage