import './Intro.css';
import image from '../../assets/profile-3.jpg';

const Intro = () => {
  return (
    <section className="intro">
      <div className='profile-pic'>
        <img src={image} alt='Muhaimin' />
      </div>
      <div className='bio'>
        <h2>Muhaimin Jobayer</h2>
        <p>Crafting Digital Adventures 🚀</p>
        <p>Code by Day, Dream by Night 🌙</p>
        <p>Building the Web, One Byte at a Time 🎨</p>
      </div>
    </section>
  );
}

export default Intro;