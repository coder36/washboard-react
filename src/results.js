import React from 'react'
import {connect} from 'react-redux'

// use a pure function when no internal state is required
// As the function is decorated with connect, it will contain the contents of the "store"


export default connect((state) => state)(function(props) {
    const {search_string, mydiet} = props
    return(
        <div>
            <h1 style={{margin: 10}} >{search_string}</h1>

            { mydiet.map( (d) => (
                <div style={{padding: 10, background: "#eee", margin: 30}} key={d.id}>
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                </div>
            ))}

        </div>
    )

})