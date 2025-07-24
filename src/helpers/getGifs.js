export const getGifs = async (category) => {
  const limit = 12;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Ra5nMBx1haDwom0UBegkN2IlVxIGdPRv&q=${category}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  // console.log(data)
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  }));
  return gifs;
};