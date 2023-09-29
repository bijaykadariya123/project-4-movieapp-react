import url from "./url"

// Index Loader:

export const indexLoader = async ()=>{
    const response = await fetch(url)
    const Movies = await response.json()
    return Movies
}

export const showLoader = async({params})=>{
    const id = params.id
    const response = await fetch(url + id)
    const movie = await response.json()
    return movie
}

