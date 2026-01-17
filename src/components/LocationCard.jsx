import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const LocationCard = ({ location }) => {

    const { store, dispatch } = useGlobalReducer()

    const isFavorite = store.favorites.some(
        favorite => favorite.id === location.id && favorite.type === 'location'
    );

    const changeFavorite = () => {
        if (isFavorite) {
            dispatch({
                type: 'remove_favorites',
                payload: {
                    id: location.id,
                    type: 'location'
                }
            });
        } else {
            dispatch({
                type: 'add_favorites',
                payload: {
                    item: location,
                    itemType: 'location'
                }
            });
        }
    }

    return (
        <div className="container-fluid">
            <div className="card-contact ">
                <img
                    src={`https://cdn.thesimpsonsapi.com/1280/location/${location.id}.webp`}
                    className="card-img-top"
                    alt={location.name}
                    style={{ objectFit: "cover" }}
                />

                <div className="card-body ">
                    <h5 className="card-title">Name: {location.name}</h5>
                    <p className="card-text">Town: {location.town} </p>
                    <p className="card-text">Use: {location.use} </p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/location/${location.id}`}>
                            <button type="button" className="btn btn-outline-info">Learn more!</button>
                        </Link>
                        <button type="button" className="btn btn-outline-warning"><i onClick={changeFavorite} className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>

        </div>
    )
}