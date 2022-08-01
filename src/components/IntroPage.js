import React from 'react';


const IntroPage = () => {
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
                <p className="div__p-aboutME">Ige Daniel Olumide is a recent graduate from the department of Electrical 
                and Electronics Engineering, University of Lagos.</p>
            </div>
            
        </section>
        
    </main>
  )
}

export default IntroPage