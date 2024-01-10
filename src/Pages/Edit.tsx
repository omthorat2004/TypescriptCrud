import Form from '../Components/Form';
import { editContactSelector } from '../Redux/contactSlice';
import { useAppSelector } from '../Redux/hooks';
const Edit = () => {
  const data  = useAppSelector(editContactSelector)
  return (
    <div>
      <Form  name={data.name} lastName={data.lastName} id={data.id} contact={data.contact} />
    </div>
  );
}

export default Edit;
