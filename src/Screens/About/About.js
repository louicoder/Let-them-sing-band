import React from 'react';
import Band from '../../assets/choose 3.jpg';
import './styles.scss';

const About = () => {
  return (
    <div id="about-container">
      <div id="about-image-container">
        <img src={Band} />
      </div>
      <div id="about-info-container">
        <span>About us</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estne, quaeso, inquam, sitienti in bibendo voluptas?
          Verba tu fingas et ea dicas, quae non sentias? Sed ea mala virtuti magnitudine obruebantur. Verum esto: verbum
          ipsum voluptatis non habet dignitatem, nec nos fortasse intellegimus. Atque ab his initiis profecti omnium
          virtutum et originem et progressionem persecuti sunt. Quis enim est, qui non videat haec esse in natura rerum
          tria? Duo Reges: constructio interrete.
        </span>
      </div>
    </div>
  );
};

export default About;
