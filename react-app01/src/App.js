import React from 'react';
import Calc from './Calc';
import Counter from './Counter';
import Header from './Header';

class App extends React.Component{  
  constructor(){
    super();
    this.state = {
      title:'My first App',
      credits: ['Siva', 'Nisha','Prithvi Krishna']
    }
  }
  render(){
    return (
      <div>
        <Header brand={this.state.title} />
        <hr/>
        <h4>Credits</h4>
        <ol>
            {this.state.credits.map(ele=><li>{ele}</li>)}
        </ol>
        <Counter />
        <Counter />
        <Counter />
        <Calc />
      </div>
    );
  }
}
export default App;