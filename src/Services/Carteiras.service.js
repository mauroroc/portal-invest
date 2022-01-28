export async function getCarteiras() {
    const response = await fetch('http://localhost:3001/carteiras')
    if(!response.ok) {
        throw new Error ('Erro ao retornar as carteiras.')
    }
    return await response.json()
}