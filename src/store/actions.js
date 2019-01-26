const GET_CONT = "GET_CONT";

export const blogContent = cont => {
    return {
        type: GET_CONT,
        cont
    };
};