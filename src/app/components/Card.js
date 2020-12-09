import React, {Component} from 'react';
import './Card.css';



export default class Card extends Component {
  

  render() {
    return (
      
      <div id="containerCard" onClick={this.props.closeCard}>

        {(this.props.infos === "profil") && 
        <div className='texte'>
          <h1>PROFIL</h1>
            <div><p><strong>"Consciencieuse, curieuse et agréable</strong>, 
              j’ai travaillé ces 8 dernières années 
              sur des postes de suivi de projet, 
              de <strong>communication et 
              d'assistance dans le domaine 
              des collectivités territoriales.</strong>
              <ul></ul>
              Actuellement en reconversion, 
              je souhaite désormais explorer l'univers 
              du<strong> développement web </strong> 
              afin d'y exprimer ma <strong>créativité 
              et mon intérêt pour
              les nouvelles technologies ".</strong>
              </p>
            </div>
          </div>
        }

        {(this.props.infos === "formations") && 
        <div id='texteFormation'>
          <h1>FORMATIONS</h1>
            <div >
                <ul>
                  <li className='strong'>2019</li>
                  <li className='strong'>BUROSCOPE </li>
                  <li>Développeuse d’application hybride.</li>
                </ul>
                <ul>
                  <li className='strong'>2014</li>
                  <li className='strong'>CENTRE DE GESTION 35 </li>
                  <li>Agent polyvalent collectivité.</li>
                </ul>
                <ul>
                  <li className='strong'>2013</li>
                  <li className='strong'>IPAG</li>
                  <li>Prépa concours.</li>
                </ul>
                <ul>
                  <li className='strong'>2009</li>
                  <li className='strong'>UNIVERSITÉ RENNES 1</li>
                  <li>Master 2 Économie & gestion publique Chargée de développement local.</li>
                </ul>
            </div>
         </div>
        } 

        {(this.props.infos === "competences") && 
        <div className='texte'>
          <h1>COMPÉTENCES</h1>
            <div>
              <h2>DÉVELOPPEMENT WEB & DESIGN</h2>
                <div>
                  <ul>
                    <li>Veille tendances graphiques & ergonomiques</li>
                    <li>Intégration de maquettes graphiques</li>
                    <li>Conception & réalisation d'interfaces et d'éxécutables multisupport</li>
                    <li>Travail en équipe & versionning</li>
                    <li>Optimisation & tests</li>
                  </ul>
                </div>

              <h2>ADMINISTRATIVE & LOGISTIQUE</h2>
                <div>
                  <ul>
                    <li>Analyser & synthétiser.</li>
                    <li>Suivi de projet.</li>
                    <li>Organiser(gestion de planning, rdv, réunion, salle, vernissage...).</li>
                    <li>Gérer des fonds & stocks.</li>
                  </ul>
                </div>

              <h2>COMMUNICATION</h2>
                <div>
                  <ul>
                    <li>Accueillir, renseigner & conseiller.</li>
                    <li>Rédiger & mettre en page du contenu.</li>
                    <li>Utiliser les outils de communication.</li>
                    <li>Travailler en équipe.</li>
                    <li>Gérer l’administration d’un site web & d’un logiciel métier (notions).</li>
                  </ul>
                </div>
            </div>
        </div>}
        
        {(this.props.infos === "outils") && 
        <div className='texte'>
          <h1>OUTILS</h1>
            <h2>DESIGN & BUREAUTIQUE</h2>
             <ul>
                <li>Design : Adobe illustrator, Photoshop, Xd</li>
                <li>Bureautique: Suite Office</li>
                <li>Collaboratif: Slack, Trello, Prezi</li>
                <li></li>
              </ul>
            <h2>PROGRAMMATION</h2>
            <ul>
                <li>Langages: Html, Css, Javascript</li>
                <li>Frameworks: React.js, React.native</li>
                <li>CMS: Wordpress</li>
                <li>Versionning: Git - Github</li>
                <li>Environnement: Windows - MacOS </li>
              </ul>
            <h2>LANGUES</h2>
            <ul>
                <li>Anglais</li>
                <li>Espagnol</li>
              </ul>
        </div>
        }

        {(this.props.infos === "experiences") && 
          <div className='texte'>
            <h1>EXPERIENCES</h1>
              <h2>2014-2019</h2>
                <h3>AGENT POLYVALENT EN COLLECTIVITÉ  TERRITORIALE</h3>
                  <ul>
                    <li>Urbanisme: Rennes Métropole, Cesson-Sévigné, Laillé.</li>
                    <li>État-civil: Bécherel, Brécé, Saint-Gilles, Mernel.</li>
                    <li>Accueil-Passeport: Mordelles, Montauban-de-Bretagne.</li>
                    <li>Accueil-Agence postale: Lohéac.</li>
                  </ul>
              <h2>2010-2013</h2>
                <h3>CHARGÉE DE MISSION CULTURE-TOURISME-SPORT</h3>
                  <h4>Communauté de communes du Val d’Ille.</h4>
              <h2>2009</h2>
                <h3>CHARGÉE DE COMMUNICATION</h3>
                  <h4>Site touristique MoulinS’Art, CDC Val de Sarthe.</h4>
              <h2>2008</h2>
                <h3>RÉDACTRICE WEB</h3>
                  <h4>Comité départemental du tourisme du Morbihan.</h4>
          </div>
        }

        {(this.props.infos === "succes") && 
          <div className='texte'>
            <h1>SUCCÈS</h1>
              <ul>
                <li>Rédaction de l’intégralité des contenus «idées séjours» & «bons plans» pour la refonte d’un site touristique. </li>
                <br/>
                <li>Redynamisation d’un sentier d’interprétation par la création d’une brochure & d’une aire de jeux. </li>
                <br/>
                <li>Participation à la mise en œuvre d’une campagne de communication pour la 1ère saison d’un site touristique.</li>
              </ul>
          </div>
        }

        {(this.props.infos === "extras") && 
          <div className='texte'>
            <h1>EXTRAS</h1>
              <ul className="liste">
                <li>Permis B.</li>
                <li>Certification "Principes fondamentaux du marketing numérique", Google.</li>
                <li>Certification "S'initier à la fabrication numérique", IMT.</li>
                <li>Certifications aux compétences de demain, Kokoroe.</li>
              </ul>
          </div>
        }

        {(this.props.infos === "interets") && 
          <div className='texte'>
            <h1>INTÉRÊTS</h1>
            <ul className="liste">
              <li>Technologies</li>
              <li>Veille & tendance</li>
              <li>Arts visuels & sonores</li>
              <li>Croquis</li>
              <li>Photographie</li>
              <li>Tourisme</li>
              <li>Développement personnel</li>
              <li>Trail</li>
              <li>Yoga</li>
              <li>Danses latines</li>
              <li>Vtt</li>
              <li>Plongée</li>
            </ul>
          </div>
        } 

        {(this.props.infos === "contacts") && 
          <div className='texte'>
            <h1>CONTACTS</h1>
              <a>E-mail</a>
          </div>
        }  
        
      </div>
    )
  }

}
