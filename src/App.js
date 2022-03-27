import React, {Component} from "react";
import { Header, MovieDetails, MovieList } from './components';


class App extends Component {
  render(){
    return (
      <div className="App d-flex flex-column">
      <Header />

      <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList />
          <MovieDetails />
        
      </div>
      
     
      </div>
    );
  }
  
}

export default App;
