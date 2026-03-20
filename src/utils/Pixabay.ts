// lib/pixabay.ts
export async function fetchPixabay(query: string, perPage: number = 9) {
  const API_KEY = process.env.API_KEY; // sua chave
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=${perPage}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.hits; // retorna array de imagens
}
