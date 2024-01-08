import React from 'react';


const Navigate = () => {
    const nav=()=>
    {
        window.location.assign("https://www.youtube.com/watch?v=Uv7cKlZFXU8&t=14766s")
    }
  return (
    <div>Navigate


<button onClick={nav}>submit </button>
    </div>
   
  )
}

export default Navigate