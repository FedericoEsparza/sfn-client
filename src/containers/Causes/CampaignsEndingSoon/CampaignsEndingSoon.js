import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import CauseCard from '../../../components/Causes/CauseCard/CauseCard'

const GET_CAUSES_ENDING_SOON_QUERY = gql`
  query getCausesEndingSoon($scope: String) {
  causes(scope: $scope) {
    id
    name
    amountRaised
    targetAmount
    endDate
  }
}
`

class CampaignsEndingSoon extends Component {
  render() {
    return (
      <Query query={GET_CAUSES_ENDING_SOON_QUERY} variables={{ scope: 'ending_soon' }}>
        {({ data, error, loading }) => {
          if (loading) {
            return <div className="white">loading</div>
          }
          if (error) {
            console.log(error)
            return <div>Error</div>
          }
          console.log(data.causes)
          return (
            <React.Fragment>
              <div className="campaigns_ending_soon-container">
                <h3 className="campaigns_ending_soon-title white">
                  Campaigns ending soon
                </h3>
                <div className="cause-cards">

                  { data.causes.map(cause => {
                    return <CauseCard
                      key={cause.id}
                      causeName={cause.name}
                      donatedAmount={cause.amountRaised}
                      numberOfDonors={12}
                      daysToGo={45}
                      organization="UNICEF"
                    />
                  })}
                </div>
                <NavLink activeClassName="nav__item--selected" to="/causes?q=ending">
                  See all ending causes
                </NavLink>
              </div>
            </React.Fragment>
          )
        }}
      </Query>
    )
  }
}

export default CampaignsEndingSoon
