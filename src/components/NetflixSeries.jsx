import reactLogo from "/react.svg";
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard.jsx";
import cssModule from "./NetflixSeries.module.css";

/* Notes:-
1. Concept of dynamic variable where we can assign derived value generated from JS function,expression or operations that can be shown at specific location with jsx.
2. Concept of logical variable where we can assign derived value generated from JS function,expression or operations that can be shown at specific location with jsx based on 
   Condition using Conditional Operators/Logic such Ternary,IF-ELSE block,etc.
3. Incase of importing Export Default component then while import any name can be used.
   eg. import {Series} from "./components/NetflixSeries"; (Where export componenet name is NetflixSeries)
4. While incase importing Export Named component then while import same Component name to be used with curly braces {ComponentName}
   eg. import {NetflixSeries} from "./components/NetflixSeries"; (Where export componenet name is NetflixSeries)
5. Instead of for loop their is map() for looping on collection/array in React.In React map() each element must have key prop to differentiate each element generated while looping using map().
6. Props in React which are known as attribute in C# can be pass from unidirection(1-direction) from Parent component to calling child components as seperate properties 
   and consume in child component as props as paramter which combines all properties of child component defined by Parent component while calling Child component except key property.
7. While padding integer value prop/attribute over child component pass like this 
   eg. id={integer_value}
   And string value prop/attribute over child component pass like this
   eg. name="string_value"
8. To pass content as jsx/string within opening and closing component tag then special prop is used denoted as children to access that elements.
9. CSS Style- grid or flex-box css alway give it to parent tag. 
   Instead of defining class prop for appliying CSS class use className prop.


*/

//Named Export
const NetflixSeries = () => {
  //Variable Defined
  const name = "Vite";
  const age = 18;

  //Function Defined
  const returnDescription = () => {
    const description = "Vite - Builder Tool";
    return description;
  };

  //Logical Blocks 3 type
  //1. IF-Block (But avoid this logic as its voilates DRY(Redudent Code Block) rule of REACT)
  // if (age < 18) {
  //   return (
  //     <>
  //       <img src={reactLogo} width="20%" height="20%" />
  //       <br />
  //       <div>
  //         {/* Variable use */}
  //         <h3>Name: {name}</h3>
  //       </div>
  //       <div>
  //         {/* Expression defined */}
  //         <h3>Rating: {3.5 + 1.5}</h3>
  //       </div>
  //       <div>
  //         {/* Function call */}
  //         <h3>Description: {returnDescription()}</h3>
  //       </div>
  //       <div>
  //         {/* Conditional Logic*/}
  //         <h3>Availability: NA</h3>
  //       </div>
  //     </>
  //   );
  // }

  //2. Ternary Operator
  //const logic1 = age >= 18 ? <button>Watch Now</button> : "NA";

  //3.Best way:-  Within Function Logic to avoid multiple const variable declaration outside block
  const logic2 = () => {
    return age >= 18 ? <button>Watch Now</button> : "NA";
  };

  return (
    <>
      <h1>Types Of Variables</h1>
      <img src={reactLogo} width="20%" height="20%" />
      <br />
      <div>
        {/* Variable use */}
        <h3>Name: {name}</h3>
      </div>
      <div>
        {/* Expression defined */}
        <h3>Rating: {3.5 + 1.5}</h3>
      </div>
      <div>
        {/* Function call */}
        <h3>Description: {returnDescription()}</h3>
      </div>
      <div>
        {/* Conditional Logic*/}
        {/* 2. Ternary Operator */}
        {/* <h3>Availability: {logic1}</h3> */}

        {/* 3. Functional Block called - Best Way*/}
        <h3>Availability: {logic2()}</h3>
      </div>
    </>
  );
};

//Default Export
export default NetflixSeries;

export const SeriesUsingLoopMap = () => {
  return (
    <>
      <h1 align="left" className="text-3xl font-bold underline">
        Listing Using Map Function(Loop)
      </h1>
      <ol align="left">
        {seriesData.map((sd) => (
          <li key={sd.id}>
            <div>
              <img src={sd.img_url} alt={sd.img_url} width="40%" height="40%" />
            </div>
            <h2>
              <b>Name: </b>
              {sd.name}
            </h2>
            <h3>
              <b>Ratings: </b>
              {sd.rating}
            </h3>
            <p>
              <b>Summary: </b>
              {sd.description}
            </p>
            <p>
              <b>Genre: </b>
              {sd.genre}
            </p>
            <p>
              <b>Caste: </b>
              {sd.cast}
            </p>
            <a href={sd.watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
};

export const SeriesUsingProps = () => {
  return (
    <section className="container">
      <h1 className={cssModule["card-heading"]}>List of Series Using Props</h1>
      <ul className="grid grid-three--cols">
        {seriesData.map((sd) => (
          <SeriesCard key={sd.id} data={sd}>
            {sd.name}
          </SeriesCard>
        ))}
      </ul>
    </section>
  );
};

export const Header = () => {
  return <p>copyright @react19tutorials</p>;
};

export const Footer = () => {
  return <p>copyright @react19tutorials</p>;
};
