const URL = "https://thesimpsonsapi.com/api"

export const getCharacters = async (dispatch) => {
    const response = await fetch(`${URL}/characters`)
    if (!response.ok) {
        return
    }
    const data = await response.json()
    console.log(data.results)
    dispatch({ type: "get_characters", payload: data.results })
}

export const getLocations = async (dispatch) => {
    const response = await fetch(`${URL}/locations`)
    if (!response.ok) {
        return
    }
    const data = await response.json()
    console.log(data.results)
    dispatch({ type: "get_locations", payload: data.results })
}

export const getCharacter = async (id) => {
    const response = await fetch(`${URL}/characters/${id}`)
    if (!response.ok) {
        return
    }
    const data = await response.json()
    return data
}

export const getLocation = async (id) => {
    const response = await fetch(`${URL}/locations/${id}`)
    if (!response.ok) {
        return
    }
    const data = await response.json()
    console.log(data.results)
    return data
}









