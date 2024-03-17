import React, { useState } from "react";
import './ProjetcItem.css'


// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ProjectItem({ name, description, stack, link, img }) {

  const [isVisible, setIsVisible] = useState('hidden');

  const handleMouseEnter = () => {
    setIsVisible('visible');
  };

  const handleMouseLeave = () => {
    setIsVisible('hidden');
  };
  return (
    <div>
      <div className="ProjectItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        style={{ display: 'flex', alignItems: 'flex-end', backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'auto 100%', backgroundRepeat: "no-repeat" }}
      >

        <Card style={{ background: 'none', color: '#32a864', width: '100%', height: '15%', visibility: isVisible }} >
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </div >

    </div>
  );
}

export default ProjectItem;
