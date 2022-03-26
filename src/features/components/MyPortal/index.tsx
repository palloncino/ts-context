import React, { useContext } from "react";
import { userContext } from "../../../context";
import { useParams } from 'react-router-dom';

export const MyPortal = () => {
  const {state, update} = useContext(userContext);
  let params = useParams();
  return (
    <div style={{ background: 'rgba(255, 0, 0, 0.1)' }}>
      <h1 style={{ margin: 0 }}>MyPortal</h1>
      <h3>Hello entity {params.id}</h3>
      <p>Here some data that you can change: <span style={{ color: 'red' }}>{state.name}</span></p>
      <label htmlFor="id">Change data</label>
      <input name="id" type="text" id="input-id" onChange={e => update(() => ({...state, name: e.target.value}))} />
    </div>
  )
}