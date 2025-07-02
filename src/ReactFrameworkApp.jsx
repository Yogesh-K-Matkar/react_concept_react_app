import React, { useState, version } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./ReactFrameworkApp.css";
import { Practices } from "./components/Practices.jsx";
import NetflixSeries, {
  SeriesUsingLoopMap,
  SeriesUsingProps,
} from "./components/NetflixSeries.jsx";
import { EventHandling } from "./components/EventHandling.jsx";
import { EventProps } from "./components/EventProps.jsx";
import { EventPropagation } from "./components/EventPropagation.jsx";
import { State, SiblingNoState } from "./components/State.jsx";
import { DerivedState } from "./components/DerivedState.jsx";
import { LiftStateUp } from "./components/LiftStateUp.jsx";
import { ToggleSwitch } from "./components/projects/ToggleSwitch/ToggleSwitch.jsx";
import { Todos } from "./components/projects/Todo/Todos.jsx";
import ShortCircuit from "./components/ShortCircuit.jsx";
import {
  UseStateHookCounter,
  UseStateChallenge,
} from "./components/hooks/UseState/UseStateIndex.jsx";
import { RegistrationForm } from "./components/hooks/UseState/Registration.jsx";
import { RegistrationFormCustomize } from "./components/hooks/UseState/RegistrationCustomize.jsx";
import { LoginForm } from "./components/hooks/UseState/LoginForm.jsx";
import { ContactForm } from "./components/hooks/UseState/ContactForm.jsx";
import { UseEffectIndex } from "./components/hooks/UseEffect/UseEffectIndex.jsx";
import { UseEffectChallenge } from "./components/hooks/UseEffect/UseEffectChallenge.jsx";
import { UseEffectCleanup } from "./components/hooks/UseEffect/UseEffectCleanup.jsx";
import { HowNotToFetchAPI } from "./components/hooks/UseEffect/HowNotToFetchAPI.jsx";
import { SinglePokemonCatch } from "./components/hooks/UseEffect/CatchSinglePokemon.jsx";
import { PokemonSeries } from "./components/projects/PokemonSeries/PokemonSeries.jsx";
import { UseRefsIndex } from "./components/hooks/UseRefs/UseRefsIndex.jsx";
import { ForwardRef } from "./components/hooks/UseRefs/ForwardRef.jsx";
import { UseIdIndex } from "./components/hooks/UseId/UseIdIndex.jsx";
import { PropDrillingParent } from "./components/PropDrilling.jsx";
import { BioProvider } from "./components/hooks/ContextAPI/ContextAPIIndex.jsx";
import { ContextAPIHome } from "./components/hooks/ContextAPI/ContextAPIHome.jsx";
import { ContextAPIAbout } from "./components/hooks/ContextAPI/ContextAPIAbout.jsx";
import {
  ThemeProvider,
  DarkLightTheme,
} from "./components/hooks/ContextAPI/DarkLight.jsx";
import { UseReducerIndex } from "./components/hooks/UseReducer/UseReducerIndex.jsx";
import { ReactMemoIndex } from "./components/hooks/Memo/ReactMemoIndex.jsx";
import { UseMemoIndex } from "./components/hooks/Memo/UseMemoIndex.jsx";
import { UseCallbackIndex } from "./components/hooks/Memo/UseCallbackIndex.jsx";

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

export function ReactApp() {
  const [count, setCount] = useState(0);

  return (
    <PageStructureWithOutRouting>
      <Intro />

      <br />
      <hr />
      <br />

      <h1>
        <u>
          <b> First Practice Demo </b>
        </u>
      </h1>
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

      <br />
      <hr />
      <br />

      <h1>
        <u>
          <b> Second Practice Demo </b>
        </u>
      </h1>
      <Practices />

      <br />
      <hr />
      <br />

      <h1>
        <u>
          <b>
            Concepts and Practice of React/ReactJS Framework along with
            Examples.
          </b>
        </u>
      </h1>
      <GroupOfSameComponent />
      <EventManagement />
      <StateManagementHooks />

      <br />
      <hr />
      <br />
    </PageStructureWithOutRouting>
  );
}

const PageStructureWithOutRouting = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const Header = () => {
  return <h1>Welcome, React/ReactJS {version} Frameworks</h1>;
};

const Footer = () => {
  return <h1>Thank You!!</h1>;
};

const Intro = () => {
  return (
    // Fragment
    <>
      <h2 className="text-3xl font-bold underline">
        Hello, Welcome to React version {version} with NPM/Bun package manager
      </h2>
      <CreateElm />
    </>
  );
};

const CreateElm = () => {
  //Create dynamic h1 tag
  return React.createElement(
    "h1",
    null,
    "Learn React/ReactJS Framework Language"
  );
};

export const GroupOfSameComponent = () => {
  return (
    <>
      {/* Reusability of same component multiple times without replicating same jsx code*/}
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <SeriesUsingLoopMap />
      <SeriesUsingProps />
    </>
  );
};

export const EventManagement = () => {
  return (
    <>
      <EventHandling />
      <EventProps />
      <EventPropagation />
    </>
  );
};

export const StateManagementHooks = () => {
  return (
    <>
      <UseStateHook />
      <UseEffectHook />
      <UseRefsHook />
      <UseIdHook />
      <UseReducerHook />
      <ReactMemo />
      <UseMemoHook />
      <UseCallBackHook />
    </>
  );
};

const UseStateHook = () => {
  return (
    <>
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
    </>
  );
};

const UseEffectHook = () => {
  return (
    <>
      {/*  <UseEffectIndex />
    <UseEffectChallenge />
    <UseEffectCleanup /> */}
      <HowNotToFetchAPI />
      <SinglePokemonCatch />
      <PokemonSeries />
    </>
  );
};

const UseRefsHook = () => {
  return (
    <>
      <UseRefsIndex />
      <ForwardRef />
    </>
  );
};

const UseIdHook = () => {
  return (
    <>
      <UseIdIndex />
    </>
  );
};

const UseReducerHook = () => {
  return (
    <>
      <PropDrillingParent />
      <BioProvider>
        <ContextAPIHome />
        <ContextAPIAbout />
      </BioProvider>
      <ThemeProvider>
        <DarkLightTheme />
      </ThemeProvider>
      <UseReducerIndex />
    </>
  );
};

const ReactMemo = () => {
  return (
    <>
      <ReactMemoIndex />
    </>
  );
};

const UseMemoHook = () => {
  return (
    <>
      <UseMemoIndex />
    </>
  );
};

const UseCallBackHook = () => {
  return (
    <>
      <UseCallbackIndex />
    </>
  );
};
