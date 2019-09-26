import React, { Component } from 'react';
import users from "./users";
import "./App.css";

class App extends Component {

  state = {
    data: users, 
    query: "",
    teacher: true, 
    student: true
  }

  handleInputChange = event => {

      const {name, value} = event.target

      this.setState({
      
          [name]: value
      })
  }

  onHandleCheckboxChange = event => {

    const {name, checked} = event.target
    this.setState({

      [name]: checked
    });
  };


  render () {
    const list = this.state.data.filter(user => {
      return this.state[user.role] && (user.firstName.toLowerCase().startsWith(this.state.query.toLowerCase()) || user.lastName.toLowerCase().startsWith(this.state.query.toLowerCase()))
    
    }).map(user => {
      return (
          <tr key={user.lastName.concat(user.firstName)}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.campus}</td>
                <td>{user.role}</td>
                <td><a href={user.linkedin}>{user.linkedin && <img className ="linkedin" src ='../linkedin.png'/>}</a></td>
          </tr>
      )
    })
    

    
    return (
      <div>
      <h1>Iron Book</h1>
    <form>
        <input type="text" name='query' id="filter" placeholder="Search by name"  onChange={this.handleInputChange} value={this.state.query}/>
    </form>

    <label htmlFor="teacher">Teacher</label>
          <input
            type="checkbox"
            name="teacher"
            id="teacher"
            checked={this.state.teacher}
            onChange={this.onHandleCheckboxChange}
          />
          <label htmlFor="student">Student</label>
          <input
            type="checkbox"
            name="student"
            id="student"
            checked={this.state.student}
            onChange={this.onHandleCheckboxChange}
          />
      <table>
      <tbody>

        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Campus</th>
          <th>Role</th>
          <th>Links</th>
        </tr>
        {list}
        </tbody>
      </table>
      </div>
    )
  }
}


export default App;
