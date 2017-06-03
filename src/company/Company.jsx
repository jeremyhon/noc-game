import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import * as actions from './actions'
import './Company.css'

import Card from 'components/card'
import skillsPropType from 'components/stats/skillsPropType'

const CompanyCard = (props) => {
  return (
    <Card
      className="company-card"
      title={props.name}
      subtitle="Needs"
      skills={props.needs}
    />
  )
}

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  needs: skillsPropType.isRequired,
}

class Company extends React.Component {
  static propTypes = {
    companies: PropTypes.array.isRequired,
    addCompany: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    _.times(3, this.props.addCompany)
  }

  renderCompany = (company, key) => {
    return (
      <CompanyCard key={key} {...company} />
    )
  }

  renderCompanies = (companies) => _.map(companies, this.renderCompany)

  render() {
    return (
      <div className="company">
        You have reached the Company Component
        Available Companies:
        {this.renderCompanies(this.props.companies)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  companies: state.companies
})

const mapDispatchToProps = {
  addCompany: actions.addCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)
