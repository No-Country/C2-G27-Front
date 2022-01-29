import React from 'react';

import {Card, CardBody,CardSubtitle,CardTitle,CardText} from 'reactstrap';

export default function CriptoItem() {

    const criptoData = [
        {
            id:'1',
            name: 'Bitcoin',
            price: 'US$ 8,270',
            brand: 'BTC',
            satoshis: '0,00000031',
            color: 'success'
        },
        {
            id:'2',
            name: 'Ethereum',
            price: 'US$ 457 ',
            brand: ' ETH ',
            satoshis: '2',
            color: 'success'
        },
        {
            id:'3',
            name: 'Dash',
            price: 'US$ 562.33',
            brand: 'DASH',
            satoshis: '2',
            color: 'danger'
        },
        {  
            id:'4',
            name: 'Ripple',
            price: 'US$ 0.24',
            brand: 'XRP',
            satoshis: '150',
            color: 'success'
        },

        { 
            id:'5',
            name: 'NEO',
            price: 'US$ 35.30',
            brand: 'NEO',
            satoshis: '73',
            color: 'warning'
        },

    ]


    return (
        <div className='cripto-row'>
            {criptoData.map((data) => <Card
                body
                color={data?.color}
                inverse
                className='m-2 '
            >
                <CardBody > 
                    <CardTitle tag="h3">
                        {data?.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2"
                        tag="h5"
                    >
                        {data?.brand}
                    </CardSubtitle>
                    <CardText>
                        Price: {data?.price}
                    </CardText>
                    <CardText>
                        Satoshis: {data?.satoshis}
                    </CardText>
                   
                </CardBody>
            </Card> ) }
        </div>
    )
}

