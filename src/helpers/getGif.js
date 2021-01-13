export const getGif =  async (category) => 
{
    const api = 'b1q5kGWHwKqRuuDIbBHF34sKj5VqxurU';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=4&api_key=${api}&raiting=g`
    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log(data);
     const gifs = data.map( img => 
        {
        return {
            id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return gifs;
    }