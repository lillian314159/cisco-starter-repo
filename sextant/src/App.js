import React from 'react';
import './App.css';

function Banner(props) {
  return (
    <h1>Sextant</h1>
  );
}

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.title}</h2>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

class Exhibit extends React.Component {
  render() {
    return (
      <div className="Exhibit">
        <Card title="Public IP" data="TODO" />
        <Card title="Latency Information for Pylon" data="TODO" />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Banner />
        </header>
        <body>
          <Exhibit />
        </body>
    </div>
  );
}

export default App;
