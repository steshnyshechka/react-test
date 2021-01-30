import { React, useState } from 'react'
import { Form, Alert, Button } from 'react-bootstrap'
import './formUser.css'

const FormUser = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [validateName, setValidateName] = useState()
    const [validateLastName, setValidateLastName] = useState()
    const [validatePhone, setValidatePhone] = useState()
    const [errorsName, setErrorsName] = useState('')
    const [errorsLastName, setErrorsLastName] = useState('')
    const [errorsPhone, setErrorsPhone] = useState('')
    const [show, setShow] = useState(false)

    const submit = e => {
        e.preventDefault()
        console.log('here');
        let isError = 0
        if (name.length < 3) {
            isError += 1
            setValidateName(true)
            setErrorsName('A name must include a minimum of 3 characters.')
        } else {
            setErrorsName('')
            setValidateName(false)
        }
        if (lastName.length < 3) {
            isError += 1
            setErrorsLastName('A lastname must include a minimum of 3 characters.')
            setValidateLastName(true)
        } else {
            setErrorsLastName('')
            setValidateLastName(false)
        }

        const regex = /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g
        let valid = regex.test(phone)

        if (!valid) {
            isError += 1
            setErrorsPhone('No valid number. Correct format: +7(999)999-9999')
            setValidatePhone(true)
        } else {
            setErrorsPhone('')
            setValidatePhone(false)
        }

        if (isError === 0) {
            setShow(true)
            setLastName('')
            setName('')
            setPhone('')
        }
    }

    return (
        <div>
            <h1>Header</h1>
            <Alert variant='primary' onClose={() => setShow(false)} show={show} dismissible>
                Successfull
            </Alert>
            <Form style={{ marginTop: 10 }} onSubmit={e => submit(e)} >
                <Form.Group>
                    <Form.Control isInvalid={validateName} value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Name' />
                    <p className='feedback'>
                        {errorsName}
                    </p>
                </Form.Group>
                <Form.Group>
                    <Form.Control isInvalid={validateLastName} onChange={e => setLastName(e.target.value)} value={lastName} type='text' placeholder='Last Name' />
                    <p className='feedback'>
                        {errorsLastName}
                    </p>
                </Form.Group>
                <Form.Group>
                    <Form.Control isInvalid={validatePhone} onChange={e => setPhone(e.target.value)} value={phone} type='text' placeholder='Phone' />
                    <p className='feedback'>
                        {errorsPhone}
                    </p>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
  </Button>
            </Form>
        </div>
    )
}

export default FormUser
