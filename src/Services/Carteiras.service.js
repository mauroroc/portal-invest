export async function getCarteiras() {
    const response = await fetch('http://localhost:3001/carteiras')
    if(!response.ok) {
        throw new Error ('Erro ao retornar as carteiras.')
    }
    return await response.json()
}

export async function postCarteira(item) {
    await fetch('http://localhost:3001/carteiras', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function deleteCarteira(id) {
    await fetch(`http://localhost:3001/carteiras/${id}`, {
        method: 'DELETE',        
    })
}

export async function getCarteirasById(id) {
    const response = await fetch(`http://localhost:3001/carteiras/${id}?_embed=tickers`)
    if(!response.ok) {
        throw new Error ('Erro ao retornar os tickers das carteiras.')
    }
    return await response.json()
  }