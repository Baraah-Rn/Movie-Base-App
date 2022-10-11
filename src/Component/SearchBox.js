import React from 'react'

const SearchBox = ({ handleSubmit,searchValue,setSearchValue }) => {

  return (
    <form onSubmit={handleSubmit}
      className='col col-sm-4'>
      <input className='form-control'
        placeholder='Type to search'
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value)
        console.log(searchValue)}}
      />
    </form>
  )
}

export default SearchBox