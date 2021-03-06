import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import MuiDrawer from 'material-ui/Drawer'

import Minicard from 'components/minicard'
import { deselectIntern } from '../actions'
import './Drawer.css'

export class Drawer extends React.Component {
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

  renderCompany = (company) => {
    const skills = `B:${company.needs.business}
    D:${company.needs.design}
    T:${company.needs.technical}`
    return (
      <Minicard
        key={company.name}
        id={company.id}
        content={skills}
        name={company.name}
      />
    )
  }

  render() {
    const isDrawerOpen = this.props.selectedInternId !== ''

    return (
      <MuiDrawer
        className="drawer"
        docked={false}
        onRequestChange={this.changeDrawerState}
        open={isDrawerOpen}
        openSecondary
        width={270}
      >
        {isDrawerOpen &&
          _.map(this.props.companies, this.renderCompany)}
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
