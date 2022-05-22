import React,{ useState, useEffect} from 'react'

const useLocalStorage = (itemName, initialValue) => {
  
  
  const [error, setError] = useState(false);
  const[loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);
    
  
  useEffect( () => {
    
    setTimeout( () =>{

        try{
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue)).
                parsedItem = initialValue;
            } else{
                parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem)


        }catch(error){
                setError(error);
        }

    }, 1000)
  },[]);
  
  
  const saveItem = (newItem) => {
    try {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName,stringifiedItem)
    setItem(newItem);

    } catch(e){
    setError(error)
        }
    };

    return {
        item, 
        saveItem,
        loading,
        error,  
    };
}

export default useLocalStorage;