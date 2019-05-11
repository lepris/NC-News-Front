import React, { Component } from 'react';
import { Link } from '@reach/router';
import './SortTopMenu.css'
export default class SortTopMenu extends Component {

    state = {
        showMenu: false
    }

    showMenu = (e) => {
        e.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.hideMenu);
        });
    }
    hideMenu = (e) => {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.hideMenu);
        });
    }

    render() {
        let path = this.props.uri;
        if (path.slice(-1) !== '/') path = path.concat('/')


        return (

            <div className='TopButton Patua'>

                <Link className='TopButton Patua' to='/' onClick={this.showMenu}><i className="fas fa-filter bigIcon"></i><span className='TopButtonDescription'>Sorting Criteria</span></Link>
                {this.state.showMenu
                    ? (
                        <div className='DropMenu dropInsetShadow'>
                            <Link className='Patua DropMenuButton' to={path.includes('mostVoted') ? path : path.concat('mostVoted').replace('mostCommented/', '')} onClick={this.hideMenu}><i className="fas fa-thumbs-up"></i><span>Most Voted On</span></Link>
                            <Link className='Patua DropMenuButton' to={path.includes('mostCommented') ? path : path.concat('mostCommented').replace('mostVoted/', '')} onClick={this.hideMenu}><i className="fas fa-comments"></i><span>Most Commented</span></Link>

                            <p>{path}</p>
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

