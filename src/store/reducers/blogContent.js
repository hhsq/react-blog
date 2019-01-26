const defaultState = {
    navArr: []
};
const blogContent = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONT":
            return Object.assign({}, state, {
                navArr: action.cont
            });
        default:
            return state
    }
};
export default blogContent