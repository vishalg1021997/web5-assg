import React from 'react'
import List from './List'

const Heading = () => {

    const data = [
        {
            Mobile_Operating_System: ['Android', 'Blckberryy', 'iPhone', 'Windows Phone']
        },
        {
            Mobile_Manufacturers: ['Samsung', 'HTC', 'Micromax', 'Apple']
        }
    ]


    return (
        <div style={{ textAlign: 'left', padding: '25px' }}>
            {
                data.map((el) => (
                    <div key={Object.keys(el)}>
                        <h2>{Object.keys(el)[0].replace(/_/g, " ")}</h2>
                        <List data={el[Object.keys(el)]} />
                    </div>
                ))
            }
        </div>
    )
}

export default Heading