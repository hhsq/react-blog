const defaultState = {
    isShow: false
};
const isShowNav = (state = defaultState, action) => {
    switch (action.type) {
        case "IS_SHOW":
            return Object.assign({}, state, {
                isShow: action.bool
            });
        default:
            return state
    }
};
export default isShowNav