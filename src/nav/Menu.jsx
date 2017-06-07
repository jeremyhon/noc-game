import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

import { changeTitle } from '../actions'

class Menu extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    handleTitleChange: PropTypes.func.isRequired,
  }

  renderButton = (text, url) => {
    return (
      <MenuItem
        disabled={this.props.location.pathname === url}
        containerElement={<NavLink to={url} />}
        primaryText={text}
        onTouchTap={_.partial(this.props.handleTitleChange, text)}
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

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  handleTitleChange: changeTitle,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))
