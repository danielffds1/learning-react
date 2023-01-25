//load-posts.js dentro da pasta utils -> src
//É uma função async pois estamos utilizando o wait dentro da função
export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  //Pegando a API de fotos
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
  //Fazendo as requisições em paralelo, estão resolvendo tudo de uma vez
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  //Convertendo para JSON
  const postsJson = await posts.json();
  const photosJson = await photos.json();
  //Na API tinhamos 5000 fotos, mas apenas 100 post então ele irá fazer um zip, que irá juntar dois ARRAYs
  const postsAndPhotos = postsJson.map((post, index) => {
    //Estou retornando um objeto, pois o post é isto
    return { ...post, cover: photosJson[index].url };
  });
  return postsAndPhotos;
};
