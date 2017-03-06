import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import './Navbar.scss';

class Navbar extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string
  }

  onTap = () => {
    console.log('tapped navbar icon')
  }

  render() {
    let currentPage = this.props.currentPage
    console.log(currentPage)

    return (
      <AppBar
        className="navbar"
        title="Intern Manager"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onRightIconButtonTouchTap={this.onTap}
      />
    )
  }
}

export default Navbar
