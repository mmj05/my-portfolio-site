import './Intro.css';
import dp from '../../assets/profile.jpg';

const Intro = () => {
  return (
    <section className="intro">
      <div className='profile-pic'>
        <img src={dp} alt='Muhaimin' className='dp' />
      </div>
      <div className='bio'>
        <p>Hi, I am</p>
        <h1>Muhaimin Jobayer.</h1>
        <p>A Software Engineer who embraces </p> 
        <p>challenges and designs innovative solutions.</p>
      </div>
    </section>
  );
}

export default Intro;