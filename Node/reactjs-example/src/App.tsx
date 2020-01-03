import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const IndexPage = () => {
  return (
    <h3>Home Page</h3>
  );
};


class RegisterUser extends React.Component {
  state = {
    nombre: '',
    edad: '',
    id: '',
    resultado: 'waiting result'
  }
 
  handleChange = event => {
    console.log(event.target.name)
    switch (String(event.target.name)) {
      case 'nombre':
        console.log(1)
          this.setState({nombre : event.target.value });
        break;
      case 'edad':
        console.log(2)
          this.setState({edad : event.target.value });
        break;
      case 'id':
        console.log(3)
          this.setState({id : event.target.value });
        break;
    }
  }
 
  handleSubmit = event => {
    event.preventDefault();
 
    const usuario = {
      nombre: this.state.nombre,
      edad: this.state.edad,
      id: this.state.id
    };
    console.log(usuario)
      axios({
        method: 'post',
        url: 'http://localhost:4000/registerUser/',
        data: qs.stringify(usuario),
        headers: 
        {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(res => {
        this.setState({ resultado:res.status });
      })
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="nombre" onChange={this.handleChange} />
          </label>
          <label>
            Edad: 
            <input type="text" name="edad" onChange={this.handleChange} />
          </label>
          <label>
            ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Agregar</button>
        </form>
        { this.state.resultado}
      </div>
    )
  }
}


const UserPage = ({ match}) => {
  const [name, setName] = useState(0);
  const [age, setAge] = useState(1);
  
  const { params: { userId } } = match;
  
  axios({
    method: 'post',
    url: 'http://localhost:4000/searchUser/'+userId,
  }).then(res => {
    setName(res.data.nombre);
    setAge(res.data.edad);
  })

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong> 
        {name}
      </p>
      <p>
        <strong>User Age: </strong> 
        {age}
      </p>

    </>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link>

        <Route exact path="/" component={IndexPage} />
        <Route exact path="/registerUser" component={RegisterUser} />
        <Route exact path="/user/:userId" component={UserPage} />
      </Router>
      <a href="/registerUser">Register</a>
    </section>
  );
};
export default App;