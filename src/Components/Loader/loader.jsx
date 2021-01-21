import { Spinner } from 'reactstrap';
import './style.css'
const Loaders = () => {
    return (
        <div className="loaderParent">
           
               <div className="loaderChild">
                    <Spinner
                    color="dark"
                    
                    />
               </div>
       
        </div>
    )
}

export default Loaders
