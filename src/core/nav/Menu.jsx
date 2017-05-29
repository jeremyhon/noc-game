import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

export default class Menu extends React.Component {
  hideButton = (linkedPage) => this.props.currentPage === linkedPage

  renderButton = (text, url) => {
    if (this.props.currentPage !== url) {
      return (
        <MenuItem
          containerElement={<Link to={url} />}
          primaryText={text}
        />
      )
    }
    return null
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

Menu.propTypes = {
  currentPage: PropTypes.string.isRequired,
}
