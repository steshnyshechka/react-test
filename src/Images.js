import { React } from 'react'
import { Image } from 'react-bootstrap'
import './images.css'

const Images = () => {
    return (
        <div style={{ position: 'relative', marginTop: 20 }}>
            <div className='container'>
                <Image rounded fluid className='image1'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXWB9RY0hWZP3NnbqMRaYVf4iMxShlHgOKg&usqp=CAU'
                    style={{ position: 'absolute', top: 20, left: 0 }}
                />
            </div>
            <div className='container'>
                <Image rounded fluid className='image2'
                    style={{ position: 'absolute', top: 170, left: 100, zIndex: 2 }}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiT9E-DFBokH8-idRbxYheI-3Bjutkry8_Uw&usqp=CAU'
                />
            </div>
            <div className='container'>
                <Image rounded fluid width='200' className='image3'
                    src='https://images.unsplash.com/photo-1585477280412-633abe639bd4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80'
                    style={{ position: 'absolute', top: 0, left: 250 }}
                />
            </div>
        </div>
    )
}

export default Images

