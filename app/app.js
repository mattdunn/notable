import React from "react"

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.message}</div>;
  }
}

React.render(<Hello message="Greetings" />, document.body);
