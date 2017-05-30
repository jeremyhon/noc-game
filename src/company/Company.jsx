import React from 'react'
import _ from 'lodash'
import { Card, CardTitle, CardText } from 'material-ui/Card'
import SkillsContainer from '../stats/SkillsContainer'
import './Company.css'
import '../core/card.css'

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
      <Card key={key} className="company-card card">
        <CardTitle title={company.name} />
        <CardText>
          <SkillsContainer skills={company.needs} />
        </CardText>
      </Card>
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
