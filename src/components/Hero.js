import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className='name-card'>
          <div className='hi-logo'><span style={{fontSize: '2.5rem'}}>👋</span></div>
          <div>
            <div className="hi">
              <p>Hello, I am</p>
            </div>
            <div className="my-name">
              <h1>Anushka</h1>
            </div>
          </div>
        </div>
        <div className="position-card">
          <div><span>👨‍💻</span><span>Frontend Developer</span></div>
          <div><span>💻</span><span>DSA Learner</span></div>
        </div>
        <div className="social-links-container">
            <a href='https://www.linkedin.com/in/theanushka-v18/' className='social-icons'><LinkedInIcon /></a>
            <a href='https://github.com/theanushka-v18' className='social-icons'><GitHubIcon /></a>
            <a href='https://twitter.com/theanushka_v18' className='social-icons'><TwitterIcon /></a>
            <a href='https://www.instagram.com/theanushka_v18/' className='social-icons'><InstagramIcon /></a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
