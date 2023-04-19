export const getGifts = async (category) => {
    const api_key = 'cuXhvW1uWVQmEe8KTMGY5FR6TdMICpKR'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=15`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map( image => ({
        id: image.id,
        title: image.title,
        url: image.images.original.url
    }))

    return gifts;
}
