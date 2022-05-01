 function About() {
    return(
      <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My Introduction</span>

      <div className='about__container container grid'>
        <img src='/img/akhtar-bg.png' alt='Akhtar' className='about__img'></img>

        <div className='about__data'>
            <p className='about__description'>
              I am obsessed with the possibilities and beauty of programming in
              problem solving and fortunately what I do for passion and curiosity is my profession too.
              I have worked as freelancer on Fiverr and Upwork in the past and
              currently I work with, Phyniks as a fulltime. As a Full Stack Developer,
              I also have experience as email marking expert designer and completed some Machine learning projects too.
              When not coding, I listen to audio books watch bunch of movies and TV shows. More often than not I get lost in my bed to fill my thrust of sleep.
            </p>
          <div className='about__info'>
            <div>
              <span className='about__info-title'>01+</span>
              <span className='about__info-name'>
                Years <br></br> experience
              </span>
            </div>

            <div>
              <span className='about__info-title'>10+</span>
              <span className='about__info-name'>
                Completed <br></br> project
              </span>
            </div>

            <div>
              <span className='about__info-title'>03+</span>
              <span className='about__info-name'>
                Companines <br></br> worked
              </span>
            </div>
          </div>
          <div className='about__buttons'>
            <a download='mm-akhtar-cv.pdf' href='/doc/Alexa-Cv.pdf' className='button button--flex'>
              Download CV<i className='uil uil-download-alt button__icon'></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    );
}

export default About;