import React from "react";
import { Link, Outlet } from 'react-router-dom';

export const Entities = () => {
  return (
    <div style={{ background: 'rgba(255, 0, 0, 0.1)' }}>
      <h3>List of ids</h3>
      <ul>
        {['id-101', 'id-102'].map(id => {
          return (
            <li>
              <Link to={id}>{id}</Link>
            </li>
          )
        })}
      </ul>
      <Outlet />
    </div>
  )
}