import { Link } from "react-router-dom";
import WeekTemplate from "../reusable/weekTemplate";


export default function Nav() {
  sessionStorage.removeItem('week')
function loadFunction(e){
  let data = e.target.value
  sessionStorage.setItem('week', data)
 console.log(sessionStorage)

  WeekTemplate(e)
 


}

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
          <Link to="/WeekTemplate">
              <button
                value="week1"
                onClick={(e) => loadFunction( e)}
              > Week one{" "} 
               
              </button>
              </Link>
            
          </li>
          <li>
          <Link to="/WeekTemplate">
              <button
                value="week2"
                onClick={(e) => loadFunction( e)}
              > Week two{" "} 
               
              </button>
              </Link>
            
          </li>
        </ul>
      </nav>
    </>
  );
}
