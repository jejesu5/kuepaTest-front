import React from "react";

export default function Message({name, role, content}) {
    console.log(role)
    return (
      <div className="message" style={{display: 'flex', flexDirection: 'column', border: '1px solid black'}}>
        <div style={{display: 'flex', flexDirection: 'row', border: '1px solid black'}}>
        <p style={{marginRight: '10px'}}>{name}</p>
        <p>{role}</p>
        </div>
        <p>{content}</p>
        
      </div>
    );
  }