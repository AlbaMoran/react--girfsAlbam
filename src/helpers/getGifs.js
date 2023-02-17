export const getGifs= async(category)=>{

    const url= `https://api.giphy.com/v1/gifs/search?api_key=PAHsJ5q8YGHSSzOM42SFP6QyqHT3j5bZ&q=${ category }&limit=3`
    console.log(url)
    
    const resp = await fetch(url);

    const {data} = await resp.json();
    //console.log(data)
    const gifs = data.map (gif =>({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))

      return gifs;

}