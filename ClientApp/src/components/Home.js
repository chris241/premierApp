import React, { Component } from 'react';
import { Header } from './Header';
import { CreateUser } from './CreateUser';
import { DisplayBoard } from './DisplayBoard';
import { Users } from './Users';
import {createUser, getAllUsers, deleteUser} from '../services/userService'

export class Home extends Component {
  static displayName = Home.name;
  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
    createUser(this.state.user)
      .then(response => {
        console.log(response);
        this.setState({numberOfUsers: this.state.numberOfUsers + 1})
    });
  } 

  onChangeForm = (e) => {
    let user = this.state.user
    if (e.target.name === 'firstname') {
        user.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
        user.lastName = e.target.value;
    } else if (e.target.name === 'email') {
        user.email = e.target.value;
    }
    this.setState({user})
  }
  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }
    
  deleteUser = (id) => {
    deleteUser(id)
  } 

  render () {
    return (
      <div>
        <Header />
        <div className="container mrgnbtm">
          <div className="row">
        <div className="col-md-8">
                <CreateUser
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div>
            </div>
      </div>
      <div className="row mrgnbtm">
          <Users users={this.state.users} deleteUser={this.deleteUser}></Users>
        </div>
      </div>
    );
  }
}
