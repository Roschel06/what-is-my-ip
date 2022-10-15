import React from 'react'

export default function Date() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = new Date();
    const showTime = date.getHours() 
        + ':' + time.getMinutes() 
        + ":" + time.getSeconds();
  
    return (
      <div className="App">
        <h1>Current date is {date}</h1>
      </div>
    );
  }
