import { useState, useEffect } from 'react'



const useSearch = () => {
    const [searchValue, setSearchValue] = useState('')

    const data = ((searchValue) => {

        const searchUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=351c64c2`
        fetch(searchUrl)
            .then(res => {
                if (!res.ok) {
                    throw Error("could not fetch the data")
                }
                return res.json()
            })
            .then(data => {
                setSearchValue(searchValue)
            })
            .catch(err => {
                console.log("errr")

            })

    })

    useEffect(()=>{
        data(searchValue)

    },[searchValue])
}