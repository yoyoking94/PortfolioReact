import React from 'react';
import '../css/experience.css'
import Navigation from './navigation'

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="exp">
        <div className="cardExp">
          <h1>
            Développeur web – Elyotech
          </h1>
          <b>
            Objectif : Conception d’application web et mobile
          </b>
          <ul>
            <li>
              Création et habillage de page d’application mobile
            </li>
            <li>
              Conception de maquette et de prototypage sur Figma
            </li>
          </ul>
        </div>
        <div className="cardExp">
          <h1>
            Développeur web – Apprentie chez CIRCEO
          </h1>
          <b>
            Objectif : Venir en support aux développeurs afin de réaliser les projets
          </b>
          <ul>
            <li>
              Conception de parcours de souscription en fonction du cahier des charges du client
            </li>
            <li>
              Créations et habillages des différentes fonctions HTML
            </li>
            <li>
              Recettage des produits avant la livraison aux clients principalement des acteurs
              financiers "BNP
              Paribas, Société Générale, Renault, Fiat"
            </li>
          </ul>
        </div>
        <div className="cardExp">
          <h1>
            Développeur web – Stage chez Sodifrance / Netapsys
          </h1>
          <b>
            Objectif : Exploration des différents types de développement "IOS – Android – Web" ainsi que
            des différents corps de métiers dans l’univers du développement web.
          </b>
        </div>
      </div>
            <Navigation />
    </div>
  );
}

export default Experience;