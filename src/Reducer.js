import {ADD_TO_BASKET,REMOVE_FROM_BASKET,SET_USER} from './Type';
import {updateObject} from './Utils';

export const initialState={
    basket:[],
    user:null
};

const addToBasket=(State,dataToUpdate)=>(updateObject(State,dataToUpdate));

const removeFromBasket=(State,id)=>{
    const index=State.basket.findIndex(item=>item.id===id);
    if(index>=0){
        const newBasket=[...State.basket];
        newBasket.splice(index,1);
        return updateObject(State,{basket:[...newBasket]})
    }
    else{
        return State;
    }
}
const setUser=(State,dataToBeChange)=>{
    return (updateObject(State,dataToBeChange))
}

export const reducer=(State=initialState,Action)=>{
    switch (Action.type) {
        case ADD_TO_BASKET:return addToBasket(State,{basket:[...State.basket,Action.item]});
        case REMOVE_FROM_BASKET:return removeFromBasket(State,Action.id);
        case SET_USER:return setUser(State,{user:Action.user})
        default:return State;
    }
}