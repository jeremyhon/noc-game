import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer'

import InternCard from './InternCard'
import { populateInterns, deselectIntern } from '../actions'
import './Intern.css'

export class Intern extends React.Component {
  static propTypes = {
    deselectIntern: PropTypes.func.isRequired,
    interns: PropTypes.array.isRequired,
    populateInterns: PropTypes.func.isRequired,
    selectedIntern: PropTypes.object,
  }

  componentDidMount = () => {
    this.props.populateInterns(3)
  }

  renderIntern = (intern, key) => (
    <InternCard key={key} {...intern} />
  )

  changeDrawerState = (toOpen, reason) => {
    if (!toOpen) {
      return this.props.deselectIntern();
    }
  }

  render() {
    const isDrawerOpen = this.props.selectedIntern !== undefined

    return (
      <div className="intern">
        {_.map(this.props.interns, this.renderIntern)}
        <Drawer
          docked={false}
          onRequestChange={this.changeDrawerState}
          open={isDrawerOpen}
          openSecondary
          width={250}
        >
          {isDrawerOpen && this.renderIntern(this.props.selectedIntern)}
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  interns: state.interns,
  selectedIntern: _.find(state.interns, ['id', state.selectedInternId]),
})

const mapDispatchToProps = {
  deselectIntern,
  populateInterns,
}

export default connect(mapStateToProps, mapDispatchToProps)(Intern)
