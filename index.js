class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {                           //state inicial sin precionar el boton
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);        //opcion del boton
  }
  handleClick() {
    // Change code below this line
      this.setState({                        //state cambia al presionar el boton
        name: "React Rocks!"
        });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>    //opcion del boton
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
