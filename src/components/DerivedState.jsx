import { useState } from "react";
import "./EV.css";

/*Notes:-

1.  Derived State mean a variable value comes from State Variable.
2.  Logic on collection by using map(),filter() and reudce()

    const users=[{ id: 1, name: "Alice", age: 25 },
                { id: 2, name: "Bob", age: 35 }]
                
    a. map():- Used for looping in collection or array.
       eg  users.map((u)=><User name={u.name} age={u.age}>)

    b. filter():- Its like WHERE condtion to get customize collection based on condtion
       eg users.flter((u)=>u.age<35)
    
    c. reduce():- Its does computation on collection retrun required value
          eg users.reduc((calulatedval,u)=>return calulatedval + u.age,0)

*/

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 35 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "Angles", age: 45 },
];

export const DerivedState = () => {
  const [lstUsers, setLstUers] = useState(users);

  const usersCount = lstUsers.length;
  const userAvgAge =
    lstUsers.reduce((accum, user) => accum + user.age, 0) / usersCount;

  return (
    <div className="main-div">
      <h1 className="text-3xl font-bold underline">Users List</h1>
      <ul>
        {lstUsers.map((user, index) => (
          <User key={index} pId={user.id} pName={user.name} pAge={user.age} />
        ))}
        <p>Total Users: {usersCount}</p>
        <p>Average Age: {userAvgAge}</p>
      </ul>
    </div>
  );
};

const User = (props) => {
  console.log(props);

  const { pId, pName, pAge } = props;
  return (
    <>
      <li key={pId}>
        {pName} - {pAge} years old.
      </li>
    </>
  );
};
