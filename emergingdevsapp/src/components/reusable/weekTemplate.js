import { Outlet } from "react-router-dom";


export default function WeekTemplate(props,e) {
    e.preventDefault();
   console.log(e)
console.log(props)
    console.log(props.target)

  
  return (
   
      <div className="weekTemp">
         <Week/>
          </div>
  );
  
}

 export const Week = (week) =>{
    console.log(week);
    Object.entries(week).map((item) => {
      console.log(item);
      console.log(item[1][0].title);
      return (
       <>
          <div className="week1">
            <h1>Course</h1>
          
          </div>
        
       <Outlet/>
       </>
      );
    });
   
  }