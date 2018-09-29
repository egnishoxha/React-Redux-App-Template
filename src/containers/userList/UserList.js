import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserItem } from '../../components/UserItem';
import { loadUsers } from '../../redux/actions/userActions';
import { unloadUsers } from '../../redux/actions/userActions';

import './UserList.css';

class UserList extends Component {
    render() {
        return (
            <div className="App">
                <div className="btn-group">
                    <button onClick={() => this.props.loadUsers()} className="button">Load Users</button>
                    <button onClick={() => this.props.unloadUsers()} className="button">Unload Users</button>
                </div>

                {
                    (this.props.userList.length > 0) && 
                    <table id="users">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.userList.map((user) =>
                            <UserItem key={user.email} user={user}/>
                        )}
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: () => {
            dispatch(loadUsers());
        },
        unloadUsers: () => {
            dispatch(unloadUsers());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
