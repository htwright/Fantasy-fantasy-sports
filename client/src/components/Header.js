import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <select name="sports">
          <option value hidden>Pick a sport</option>
          <option value="basketball">Basketball</option>
          <option value="hockey">Hockey</option>
          <option value="baseball">Baseball</option>
          <option value="football">Football</option>
        </select>
        <span> </span>
        <select>
          <option value hidden>Pick a team</option>
          <option value="team">Golden State Warriors</option>
        </select>
      </div>
    );
  }
}

export default Header;