import apiRequest from "../request"

const apiUrl = process.env.API_URL

export async function getAll(page = 1, size = process.env.PAGE_SIZE, cache = true) {
  const res = await apiRequest('GET', '/posts')

  return res
}

export async function getAll1(page = 1, size = process.env.PAGE_SIZE, cache = true) {
  const res = await fetch(`${apiUrl}/posts`, {
    cache: cache ? 'force-cache' : 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function getById(id, cache = true) {
  const res = await apiRequest('GET', `/posts/${id}`)

  return res
}

export async function create(formData) {
  const res = await apiRequest('POST', `/posts`, formData)

  return res
}

export async function put(formData, id) {
  const res = await apiRequest('PUT', `/posts/${id}`, formData)

  return res
}

