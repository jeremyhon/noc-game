import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

class Menu extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  renderButton = (text, url) => {
    return (
      <MenuItem
        disabled={this.props.location.pathname === url}
        containerElement={<NavLink to={url} />}
        primaryText={text}
      />
    )
  }

  render() {
    const MenuButton = (
      <IconButton>
        <MenuIcon color="white" />
      </IconButton>
    )

    return (
      <IconMenu
        iconButtonElement={MenuButton}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        {this.renderButton('Interns', '/')}
        {this.renderButton('Companies', '/companies')}
        <Divider />
        {this.renderButton('About', '/about')}
      </IconMenu>
    )
  }
}

export default withRouter(Menu)
