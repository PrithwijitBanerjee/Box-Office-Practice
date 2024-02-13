
const apiGet = async searchQueryStr => {
    try {
        const res = await fetch(searchQueryStr);
        const body = await res.json();
        return body;
    } catch (error) {
        throw new Error(error);
    }
}


// Search movie data from API based on query
export const searchForShows = query => apiGet(`${process.env.REACT_APP_BASE_URL}/search/shows?q=${query}`);

// Search Actors data from API based on query
export const searchForPeople = query => apiGet(`${process.env.REACT_APP_BASE_URL}/search/people?q=${query}`);

// get particular show details based on showId...
export const getShowById = showId => apiGet(`${process.env.REACT_APP_BASE_URL}/shows/${showId}?embed[]=seasons&embed[]=cast`);


export const getShowsByIds = async showIds => {
    const promises = showIds.map(showId => getShowById(showId));
      const res = await Promise.all(promises);
      return res.map(show => {
        return { show }
      });
}