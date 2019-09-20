import React, {Component} from 'react';
import './Topic.css';
import Card from './Card';



export default class Topic extends Component {
  constructor() {
    super();
    this.state = {
      card:false,
      infos:false,
    }
  }


// fonction gérant l'ouverture&fermeture du composant "Card" suivant le paramètre renseigné
openCard(donnee){
  this.setState({
   card: !this.state.card,
   infos:donnee
  })
}


  render() {
    return (
      <div>
      <div id='containerGlobal'>
        <ul id='containerTopics' style={{display: this.state.card ? 'none' :'flex'}}>
          <li id='topicsProfil' onClick={()=>this.openCard('profil')}><p className='titre'></p></li>
          <li id='topicsFormations' onClick={()=>this.openCard('formations')}><p className='titre'>Formations</p></li>
          <li id='topicsCompetences' onClick={()=>this.openCard('competences')}><p className='titre'>Compétences</p></li>
          <li id='topicsOutils' onClick={()=>this.openCard('outils')}><p className='titre'>Outils</p></li>
          <li id='topicsExperiences' onClick={()=>this.openCard('experiences')}><p className='titre'>Expériences</p></li>
          <li id='topicsSucces' onClick={()=>this.openCard('succes')}><p className='titre'>Succès</p></li>
          <li id='topicsExtras' onClick={()=>this.openCard('extras')}><p className='titre'>Extras</p></li>
          <li id='topicsInteret' onClick={()=>this.openCard('interets')}><p className='titre'>Intérêts</p></li>
          <li id='topicsContact' onClick={()=>this.openCard('contacts')}><p className='titre'>Contacts</p></li>
        </ul>
        
        {/* conditionnelle permettant d'afficher le composant "Card" quand l'état est à "true" et le "Menu" si c'est l'inverse */}
        <div>
          {this.state.card ?
          <Card closeCard={this.openCard.bind(this)} infos={this.state.infos}/>
          : null      
          } 
        </div>
        
      </div>
      </div>
    
    )
  }

}

  
  

  
