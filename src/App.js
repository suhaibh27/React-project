//any js logic is written between {};
import React from 'react';
import './App.css';
import { Component } from 'react';

//importing a component 
import {CardList} from './Components/cardList/card-list.component';
import { Search } from './Components/search/search';

class App extends Component {
  constructor()
  {
    super();
    //the state which defines the what happen to the page
    this.state={
      monsters:[],
      searchField:''
    }

  }

  //one of lifecycle method of rendering 
  //after react deploy the dom to page this function is called 
  //where you use API to get data
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=>response.json())
          .then(users=>this.setState({monsters:users}));
          
  }
  //handle the change when you type in search box
  handleChange=e=>this.setState({searchField: e.target.value})

  //this will define the structure of the component (the whole page).
  //the tags are JSX NOT HTML
  render(){
    // const that have the states
    // const monsters=this.state.monsters
    const{monsters,searchField}=this.state;
    const FilteredMonsters=monsters.filter(monster=>
                                          monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <Search placeHolder='Search Users' handleChange={this.handleChange}/>
        {/* using the component like dom and passing data as props to be handeled by the component {CardList} */}
        <CardList monsters={FilteredMonsters}/>
      </div>
    );
  }
}



export default App;
