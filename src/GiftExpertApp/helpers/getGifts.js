
const getGifts = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=8kLrlo8YQge6rb3zk8T3IBBLzUVNhkmH`;
    const resp = await fetch ( url );
    const {data} = await resp.json()

    const gifts = data.map ( gif => {
                    return {
                        id: gif.id,
                        title: gif.title,
                        url: gif.images?.downsized_medium.url
                    }
                })
     
    return gifts
    }

    export default getGifts;