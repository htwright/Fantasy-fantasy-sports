import React, {Component} from 'react';
import OwnerTeam from './Owner-Team';
import { connect } from 'react-redux';
import {fetchOwnerTeam} from '../actions';

class Owner extends Component {

  componentDidMount(){
    this.props.dispatch(fetchOwnerTeam('Jacob'));
  }
  //This gets all the owners teams and players
  render(){
    const ownerTeams = this.props.data.map((ownerTeam, index) => <OwnerTeam team={ownerTeam} key={index} />);

    return (
    <div>
      <div>Owner's Name</div>
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