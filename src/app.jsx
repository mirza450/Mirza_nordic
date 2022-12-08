import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    // call only once
    super(props);

    this.state = {
      counter: 0,
      todoItem: null,
      // greet: `Hello ${props.name}`,
    };
  }

  async componentDidMount() {
    // const heading = document.getElementById('heading');
    // console.log(heading);
    // heading.style.color = 'red';
    // // document.addEventListener('mousemove', () => {
    // //   console.log('mouse Move...');
    // // });
    // heading.addEventListener('mouseenter', () => {
    //   console.log('mouse enter on heading....');
    // });
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await res.json();
      this.setState({ todoItem: json });
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter === 3) {
      const pTag = document.getElementsByTagName('p');
      if (pTag.length > 0) {
        pTag[0].style.color = 'red';
      }
    }
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    // share this info to database
    console.log(errorInfo.componentStack);
  }

  
  };

  render() {
    console.log('render');

    const { counter, greet, todoItem, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
     
    );
  }
}
