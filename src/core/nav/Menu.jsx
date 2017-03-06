import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

export default class Menu extends React.Component {
  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><MenuIcon /></IconButton>}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <MenuItem primaryText="Interns" />
        <MenuItem primaryText="Company" />
        <Divider />
        <MenuItem primaryText="About" />
      </IconMenu>
    )
  }
}

Menu.propTypes = {
}
