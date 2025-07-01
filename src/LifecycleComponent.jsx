import React from "react";
import { useState, useEffect } from "react";

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    const getData = async () => {
      try {
        const resp = await fetch("https://todo-redev.herokuapp.com/api/todos", {
          method: "GET",
          headers: {
            accept: " application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa3RvcmlhaXZhbm92YTk3QGV4YW1wbGUuY29tIiwiaWQiOjEwMjQsImlhdCI6MTc0NTMyOTg4M30.p2HbQaFbGzXBxxXVZ8ep30xFv3yBihn8-U16d4ffRSY",
          },
        });

        const res = await resp.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }

  componentDidUpdate() {
    console.log(this.state.count);
  }
  componentWillUnmount() {
    console.log("Компонент будет удалён!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }

  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>++</button>
      </>
    );
  }
}

export default LifecycleComponent;