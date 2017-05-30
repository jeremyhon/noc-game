import React from 'react'
import _ from 'lodash'
import Card from '../core/card/Card'
import SkillsContainer from '../stats/SkillsContainer'
import './Company.css'

export default class Company extends React.Component {
  state = {
    companies: [
      {
        name: 'UpGuard',
        needs: {
          business: 3,
          design: 6,
          technical: 8,
        }
      },{
        name: 'Workato',
        needs: {
          business: 9,
          design: 7,
          technical: 2,
        }
      },{
        name: 'EasilyDo',
        needs: {
          business: 1,
          design: 4,
          technical: 10,
        }
      }
    ]
  }

  renderCompany = (company, key) => {
    return (
      <Card
        key={key}
        className="company-card"
        title={company.name}
        subtitle="Needs"
        skills={company.needs}
      />
    )
  }

  renderCompanies = (companies) => _.map(companies, this.renderCompany)

  render() {
    return (
      <div className="company">
        You have reached the Company Component
        Available Companies:
        {this.renderCompanies(this.state.companies)}
      </div>
    )
  }
}

Company.propTypes = {}
