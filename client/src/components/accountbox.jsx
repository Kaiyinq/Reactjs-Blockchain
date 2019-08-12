import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";


class AccountBox extends Component {
    state = { 
        items: this.props.items || [],
        showItems: false,
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState(prevState => ({
                showItems: false,
            }));
          }
    }

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }));
    }

    selectItem = (item) => {
        if (item.id === 2) {
            console.log("Logout");
        }
        this.setState({
            showItems: false,
        });
    }

    render() { 
        return ( 
            <div ref={this.setWrapperRef}>
                <div className="account-btn" onClick={this.dropDown}>
                    Username <FontAwesomeIcon icon={faCaretDown} />
                </div>
                {this.state.showItems ? (
                    <ul className="custom-menu">
                        {this.state.items.map(item => 
                            <li key={item.id} onClick={() => this.selectItem(item)} >
                                <i>
                                    {item.icon}
                                </i>
                                <Link to={item.route} className="a_override">{item.value}</Link>
                            </li>
                        )}
                    </ul>
                ) : null}
            </div>
         );
    }
}
 
export default AccountBox;