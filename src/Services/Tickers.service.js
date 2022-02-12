export async function postTicker(item) {
  await fetch('http://localhost:3001/tickers', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
          'Content-Type': 'application/json'
      }
  })
}

export async function deleteTicker(id) {
  await fetch(`http://localhost:3001/tickers/${id}`, {
      method: 'DELETE',        
  })
}

export async function patchTicker(item, id) {
  await fetch(`http://localhost:3001/tickers/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(item),
    headers: {
        'Content-Type': 'application/json'
    }
})
}

export async function getTickerByCodigo(codigo) {

  const response = await fetch(`http://localhost:3001/tickers?codigo=${codigo}`)
  if(!response.ok) {
      throw new Error ('Erro ao retornar o ticker solicitado.')
  }
  const teste = await response.json()
  const ticker = teste.map((item)=>item)  
  return ticker[0]
}