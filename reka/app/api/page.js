
const API_BASE_URL = "https://next-ecommerce-api.vercel.app"

export default async function fetchData () {
    const response = await fetch(`${API_BASE_URL}/products`)
    console.log(response)

    if(!response) {
        throw Error ("Failed to fetch Data")
    }
    return response.json()

}
