
const API_BASE_URL = "https://next-ecommerce-api.vercel.app/products"

export default async function fetchData (skip) {
    
    const response = await fetch(`${API_BASE_URL}?skip=${skip}`)
    console.log(response)

    if(!response) {
        throw Error ("Failed to fetch Data")
    }
    return response.json()

}

