import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    this.setState({
      list: this.state.list.concat(this.state.value),
      value: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((items, index) =>
            <li key={index}>{items}</li>
            )}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type="text" id="new-task" value={this.state.value} onChange={this.handleChange} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
