import { useEffect, useState } from "react"

// Custom Hooks...
const usePersistedState = (initialValue,sessionStorageKey) => {
    const [searchStr, setSearchStr] = useState(() =>{
        const persistedVal = sessionStorage.getItem(sessionStorageKey);
        return persistedVal  ? JSON.parse(persistedVal) : initialValue;
    });

    useEffect(() => {
            sessionStorage.setItem(sessionStorageKey,JSON.stringify(searchStr))
    },[searchStr,sessionStorageKey]);

    return [searchStr,setSearchStr];
}


// Another Custom Hooks ...
export const useSearchStr = () => usePersistedState(" ",'searchStr');