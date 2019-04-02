import React, { Component } from 'react';
import './navigation.css';
import NavigationIcon from './NavigationIcon';

class Navigation extends Component {

  constructor(props) {
   super(props);
    this.state = {
      navState: false
    }

    this.handleClickNavbar = this.handleClickNavbar.bind(this);
  }

  handleClickNavbar() {
    this.setState( (state) => ({
      navState: !state.navState
    }) )
  }

  render() {
   
    return (
      <nav className={"navigation " + (this.state.navState ? 'active' : '' )}>
       <button class="cn-button" id="cn-button" onClick={this.handleClickNavbar} >
        <NavigationIcon color={'#000000'} />
       </button>
				<div className={"cn-wrapper " + (this.state.navState ? 'opened-nav' : '') } id="cn-wrapper">
				    <ul>
				      <li><a href="/about-me"><span class="icon-picture"></span></a></li>
				      <li><a href="/contact"><span class="icon-headphones"></span></a></li>
				      <li><a href="/"><span class="icon-home"></span></a></li>
				      <li><a href="/projects"><span class="icon-facetime-video"></span></a></li>
				      <li><a href="/resume"><span class="icon-envelope-alt"></span></a></li>
				     </ul>
				</div>
      </nav>
    );
  }

}

export default Navigation;