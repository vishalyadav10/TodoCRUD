import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from 'react-router';
function AddUser() {
  const [user, setUser] = useState({
    name:"",username:"",email:"",phone:'',website:""
  });
  let history=useHistory()
  const{name,username,email,phone,website}=user
  const onInputChange=e=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const onSubmit= async(e) =>{
    e.preventDefault();
 await  axios.post("http://localhost:3003/users",user);
 history.push('/')

  }
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4"> Add a User</h2>
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

  <button  className="btn btn-primary btn-block">Submit</button>
</form>
</div>
</div>
    )
}

export default AddUser
