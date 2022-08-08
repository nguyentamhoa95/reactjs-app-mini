//
const initState = {
  users: [
    { id: 1, name: "Eric" },
    { id: 2, name: "John" },
    { id: 3, name: "Lena Bowem" },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
