export const initialState = {
  basket: [],
  user: null,
  searchResults: [],
  searchValue: ''
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    case 'ADD_TO_BASKET':
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      };

    case 'REMOVE_FROM_BASKET':
      //logic for removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      if (index >= 0) {
        //item exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in the Basket`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;

    case 'ADD_TO_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.searchedItems
      };

    case 'SET_INPUT':
      return {
        ...state,
        searchValue: action.input
      };
  }
}

export default reducer;
