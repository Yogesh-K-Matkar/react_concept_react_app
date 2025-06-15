import React, { useState, version } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NetflixSeries, {
  SeriesUsingLoopMap,
  SeriesUsingProps,
  Header,
  Footer,
} from "./components/NetflixSeries.jsx";
import { EventHandling } from "./components/EventHandling.jsx";
import { EventProps } from "./components/EventProps.jsx";
import { EventPropagation } from "./components/EventPropagation.jsx";
import { State, SiblingNoState } from "./components/State.jsx";
import { DerivedState } from "./components/DerivedState.jsx";
import { LiftStateUp } from "./components/LiftStateUp.jsx";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch.jsx";
import { Todos } from "./projects/Todo/Todos.jsx";
import ShortCircuit from "./components/ShortCircuit.jsx";
import {
  UseStateHookCounter,
  UseStateChallenge,
} from "./components/hooks/useState/UseStateIndex.jsx";
import { RegistrationForm } from "./components/hooks/useState/Registration.jsx";
import { RegistrationFormCustomize } from "./components/hooks/useState/RegistrationCustomize.jsx";
import { LoginForm } from "./components/hooks/useState/LoginForm.jsx";
import { ContactForm } from "./components/hooks/useState/ContactForm.jsx";
import { UseEffectIndex } from "./components/hooks/useEffect/UseEffectIndex.jsx";
import { UseEffectChallenge } from "./components/hooks/useEffect/UseEffectChallenge.jsx";
import { UseEffectCleanup } from "./components/hooks/useEffect/UseEffectCleanup.jsx";
import { HowNotToFetchAPI } from "./components/hooks/useEffect/HowNotToFetchAPI.jsx";
import { SinglePokemonCatch } from "./components/hooks/useEffect/CatchSinglePokemon.jsx";
import { PokemonSeries } from "./projects/PokemonSeries/PokemonSeries.jsx";

/* Notes:-
1. HTML code inside component is converted in React element(means Virtual DOM) by babel then derived to Final DOM UI
2. Each JSX element/expression must have one parent element, which means if you try to return multiple elements
   React will throw and error.
3. Every JSX tag needs to be closed.You can self-closing tags for elements that don't have
   inner content written within opening and closing tag, eg. <img src="url" />
4. To avoid rewriting/redundancy of same code multiple times create a single component and reuse it multiple where required in 
   same jsx or another jsx(import component function from particular jsx where component function is defined).
5. To avoid using non-required <div> tag to combine multiple element into one before return jsx from component function and also to avoid DOM to create unwanted <div> element.
   Then comes concept of React as Fragments, eg. const ComponentName=()=>{ return(<>jsx multiple element</>); }
*/

export const Intro = () => {
  return (
    // Fragment
    <>
      <h2 className="text-3xl font-bold underline">
        Hello, Welcome to React version {version} with Bun package manager
      </h2>
      <CreateElm />
    </>
  );
};

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export const CreateElm = () => {
  return React.createElement("h1", null, "Create dynamic h1 tag");
};

export const GroupOfSameComponent = () => {
  return (
    <>
      {/* Reusability of same component multiple times without replicating same jsx code*/}
      <Header />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <SeriesUsingLoopMap />
      <SeriesUsingProps />
      <EventHandling />
      <EventProps />
      <EventPropagation />
      <State />
      <SiblingNoState />
      <DerivedState />
      <LiftStateUp />
      <ToggleSwitch />
      <Todos />
      <ShortCircuit />
      <UseStateHookCounter />
      <UseStateChallenge />
      <RegistrationForm />
      <RegistrationFormCustomize />
      <LoginForm />
      <ContactForm />
      {/* <UseEffectIndex />
      <UseEffectChallenge />
      <UseEffectCleanup /> */}
      <HowNotToFetchAPI />
      <SinglePokemonCatch />
      <PokemonSeries />
      <Footer />
    </>
  );
};
