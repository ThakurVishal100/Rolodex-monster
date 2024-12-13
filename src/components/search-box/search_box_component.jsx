import React from "react";
import { Component } from "react";
import "./search-box.styles.css";


const SearchBox = ({className,placeholder, onChangeHandler}) => {
  return (
    <input
      placeholder={placeholder} 
      className={`search-box ${className} `}
      type="search"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         placeholder={this.props.placeholder}
//         className={`search-box ${this.props.className} `}
//         type="search"
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

// export default SearchBox;
