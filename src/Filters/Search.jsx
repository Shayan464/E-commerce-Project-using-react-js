import React from 'react'
import InputField from '../InputField'
import CommonButton from '../CommonButton'


const Search = ({searchQuery,setSearchQuery}) => {
  const handleclear = () => {
    setSearchQuery("")
  }
  return (
   <div className=" mt-5  space-y-1">
  <label  className="block text-m text-white font-medium">
    Search For A Product : 
  </label>
<div className="flex flex-col space-y-1">
  <InputField
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    placeholder="Search..."
  />
  <CommonButton
    onClick={handleclear}
    label="Clear"
    className=" text-sm text-indigo-300 hover:text-indigo-100 "
  />
</div>
</div>
  )
}

export default Search