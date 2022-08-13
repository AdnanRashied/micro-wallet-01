import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { PortfolioHolding } from '../../types';

const HOLDINGS = gql`
  query {
    allHoldings {
      id
      name
      category
      icon_url
      amount
      value_usd
      symbol
      denomination
      number
      pin
    }
  }
`;

function Portfolio() {
    const { loading, error, data } = useQuery(HOLDINGS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allHoldings?.map((h: PortfolioHolding ) => (
        <div key={h.id}>
            {h.name} {h.amount}
        </div>

    ));
}

export default Portfolio;
<VictoryPie
    data={[

    ]}>
</VictoryPie>