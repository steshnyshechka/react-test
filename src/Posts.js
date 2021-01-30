import { React, useEffect, useState } from 'react'
import { Container, CardColumns, Row } from 'reactstrap'
import Post from './Post'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(
                (result) => {
                    setPosts(result)
                },
                (error) => {
                    setError(error)
                }
            )
            .then(
                fetch('https://jsonplaceholder.typicode.com/photos')
                    .then(res => res.json())
                    .then(
                        (result) => {
                            // console.log(result);
                            setPhotos(result)
                            setLoading(false)
                        },
                        (error) => {
                            setError(error)
                        }
                    )
            )
    }, [])

    return (
        <Container>
            {error ? <div style={{ color: 'red', marginTop: 20, fontSize: 40 }} className='text-center error'>Error: {error.message}</div> :
                <div>
                    <h2 className='text-center' style={{ marginTop: 20 }}>Header</h2>
                    <Row style={{ marginTop: 20 }} className='justify-content-center'>
                        {!loading ? <CardColumns><Post posts={posts} photos={photos} /></CardColumns> : <p>Loading...</p>}
                    </Row>
                </div>
            }
        </Container>
    )
}

export default Posts

