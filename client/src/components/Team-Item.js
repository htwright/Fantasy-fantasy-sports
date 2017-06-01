import React, {Component} from 'react';
import { connect } from 'react-redux';

class TeamItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let team = this.props.team;
    console.log(team);
    let list = [];
    let index = 0;
    for(let player in team.memberIds){
      list.push(<td key={index} name={team.memberIds[player]}>{team.memberIds[player]}</td>);
      index++;
    }
    return(
        <tr>
          {list}
          <button type="button">Go To Page</button>
         
        </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    data: state.teams.data
  };
};

export default connect(mapStateToProps)(TeamItem);