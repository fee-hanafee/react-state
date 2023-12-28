import React from 'react'

function Modal() {
    const [isShow, setIsShow] = React.useState(false)
  return (
    <>
    <div className='Modal' onClick={() => setIsShow(false)}>
        {isShow && <div className='Modal_content'>
            Content
            <button className='modal-btn'>click to close</button>
        </div>}
    </div>
    <button onClick={() => setIsShow(true)}>Click to open</button>
    </>
  )
}

export default Modal