import React from 'react'

function Additem(props) {
    const [item, setItem] = React.useState('') 
    const handleChangeItem = (event) => {
        setItem(event.target.value)
    }
    const handleAdditem = () => {
        props.onAdd(item)
        setItem('')
    }
  return (
   <>
     <input onChange={handleChangeItem} value={item} />
      <button onClick={handleAdditem}>add</button>
   </>
  )
}

export default Additem