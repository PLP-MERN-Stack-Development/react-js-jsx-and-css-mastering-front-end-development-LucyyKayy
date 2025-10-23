const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(page = 1, limit = 10) {
  try {
    const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
