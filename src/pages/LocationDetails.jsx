import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { getLocation } from "../services/API_services"

export const LocationDetails = () => {
    const { id } = useParams()
    const [location, setlocation] = useState({})
    const { store, dispatch } = useGlobalReducer()

    const getLocationData = async () => {
        const locationData = await getLocation(id)
        console.log(locationData)
        setlocation(locationData)
    }

    useEffect(() => {
        getLocationData()
    }, [])

    
    return (
        <div className="container py-4">
            <Link to={`/`}>
                <button className="btn btn-link p-0 mb-3" > <i className="fa-solid fa-arrow-left"></i> Go Back</button>
            </Link>
            <div className="card-details shadow-sm">
                <div className="row g-0">
                    <div className="col-md-4 p-3 d-flex justify-content-center align-items-center">
                        <img
                            className="img-fluid"
                            alt={location.name}
                            src={`https://cdn.thesimpsonsapi.com/1280/location/${location.id}.webp`}
                            style={{ maxHeight: 260, objectFit: "contain" }} />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="fw-bold mb-">Name:  {location.name}</p>
                            <p className="fw-bold mb-">Town:  {location.town}</p>
                            <p className="fw-bold mb-">Use:  {location.use}</p>
                            <div className="d-flex gap-2 mt-3">
                                <button className="btn btn-primary" >
                                    Add to favorites
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}