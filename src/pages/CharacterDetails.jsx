import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCharacter } from "../services/API_services"
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const CharacterDetails = () => {

    const { id } = useParams()

    const [character, setCharacter] = useState({})

    const { store, dispatch } = useGlobalReducer()

    const getCharacterData = async () => {
        const characterData = await getCharacter(id)
        setCharacter(characterData)
    }

   


    useEffect(() => {
        getCharacterData()
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
                            alt={character.name}
                            src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`}
                            style={{ maxHeight: 260, objectFit: "contain" }} />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="  "> {character.name} </h1>
                            <p className="fw-bold mb-">Occupation:  {character.occupation}</p>
                            <p className="fw-bold mb-">DOB:  {character.birthdate}</p>
                            <p className="fw-bold mb-">Age:  {character.age}</p>
                            <p className="fw-bold mb-">Gender:  {character.gender}</p>
                            <p className="fw-bold mb-">Status:  {character.status}</p>
                            <div className="d-flex gap-2 mt-3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}