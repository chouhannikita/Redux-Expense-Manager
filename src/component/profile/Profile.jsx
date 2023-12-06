import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import "./Profile.css"
import { addProfile } from '../../thunk';
import { Loginexpense } from '../../redux/action.jsx/action';


function Profile() {
  const [form,setForm] = useState({
    fname : '',
    lname : '',
    email : '',
  })
  const dispatch = useDispatch()
  const [errmsg,setErr] = useState("")
  const [msg,setMsg] = useState("")

  useEffect(()=>{
    dispatch(Loginexpense())
  })
  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setForm({...form,[name] : value})
  }

  const handleValid = ()=>{
    const {fname,lname,email} = form
    let err = {}
    if(email === ""){
      err.email = "Enter Email"
    }
    else{
      err.email = ''
    }
    if(fname===""){
      err.firstname = "enter first name"
    }
    else{
      err.firstname = ""
    }
    if(lname===""){
      err.lastname = "enter last name"
    }
    else{
      err.lastname = ""
    }
   
    setErr(err)
    console.log(err)
    let valid = true;
    Object.values(err).forEach((val) => {
      val.length > 0 && (valid = false);
    });
    console.log(valid);
    return valid;
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(handleValid()){
      dispatch(addProfile(form))
      setForm({
        fname : '',
        lname :'',
        email :''
      })
      setMsg("Profile updated successfully")
    }
  }
  return (
    <div className='main-content'>
      <h2 className='my-3 text-center'>Profile</h2>
     {<p style={{color:"green"}}>{msg}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='first_name'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your first name'
            name='fname'
            value={form.fname}  
            onChange = {handleChange}  
          />
          <Form.Text className='errForm' style={{color:'red'}}>{errmsg.firstname}</Form.Text>

        </Form.Group>
        <Form.Group className='mb-3' controlId='last_name'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your last name'
            name='lname'
            value={form.lname}
            onChange = {handleChange}
          />
      <Form.Text className='errForm' style={{color:'red'}}>{errmsg.lastname}</Form.Text>
    
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            name='email'
            value={form.email}
            onChange = {handleChange}
          />
          <Form.Text className='errForm' style={{color:'red'}}>{errmsg.email}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Button type='submit' variant='success'>
            Update Profile
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Profile
