import { React } from 'react'
import { Card, Image } from 'react-bootstrap'
import './post.css'

const Post = ({ posts, photos }) => {

    return (
        <div>
            {posts.map((p, id) => (
                <Card
                    key={id}
                    variant='primary'
                    style={{ width: '18rem', height: '10rem', fontSize: 10 }}
                    className='mb-2 card'
                >
                    <div className='media' style={{ padding: 10 }}>
                        <Image width='30px' height='30px' roundedCircle src={photos[id].url} className='mr-3' alt={photos[id].title} />
                        <div className='media-body'>
                            <h5 className='title' style={{ fontSize: 16 }} className='mt-0'>{p.title} </h5>
                            <p> {p.body}</p>
                        </div>
                    </div>
                </Card>
            ))
            }
        </div>
    )
}

export default Post

