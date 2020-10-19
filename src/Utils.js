export const updateObject=(State,updatedValues)=>({...State,...updatedValues})

export const getTotal=(basket)=>(basket?.reduce((prevTotal,nextItem)=>prevTotal+nextItem.price,0))
