
// import React from 'react'
// import './MenuItem.style.scss'

// const  MenuItem= (props)=> {
//     return (
//      <div style={{
//          backgroundImage: `url(${props.imageUrl})`
//      }} className={`menu-item ${props.size}` }>
//         <div className='content'>
//             <h1 className='title'>{props.title}</h1>
//             <span className='subtitle'>SHOP NOW</span>
//         </div>
//     </div>
//     )
// }

// export default MenuItem




import React from 'react'
import './MenuItem.style.scss'

function MenuItem({title, imageUrl, size}) {
    return (
     <div className={`menu-item ${size}` }>
         <div className='background-image' style={{
         backgroundImage: `url(${imageUrl})`
     }} >
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
         </div>
        </div>
    </div>
    )
}

export default MenuItem