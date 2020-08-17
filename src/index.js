import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Table';

function Start(props) {
  return (
    <div>
      <h1 id="heading-start">What are you declining?</h1>
      <div id="choice-wrapper">
        <button className="options" onClick={() => props.optionsSetter("der", "strong")}>Der-Word</button>
        <button className="options" onClick={() => props.optionsSetter("ein", "ein")}>Ein-Word</button>
        <button className="options" onClick={() => props.optionsSetter("adjective", "strong")}>Adjective</button>
      </div>
    </div>
  )
}

function Middle(props) {
  return (
    <div>
      <h1 id="heading-start">Next Word?</h1>
      <div id="choice-wrapper">
        <button className="options" onClick={() => props.showResult()}>Noun</button>
        <button className="options" onClick={() => props.optionsSetter("adjective", props.state.ein === "no ending" ? "strong" : "weak")}>Adjective</button>
      </div>
    </div>
  )
}

class End extends React.Component {
  render() {
    const transform = {transform: "scale(0.75)"}
    const einSwitch = this.props.state.ein === "no ending" ? "ein" : "strong"; 
    const adjectiveSwitch = () => {
      if ((this.props.state.ein && this.props.state.ein !== "no ending") || this.props.state.der) {
        return "weak"
      }
      return "strong"
    }  
    return (
      <div id="heading-start">
        <h1 id="result-heading">These are your endings:</h1>
        <div id="result-table">
          {
            this.props.state.ein && (
            <div>
              <Table tableSwitch={einSwitch} state={this.props.state} transform={transform}/>
              <h2 className="result">Ein-Word ending: {this.props.state.ein}</h2>
            </div>
          )}
          {
            this.props.state.der && (
            <div>
              <Table tableSwitch="strong" state={this.props.state} transform={transform}/>
              <h2 className="result">Der-Word ending: {this.props.state.der}</h2>
            </div>
          )}
          {
            this.props.state.adjective && (
              <div>
                <Table tableSwitch={adjectiveSwitch()} state={this.props.state} transform={transform}/>
                <h2 className="result">Adjective ending: {this.props.state.adjective}</h2> 
              </div>
            )
          } 
        </div>
        <button className="options" onClick={() => this.props.resetHandler()}>Reset</button>
      </div>
    )
  }
}

class Declinator extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      status: "start",
      table: false,
      ein: false,
      der: false,
      adjective: false,
    }
  }
  optionsSetter = (status, table) => { 
    this.setState({ 
      status: status,
      table: table,
    })
  }
  endingsSetter = (ending) => {
    this.setState({
      table: false,
      [this.state.status]: ending,
    })  
    if (this.state.status === "adjective") {
      this.setState({status: "end" })  
    } else
    this.setState({ status: "middle" })
  }
  tableSetter = (table) => {
    this.setState({
      table: table
    })
  }
  showResult = () => {
    this.setState({
      status: "end"
    })
  }
  resetHandler = () => {
    this.setState({ 
      status: "start",
      table: false,
      ein: false,
      der: false,
      adjective: false,
    })
  }
  render(){
    return (
      <React.StrictMode>
        {this.state.status === "start" && <Start optionsSetter={this.optionsSetter}/>}
        {this.state.status === "middle" && <Middle state={this.state} optionsSetter={this.optionsSetter} showResult={this.showResult}/>} 
        {this.state.status === "end" && <End state={this.state} resetHandler={this.resetHandler}/>}
        {this.state.table && <Table tableSetter={this.tableSetter} endingsSetter={this.endingsSetter} state={this.state}/>}
      </React.StrictMode>
    )
  }
}

ReactDOM.render(<Declinator />,
  document.getElementById('root')
);