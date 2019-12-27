import React from "react";
import {connect} from 'react-redux'
import {changeDescription, login} from "./loginActions";
import {bindActionCreators} from 'redux'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {login: '', password: ''}
    }

    render() {
        return (
            <div>
                <div className="login__row">
                    <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
                        <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"/>
                    </svg>
                    <input type="text"
                           value={this.props.login}
                           onChange={this.props.changeDescription}
                           className="login__input name" placeholder="Username"/>
                </div>
                <div className="login__row">
                    <svg className="login__icon pass svg-icon" viewBox="0 0 20 20">
                        <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"/>
                    </svg>
                    <input type="password"
                           className="login__input pass"
                           value={this.props.password}
                           onChange={this.props.changeDescription}
                           placeholder="Password"/>
                </div>

                <button type="button" className="login__submit"
                        onClick={() => login(this.props.login, this.props.password)}>Sign in
                </button>
            </div>
        )
    }


}


const mapToProps = state => ({login: state.login.login, password: state.login.password})
const mapDispatchToProps = dispatch =>
    bindActionCreators({changeDescription}, dispatch)
export default connect(mapToProps, mapDispatchToProps)(LoginForm)