import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

import { titleMap } from './Navbar'

class Menu extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  renderButton = (title, path) => {
    return (
      <MenuItem
        key={title}
        disabled={this.props.location.pathname === path}
        containerElement={<NavLink to={path} />}
        primaryText={title}
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
        {_.map(titleMap, this.renderButton)}
      </IconMenu>
    )
  }
}

export default withRouter(Menu)
