import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

import React from "react";

const CardList = ({monsters}) => {
  // const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster, index) => {
        return <Card monster={monster} key={index}/>;
      })}
    </div>
  );
};

export default CardList;

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {

//           return (
//             <Card  monster={monster}/>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
