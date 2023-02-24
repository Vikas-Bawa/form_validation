import React, { useState } from 'react'

function Form() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [users,setUsers] = useState([]);

    const addUser = (e) =>{
        console.log('user added')
        e.preventDefault()
        const user = {
            name : name,
            email : email,
            address : address
        }
        setUsers([...users,user])
        setName("");
        setEmail("");
        setAddress("");
    }

    const editClick = (index) =>{
        // e.preventDefault()
        console.log('edit run')
        // console.log('e ' + e)
        // console.log('index  ' + index)
        // console.log(users.map(user=>user))
        console.log(index)
        // const user = users[index]
        // setName(user.name)
        // setEmail(user.email)
        // setAddress(user.address)
        // console.log(user.name)
        // console.log(user.email)
        // console.log(user.address)
    }
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
                <form onSubmit={addUser}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" className='form-control'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Address</label>
                        <input type="text" className='form-control'  value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div><br/>
                    <button className="btn btn-success form-control" type='submit'>Add</button>
                    <table className="table table-bordered mt-5">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            users.map((user,index)=>{
                                return(
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td><button className="btn btn-info" onClick={(index)=>editClick(index)}>Edit</button></td>
                                        <td><button className="btn btn-danger">Delete</button></td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        
      
    </div>
  )
}

export default Form
