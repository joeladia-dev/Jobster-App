import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* {info} */}
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Your next opportunity is at your fingertips with the help of Jobster
            App. Create, update and schedule your job applications or interviews
            on the fly. With great User Interface so you can access real time
            information to track the progress of your job application and find
            opportunities for better work anytime, anywhere.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login / Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
