import './style.css';
import {useEffect,React} from 'react'
import {horseList,deleteBySlug} from './../../redux/actions/auth/horseAction'
import {useDispatch,useSelector} from 'react-redux';
import { Table } from 'reactstrap';
import { Camera,Edit,Plus,Trash } from 'react-feather';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

 const Horse = () => {
    useEffect(() => {
        dispatch(horseList(auth_token))
    }, [])
    const dispatch        = useDispatch(); 
    const horseListing    = useSelector(state => state.horseReducer.horseDetail)
    const auth_token      = localStorage.getItem('auth_key');
    
    const deleteHorse=(slug)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteBySlug(slug,auth_token));
          swal("Horse Delete Successfully!", {
            icon: "success",
          });
        }
      });
    }
    
     return (
         <div className="table_style">
           <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Owner Name</th>
                <th>Owner No</th>
                <th>Action</th>
              </tr>
            </thead>
           <tbody>
            {horseListing.map((list) => (
               
               <tr key={list.id} >
               <th scope="row">{list.id}</th>
               <td>{list.name}</td>
               <td>{list.owner_name}</td>
               <td>{list.owner_number}</td>
               <td>
                 <Link to={`/add-horse/${list.slug}`}><Plus color="green" size={20} key={list.id}/></Link>
                 <Link to={`/edit-horse/${list.slug}`}><Edit color="blue" size={20} key={list.id}/></Link>
                 <Link to={`/delete-horse/${list.slug}`}><Trash color="red" size={20} key={list.id} onClick={()=>deleteHorse(list.slug)}/></Link>
               </td>
             </tr>
            ))}
           </tbody>
           </Table>    
         </div>

     )
 }
 
 export default Horse
 