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
    this.EditDisplayName = this.EditDisplayName.bind(this);
    this.DisplayOrEdit = this.DisplayOrEdit.bind(this);
  }

  ChangeState(e){
    const target = e.target.dataset.edit
    this.setState({
      [target]: !this.state[target]
    })
  }

  FormCancelBtn(e){
    e.preventDefault()
    this.ChangeState(e)
  }

  FormSubmit(e, data){
    e.preventDefault()
    const first = e.target.firstName.value
    const last = e.target.lastName.value    
    const email = e.target.email.value
    data.firstName = first
    data.lastName = last
    data.email = email
    this.ChangeState(e)
  }

  DisplayName({ data }) {
    return (
      <div>
        <div className="name">
          <span>{data.firstName} </span>
          <span>{data.lastName}</span>
        </div>
        <div className="email">{data.email}</div>
        <span data-edit = "displayNameEdit" className="edit" onClick={e => this.ChangeState(e)}>✎</span>
      </div>
    )
  }

  EditDisplayName({ data }){
    return (
      <div>
        <form onSubmit={e=> this.FormSubmit(e, data)} data-edit = "displayNameEdit">
          <div>
            <label htmlFor="firstName">First: </label>
            <input name='firstName' type="text" defaultValue={data.firstName} autoFocus/>
          </div>
          <div>
            <label htmlFor="lastName">Last: </label>
            <input name='lastName' type="text" defaultValue={data.lastName}/>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input name='email' type="email" defaultValue={data.email}/>
          </div>
          <button data-edit = "displayNameEdit" type="submit">Submit</button>
          <button data-edit = "displayNameEdit" onClick={e=>this.FormCancelBtn(e)}>Cancel</button>

        </form>
      </div>
    )
  }

  DisplayOrEdit(){
    if(this.state.displayNameEdit){
      return <this.EditDisplayName data = {UserData.personalInfo}/>
    } else {
      return <this.DisplayName data = {UserData.personalInfo}/>
    }
  }

  render() {
    return (
      <this.DisplayOrEdit />
    )
  }
}
