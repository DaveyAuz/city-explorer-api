// async function getPhotosRefactor (request, response, next) {)
//     try {
//         let keywordFromFrontEnd = request.query.searchQuery;

//         let baseUrl = `https://api.unsplash.com/search/photos';

//         let queryStrings = {
//             query: keywordFromFrontEnd,
//             client_id: process.env.UNSPLASH_CLIENT_ID,
//             client_secret: process.env.UNSPLASH_CLIENT_SECRET,
    
//     axios.get(baseUrl, {params: queryStrings})
//     .then(photoResults => photoResults.data.results.map(pic => new Photo(pic)))

//         let photResult = await axios.get(baseUrl, { params: queryStrings });

//         let photosToSend = photoResult.data.results.map(pic => new Photo(pic));

//         response.status(200).send(photosToSend);

//         } catch (error) {
//             next(error);
//         }

// module.exports = getPhotosRefactor;