import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Menu from './Menu'
import Clock from './Clock'
import './Navbar.css'

export const titleMap = {
  "/noc-game": "Interns",
  "/noc-game/companies": "Companies",
  "/noc-game/about": "About"
}

const matchUrl = (subject, toMatch) => {
  const removeTrailingSlashAndWhitespace = (str) => _.replace(str, /\/\s*$/, "")
  const tempSubject = removeTrailingSlashAndWhitespace(subject)
  const tempToMatch = removeTrailingSlashAndWhitespace(toMatch)
  return tempSubject === tempToMatch
}

const findTitleByUrl = (titleMap, url) => {
  const title = _.find(titleMap, (_, titleUrl) => matchUrl(url, titleUrl))
  if (title) {
    return title
  }
  return "Not Found"
}

class Navbar extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    return (
      <AppBar
        className="navbar"
        title={findTitleByUrl(titleMap, this.props.location.pathname)}
        iconElementLeft={<Menu />}
        iconElementRight={<Clock />}
      />
    )
  }
}

export default withRouter(Navbar)
