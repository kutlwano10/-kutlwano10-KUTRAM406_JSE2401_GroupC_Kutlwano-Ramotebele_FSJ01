
const API_BASE_URL = "https://next-ecommerce-api.vercel.app/products"

export  async function getProductDetails (productId) {
    const response = await fetch(`${API_BASE_URL}/${productId}`)
    console.log(response)

    if(!response) {
        throw Error ("Failed to fetch Data")
    }
    return response.json()

}

export default async function productDetails ({params}) {
    const Product = await getProductDetails(params.id)

    return <main>{Product.id}</main>
        
    
}


