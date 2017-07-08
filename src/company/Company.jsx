import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'

import CompanyCard from './CompanyCard'

export class Company extends React.Component {
  static propTypes = {
    companies: PropTypes.array.isRequired,
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
        {this.renderCompanies(this.props.companies)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  companies: state.companies
})

export default connect(mapStateToProps)(Company)
