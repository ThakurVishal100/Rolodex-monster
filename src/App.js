import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card_list_component";
import SearchBox from "./components/search-box/search_box_component";
import { useState, useEffect } from "react";
import React from "react";
import card_list_component from "./components/card-list/card_list_component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState("");

  // console.log(searchField);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    // console.log(e.target.value);
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (e) => {
    // console.log(e);
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  // console.log(filteredMonsters);

  return (
    <div className="App">
      {/* <h1 className="app-title">Monsters Rolodex</h1> */}
      <h1 className="app-title">{title}</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="search monsters"
        className="title-search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     // console.log(1);
//   }
//   async componentDidMount() {
//     // console.log(3);
//     const data = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await data.json();
//     this.setState({ monsters: users });
//     // console.log(users);
//   }

//   onSearchChange = (e) => {
//     // console.log(e.target.value);
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     // console.log(2);
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder={"search"} className='monsters-search'/>
//         <CardList monsters={filteredMonsters}  />
//       </div>
//     );
//   }
// }

// export default App;
