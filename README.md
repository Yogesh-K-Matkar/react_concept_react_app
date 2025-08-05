# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Notes For Reference

Notes:-

Old:-

1. Props-- Passing values by setting properties over calling a component inside the parent JSX, so that properties pass through the component function and are set inside the JSX of that component function.
2. State-- To maintain value when value needs to be displayed inside JSX code during the render of the component function.
   3.Spread Operator-- ...<object/array_name> is shortcut to open object, array

CSS Apply Method:-

1. Split the standalone into small blocks as per the components' JSX code needed
2. Use convert <filename>.css to <filename>.module.css so that the entire CSS file is considered as
   a dynamic class to access its CSS classes to differentiate the same CSS name used in multiple CSS files.
3. Import styled_component so that we can write an inline CSS class component in the required JSX file.

   E.g. & symbol is replaced with all header CSS classes as it's copied under styled. Header styled-component:-

   import {styled} from 'styled-component';

   const styleheader=styled.header
   `
   display: flex;
   flex-direction: column;
   align-items: ${({invalid})=> invalid? 'centre' : 'left' };
   justify-content: centre;
   margin-top: 2rem;
   margin-bottom: 2rem;

   //header img{
   & img{
   justify-content: centre;
   }

   //header: hover{
   &:hover{
   justify-content: centre;
   }
   `

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

New:-

References:-

https://javascript.info/
https://www.geeksforgeeks.org/installation-of-node-js-on-windows/
https://www.npmjs.com/package/create-react-app
https://react.dev/learn

---

VS Code Editor Shortcuts:-

