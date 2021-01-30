import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDialog } from 'react-st-modal'

const Modal = () => {
    const dialog = useDialog()

    const [value, setValue] = useState()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [validatePassword, setValidatePassword] = useState()
    const [validateLogin, setValidateLogin] = useState()

    const submit = e => {
        e.preventDefault()

        let isError = 0
        if (login !== 'user') {
            isError += 1
            setValidateLogin(true)
        } else {
            setValidateLogin(false)
        }
        if (password !== 'user123') {
            isError += 1
            setValidatePassword(true)
        } else {
            setValidatePassword(false)
        }
        if (isError === 0) {
            localStorage.setItem('user', login)
            dialog.close(value)
        }
    }

    return (
        <div style={{ margin: 20 }}>
            <Form>
                <Form.Group>
                    <Form.Label>Login</Form.Label>
                    <Form.Control isInvalid={validateLogin} value={login} onChange={e => setLogin(e.target.value)} placeholder='Enter login' />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control isInvalid={validatePassword} onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Password' />
                </Form.Group>
                <Button onClick={e => submit(e)} variant='primary'>
                    Submit
  </Button>
            </Form>
        </div>
    )
}

export default Modal

