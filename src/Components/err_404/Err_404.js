import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import { NavLink } from 'react-router-dom';

import './Err_404.css'


function Err_404() {
  return (
    <div className='err_404'>

      <NavLink to="/">

        <div className='err_404'><PublicIcon style={{ fontSize: 40 }} /></div>
      </NavLink>
      <div>
        <span style={{ color: "#32a864", fontWeight: "500" }}>GIS </span>
        DEV
      </div>

    </div>
  )
}

export default Err_404