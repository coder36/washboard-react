
import {createStore} from 'redux'

const initial_state = {}

function reducer(state = initial_state, action) {
    switch(action.type) {
        case "SAVE":
            const data = {...action.data}
            return {...state, ...data }

        default:
            return state

    }
}

let store = createStore( reducer )  

export function save( data ) {    
    store.dispatch( {type: "SAVE", data})
}

export default store