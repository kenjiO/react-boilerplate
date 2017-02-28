import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import { login, logout } from '../actions/user-actions'
import UserComponent from '../components/UserComponent'


class UserContainer extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        userData: PropTypes.object.isRequired
    }

    componentWillMount() {
        //console.log('UserContainer.componentWillMount()  this.props.userData is ', this.props.userData)
    }

    componentWillReceiveProps(nextProps) {
        //console.log('UserContainer.componentWillReceiveProps()  nextProps.userData.user is ', nextProps.userData.user)
    }

    render() {
        return (
            <div style={{ border: "1px solid red", margin: '15px', width: '300px', padding: '20px' }}>
                UserClassContainer<br />
                <UserComponent
                    userData={this.props.userData}
                    login={this.props.login}
                    logout={this.props.logout}
                    />
            </div>

        )
    }
}

// without this method this.props will only have the dispatch function bound to it
// all keys in the return object get mapped to this.props
function mapStateToProps(state) {
    //state is the entire redux store
    return { userData: state.userData };
}

export default connect(
        mapStateToProps,
        { login, logout }
    )(UserContainer);