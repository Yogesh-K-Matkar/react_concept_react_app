import { useId } from "react";
import cssModules from "../Hooks.module.css";

/*
Notes:-

State Management Hook:-

3 . useId:- 
    useId:- useId hook returns uniqueid 
        Syntax:- const uniqueid=useId(); 

*/
export const UseIdIndex = () => {
  //   const usernameId = useId();
  //   const emailId = useId();
  //   return (
  //     <form>
  //       {/* onSubmit={(evt) => handleFormSubmit(evt)} */}
  //       <div className={cssModules["container"]}>
  //         <h1 className={cssModules["title"]}>Login Form (Using useId Hook)</h1>
  //         <div>
  //           <label htmlFor={usernameId}>Username</label>
  //           <input id={usernameId} type="text" />
  //           <label htmlFor={emailId}>Username</label>
  //           <input id={emailId} type="text" />
  //           <button type="submit">Submit</button>
  //         </div>
  //       </div>
  //     </form>
  //   );

  //To avoid replication useId hook multiple time create single uniqueId and append to control Id attribute

  const Id = useId();

  return (
    <form>
      {/* onSubmit={(evt) => handleFormSubmit(evt)} */}
      <div className={cssModules["container"]}>
        <h1 className={cssModules["title"]}>Login Form (Using useId Hook)</h1>
        <div>
          <label htmlFor={Id + "_usernameId"}>Username</label>
          <input id={Id + "_usernameId"} type="text" />
          <label htmlFor={Id + "_emailId"}>EmailId</label>
          <input id={Id + "_emailId"} type="text" />
          <br />
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};
