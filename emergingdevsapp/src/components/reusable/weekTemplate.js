import { Outlet } from "react-router-dom";
import { Week1 } from "../../pages/weeks/week1";
import { Week2 } from "../../pages/weeks/week2";

export default function WeekTemplate() {
  // e.preventDefault();
  let weeks = [Week1, Week2];
  console.log(weeks);
  //console.log(props)
  //console.log(props.target)

  let weekNumber = sessionStorage.getItem("week");
  console.log(weekNumber);

  if (weeks !== []) {
    for (let i = 0; i < weeks.length; i++) {
      console.log(i);
      console.log(weeks[i][0].value);

      if (weeks[i][0].value === weekNumber) {
        console.log(weeks);

        return (
          <>
            <div className="weekTemp">
              <div className="week" id="week">
                <h1>Web Dev Boot Camp</h1>
                <div className="title">
                  <h2>{weeks[i][0].title}</h2>
                </div>
                <div className="description">
                  <p>{weeks[i][0].description}</p>
                </div>
                <div className="topics">
                  <h3>{weeks[i][0].topic1}</h3>
                  <h3>{weeks[i][0].topic2}</h3>
                </div>
                <div>
                <h2>{weeks[i][0].title2}</h2>
                </div>
                <div className="description">
                  <p>{weeks[i][0].description2}</p>
                </div>
                <div className="topics">
                  <h3>{weeks[i][0].topic3}</h3>
                  <h3>{weeks[i][0].topic4}</h3>
                </div>
                <div className="links">
                  <p>{weeks[i][0].links}</p>
                </div>
              </div>
            </div>
            <Outlet />
          </>
        );
      }
    }
  }
  sessionStorage.removeItem("week");
  weeks = [];
}

/*export const Week = (week) =>{
    console.log(week);
    Object.entries(week).map((item) => {
      console.log(item);
      console.log(item[1][0].title);
      return (
       <>
         
        
     
       </>
      );
    });
   
  }*/
