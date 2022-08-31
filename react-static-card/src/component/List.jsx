import React from 'react'

const List = ({ data }) => {
    console.log(data)
    return (
        <div>
            <ul>
                {
                    data.map((el) => (
                        <li key={el}>{el}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List