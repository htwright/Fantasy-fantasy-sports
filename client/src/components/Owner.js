import React, {Component} from 'react';
import OwnerTeam from './Owner-Team';
import { connect } from 'react-redux';
import {fetchOwnerTeam} from '../actions';

class Owner extends Component {

  componentDidMount(){
    this.props.dispatch(fetchOwnerTeam(this.props.match.params.owner));
  }
  //This gets all the owners teams and players
  render(){
    console.log(this.props.match.params.owner);
    const ownerTeams = this.props.data.map((ownerTeam, index) => <OwnerTeam team={ownerTeam} key={index} />);

    return (
    <div>
      <div><h1>{this.props.match.params.owner+`'s team`}</h1></div>
      {ownerTeams}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data:state.owner.data
  };
};

export default connect(mapStateToProps)(Owner);