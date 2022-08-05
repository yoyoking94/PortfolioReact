import React from 'react';
import '../css/education.css'
import Navigation from './navigation'

const Education = () => {

  const plus1 = () => {
    const hideContent1 = document.getElementById('hideContent1');
    hideContent1.classList.toggle("toggle")
  }

  const plus2 = () => {
    const hideContent2 = document.getElementById('hideContent2');
    hideContent2.classList.toggle("toggle")
  }

  const plus3 = () => {
    const hideContent3 = document.getElementById('hideContent3');
    hideContent3.classList.toggle("toggle")
  }

  const plus4 = () => {
    const hideContent4 = document.getElementById('hideContent4');
    hideContent4.classList.toggle("toggle")
  }

  return (
    <div id="education" className="education">
      <div className="container">
        <div className="cloudCampus">
          <div id="btnShowContent1" className='btnShowContent1'>
            <div>Preparation BAC +4 Full Stack Developer</div>
            <div id="plus1" onClick={plus1}>+</div>
          </div>
          <div id="hideContent1" className='hideContent1 toggle'>
            <p>Cloud Campus - Paris (11) -
              <ul>
                <li>
                  <a href="https://cloud-campus.fr/">Cloud-Campus</a>

                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="bts">
          <div id="btnShowContent2" className='btnShowContent2'>
            <div>BTS Organization Information System</div>
            <div id="plus2" onClick={plus2}>+</div>
          </div>
          <div id="hideContent2" className='hideContent2 toggle'>CFA UTEC - Emerainville (77)
            <ul>
              <li>En alternance chez CIRCEO</li>
              <li>HTML / CSS / PHP : réalisation de site web avec un système de prise de données et
                d’enregistrement dans une base de données MySQL</li>
            </ul>
          </div>
        </div>
        <div className="dut">
          <div id="btnShowContent3" className='btnShowContent3'>
            <div>DUT Informatics</div>
            <div id="plus3" onClick={plus3}>+</div>
          </div>
          <div id="hideContent3" className='hideContent3 toggle'>
            IUT de Valenciennes – Maubeuge (59)
            <ul>
              <li>
                HTML / CSS : création de page vitrine pour des clients fictifs
              </li>
            </ul>
          </div>
        </div>
        <div className="bac">
          <div id="btnShowContent4" className='btnShowContent4'>
            <div>STI2D Baccalaureate</div>
            <div id="plus4" onClick={plus4}>+</div>
          </div>
          <div id="hideContent4" className='hideContent4 toggle'>b</div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Education;