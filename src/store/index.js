import { createStore } from 'redux'

const initialState={
    counter: 0,
    isHidden: false
}


const counterReducer = (state = initialState, action)=>{
    console.log('reducer fired')
    if(action.type === 'inc'){
        return {...state, counter: state.counter += 1}
    }
    if(action.type === 'dec'){
        return {...state, counter: state.counter -= 1}
    }

    if(action.type === 'increseby'){
        return {...state, counter: state.counter += action.amount}
    }

    if(action.type === 'toggleVisibility'){
        return {...state,
            isHidden: !state.isHidden
        }
    }

    return state
}

const store = createStore(counterReducer)


export default store