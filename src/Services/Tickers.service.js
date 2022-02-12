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