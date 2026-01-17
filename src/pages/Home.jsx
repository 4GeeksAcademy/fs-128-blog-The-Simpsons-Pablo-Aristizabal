import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { getCharacters, getLocations } from "../services/API_services";
import { CharactersCard } from "../components/CharacterCard";
import { LocationCard } from "../components/LocationCard";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getLocations(dispatch)
	}, [])

	useEffect(() => {
		getCharacters(dispatch)
	}, [])

	return (
		<div className="mx-4">
			<h1 className="title">Characters</h1>
			<div className="carousel container">
				{store.characters.map(character => (
					<div className=" " key={character.id}>
						<CharactersCard character= {character} />
					</div>
				))}
			</div>
			<h1 className="title">Locations</h1>
			<div className="carousel container">
				{store.locations.map(location => (
					<div className=" " key={location.id}>
						<LocationCard location= {location} />
					</div>
				))}
			</div>
		</div>
	);
};

