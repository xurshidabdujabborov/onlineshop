const productReducer = (state , action) => {
    switch (action.type) {
        case "ADD_TO_CARD":
         return{
            result: [...state , action.payload]
         }
        default:
        return state
    }
}