import React from 'react';
import '../css/skills.css'
import Navigation from './navigation'

const Skills = () => {
  return (
    <div className='skills'>
      <div className="slider">
        <input type="radio" name="slider" id="item-1" checked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <input type="radio" name="slider" id="item-4" />
        <input type="radio" name="slider" id="item-5" />
        <div className="cards">
          <label className="cardSlider" for="item-1" id="card-1">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <span className="stars">Les languages de développement web dont je maitrise aisément :
                  </span>
                  <p className="language">
                    <li className="lText">HTML5 :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                    <li className="lText">CSS3 :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                    <li className="lText">Js :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>Langages de développement web</h2>
              </div>
            </div>
          </label>
          <label className="cardSlider" for="item-2" id="card-2">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <span className="stars">Les différentes logiciels de développement vue : </span>
                  <p className="logiciels">
                    <li className="lText">Visual Studio Code, Sublime Text :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                    <li className="lText">
                      IDLE , Intellij , PgAdmin , Code::Blocks :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>Logiciels</h2>
              </div>
            </div>
          </label>
          <label className="cardSlider" for="item-3" id="card-3">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <span className="stars">Tous les languages de programmation vue : </span>
                  <p className="lpo">
                    <li className="lText">SQL :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                    <li className="lText">PHP, Wordpress, Joomla :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                    <li className="lText">Vue.Js, Node.Js, Scss, React.js (Ionic/Tsx/Js) :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i> (en apprentissage)
                    </li>
                    <li className="lText">
                      C (apprentissage) , Python , Java :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>Langages de programmation utilisés</h2>
              </div>
            </div>
          </label>
          <label className="cardSlider" for="item-4" id="card-4">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <span className="stars">Les différentes système d'exploitation manipulé : </span>
                  <p className="OS">
                    <li className="lText">
                      Windows :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                    <li className="lText">
                      Linux :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                    <li className="lText">
                      MacOs :
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                      <i className="fa-regular fa-circle"></i>
                    </li>
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>Système d’exploitation</h2>
              </div>
            </div>
          </label>
          <label className="cardSlider" for="item-5" id="card-5">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <span className="stars">Les différentes langues dont je parle : </span>
                  <p className="langues">
                    <li className="lText">
                      Anglais : C1
                    </li>
                    <li className="lText">
                      Espagnol : A1
                    </li>
                    <li className="lText">
                      Créole mauricien : C2
                    </li>
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>Langues</h2>
              </div>
            </div>
          </label>
        </div>
      </div>
            <Navigation />
    </div>
  );
}

export default Skills;