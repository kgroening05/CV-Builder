import React, { useState } from 'react';
import { UserData } from './UserData';

export function PersonalInfo(){
  const [editing, setEditing] = useState(false);

    if(editing){
      return(<EditPeronalInfo personalInfo={ UserData.personalInfo } setStateFn={ setEditing } />)
    } else {
      return (<DisplayPeronalInfo personalInfo={ UserData.personalInfo } setStateFn={ setEditing } />)
    }
}

function DisplayPeronalInfo({ personalInfo, setStateFn }){

  return (
    <>
      <p className='user-name'>
        <span>{personalInfo.firstName}</span>
        <span> {personalInfo.lastName}</span>
      </p>
      <div>{personalInfo.email}</div>
      <PopulatePersonalWebsites linksArray = {personalInfo.links} />
      <EditButton setStateFn={ setStateFn }/>
    </>
  )
}

function EditPeronalInfo({ personalInfo, setStateFn }){

  return (
    <form onSubmit={e => HandleEdit(e, setStateFn, personalInfo)}>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name='firstName' defaultValue={personalInfo.firstName} autoFocus/>
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name='lastName' defaultValue={personalInfo.lastName} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name='email' defaultValue={personalInfo.email} />
      </div>
      <button type="submit">Save</button>
      <button onClick={(e)=>HandleCancel(e, setStateFn)}>Cancel</button>
    </form>
  )
}

function HandleEdit(e, setStateFn, personalInfo){
  e.preventDefault()
  personalInfo.firstName = e.target.firstName.value
  personalInfo.lastName = e.target.lastName.value
  personalInfo.email = e.target.email.value
  setStateFn(previous => !previous)
}

function HandleCancel(e, setStateFn){
  e.preventDefault()
  console.log('handled cancel')
  setStateFn(previous => !previous)
}

function PopulatePersonalWebsites({ linksArray }){
  return (
    <ul>
      {linksArray.map((link, index)=>{
        return (
          <li key={index}>{link}</li>
        )
      })}
    </ul>
  )
}

function EditButton({ setStateFn }){
  return (
    <i className='edit-icon' onClick={()=>setStateFn(previous => !previous)}>✎</i>
  )
}
