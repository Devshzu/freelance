import React from 'react'

const Container = (props) => {
  return (
    <section className='w-[100vw] flex justify-center'>
     <div className='w-[86%] flex justify-center'>
        {props.children}
     </div>
    </section>
  )
}

export default Container
