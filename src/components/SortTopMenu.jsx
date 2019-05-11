import React, { Component } from 'react';
import { Link } from '@reach/router';
import './SortTopMenu.css'
export default class SortTopMenu extends Component {

    state = {
        showMenu: false,
        mostVotedLink: ''
    }

    componentDidMount() {
        let currentPath = window.location.pathname;
        this.setState({ currentPath: currentPath })
    }
    showMenu = (e) => {
        e.preventDefault();
        this.setState({ showMenu: true })
    }
    hideMenu = (e) => {
        this.setState({ showMenu: false })
    }

    finishMostVoted = () => {
        const { currentPath } = this.state;


        if (currentPath.includes('mostVoted')) {
            this.setState({ mostVotedLink: currentPath })
        } else {
            this.setState({ mostVotedLink: currentPath.concat('mostVoted') })
        }
        this.setState({ showMenu: false })
    }

    render() {


        return (

            <div className='TopButton Patua'>

                <Link className='TopButton Patua' to='/' onClick={this.showMenu}><i className="fas fa-filter bigIcon"></i><span className='TopButtonDescription'>Filter</span></Link>
                {this.state.showMenu
                    ? (
                        <div className='DropMenu dropInsetShadow'>
                            <Link className='Patua DropMenuButton' to={this.state.mostVotedLink} onClick={this.finishMostVoted}><i className="fas fa-thumbs-up"></i><span>Most Voted On</span></Link>
                            <p>{this.state.currentPath}</p>
                        </div>
                    )
                    : (
                        null
                    )

                }
            </div>
        );
    }
}

