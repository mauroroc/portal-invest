const API_KEY = 'K2UJHS2HPCGCIYN0'

export async function getPriceByTicker(ticker) {
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}.SA&interval=5min&apikey=${API_KEY}`
  const response = await fetch(apiUrl)
  if(!response.ok) {
      throw new Error ('Erro ao consular API externa.')
  }
  return await response.json()
}