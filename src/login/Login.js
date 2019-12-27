import React from "react";
import "./teste.css"

export default class login extends React.Component {
    render() {
        return (
            <div className="demo">
                <div className="login">
                    <div className="login__check"/>
                    <div className="login__form">
                        {this.props.children}
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <p className="login__signup">Don't have an account? &nbsp;<a>Sign up</a></p>
                    </div>
                </div>
                <div className="app">
                    <div className="app__top">
                        <div className="app__menu-btn">
                        </div>
                        <svg className="app__icon search svg-icon" viewBox="0 0 20 20">
                            <path d="M20,20 15.36,15.36 a9,9 0 0,1 -12.72,-12.72 a 9,9 0 0,1 12.72,12.72"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}