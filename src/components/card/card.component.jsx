import { Component } from "react";
import "./card.styles.css";

import React from 'react'
 
const Card = ({monster}) => {
  const { id,name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
        alt={`monster ${name} `}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default Card;


// class Card extends Component { 
//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set1&size=180x180`}
//           alt={`monster ${name} `}
//         />
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

// export default Card;
