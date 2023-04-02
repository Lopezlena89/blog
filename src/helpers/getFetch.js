
export const getFetch = async() => {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const resp =await fetch(url);
    const data = await resp.json();
    

  return{
    data
  }
}
