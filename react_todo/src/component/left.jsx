import React from 'react'



export const Left = (props) => {
    const { incage, decage, age } = props

   const [flag,change] = React.useState(false)

    const text = () =>{
        
    }

    return (
        <div style={{ width: "30%", height: '80vh' }}>
            <img src="/logo192.png" alt="" />
            <h1>Vishal Gupta</h1>
            <h2>Age = {age}</h2>
            <button onClick={incage}>Increase</button>
            <button onClick={decage}>Decrease</button>
            <button onClick={() => change(!flag)}>{flag? 'hide details' :'Show More Details'}</button>

            {
                flag? <div><h2>Location:Mumbai</h2> <h2>Profession: Student</h2> </div>  :''
            }
        </div>
    )
}
