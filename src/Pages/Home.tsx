import React from 'react';
import Row from '../Components/Row';
import { contactsSelector, filterContactsSelector, filteredSelector } from '../Redux/contactSlice';
import { useAppSelector } from '../Redux/hooks';
const Home:React.FC = () => {
  // const dispatch = useDispatch()
//  useEffect(()=>{
//   dispatch(getContacts())
//  },[])
  let contacts = useAppSelector(contactsSelector)
  const filtered = useAppSelector(filteredSelector)
  const filterContacts= useAppSelector(filterContactsSelector)
  console.log("h")
  contacts = filtered ? filterContacts : contacts
  
  
  return (
    <div>
      <table className="table table-striped ">
  <thead>

    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Contact</th>
      <th scope="col">Operation1</th>
      <th scope="col">Operation2</th>
    </tr>
  </thead>
  <tbody>
    
      {contacts.map((ele)=>{
        return <Row id={ele.id} name={ele.name} lastName={ele.lastName} contact={ele.contact}/>
      })}
    
   
  </tbody>
</table>
    </div>
  );
}

export default Home;
