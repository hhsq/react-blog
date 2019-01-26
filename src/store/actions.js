const GET_CONT = "GET_CONT";
const IS_SHOW = "IS_SHOW";

export const blogContent = cont => {
    return {
        type: GET_CONT,
        cont
    };
};

export const isShowNav = bool => {
    return {
        type: IS_SHOW,
        bool
    };
};