import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addContact, editContact } from '../Redux/contactSlice';

interface Contact{
  name:string,
  lastName:string,
  contact:string
}
interface Props extends Partial<Contact>{
  id?:number
}
const Form : React.FC<Props> = ({id,name,lastName,contact}) => {
  const [formData,setFormData] = useState<Contact>({
    name:name? name:'',
    lastName:lastName?lastName:'',
    contact:contact?contact:''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setFormData((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
  const handleAddClick = ()=>{
        if(!formData.name||!formData.lastName||!formData.contact){
          Swal.fire({
            title: 'Error',
            text: 'Please Complete All Field',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

        }
        else{
          Swal.fire({
            title: 'Success',
            text: 'Contact Added',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        dispatch(addContact(formData))
        navigate('/')
        }
  }
 const handleEditClick = ()=>{
  if(!formData.name||!formData.lastName||!formData.contact){
    Swal.fire({
      title: 'Error',
      text: 'Please Complete All Field',
      icon: 'error',
      confirmButtonText: 'Ok'
    })

  }else{
  Swal.fire({
    title: 'Success',
    text: 'Contact Edited',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
      dispatch(editContact({...formData,id:id||0}))
      navigate('/')
}
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

  }
  return (
    <div>
      <div className="container py-5 w">
    <h1>{name? "Edit Contact":"Add Contact"}</h1>

          <form className="p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>

           

            <div className="form-floating mb-3">

              <input type="text" id="form4Example1" className="form-control" name='name'  onChange={handleChange} value={formData.name} />

              <label className="form-label" htmlFor="form4Example1">Name</label>

            </div>



            

            <div className="form-floating mb-3">

              <input type="text" id="form4Example2" className="form-control" name='lastName' onChange={handleChange} value={formData.lastName}  />

              <label className="form-label" htmlFor="form4Example2">Last Name</label>

            </div>



           

            <div className="form-floating mb-3">

            <input type="text" id="form4Example3" className="form-control" name='contact' onChange={handleChange} value={formData.contact}/>

              <label className="form-label" htmlFor="form4Example3">Contact Number</label>

            </div>



           

            



          

            {name?<button type="submit" className="w-100 btn btn-lg btn-dark" onClick={handleEditClick} >Edit</button>:<button type="submit" className="w-100 btn btn-lg btn-dark" onClick={handleAddClick}>Add</button>}

          </form>

   
</div>
    </div>
  );
}

export default Form;
