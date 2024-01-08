import React from 'react'



const Additem = () => {
  return (
<form className='addForm' >
    <label htmlFor="additem">ADD ITEM</label>
    <input 
    autoFocusid='additem'
    type="text"
    placeholder='Add Item'
    required />

    <button
    type='submit'
    aria-label='Add Item'>

    </button>
</form>
  )
}

export default Additem