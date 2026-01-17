export const initialStore = () => {
  return {
    characters: [],
    favorites: [],
    locations: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "get_characters":
      return {
        ...store,
        characters: action.payload
      }

    case "get_locations":
      return {
        ...store,
        locations: action.payload
      }

      

    case 'set_favorites':
      return {
        ...store,
        favorites: action.payload
      }
    case 'add_favorites':
      const { item, itemType } = action.payload;
      const favoriteItem = { ...item, type: itemType };

      //Comprobación de si existe en favoritos
      const exists = store.favorites.some(
        favorite => favorite.id === item.id && favorite.type === item.type
      );
      if (exists) {
        return store;
      }
      //Añadido a favoritos
      return {
        ...store,
        favorites: [...store.favorites, favoriteItem]
      }
    case 'remove_favorites':
      return {
        ...store,
        favorites: store.favorites.filter(
          favorite => !(favorite.id === action.payload.id && favorite.type === action.payload.type)
        )
      }





    default:
      throw Error('Unknown action.');
  }
}
