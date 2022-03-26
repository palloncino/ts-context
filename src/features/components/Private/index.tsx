import React, { useContext } from "react";
import { userContext } from "../../../context";

export const Private = () => {
  const {state, update} = useContext(userContext);
  return (
    <div style={{ background: 'rgba(255, 0, 0, 0.1)' }}>
      <h1 style={{ margin: 0 }}>Private</h1>
      <h3>Hello {state.name}</h3>

      <label htmlFor="id">Change your name</label>
      <input name="id" type="text" id="input-id" onChange={e => update(() => ({...state, name: e.target.value}))} />
    </div>
  )
}