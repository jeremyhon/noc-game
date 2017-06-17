import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'

import CompanyCard from './CompanyCard'
import { addCompany } from '../actions'
import generateCompany from 'lib/company'
import './Company.css'

export class Company extends React.Component {
  static propTypes = {
    companies: PropTypes.array.isRequired,
    addCompany: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    _.times(3, () => this.props.addCompany(generateCompany()))
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

const mapDispatchToProps = {
  addCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)
