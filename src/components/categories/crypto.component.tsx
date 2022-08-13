import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { CryptoHolding } from '../../types';

const Canoodling = gql`
query {
    id,
    name,
    amount
}
`;

function Crypto() {
    const { loading, error, data } = useQuery(Canoodling);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allHoldings?.map((h: CryptoHolding ) => (
        <div key={h.id}>
            {h.name} {h.amount}
        </div>

    ));
}

export default Crypto;
