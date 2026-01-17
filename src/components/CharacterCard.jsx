import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const CharactersCard = ({ character }) => {

    const { store, dispatch } = useGlobalReducer()

    const isFavorite = store.favorites.some(
        favorite => favorite.id === character.id && favorite.type === 'character'
    );

    const changeFavorite = () => {
        if (isFavorite) {
            dispatch({
                type: 'remove_favorites',
                payload: {
                    id: character.id,
                    type: 'character'
                }
            });
        } else {
            dispatch({
                type: 'add_favorites',
                payload: {
                    item: character,
                    itemType: 'character'
                }
            });
        }
    }

    return (
        <div className="container-fluid">
            <div className="card-contact">
                <img
                    src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`}
                    className="card-img-top"
                    alt={character.name}
                    style={{ objectFit: "cover" }}
                />

                <div className="card-body ">
                    <h5 className="card-title">Name: {character.name}</h5>
                    <p className="card-text">Gender: {character.gender} </p>
                    <p className="card-text">Age: {character.age} </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/character/${character.id}`}>
                            <button type="button" className="btn btn-outline-info">Learn more!</button>
                        </Link>
                        <button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart" onClick={changeFavorite}></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}