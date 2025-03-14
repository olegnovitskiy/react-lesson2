import React from 'react';
import './App.css'

// function Greeting(props) {
//   const { name } = props;
  
//   return (
//     <h1 className="greeting">
//       Hello <i className="emphasize">{name}</i>. Welcome
//     </h1>
//   );
// }

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.initialName,
    };
  }

  clickHandler = () => {
    this.setState({name: 'Me'});
    if (this.state.name === 'Me') {
      this.props.onHide();
    }
  }

  render() {  
    return (
      <h1 className="greeting">
        Hello {" "}
        <i 
          className="emphasize" 
          onClick={this.clickHandler}
        >
        {this.state.name}
        </i>. Welcome
      </h1>
    );
  }
}

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     show: true,
  //   };
  // }

  state = {
    show: true,
  }

  render () {
    return (
      <main>
        <button onClick={() => {
          this.setState((prev) => ({show: !prev.show}));
          }}>Toggle visibility</button>
        {this.state.show? <Greeting initialName="Everyone" onHide={() => {
            this.setState({show: false});
          }}/> : null}
      </main>
    );
  }
}

export default App
