import React from 'react';
import { UserData } from './UserData';

export class PersonalInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      displayNameEdit: false,
    }
    this.DisplayName = this.DisplayName.bind(this);
    this.ChangeState = this.ChangeState.bind(this);
  }

  ChangeState(e){
    const target = e.target.id
    console.log(target)
    this.setState({
      [target]: !this.state[target]
    })
    console.log(this.state)
  }

  DisplayName({ data }) {
    return (
      <div>
        <div className="name">
          <span>{data.firstName} </span>
          <span>{data.lastName}</span>
        </div>
        <div className="email">{data.email}</div>
        <span id = "displayNameEdit" className="edit" onClick={e => this.ChangeState(e)}>✎</span>
      </div>
    )
  }

  render() {
    return (
      <div>
        <this.DisplayName  data = {UserData.personalInfo}/>
      </div>
    )
  }
}
