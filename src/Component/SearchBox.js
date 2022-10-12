import React from 'react'

const SearchBox = ({ handleSubmit, searchValue, setSearchValue }) => {

  return (
    <>
      

      <form  onSubmit={handleSubmit}
        className=' search-form col-sm-4'>
        <input className='form-control search-input'
          placeholder='Type to search'
          value={searchValue}
          onChange={e => { setSearchValue(e.target.value) }}
        />
      </form>
    </>

  )
}

export default SearchBox