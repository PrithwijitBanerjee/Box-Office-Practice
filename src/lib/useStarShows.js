import { useEffect, useReducer } from "react";

//custom hooks ....
const usePersistedReducer = (reducer,initialState,localStorageKey) => {
    const [state,dispatch] = useReducer(reducer,initialState,initialState => {
        const strVal = localStorage.getItem(localStorageKey);
        return strVal ? JSON.parse(strVal) : initialState;
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey,JSON.stringify(state));
    },[state,localStorageKey]);

    return [state,dispatch];
}
const starredShowsReducer = (currentShows, action) => {
    switch (action.type) {
        case 'STAR': return currentShows.concat(action.showId);
        case 'UNSTAR': return currentShows.filter(showId => showId !== action.showId);
        default: return currentShows;
    }
}

// another custom hooks...
export const useStarShows = () => usePersistedReducer(starredShowsReducer,[],'starredShows');