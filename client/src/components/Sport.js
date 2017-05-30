import React, { Component } from 'react';


export default class Sport extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <select name="sports">
          <option selected hidden>Pick a sport</option>
          <option value="basketball">Basketball</option>
          <option value="hockey">Hockey</option>
          <option value="baseball">Baseball</option>
          <option value="football">Football</option>
        </select>

        {/*<select>
          <option value="team">Pick a team</option>
        </select>*/}
      </div>
    );
  }
}