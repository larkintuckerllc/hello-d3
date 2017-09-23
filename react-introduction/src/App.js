import React, { Component } from 'react';
import './App.css';
import { MAX_HEIGHT } from './strings';
import Bar from './Bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: [15, 8, 42, 4],
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }
  handleAddClick() {
    const { dataset } = this.state;
    if (dataset.length >= 10) return;
    const newDataset = [...dataset, Math.round(Math.random() * MAX_HEIGHT)];
    this.setState({
      dataset: newDataset,
    });
  }
  handleRemoveClick(position) {
    const { dataset } = this.state;
    const newDataset = [...dataset];
    newDataset.splice(position, 1);
    this.setState({
      dataset: newDataset,
    });
  }
  render() {
    const { dataset } = this.state;
    return (
      <div>
        <div id="chart">
          {dataset.map((o, i) => (
            <Bar
              key={i}
              height={o}
              position={i}
              onClick={this.handleRemoveClick}
            />
          ))}
        </div>
        <div id="dataset">
          {dataset.map(o => `${o} `)}
        </div>
        <button id="add-btn" onClick={this.handleAddClick}>Add Element</button>
      </div>
    );
  }
}
export default App;
