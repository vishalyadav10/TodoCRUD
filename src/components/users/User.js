import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useHistory,useParams } from 'react-router';
function User() {
  const [user, setUser] = useState({
    name:"",username:"",email:"",phone:'',website:""
  });
  let history=useHistory()
  const {id}=useParams();
  const{name,username,email,phone,website}=user
  
useEffect(()=>{
    loadUser()
},[])

  const loadUser=async()=>{
      const result= await axios.get(`http://localhost:3003/users/${id}`)
   setUser(result.data)
    }
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">user id: {id}</h2>
        <form >
  <div className=" form-group">
    <input type="text" className="form-control form-control-lg"  placeholder="enter name" name="name" value={name} />
  </div>
  <div className=" from-group">
  <input type="text" className="form-control form-control-lg"  placeholder="enter username" name="username" value={username} />
</div>
<div className=" from-group">
<input type="email" className="form-control form-control-lg"  placeholder="enter Email" name="email" value={email} />
</div>
<div className=" from-group">
<input type="text" className="form-control form-control-lg"  placeholder="enter phone" name="phone" value={phone} />
</div>
<div className=" from-group">
<input type="text" className="form-control form-control-lg"  placeholder="enter websiteurl" name="website" value={website}/>
</div>

  <button  className="btn btn-primary btn-block">View</button>
</form>
</div>
</div>
    )
}

export default User
