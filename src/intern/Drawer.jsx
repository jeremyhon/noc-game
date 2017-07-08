import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import MuiDrawer from 'material-ui/Drawer'

import { deselectIntern } from '../actions'
// import './Drawer.css'

class Drawer extends React.Component {
  static propTypes = {
    companies: PropTypes.array.isRequired,
    deselectIntern: PropTypes.func.isRequired,
    selectedInternId: PropTypes.string
  }

  changeDrawerState = (toOpen, reason) => {
    if (!toOpen) {
      return this.props.deselectIntern();
    }
  }

  render() {
    const isDrawerOpen = this.props.selectedInternId !== ""

    return (
      <MuiDrawer
        docked={false}
        onRequestChange={this.changeDrawerState}
        open={isDrawerOpen}
        openSecondary
        width={270}
      >
        {isDrawerOpen}
      </MuiDrawer>
    );
  }

}

const mapStateToProps = (state) => ({
  companies: state.companies,
  selectedInternId: state.selectedInternId,
})

const mapDispatchToProps = {
  deselectIntern,
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
