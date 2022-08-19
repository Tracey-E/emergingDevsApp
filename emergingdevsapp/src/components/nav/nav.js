import { Link } from "react-router-dom";
import WeekTemplate from "../reusable/weekTemplate";
export default function Nav() {
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
                onClick={(e) => WeekTemplate(this.value, e)}
              >
                Week one{" "}
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
