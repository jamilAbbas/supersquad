import React,{Component} from 'react';
import { connect} from 'react-redux';

class SquadStats extends Component{
  strength(){
    let strength = 0;
    this.props.heroes.forEach( (hero)=> strength +=hero.strength)
    return strength;
  }
  intelligence(){
    let intelligence = 0;
    this.props.heroes.forEach( (hero)=> intelligence +=hero.intelligence)
    return intelligence;
  }
  speed(){
    let speed = 0;
    this.props.heroes.forEach( (hero)=> speed +=hero.speed)
    return speed;
  }
  render(){
    return(
      <div>
          <h4>Squad Stats</h4>
          <ul className="list-group">
              <li className="list-group-item">
              <b>Overall strength:</b>  {this.strength()}
              </li>
              <li className="list-group-item">
              <b>Overall speed:</b>  {this.speed()}
              </li>
              <li className="list-group-item">
              <b>Overall intelligence:</b>  {this.intelligence()}
              </li>
          </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    heroes:state.heroes
  }
}
export default connect(mapStateToProps,null)(SquadStats);
