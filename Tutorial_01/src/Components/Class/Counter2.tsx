import { Component } from 'react'

// props type
type PropsType = {
    msg:string;
}

// count type
type CountType = {
    count:number;
}

export default class Counter2 extends Component<PropsType,CountType> {

    state = {
        count:0,
    }

    handleClick = () => {
        this.setState((prevState) => ({count:prevState.count+1}));
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <h2>{this.props.msg} : {this.state.count}</h2>
      </div>
    )
  }
}
