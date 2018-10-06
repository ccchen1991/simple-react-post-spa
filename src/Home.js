import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class Home extends Component {
  constructor() {
    super();
    this.state = { name: "CCC", age: "29" };
    this.onChangeNameText = this.onChangeNameText.bind(this);
    this.onChangeAgeText = this.onChangeAgeText.bind(this);
  }
  componentWillMount() {
    console.log("Component Will Mount: " + this.state.name);
  }

  componentDidMount() {
    console.log("Component Did Mount: " + this.state.name);
  }

  onChangeNameText(event) {
    this.setState({
      name: event.target.value
    });
  }

  onChangeAgeText(event) {
    this.setState({
      age: event.target.value
    })
  }

  render() {
    return (
      <div >
          <p>
            Hello {this.state.name} Your age {this.state.age}
          </p>
          <Input id="txtName" type="text" onChange={this.onChangeNameText} placeholder="Your name" />
          <Input id="txtAge" type="text" onChange={this.onChangeAgeText} placeholder="Your age" />
      </div>
    );
  }
}

export default Home;
