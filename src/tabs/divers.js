import React from 'react';
import '../css/divers.css'
import Navigation from './navigation'

const Divers = () => {
  return (
    <div className='divers'>
      <div className='cards'>
        <div className="cardDiv">
          <h1>Center of interest :</h1>
          <ul>
            <li>J'aime créer des sites internet ainsi que des logiciels à mes heures perdues, regarder tout types
              d'oeuvres cinématographiques, écoute de la musique et jouer aux jeux vidéo</li>
          </ul>
        </div>
        <div className="cardDiv">
          <h1>Sports :</h1>
          <ul>
            <li>Pratique en club du football (4 ans) et du karaté (3 ans / ceinture noire)</li>
            <li>Pratique en amateur : Basket-ball et badminton</li>
          </ul>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Divers;