Terminal show/hide(cntrl+`),Solution File/Folder Structure show/hide(cntrl+b),Focus on top search(cntrl+p, cntrl+shift+p)

How to create a file and folder through the Terminal cmd.
a. Move inside into folder
cd <FolderName>
b. Move outside the folder
cd..
c. Create folder
mkdir <NewFolderName>
d. Create any type of file, such as JSX, JSON, CSS, or image.
code <NewFileName.extension>
e. To open the current folder in Explorer from the terminal, type
explorer .

---

Commands:-To set up a React application using the Terminal option in VS Code

Vite is a builder tool.

npm-Package Manager:-
Version Check:-
node -v
npm -v

Project Setup:-
npm i create-react-app (Not Use Instead use npm create vite@latest)
npm react
npm i react

npx npm-check-updates -- To verify all packages listed with their current and latest available version
npx npm-check-updates -u -- To update all packages to the latest version, listing with their older version in the previous npx command

---

bun-Package Manager:-

node -v
bun -v

Project Setup:-

bun create vite@latest
bun install / bun i
bun run dev/bun dev

bun pm ls --To view all installed packages with version

Project Deployment :-

Use free hosting site:- https://app.netlify.com/ (Use GitHub login)

Steps:-

1 bun run build --To create Production Build/Version to deploy

2 After above cmd executed successfully dist folder is create.

3. Go to netlify site in side menu select & click Projects it will display list of methods to deployed website.

4. Select Deploy Manual option in list then Drag & Drop OR Upload Files ,then go to folder path where dist folder is created within project that you want to host

5. Open dist folder you will see all files that are going to deploy.

6. Then hit Upload/Deploy/Ok button of dialog & wait don't refresh till files gets completely deployed.

7. After successful deploy at top you will see random project and netlify.app which you can modify by clicking on Project Configuration & then change name as required.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

REACTJS Language:-(v19)

Steps for Cloning Reporsitory/Pulling Code from GitHub to VS Code/Build and Deploy Code:-

A.

1. Introduction(What is ReactJS):-

1. REACT(v19) is a framework in which ReactJS is implemented. ReactJS is a JavaScript Library used for front-end/UI development.
1. It was first created by a Facebook developer(Jordan Walke) when they faced the issue of managing and maintaining the extensive increase of the Facebook application in 2011.
1. It was first implemented in their application Facebook in modules like Feeds, Chat Messaging and also made ReactJS Open Source to the outside world in 2012 and 2013, but suffered from criticism as the outside world was unable to properly understand the Separation Of Code(SOC) concept of ReactJS.
1. So then in 2013, one of the Khan Academy developer created a Web Application & achieved success in it. She is the first Non-Facebook React developer, due to which Facebook got a larger success and breakthrough in the outside world for ReactJS language usage & at the same time, Facebook developers create a web application for the Instagram Mobile App.
1. ReactJS is a Declarative Language, so faster to implement.
1. Component-Based Architecture.
1. Reach Eco-System-npm packages(Smaller concept/modules already develop in form of packages)
1. Strong & Large community support-Online/GitHub

---

2. Pre-requisite(Setup Development Environment):-

Step 1: Installing Node.js
Node.js is essential for running React applications. Follow these steps to install Node.js:

Visit the Node.js official website.
Download the LTS version suitable for your operating system.
Run the installer and follow the prompts to complete the installation.

--

Step 2: Setting Up Visual Studio Code (VSCode)
VSCode is a powerful and popular code editor for web development. Here's how to set it up:

Go to the VSCode official website.
Download and install the latest version for your OS.
Open VSCode and install the necessary extensions for React development (e.g., ESLint, Prettier).

--

Step 3: Installing Bun Package Manager
Bun is a fast and modern package manager for JavaScript. Here's how to install it:

Open your terminal or command prompt.
Run the following command to install Bun:
npm install -g bun (make sure to add -g flag)
If it's not working, then 👇
curl -fsSL https://bun.sh/install | bash
Follow the on-screen instructions to complete the installation.

--

Step 4: Creating a React App with Vite
Vite is a build tool that provides a fast and efficient way to set up a React project. Follow these steps to create your first React app:

Open your terminal or command prompt.
Run the following commands to create a new React project using Vite:
bun create vite@latest reactthapaapp --template react
cd my-react-app
bun install
Start the development server:
bun run dev

## (Bun - Latest Package Manager)

Step 5: Writing Your First "Hello World" Program
Now that your React app is set up, let's write a simple "Hello World" program:

Open src/App.jsx in VSCode.
Replace the default code with the following:
import React from 'react';

function App() {
return (

Hello World

);
}

export default App;
Save the file and see the changes live in your browser.

--

Step 6: Upgrading to React v19 RC
If you're using React v18 and want to upgrade to React v19 Release Candidate, follow these steps:

Open your terminal or command prompt.
Run the following command to update React:
bun install react@rc react-dom@rc

--

Step 7: Extensions:

7.1. Auto Close Tag
7.2. Auto Comment
7.3. Auto Import
7.4. Auto Rename Tag
7.5. Babel JavaScript
7.6. Better Comments
7.7. Bootstrap 5 Quick Snippets
7.8. Bootstrap Class Autocomplete
7.9. Bootstrap IntelliSense
7.10. Code Runner
7.11. Code Spell Checker
7.12. CSS Navigation
7.13. CSS Peek
7.14. css-auto-prefix
7.15. ES7+ React/Redux/React-Native snippets
7.16. ESLint
7.17. GitHub Copilot
7.18. GitHub Copilot Chat
7.19. GitHub Pull Requests
7.20. Import Cost
7.21. IntelliCode
7.22. JavaScript (ES6) code snippets
7.23. Live Server
7.24. Markdown All in One
7.25. Markdown Preview Enhanced
7.26. npm Intellisense
7.27. Path Intellisense
7.28. Prettier - Code formatter
7.29. React PropTypes Generate
7.30. Tailwind CSS IntelliSense
7.31. Thunder Client
7.32. vscode-icons

+++++++++++++++++++++++++++++++

A. Steps for Hosting Application with Synchronous Update:-

A.1. Upload Files from VS Code to GitHub:-

    1. In GitHub, first log in to your GitHub account, then in the  tab Repositories, click on the New button & create a  repository by giving a  Repository Name
       e.g. Yogesh_Matkar/<repository name> then click Create Repository button.

    2. Initialise git into VS Code by cmd,

      a.
       > git init

       If the git cmd issues, then check the  git version using cmd.

      > git --version

      b. If the version is not displayed or again a git cmd issue, that means git is not installed, then install the Git Package Manager on the computer.

      c. After installation, in VS Code to get cmd setting UI, press Ctrl+Shift+P, type in search Open User Settings (JSON) and click,
      Then add a set of values in JSON format below,

       "git.enable": True,
       "git.path": "C:\\Program Files\\Git\\cmd\\git.exe.exe"

      d. Then, try the below cmd to check if git is properly enabled in VS Code,

         To check the installed version of git
          > git --version

      e. To initialize git in VS Code
         > git init

         Due to the above cmd of initialise in the left sidebar menu, one option of the Branch icon(Source Control), in which files were modified with U(Update) as the letter means these files are modified

      f. If you want to remove/ignore some file from pushing into git, then in the .gitignore file, mention the file extension/file name/folder name

      g. After that, for staging file changes cmd

         > git add .

      h. After the above cmd file is moved from CHANGES to Staged Changes, with each file with A as a letter, means these files are going to be added to be final step before going to push in git

         > git commit -m "<commit comments>"

      i. Then adding the origin of the git repository means connecting VS Code to a specific git repository path using the below cmd

         > git remote add origin https://github.com/Yogesh-K-Matkar/deploy_react_app_example1.git

     j. Then, below cmd to push the final code to the specific master branch

         > git push origin master

                   OR

         > git push origin main

     k. Refresh the GitHub repository of the project deployed, and it will show all published files.

A.2. Deploying from GitHub to Netlify:-

    a. In Netlify, Add New Project --> Import an existing project --> Select Repository Application Name(GitHub) --> All Repositories

    b. Selecting All repositories, a list of all deployed GitHub repositories is displayed.

    c. Select the repository that needs to be hosted in Netlify

       Write in Build Command(As per defined in package.json--> script --> build)

       bun run build

    d. If the .env variable file in the React project is available, then add the  Environment Variable by clicking on the Add Environment Variables button

B. Steps for Cloning and Pulling Application from GitHub to VS Code:-

B.1. Cloning:-

      a. First, install Extension- GitHub Pull Requests, then through Settings open Command Palette and write GitHub Clone(Clone from GitHub)
      b. Then visit to GitHub account-->Select the repository, and copy the  browser URL of the repository, then need to clone it to VS Code.
      c. Now, explorer dialogue windows open --> select the folder where we want to clone the repository.

B.2. Pull Request :-

     a. Sync the local exisitng project with repository from GitHub VS Code Terminal cmd

        git pull origin main

+++++++++++++++++++++++++++++++

Practical Points:-

1.  DOM Reconciliation:  
    React uses a Virtual DOM to efficiently update the UI. When a component's state changes, React creates a new Virtual DOM tree by Babel and compares it with the previous one to determine the minimal set of changes needed to update the actual DOM.

2.  JSX code render 2 time during development due to React.StrictMode tag, which is then removed when the code is published.

3.  Each JSX element/expression must combine/enclosed using one parent JSX element, which means if you try to return multiple elements

    React will throw an error.

    Error: Adjacent JSX elements must be wrapped in an enclosing tag.

4.  To avoid using a non-required < div > tag to combine multiple elements into one before returning JSX from the component function, and also to avoid DOM to create an unwanted < div > element.
    Then comes the React concept of Fragments,

    e.g.

        const ComponentName=()=>
        {
          return(
                  <>
                    jsx multiple elements
                  </>
                );
        }

5.  Every JSX tag needs to be closed. You can use self-closing tags for elements that don't have children

    e.g.

        < img src="url"/ >

6.  Working/Processing on Objects

    6.1. Destructuring Object Properties:-

    Destructuring is a way to extract properties from an object and assign them to variables.

    It allows you to unpack values from arrays or properties from objects into distinct variables.

    e.g.

        const obj={id:1,name:"a",age:25};

        const {id,name,age}=obj;

        console.log(id);   //1
        console.log(name); //a
        console.log(age);  //25

    ***

    6.2. Spread Operator expand collection, array & object.

    6.2.1 Collection or Array(Merge Element of same type in below case array1 & array2 is type array):-

    e.g.

        var array1=["a","b","c"];
        var array2=["x","y","z"];

        var mergearray1=[...array1,"x"];
        var mergearray12=[...array1,...array2];

        console.log(mergearray1);           //["a","b","c","x"]
        console.log(mergearray12);          //["a","b","c","x","y","z"]

    6.2.2 Object(Update Object Property):-

    e.g.

        const obj={id:1,name:"a"};
        const obj1={...obj,id:2,name:"b"};

        console.log(obj1)  // {id:2,name:"b"}   //Expand object properties to update value of required property

7.  Concept of dynamic variable where we can assign derived value generated from JS function, expression or operations that can be shown at a specific location with JSX.

8.  Concept of logical variable where we can assign derived value generated from JS function, expression or operations that can be shown at a specific location with JSX based on a Condition using Conditional Operators/Logic such as Ternary, IF-ELSE block, etc.

9.  Types of Component:- 2 Types of Component Declaration

    9.1. Functional Component:- Modern ECMAScript ES6 way of declaring Component.

    9.2. Class Component:- Old way.

10. Types of Functional Component:-

    10.1. Default Functional Component :- In case of importing the Export Default component, then while importing any component name be used without curly braces.

    e.g.

         import NetflixSeries from "./components/NetflixSeries";
         (Where export component name is NetflixSeries)

    10.2. Named Functional Component :- In case of importing Export Named component, then while importing the same Component name to be used with curly braces.

    e.g.

         import { NetflixSeries } from "./components/NetflixSeries";
         (Where export component name is NetflixSeries)

11. Define/Use imported Components/Component from another JSX(ReactFrameworkApp.jsx) as below

    e.g.

        < ReactApp / > (Component Name)

12. To avoid rewriting/redundancy of the same code multiple times, create a single component and reuse it multiple times where required in the same JSX or another JSX
    (import component function from a particular JSX where the component function is defined).

13. Instead of FOR/FOREACH loop their is map() for looping on collection/array. In React map(), each element must have a key prop to differentiate each element generated while looping using map().

14. Logic on collection by using method map(),filter() and reduce()

    e.g.

        const users=[{ id: 1, name: "Alice", age: 25 },
                     { id: 2, name: "Bob", age: 35 }]

        14.1. map():- Used for looping in a collection or array.
        	e.g.

                users.map((u)=><User name={u.name} age={u.age}>)

        14.2. filter():- It's like a WHERE condition to get a customized collection based on the condition
        	 e.g.

                users.filter((u)=>u.age<35)

        14.3. reduce():- It does computation on the collection and returns the required value
        	e.g.

              users.reduce((derivedCalculatedValue,u)=>{return derivedCalculatedValue + u.age},0)

15. Props is way of passing attributes as parameter to Component in React, and can be passed from a unidirectional(1-direction) Parent component to calling child components as separate properties and consumed in the child component as props as a parameter that combines all properties of the child component defined by the Parent component while calling the Child component, except the key property.

16. While passing the integer value prop/attribute over the child component, pass it like this

    16.1. Integer prop/attribute over child component pass like this

        id={integer_value}

    16.2. String value prop/attribute over child component pass like this

        name="string_value"

    (IMP:- As per ECMAScript (ES6) rule, if in an object structure like { Name: Name }, when key and value are the same, then define the object like this {Name})

17. To pass HTML content as JSX/string within opening and closing component tags, then a special prop is used, denoted as children, to access those elements.

18. CSS Style- grid or flex-box. CSS always give it to the parent tag.
    Instead of defining a class prop for applying a CSS class, use the className prop.

    Types of CSS:-

    18.1. Normal CSS consider using the className prop.

    18.2. Inline CSS consider value as an object defined within { object } for the style prop

    e.g.

        style={{ margin: "1.2rem 0" }}

                OR

        Define the style object separately, then define it as a variable and then use it in the style prop

        const btn_style = { margin: "1.2rem 0" };

        style = {btn_style}

    18.3. Conditionally applying CSS

    18.3.1. Based on the Ternary operator, apply styling

    e.g.

         className={i>0?"className1": "className2"}

    18.3.2. When you want to append a className with a condition that derives another className based on the condition,
    meaning append a string with an expression done below by using Template Literal

    e.g.

         className={`className1 ${i>0?"className2": "className3"}`}

    18.4. ModuleCSS:-
    Module CSS is a component-specific style and extension of a file is <filename>.module.css

    In Module CSS, each className is treated as a property of that specific module.css object

    e.g. To access className abc

         import cssModule from './<filename>.module.css'

         style={cssModule.abc}        --When className abc doesn't contain '-'
         style={cssModule["a-b-c"]}   --When className a-b-c contain '-'

         style={cssModule["abc"]} OR style={cssModule["a-b-c"]} can be use commonly

    18.5. Using Tailwind v4 CSS (Third Party):-

    18.5.1. Install through Terminal cmd:-

        npm install tailwindcss @tailwindcss/vite

    18.5.2. Configure the Vite plugin

        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
            plugins: [
                        tailwindcss(),
                     ],
        })

    18.5.3. Import Tailwind CSS

        @import "tailwindcss";

    18.6.4. bun run dev

    (
    Notes:- In TailwindCSS,

    1. Need to you can set dynamic values within [], such as

    e.g.

        py-[3.2rem]

    2. If CSS is getting overridden by default CSS, then '!' symbol before each overridden CSS class

    e.g.

        !py-6

    )

19. Different Source of UI Controls :

    19.1. Styled-Components (Third Party):-
    In styled-component, first need to install using the Terminal cmd

    e.g.

         bun install styled-components

    Import,
    e.g.

         import styled from "styled-components"

    Then, using a styled object can access a React component and apply the style to it.

    2 ways to apply styled-components:-

    19.1.1. Template Literals:-

    e.g.

        const Button=styled.button`color:grey`;

            style.button --> button is a tag, eg p, h, button, span

    19.1.2. Style Object:-

    e.g.

        const Button=styled.button(
          {
            color: grey,
          }
        );

    style.button --> button is a tag, eg p, h, button, span

20. Custom Error:-
    To show custom error message, use the below syntax

    e.g.

        let customError=new Error("Custom Error Message");

21. Event Handler in JS, such as onClick, onChange, onSubmit, etc, which then call Syntactic Event Handler Function in React, should be written as a function name such as handleClick, handleChange,handleSubmit, etc
    This is known as the Syntactic Event Handler Function.

    Type Of Function:-

    21.1. Named Function is only calling the function name, not the function.

    e.g.

        onClick={handleButtonClick} (Not like this onClick={handleButtonClick()})

    21.2. Arrow Function with event as parameter to get Syntactic Event object

    e.g.

        onClick={(event)=>handleButtonClick(event)}

    21.3. Inline Function With Syntactic Event Object

    e.g.

        onClick={(event) => console.log(event)}

    21.4. Inline Arrow Normal Function

    e.g.

        onClick={() =>{ console.log("Hi")}}

    21.5. Arrow function passing parameters/arguments

    e.g.

        onClick={(event) => handleButtonClick3(event, "User1")}

22. Event Handler passing as props can be used in concepts such as Form Handling, User Interaction, State Management, and Callback Function.

23. Event Function is defined in Parent Component & passed as Props to Child Component, & then Child Component decides when to call Parent Component Event Function.
    So Parent Component pass Event Function as Props as Event Handler to the Child Component.

24. Event Propagation, propagate means moving & Event Propagation means moving each element and the occurrence of the event until it reaches the target event.

    Event Propagation has 3 components (Capture, Target & Bubbling)

    Type of Event Propagation:-

        23.1. Event Capture means propagating/moving from the Parent Element to the Target Action Element and triggering all occurrence event functions in the path while moving.
        23.2. Event Bubbling means propagating/moving from Target Action Element to Parent Element and triggering all occurrence event functions in the path while moving.

    But to avoid the unwanted triggering of Parent Component event functions other than the Target Action Event Function, we have to use

    e.g.

    event.stopPropagation(); -- stop after triggering a single target event.

    If Target control is bind with multiple other event rather then onClick such as onChange,onBlur then to stop such events begin call.

    e.g.

    event.stopImmediatePropagation();

25. States - useState Hook:-

    25.1. Values that need to be rendered in JSX code after update, then need to use the concept of State to maintain the value across multiple updates.

    25.2. The state is made of 2 components, one is the State Variable, and another is the setter function that updates the State Variable.
    e.g. const [state variable, setter function to set state variable] = useState(initial state variable value)

    25.3. To maintain value on multiple renders of the JSX, the useState function concept comes in that sets the initial value in the State Variable.

    25.4. Any function that starts with the word 'use', then that function in React is known as a concept called hook function.

    25.5. Component gets rendered when State Variables defined within it get updated, then all Child Components defined within it are also rendered.

26. Derived State means a variable value comes from a State Variable.

27. LiftingStateUp means when the state is defined in children and the same is needed by children at the same node level,
    so we need to move the state to its parent, where both children are calling. This can be done through passing a function as a prop to the child,
    where the value from the child is passed to the parent via the parent function passed as a prop to set the State in the parent.
    Then the same state is passed as a prop to another child that requires the same state value.

    That means State is common to multiple states at the same level of the child component.

28. React Icons for icons image from multiple sources(Font Awesome icons, Material UI icons, etc) at one place
    To access icons, first need to install using Terminal cmd
    eg bun install react-icons

    Then import where needed to show the icon

    e.g.

    import { IconComponentName } from "react-icons/io";

    Use the icon component where a specific icon is required within the component

    <IconComponentName style={{color:"blue"}}/>

29. To store & retain any value on refresh of the browser without a database.

    To set:- localStorage.setItem("keyname","data");
    To get:- localStorage.getItem("keyname");

30. When any control is bound with a state variable(control is moving from uncontrolled to controlled). In React, most components are uncontrolled components by default unless their values are bound to a state variable..

    Controlled Data Hooks:- useState

    UnControlled Data Hooks:- useRefs

31. The 'use' prefixes in a function name is all React Hooks.

    2 Types Of Hooks:-

    31.1. State Management:-
    31.1.1 useState:- The useState hook, when the state variable value gets updated, it renders the components where it is defined.

        Syntax:-

          import { useState } from "react";

          const [State Variable, Set State Variable Function]= useState(Initial State Variable Value)

           State Variable/Initial State Variable Value  can store any type of value, such as {}-Object,[]-Array,""-String,1234-Number

    31.1.2. useRefs:- The useRefs hook is used when control values are not tightly bound by any useState hook state variable, meaning an uncontrolled component.
    To work on an uncontrolled stateless form or component, then for storing uncontrolled control value useRefs hook is used.
    In vanilla JS, we are accessing the value of the control using the below syntax

                const inputcontrol=document.getElementById("#controlId");

                But in React above method is not preferred for accessing control, so instead in React useRefs hook is used to access control.


        Syntax:-

          import { useRef } from "react";

          const username=useRef(null);

          console.log(username.current.value);

       	  <input type="text" id="username" ref={username}>

        The ref attribute on the input field will bind with the constant variable <username> to the stored value entered in the input field.

        Passing ref from Parent Component to Child Component
        --Before React v19 release forwardRef function (props,ref)=>{} is used
        --After React v19 release, ref can be accessed as props.

    31.1.3. useId:- useId hook returns uniqueid. Don't use it to generate an ID for each field, as it will violate the accessibility rule of the form.

        Syntax:-

          import { useId } from "react";

          const uniqueid=useId();

    31.1.4. useReducer:- This hook is similar to the useState hook, but for the entry value of each control, we have to create a separate useState hook.
    But useReducer provides an action parameter for the reducer function, so based on the action type, different state values can be returned instead of creating a separate function for each control, similar to the useState hook concept.

        Syntax:-

          import { useReducer } from "react";

          const initState=0;

          const myReducerFunc=(state, action)=>
          {
              if(action.type=="increment")
              {
                   return state+1;
              }
              else if(action.type=="decrement")
              {
                   return state-1;
              }
          }

          const [stateVariable,myDispatchFunc]=useReducer(myReducerFunc,initStateValue);

          --> dispatch function(Function Name can be user defined) with type object, which internally calls the reducer function(Function Name can be user defined) and sets the type parameter to the action parameter based on which.

              For different actions.type property, can perform different logic and return a new state value of structure as of initStateValue

    31.2. Logical:-
    31.2.1. useEffect:- Secondary logic is performed based on changes that occur in dependencies, such as StateVariable value change.

        Syntax:-

           import { useEffect } from "react";



           useEffect(

               ()=>{
                     //Your side effect code
                      return Value;

                      return ()=>{
        			            //Cleanup code
                      };
        		      }, [dependencies]);

    31.2.2. useMemo:- This hook is used to skip unnecessary value re-calculation of value, if the value is already in cache, which will reduce the delay that occurs to a minimum in getting the actual result from other necessary components

    Syntax:- Syntax similar to the useEffect hook

           import { useMemo } from "react";

         const memoizedValue=useMemo(
                               	     ()=>{
                                         	     //Your code executes based on the value in dependencies that changes
                                  			     return Value;
                                      	 }, [dependencies]);

    e.g.

        const CPUHighConsumptionLogic = () =>
        {
          //Calculation function
          const sum = () =>
          {
              console.log("Calculating Sum...");

              let i = 0;
              for (i = 0; i < 10000000; i++) {
                  i += 1;
              }
              return i;
          };

          //const total = sum();

          const total = useMemo(() => sum(), []);

          return <>Sum:{total}</>;
        };

        So when the CPUHighConsumptionLogic component is rendered, it will only calculate the sum once and cache the result.
        If the component is re-rendered, it will use the cached value instead of recalculating again as value is not changed, thus improving performance.

    31.2.3. useCallBack:- This hook is used to skip unnecessary function re-execution if the value is already in cache, which will reduce the delay that occurs to a minimum in getting the actual result from other necessary components

    Syntax:- Syntax similar to the useEffect hook

         const memoizedValue=useCallBack(
                               	     ()=>{
                                        	     //Your code executes based on the value in dependencies that changes
                                  			     return Value;
                                       	 }, [dependencies]);

    So when the component is rendered, it will only calculate callBack function and cache the result.
    If the component is re-rendered, it will use the cached value instead of re-calling callBack again as value is not changed, thus improving performance.

32. Prop Drilling:-
    Passing Props through Source Component to subsequent child components until it reaches to the required destination component.
    To solve the above problems ContextAPI concept comes into the picture.

33. ContextAPI: This concept helps in passing data to the required destination component directly without passing through subsequent components.
    ContextAPI is mainly used when a scenario of the same data is required by multiple child components.

    33.1. createContext(Source Component):- Creates a Context object which acts like a Component.

    Syntax:-
    import { createContext } from "react";

    e.g. //1st Step

            export const BioContextStore = createContext();

    createContext objects act as a wholesaler that sells multiple products.

    33.2. Provider:- It works as a component whose property of the Context object is created using createContext that provides the context value to its children.

    e.g.//2nd Step

            export const BioProvider = ({ children })=>
            {
            const bioInfo =
            {
                 FullName: "Yogesh Matkar",
                 FirstName: "Yogesh",
                 LastName: "Matkar",
             };

            const addressInfo =
            {
                 Address:
                         {
                             City: "Mumbai",
                             State: "Maharashtra",
                             Pincode: "400065"
                         },
            };

            const personBioDetails =
            {
                  bioInfo: bioInfo,
                  addressInfo: addressInfo,
             };

           //const bioDetails =
            {
                  FirstName: "Yogesh",
                  LastName: "Matkar"
             };

           return (
                    <BioContextStore.Provider        value={personBioDetails}>
                         {children}
                    </BioContextStore.Provider>
                  );
             };

    Provider acts as Distributor/Delivery Person of the WholeSeller that takes a variety of Products and stores them in Tempo.

    33.3. useContext(Consumer/Destination Component):- A hook that allows you to consume a context.

    Syntax:-
    import { useContext } from "react";

    e.g. //3rd step

            const { bioInfo, addressInfo } = useContext(BioContextStore);

    useContext acts as a Consumer that uses the required Stored Product delivered by the Delivery Boy.

34. Custom Hooks:- Requirement of custom hook is when we want to put multiple calls of the same React hooks into a created custom hook & then calling that custom hook to reduce the code of multiple calls to the same hooks.

        Syntax:-
             const useCustomHook1=()=>{
                         	const hookObject=useContext(BioContext);
                         	return hookObject;
                         }

    34.1. All custom hooks can be prefixed with 'use' basic rule of hooks.
    34.2. Custom hooks are created as a wrapper of the same React hook that is used multiple times in multiple components to avoid the DRY(Do Not Repeat Yourself) principle.

35. use Hook:- Is a replacement to the useContext hook, which has the limitation of defining at the top of the component, but the 'use' hook can be called within a condition, a looping logic, which gives more flexibility.

    e.g.

    import { use } from "react";

    const newHook = true;

    let myName, myAge;

    if (newHook) {
    ({ myName, myAge } = use(BioContext));
    }

36. Memo:-(HOC-Higher Order Component)-
    Prevent unnecessary rendering of entire child component due to parent component rendering as child component is wrapped inside parent component

    Component inside Memo is only gets render when any of props value inside Component is change else it's skips Component from re-rendering.

        Syntax:- export child components as below with a memo hook wrap around

                 import { memo } from "react";

                 export default memo(Childcomponent);

                          OR

                 export const Childcomponent=memo(()=>{return <>Child Component</>});

37. Two Third Party API Access APIMethods:-

    Two ways to call and get data

    37.1. fetch():-

        37.1.1. Using Promises:-

          e.g.

                fetch(url).then

        37.1.2. Using async await mechanism

          e.g.

                async () =>
                {
                            const apiData=await fetch(url);
                }

    37.2. Axios():-(Better Then fetch() as it has more features and is more user-friendly)

          Axios is promise-based HTTP client request/response handling library.It is third-party library not from React.
          That's why need to install axios.

          Benefits:-

            1. Easier syntax and cleaner code.
            2. Automatic JSON transformation without extra code.
            3. Built-in error handling.
            4. Supports old browsers.

        37.2.1. First install axios

          Syntax:-

              npm install axios

              import axios from 'axios';

        37.2.1.1. Axios Using Promises:-

                  e.g.

                        axios(url).then

                  Type to Promise Methods to fetch reponse:-

                     1. Promise.all :- When any of Single Promise is not fullfilled/failed in array of Promisess then all   Promisess will be failed.
                     2. Promise.allsettled
                     3. Promise.race

        37.2.1.2. Axios Using async await mechanism

                  e.g.

                        async () =>
                        {
                            const apiData=await axios(url);
                        }

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(Imp:- In REACT, Routing can be achieved using REACT-ROUTER JS Framework)

REACT-ROUTER JS Framework:-

B.

1.  REACT ROUTER(v7.6+) is another JavaScript(JS) Library/Framework used for implementing Routing in our Web Application using client-side scripting.

2.  Install the react-router module.

    Syntax:-

           > npm i react-router-dom@latest

    Then verify the module is installed or not in the package.json within the dependencies key's value, along with the module version

3.  Routing/Navigation :- Moving through different UI is SPA(Single Page Application) is done through React-Router framework
    concept.

    Syntax:- Two ways to create a route

    3.1. Old (Using helper createRoutesFromElements):

            import { createBrowserRouter } from "react-router-dom";

             const router = createBrowserRouter(
               createRoutesFromElements(
                 <>
                     <Route path="/" element={<Home/>}></Route>
                     <Route path="/about" element={<About/>}></Route>
                 </>
               );
             );

             <RouterProvider router={router} />

    3.2. New:-
    import { createBrowserRouter } from "react-router-dom";

             const router = createBrowserRouter([
                     { path: "/", element: <Home/>  },
                     { path: "/about", element: <About/> },
             ]);

             <RouterProvider router={router} />

    (Note:- / in path defines the route/home route of the application means it loads the initial component)

    <RouterProvider> react-router-dom inbuilt component that shares the router path to the entire application,
    means path call in browser anywhere within the application, that path is checked in the router array object by RouterProvider
    and then navigate to the associated component

    Eg:-

    const routeLinks = createBrowserRouter(
    [
    {
    path: "/",
    element: <AppLayout />,
    children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/movie", element: <Movie /> },
    { path: "/contact", element: <Contact /> }
    ],
    errorElement: <ErrorPage />,
    },
    ]
    );

     <RouterProvider router={routeLinks} />

    Props of createBrowserRouter:-

    1. path:- It accepts a navigation path name, which is displayed in the browser URL.

    2. element:- It holds a component that gets rendered when the associated path is displayed in the browser URL

    3. children:- It also holds an array of paths along with a child component, which is going to render in the Page Body section.

       1. In the above element <AppLayout> is a component that consists of a Header and a Footer section, which is common for the entire application.
       2. Children are included dynamically in the Body section between the Header section & Footer section by <Outlet> react router component, based on the associated path, gets called on clicking of the link which is generated using <NavLink> react router component.
       3. Loader prop of children takes a function that returns JSON data from the function through fetchAPI() as API data.
       4. Action prop of children takes a function that returns JSON data from the function through formData() that is used to UPDATE different fields of data submitted in the component by Form action.

    4. errorElement:- It holds the component that gets rendered when the associated element component's error occurs due to syntax, logic, etc.

4.  Due to the <a> HTML tag, when a link is clicked, there is a full postback of the page, so no use of <a> anchor HTML tags in React.
    Therefore, in React, the built-in component <NavLink> is provided in place of the <a> anchor tag or any navigation HTML tag to avoid postback/refresh of the entire page.
    In <NavLink>, their is 'to' attribute is replaced with the <a> tag 'href' attribute.

    Syntax:-

    HTML Tag:-

          < a href="#" >Link< /a >

    In React:-

          < NavLink to="#" >Link< /NavLink >

5.  Active Link is a concept of highlighting the current selected Link based on the color of the Link is different from all other non-selected Link colors.

    There are 3 ways of adding 'active' CssClass with 'nav-link' CssClass

    1. className with inline function
    2. Style with inline function
    3. Style with a function call

6.  Hooks In React Router:-

    import { createBrowserRouter, RouterProvider } from "react-router-dom";
    import { useRouteError } from "react-router-dom";

    const routeLinks = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/movie", element: <Movie />, loader: getMoviesDataByParams },
    { path: "/contact", element: <Contact />, action: submitContactFormData },
    ],
    errorElement: <ErrorPage />,
    },
    ]);

    6.1. useRouteError:- This hook provides error details, meaning the cause of the error, which gives details of the Type Of Error and error, status, statusText, etc.

        Syntax:-
              import { createBrowserRouter, RouterProvider } from "react-router-dom";
              import { useRouteError } from "react-router-dom";

              const errorDetails = useRouteError();

        2- Ways of showing an error page

        6.1.1. Using errorElement key -- Best way

               e.g.

                const routeLinks = createBrowserRouter([
                {
                   path: "/",
                   element: <AppLayout />,
                   children: [
                               { path: "/", element: <Home /> },
                               { path: "/about", element: <About /> },
                               { path: "/movie", element: <Movie /> },
                               { path: "/contact", element: <Contact /> },
                             ],
                   errorElement:<ErrorPage />,
                },
                ]);

        6.1.2. Using children's JSON object

                const routeLinks = createBrowserRouter([
                {
                   path: "/",
                   element: <AppLayout />,
                   children: [
                               { path: "/", element: <Home /> },
                               { path: "/about", element: <About /> },
                               { path: "/movie", element: <Movie /> },
                               { path: "/contact", element: <Contact /> },

                               { path: "*", element: <ErrorPage /> },                --- (Imp:- path: "*" -  Where * is Wild Card Route)

                            ],
                },
                ]);

    6.2. useNavigate:- This hook is used to navigate, especially to the immediate previous URL/Page. Can also navigate to any URL/Page.

    Syntax:-

             import { useNavigate } from "react-router-dom";

             const navigate = useNavigate();

             <button className="btn btnclose" onClick={() => navigate(-1)}>
            		Go Back
             </button>

        Note: -1 means the previous page
              / mean home page

    6.3. useNavigation:- This hook is used to get information about the current navigation state, such as location, action, etc.

    Syntax:-

            import { useNavigation } from "react-router-dom";

            const navigation = useNavigation();

            Note:- navigation.state can be used to check the current state of navigation, such as loading, idle, etc.

    6.4. useLoaderData:- This hook is used to get data from the loader function, which is defined in the route's children array object.State property of the hook is used to know the current state of data loading, such as loading, idle, etc.

    Syntax:-

            import { useLoaderData } from "react-router-dom";

            const data = useLoaderData();

7.  Dynamic Route Parameters:-

        Dynamic route parameters are used to access dynamic values from the URL.

    7.1. Calling component in route with a dynamic route parameter in the path use prop object useParams hook

    useParams(OLD React version below 6.4):- This hook is used to access dynamic route parameters from the URL when using through component call in the loader prop of the route.

    Syntax:-

           import { useParams } from "react-router-dom";

           const params = useParams();

           Note:- The params object will contain key-value pairs of dynamic route parameters defined in the path.

           Example: If the path is "/movie/:movieID", then params will be an object like { movieID: "123" }.

        2. Calling a function in the route with a dynamic route parameter in the loader prop of the route

           Note:- {params} object is passed as a prop to a function where a dynamic route parameter is required.

8.  .env File:-
    This file is used to store environment variables such as API keys, URLs, etc. It should not be committed to version control for security reasons.

    (Note:- .env file should be placed at the root of the project directory.)

        Syntax:-

            In a React project, below is an example of the .env file,

            Always append 'REACT_APP_' before the variable name to make it accessible in a React application.

            REACT_APP_API_KEY=your_api_key_here
            REACT_APP_API_URL=https://api.example.com

            import (REACT.meta.env.REACT_APP_API_KEY) from "react"; --To Access Environment Variables

          But in the Vite project, below is an example of the .env file,

          Always append 'VITE_' before the variable name to make it accessible in a React application.

          VITE_API_KEY=your_api_key_here
          VITE_API_URL=https://api.example.com

          import.meta.env.VITE_API_KEY from "react";  --To Access Environment Variables

9.  Dynamic Routing:-
    Dynamic routing is used to create routes based on data or user input. It allows you to create routes that can change at runtime.

        Syntax:-

            In React Router, dynamic routing can be achieved by using route parameters in the path.

        e.g.

          ```jsx
                { path: "/movie/:movieID", element: <Movie />, loader: getMoviesDataByParams }
          ```

          9.1. Calling component in route with a dynamic route parameter in path

             In this example, `:movieID` is a route dynamic parameter that can be accessed in the `Movie` component using the `useParams` hook.

          9.2. Calling a function in the route with a dynamic route parameter in the loader prop of the route

             In this example, `:movieID` is a route dynamic parameter that can be accessed in the `getMoviesDataByParams` function by passing the `params` object as a prop.

              ```jsx
                    export const getMoviesDataByParams = async ({ params }) =>
                    {
                           let movieID = params.movieID;
                           const data = await resp.json();

                            return data;
                    };
              ```

10. Form Submission:-
    React Router provides a way to handle form submissions using the `action` prop in the route configuration. This allows you to handle form data submission and processing.

        Syntax:-
        In the route configuration, you can define an `action` function that will be called when the form is submitted.

              Example:
                 In route configuration, the action prop is used to handle form submission and process the form data as below.

                 ```jsx
                       { path: "/contact", element: <Contact />, action: submitContactFormData}.
                 ```

                 Then, passing the {request} object as a prop to a function where the formData() function returns a response, which is then converted to an object format through object.fromEntries(), which is further used                 for processing array-like structure data to convert to object format.

                 ```jsx
                       export const submitContactFormData = async ({ request }) =>
                       {
                         try {
                                 const resp = await request.formData();

                                 console.log(resp);

                                 const actualresp = Object.formEntries(resp);

                                 console.log(actualresp);

                                 return actualresp;
                            } catch (error) {

                                 console.log(error);

                            }
                       };
                 ```

+++++++++++++++++++++++++++++++++++++++++

Extra Features of React:

+++++++++++++++++++++++++++++++++++++++++

1.  AXIOS (Alternative to fetch()):-
    AXIOS is a promise-based HTTP client for the browser and Node.js. It is used to make HTTP requests to APIs and handle responses.

    Syntax:-

         To install AXIOS, use the following command in the terminal:

         ```jsx
             npm install axios
         ````

         Example of using AXIOS to make a GET request:

         ```jsx

             import axios from "axios";

             const fetchData = async () =>
             {
               try {
                     const response = await axios.get("https://api.example.com/data");
                     console.log(response.data);
                   } catch (error) {
                     console.error("Error fetching data:", error);
                 }
             };
         ```

    (
    IMPORTANT:-

         //This logic of using axios is followed in real scenarios in IT Companies for calling api's

            import axios from "axios";

         // 1. Create a reusable Axios instance

             const api = axios.create({ baseURL: "https://www.omdbapi.com/" });

         // 2. Define a function to fetch movie data

             export const getMovies = () =>
             {
                 let api_key = import.meta.env.VITE_MOVIES_API_KEY;

                 return api.get(`?i=tt3896198&apikey=${api_key}&s=titanic&page1`);
             };

    )

2.  HTTP Method(CRUD Methods):-

2.1. POST(Create-C):-
The POST method is used to send data to the server to create a new resource. It is commonly used for submitting forms or uploading files.

      Syntax:-

      ```jsx
      import axios from "axios";

      const createResource = async (data) => {
        try {
          const response = await axios.post("https://api.example.com/resources", data);
          console.log("Resource created:", response.data);
        } catch (error) {
          console.error("Error creating resource:", error);
        }
      };
      ```

2.2. GET(Read-R):-
The GET method is used to retrieve data from the server. It is commonly used for fetching resources or displaying data to the user.

      Syntax:-

      ```jsx
      import axios from "axios";

      const fetchResource = async (id) => {
        try {
          const response = await axios.get(`https://api.example.com/resources/${id}`);
          console.log("Resource fetched:", response.data);
        } catch (error) {
          console.error("Error fetching resource:", error);
        }
      };
      ```

2.3. PUT(Update-U):-
The PUT method is used to update an existing resource on the server. It is commonly used for updating data or replacing a resource.

      Syntax:-

      ```jsx
      import axios from "axios";

      const updateResource = async (id, data) => {
        try {
          const response = await axios.put(`https://api.example.com/resources/${id}`, data);
          console.log("Resource updated:", response.data);
        } catch (error) {
          console.error("Error updating resource:", error);
        }
      };
      ```

      The PATCH method is also used for updating a resource, but it is typically used for partial updates, meaning only the fields that need to be changed are sent in the request body.

      Syntax:-

      ```jsx
      import axios from "axios";

      const patchResource = async (id, data) => {
        try {
          const response = await axios.patch(`https://api.example.com/resources/${id}`, data);
          console.log("Resource patched:", response.data);
        } catch (error) {
          console.error("Error patching resource:", error);
        }
      };
      ```

2.4. DELETE(Delete-D):-
The DELETE method is used to delete a resource on the server. It is commonly used for removing data or resources.
Syntax:-

      ```jsx
          import axios from "axios";

          const deleteResource = async (id) =>
          {
            try {
                  const response = await axios.delete(`https://api.example.com/resources/${id}`);
                  console.log("Resource deleted:", response.data);
            } catch (error) {
                  console.error("Error deleting resource:", error);
            }
          };
      ```
