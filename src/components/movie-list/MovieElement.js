import React, {Component} from 'react';

export default class MovieElement extends Component{
    render(){
        return (
        <div className="w-25 p-2">
            <div className="card">
                <img alt="film" src="https://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg" className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title">GLADIATOR</h5>
                <p className="card-text">Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires.</p>
            </div>
            </div>
        </div>
          );
    }

}