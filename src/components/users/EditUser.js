import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useHistory,useParams } from 'react-router';
function EditUser() {
  const [user, setUser] = useState({
    name:"",username:"",email:"",phone:'',website:""
  });
  let history=useHistory()
  const {id}=useParams();
  const{name,username,email,phone,website}=user
  const onInputChange=e=>{
    setUser({...user,[e.target.name]:e.target.value})
  };
useEffect(()=>{
    loadUser()
},[])
  const onSubmit= async(e) =>{
    e.preventDefault();
 await  axios.put(`http://localhost:3003/users/${id}`,user);
 history.push('/')
  }
  const loadUser=async()=>{
      const result= await axios.get(`http://localhost:3003/users/${id}`)
   setUser(result.data)
    }
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit a User</h2>
        <form onSubmit={e=> onSubmit(e)}>
  <div className=" form-group">
    <input type="text" className="form-control form-control-lg"  placeholder="enter name" name="name" value={name} onChange={e=>onInputChange(e)}/>
  </div>
  <div className=" from-group">
  <input type="text" className="form-control form-control-lg"  placeholder="enter username" name="username" value={username} onChange={e=>onInputChange(e)}/>
</div>
<div className=" from-group">
<input type="email" className="form-control form-control-lg"  placeholder="enter Email" name="email" value={email} onChange={e=>onInputChange(e)}/>
</div>
<div className=" from-group">
<input type="text" className="form-control form-control-lg"  placeholder="enter phone" name="phone" value={phone} onChange={e=>onInputChange(e)}/>
</div>
<div className=" from-group">
<input type="text" className="form-control form-control-lg"  placeholder="enter websiteurl" name="website" value={website} onChange={e=>onInputChange(e)}/>
</div>

  <button  className="btn btn-primary btn-block">update user</button>
</form>
</div>
</div>
    )
}

export default EditUser
