require('dotenv').config()

const getUnsplashUrl = (pageNumber) =>  {
    const baseUrl = 'https://api.unsplash.com/photos/?client_id='
    const unsplash = process.env.UNSPLASHACCESS
    const addPage = `&page=${pageNumber}`
    const resultsPage = '&per_page=30'
    return `${baseUrl}${unsplash}${addPage}${resultsPage}`
}

const getUnsplashDetail = (id) =>  {
    const baseUrl = `https://api.unsplash.com/photos/${id}?client_id=`
    const unsplash = process.env.UNSPLASHACCESS
    return `${baseUrl}${unsplash}`
}

const getUnsplashSearchUrl = (search) => {
    const baseUrl = `https://api.unsplash.com/search/photos/?client_id=`
    const unsplash = process.env.UNSPLASHACCESS
    const searchQuery = `&query=${search}`
    return `${baseUrl}${unsplash}${searchQuery}&per_page=30`
}

module.exports = {
    getUnsplashUrl,
    getUnsplashDetail,
    getUnsplashSearchUrl
}