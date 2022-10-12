import React from 'react'

const SearchBox = ({ handleSubmit,searchValue,setSearchValue }) => {

  return (
    <form onSubmit={handleSubmit}
      className=' col-sm-4'>
      <input className='form-control search-input'
        placeholder='Type to search'
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value)
        console.log(searchValue)}}
      />
    </form>
  )
}

export default SearchBox