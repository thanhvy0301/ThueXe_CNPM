// import {useState} from 'react';
// import "./App.css";
// import React from 'react';
// const gift = [
//   'CPU i9',
//   'RAM 16 RGB',
//   'RGB keyboard'
// ]
// function App() {
//   return(
//     <div>
//       <h2>Chưa có phần thưởng</h2>
//       <button>Get</button>
//     </div>
//   )
// }
// export default App;

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // Phép "ràng buộc" (bind) này là cần thiết để `this` hoạt động trong callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );