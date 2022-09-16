import React from 'react';
import './App.css';

function Banner(props) {
  return (
    <h1>{props.title}</h1>
  );
}

class IPAddress extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address: null,
    };
  }

  componentDidMount(){
    if (this.props.ipv6) {
      fetch("https://api64.ipify.org")
      .then((response) => response.text())
      .then((data) => {
        this.setState({address: data});
      });
    }
    else {
      fetch("https://api.ipify.org")
      .then((response) => response.text())
      .then((data) => {
        this.setState({address: data});
      });
    }
  }

  render() {
    return <p>{this.state.address}</p>;
  }
}

class PylonLatency extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      latency: null,
    };
  }

  componentDidMount(){
    const socket = new WebSocket(this.props.source);
    socket.addEventListener('message', (event) => {
      this.setState({latency: Date.now() - event.data});
    });
  }

  render() {
    return <p>{this.state.latency} ms</p>;
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.title}</h2>
        {this.props.data}
      </div>
    );
  }
}

class Exhibit extends React.Component {

  render() {

    return (
      <div className="Exhibit">
        <Card title="Public IPv4 Address" data={<IPAddress ipv6={false}/>} />
        <Card title="Public IPv6 Address" data={<IPAddress ipv6={true}/>} />
        <Card title="Latency Information for Pylon" data={<PylonLatency source="ws://localhost:55455" />} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Banner title="Sextant" />
        </header>
        <Exhibit />
    </div>
  );
}

export default App;
