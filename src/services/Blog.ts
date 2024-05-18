export type BlogResponse = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
}

export const getBlog = async (): Promise<BlogResponse[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)

  return response.json()
}
