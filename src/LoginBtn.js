import { React, useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import Modal from './Modal'
import { CustomDialog } from 'react-st-modal'

const LoginBtn = () => {

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsLogin(true)
        }
    }, [])

    return (
        <Card style={{ marginTop: 10 }} className='text-center'>
            <Card.Body>
                <Card.Title>Header</Card.Title>
                {!isLogin ? <Button
                    onClick={() => {
                        const result = CustomDialog(
                            <Modal />
                        )
                    }}
                    variant='primary'>Login</Button> : ''}
            </Card.Body >
        </Card>
    )
}

export default LoginBtn

