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

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# ReactJS Concepts:-
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

1.  DOM Reconciliation / Diffing Algorithm:  
    React uses a Virtual DOM to efficiently update the UI. When a component's state changes, React creates a new Virtual DOM tree by Babel and compares it with the previous one to determine the minimal set of changes needed to update the actual DOM.

2.  React.StrictMode:-
    It is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.

    It helps to identify components with unsafe life-cycles, legacy API usage, and other side effects.

    Syntax:- Wrap the entire application with <React.StrictMode> tag

    Syntax:

        ```js
        import React from 'react';
        <React.StrictMode>
            <App />
        </React.StrictMode>
        ```

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

    
    9.1. Class Component:- ES6 classes extending React.Component. Uses render method and state.Legacy projects only.

     ![Lifecycle](public/images/ComponentLifecycle.png)


         Lifecycle:- Three main phases:  

         9.1.1 Mounting Phase

                This phase occurs when a component is first created and inserted into the DOM. It involves initial setup and rendering.

                constructor(props): Initializes state and binds event handlers (only in class components).

                static getDerivedStateFromProps(props, state): Sync state to props before rendering.

                render(): Returns the JSX to build the UI.

                componentDidMount(): Runs after the component is mounted to the DOM, useful for side effects like data fetching or setting up subscriptions.

         9.1.2 Updating Phase

                This happens whenever the component's props or state change, triggering a re-render.

                static getDerivedStateFromProps(props, state): Called during updates to sync state to new props.

                shouldComponentUpdate(nextProps, nextState): Determines if component should re-render (returning false skips update).

                render(): Re-renders the component.

                getSnapshotBeforeUpdate(prevProps, prevState): Captures information before DOM updates (e.g., scroll position).

                componentDidUpdate(prevProps, prevState, snapshot): Runs after updates, suitable for DOM operations or fetching new data.

         9.1.3 Unmounting Phase

                This phase occurs when the component is removed from the DOM and is used for cleanup.

                componentWillUnmount(): Called right before the component is removed, where you can clear timers, cancel network requests, or remove event listeners.

    9.2. Functional Component:-JS functions returning JSX. With Hooks, can manage state and effects.Preferred currently in projects.

         Functional components do not have these explicit lifecycle methods but achieve similar effects using React Hooks:

        useEffect hook replaces componentDidMount, componentDidUpdate, and componentWillUnmount. You can specify when the effect runs and perform cleanup by returning a cleanup function.
   
10. Types of Functional Component:-

    10.1. Default Functional Component :- In case of importing the Export Default component, then while importing any component name be used without curly braces.

    Syntax:

         ```js
         import NetflixSeries from "./components/NetflixSeries";
         ```
         (Where export component name is NetflixSeries)

    10.2. Named Functional Component :- In case of importing Export Named component, then while importing the same Component name to be used with curly braces.

    Syntax:

         ```js
         import { NetflixSeries } from "./components/NetflixSeries";
         ```
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

    e.g.

        const { children } = props;

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

25. Derived State means a variable value comes from a State Variable.

26. LiftingStateUp means when the state is defined in children and the same is needed by children at the same node level,
    so we need to move the state to its parent, where both children are calling. This can be done through passing a function as a prop to the child,
    where the value from the child is passed to the parent via the parent function passed as a prop to set the State in the parent.
    Then the same state is passed as a prop to another child that requires the same state value.

    That means State is common to multiple states at the same level of the child component.

27. React Icons for icons image from multiple sources(Font Awesome icons, Material UI icons, etc) at one place
    To access icons, first need to install using Terminal cmd
    eg bun install react-icons

    Then import where needed to show the icon

    e.g.

    import { IconComponentName } from "react-icons/io";

    Use the icon component where a specific icon is required within the component

    <IconComponentName style={{color:"blue"}}/>

28. To store & retain any value on refresh of the browser without a database.

    To set:- localStorage.setItem("keyname","data");
    To get:- localStorage.getItem("keyname");

29. When any control is bound with a state variable(control is moving from uncontrolled to controlled). In React, most components are uncontrolled components by default unless their values are bound to a state variable..

    Controlled Data Hooks:- useState

    UnControlled Data Hooks:- useRefs

30. The 'use' prefixes in a function name is all React Hooks.

    2 Types Of Hooks:-

    30.1. State Management:-
    30.1.1 useState(State Management with re-rendering):- The useState hook, when the state variable value gets updated, it renders the components where it is defined, such as form input, toggles, counters, fetched data flags, or UI visibility.

    For local state management inside a single component and it remains until the component is unmounted.

    State Variable/Initial State Variable Value can store any type of value, such as {}-Object,[]-Array,""-String,1234-Number

    Syntax:-

        ```js
        import React, { useState, useEffect } from 'react';

        function Counter() {
            const [count, setCount] = useState(0);

            useEffect(() => {
                document.title = `You clicked ${count} times`;
            }, [count]); // run effect only when count changes

            return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>Click me</button>
                </div>
            );
        }
        ```
        
        Imp:-

        1. The effect updates the document title after every render where count changes.
        2. If you omit [count], it would update after every render.
        3. Passing an empty array [] would run it only once after the initial render.
           

    30.1.2. useRefs(DOM Manipulation without re-rendering):- Built-in hook is used when control values are not tightly bound by any useState hook state variable, meaning an uncontrolled component.

    When you need to access or manipulate a DOM element directly (e.g., to manipulate input fields, focus elements, scroll positions, or perform animations imperatively).

    Persisting mutable values: Store values across renders (like timers, previous state values, or any mutable data) without triggering re-render.
   
    
    In React, we can access the control using the document.getElementById() method, such as

    Syntax:-

        ```js
        import React, { useRef } from 'react';

        function TextInput() {
            const inputRef = useRef(null);

            const focusInput = () => {
                inputRef.current.focus();  // Imperatively focus the input
                
                console.log(inputRef.current.value);  // Access the input value
                
            };

            return (
                <div>
                    <input ref={inputRef} type="text" placeholder="Click button to focus me" />
                    <button onClick={focusInput}>Focus Input</button>
                </div>
            );
        }

        export default TextInput;
        ```          
        Here, inputRef points to the DOM <input> element.

        Clicking the button calls focusInput which focuses the input directly.

        No re-render is triggered when inputRef.current is mutated.


        (Passing ref from Parent Component to Child Component
        --Before React v19 release forwardRef function (props,ref)=>{} is used
        --After React v19 release, ref can be accessed as props.)

    30.1.3. useId(Unique IDs):- useId hook returns uniqueid. Don't use it to generate an ID for each field, as it will violate the accessibility rule of the form.

    Syntax:-

        ```js
        import { useId } from "react";

        const uniqueid=useId();
        ```

    30.1.4. useReducer(Complex State Logic):- This hook provides an action parameter for the reducer function, so based on the action type, different state values can be returned instead of creating a separate function for each control action, that update the state differently.

    Useful in forms, game states, or lists requiring add, remove, toggle operations.

    Syntax:-

        ```js
        import React, { useReducer } from 'react';

        const initialState = { count: 0 };

        const reducer = (state, action) => {

            switch (action.type) {
                case 'increment':
                return { count: state.count + 1 };
                case 'decrement':
                return { count: state.count - 1 };
                case 'reset':
                return { count: 0 };
                default:
                return state;
            }
        };

        function Counter() {
            const [state, dispatch] = useReducer(reducer, initialState);

            return (
                <div>
                  <p>Count: {state.count}</p>

                  <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>

                  <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

                  <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                </div>
            );
        }

        export default Counter;
        ```

        Defines a reducer managing count state with 3 actions: increment, decrement, reset.

        dispatch triggers state changes routed through the reducer.

        This clearly separates state logic from UI.       

    
    30.1.5. useEffect(Side Effects):-  Side effects functionality (data fetching, DOM manipulation, setting up subscriptions, or timers) which normally occur outside the rendering process.

    Runs side-effect code after React has updated the DOM.

    Syntax:-

        ```js
        import React, { useState, useEffect } from 'react';

        function Counter() {
            const [count, setCount] = useState(0);

            useEffect(() => {
                document.title = `You clicked ${count} times`;
            }, [count]); // run effect only when count changes

            return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>Click me</button>
                </div>
            );
        }
        ```

        The effect updates the document title after every render where count changes.

        If you omit [count], it would update after every render.

        Passing an empty array [] would run it only once after the initial render.


        (Imp:- Cleanup Code execute
                 1. When Component Unmount mean component does not render in JSX based on condition
                 2. When dependencies changes useEffect re-render.)

    30.1.6. useMemo(Performance Optimization):- Built-in hook that optimize performance by memoizing (caching) the result of expensive calculations so they don't have to be recomputed on every render unless their dependencies change.

    Used when complex sorting, filtering, or computations.

    Syntax:- 

        ```js
        import React, { useState, useMemo } from 'react';

        function ExpensiveCalculation({ number }) {
            const factorial = useMemo(() => {
                function factorialOf(n) {
                    return n <= 1 ? 1 : n * factorialOf(n - 1);
                }
                console.log('Computing factorial...');
                return factorialOf(number);
            }, [number]);

            return (
                <div>
                <p>Factorial of {number} is {factorial}</p>
                </div>
            );
        }

        export default function App() {
            const [count, setCount] = useState(5);

            return (
                <>
                    <ExpensiveCalculation number={count} />
                
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </>
            );
        }
        ```

        The factorial is recalculated only if number changes.

        Clicking the button renders the component but the expensive factorial calculation runs only when needed.

    30.1.7. useCallBack(Memoized Callbacks):- Built-in hook that memoizes a callback function and returns the same function instance between renders unless its dependencies change. This helps optimize React components by preventing unnecessary re-creations of functions and avoids unwanted re-renders in child components that receive these callbacks as props.

    Syntax:- 
    
        ```js
        import React, { useState, useCallback } from 'react';

        function Parent() {
            const [count, setCount] = useState(0);

            // Memoize callback to prevent its recreation unless 'count' changes
            const increment = useCallback(() => {
                setCount(c => c + 1);
            }, []);

            return (
                <>
                    <Child onClick={increment} />
                
                    <p>Count: {count}</p>
                </>
            );
        }

        const Child = React.memo(({ onClick }) => {
            console.log("Child rendered");
            return <button onClick={onClick}>Increment</button>;
        });
        ```

        Without useCallback, the onClick function would be a new instance every render, causing Child to re-render.

        With useCallback, the same function instance is passed, so Child only re-renders when necessary.

    30.1.8 useContext(Global State Management):

    Prop Drilling(Problem which is resolved using useContext hook):-
        Passing Props through Source Component to subsequent child components until it reaches to the required destination/target component.

        This can lead to unnecessary complexity and makes it difficult to manage state and props, especially in larger applications with deeply nested components.

    This hook is mainly used when a scenario to shared global state or configuration like themes, authentication info, language settings, or user preferences across multiple components efficiently, avoiding the need to pass props through many component levels ("prop drilling").

    Syntax:-

        ```js
        import React, { createContext, useContext, useState } from "react";

        // Create a context with a default value
        const UserContext = createContext("Guest");

        function App() {
            const [user, setUser] = useState("Jesse Hall");

            return (
                <UserContext.Provider value={user}>
                    <h1>Hello {user}!</h1>
                    <ComponentA />
                </UserContext.Provider>
            );
        }

        function ComponentA() {
            return <ComponentB />;
        }

        function ComponentB() {
            return <ComponentC />;
        }

        function ComponentC() {
            const user = useContext(UserContext); // Consume context value here

            return <h2>Welcome back, {user}!</h2>;
        }
        ```

        Here, UserContext shares the user value globally.

        ComponentC accesses the user value directly using useContext, without receiving it as props through intermediate components.

        Changing user with setUser will cause all consuming components to update.


    (
        Note:- 
    
        Limitation of useContext hook conditionally calling useContext hook is not allowed, meaning it has to be defined at the top of the component function.
        
        But the 'use' hook can be called within a condition, a looping logic, which gives more flexibility.    

        Syntax:-

            ```js
            import { use } from "react";

            const newHook = true;

            let myName, myAge;

            if (newHook) {
                ({ myName, myAge } = use(BioContext));
            }
            else {
                myName = "Default Name";
                myAge = 0;
            }
            console.log(myName, myAge);            
            ```
    )

31. Custom Hooks:- 
    Custom hooks are a way to encapsulate and reuse logic across multiple components in React. They allow you to create reusable functions that can use built-in hooks like useState, useEffect, and others.

    Custom hooks are just JavaScript functions that start with the word "use" and can call other hooks inside them. They can return any value, including state variables, functions, or objects.

    Custom hooks are useful for encapsulating complex logic that needs to be shared across multiple components, such as form handling, data fetching, or animations.

    To create a custom hook, define a function that uses React hooks and returns the desired values or functions. Then, you can use this custom hook in any component by calling it like a regular function.    

    Syntax of a custom hook that uses useState and useEffect:

        ```js
        import { useState, useEffect, useContext } from "react";

        const useCustomHook1 = () => {
            const [data, setData] = useState(null);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);

            useEffect(() => {
                const fetchData = async () => {
                    try {
                        const response = await fetch("https://api.example.com/data");
                        const result = await response.json();
                        setData(result);
                    } catch (err) {
                        setError(err);
                    } finally {
                        setLoading(false);
                    }
                };

                fetchData();
            }, []);

            return { data, loading, error };
        };  
        ```       

32. HOC/Higher Order Component:-
    HOC is a function that takes a component and returns a new component with additional functionality or behavior.    

    To reuse cross-cutting concerns like authentication, authorization, data fetching, error handling, theming, or logging across many components.


        1 Code Reusability:

            HOCs enable sharing common logic (e.g., authentication, data fetching) across multiple components without repeating code.

        2 Separation of Concerns: 
    
            They help separate the UI rendering from logic or side effects, improving code organization and maintainability.

        3 Cleaner Components: 
            
            Components remain focused on UI, while HOCs handle behavior, making both easier to manage.

        4 Improved Testing: 
            
            You can isolate logic in HOCs and test them separately.

        5 Scalability: 
            
            HOCs simplify adding or modifying shared behavior as the app grows.

        6 Third-Party Integration: 
            They help inject functionalities like theming, analytics, or API integration uniformly across components.

    Syntax:-

        ```js
        const WithExtraProps = (WrappedComponent) => {
            return (props) => {
                const extraProps = { extraProp: "value" };
                return <WrappedComponent {...props} {...extraProps} />;
            };
        };

        export default WithExtraProps(MyComponent);
        ```

    Here, `WithExtraProps` is a HOC that adds an `extraProp` to the wrapped component `MyComponent`.

    32.1. React.Memo:-

        React.Memo is a built-in HOC that memoizes a component, preventing unnecessary re-renders when its props haven't changed.

        It is used to optimize performance by avoiding re-rendering of components that receive the same props.

        Syntax:-

            ```js
            import React, { memo } from "react";

            const ChildComponent = (props) => {
                return <div>{props.value}</div>;
            };

            export default memo(ChildComponent);
            ```

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# ReactJS API Access Ways:-
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

1.  fetch():-

    Fetch is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a Promise that resolves to the Response object representing the response to the request.

    1.1 Promises:

    Fetch API uses Promises to handle asynchronous operations, allowing you to work with the response data once the request is complete.

        Syntax:-

            ```js
            fetch(url).then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
            ```

    1.2 Async-Await

    Async-Await is a more modern way to handle asynchronous operations in JavaScript, making the code look synchronous and easier to read.

        Syntax:-

            ```js
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error(error);
                }
            };
            ```


2. Axios() (Third-Party):-

   Axios is a promise-based HTTP client for the browser and Node.js. It is better than fetch() as it has more features and is more user-friendly.

    It simplifies making HTTP requests and handling responses, making it easier to work with APIs.

          Benefits:-

            1. Easier syntax and cleaner code.
            2. Automatic JSON transformation without extra code.
            3. Built-in error handling.
            4. Supports old browsers.

    Third-party libraries like Axios need to be installed separately. 

    2.1. First install axios

        Syntax:-
                > npm install axios
                
                Then verify the module is installed or not in the package.json within the dependencies key's value, along with the module version
               



        2.1.1. Promises:-

                    Axios returns a Promise that resolves to the response data.

                    Syntax:-

                        ```js
                        import axios from 'axios';

                        axios.get(url)
                            .then(response => console.log(response.data))
                            .catch(error => console.error(error));
                        ```   

                    Promise Methods to fetch response:-

                        1. Promise.all :- When any of Single Promise is not fulfilled/failed in array of Promises then all Promises will be failed.                        
                        2. Promise.race : When any of Single Promise is fulfilled in array of Promises then that Promise will be returned.
                        3. Promise.any : When any of Single Promise is fulfilled in array of Promises then that Promise will be returned, if all Promises are rejected then it will be failed.
                        4. Promise.resolve : When any of Single Promise is fulfilled in array of Promises then that Promise will be returned, if all Promises are rejected then it will be resolved with undefined value.
                        5. Promise.reject : When any of Single Promise is fulfilled in array of Promises then that Promise will be returned, if all Promises are rejected then it will be rejected with undefined value.
                        6. Promise.finally : When any of Single Promise is fulfilled in array of Promises then that Promise will be returned, if all Promises are rejected then it will be resolved with undefined value.
                        7. Promise.timeout : When any of Single Promise is fulfilled in array of Promises then that Promise will be returned, if all Promises are rejected then it will be resolved with undefined value.

        2.1.3 Async-Await

                    Axios can also be used with async-await syntax, making the code more readable and easier to manage.

                    Syntax:-

                        ```js
                        import axios from 'axios';

                        const fetchData = async () => {
                            try {
                                const response = await axios.get(url);
                                console.log(response.data);
                            } catch (error) {
                                console.error(error);
                            }
                        };

                        fetchData();
                        ```

3. Axios HTTP Methods:
   
    Axios supports all standard HTTP methods like GET, POST, PUT, DELETE, PATCH, etc. Each method corresponds to a specific type of request.

    3.1.  HTTP Method(CRUD Methods):-

        3.1.1. POST(Create-C):-
        
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

        3.1.2 GET(Read-R):-
        
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

        3.1.3 PUT(Update-U):-
        
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

        3.1.4. DELETE(Delete-D):-
        
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
        }        
        ```

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# ReactJS Routing/Navigation
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

1.  REACT ROUTER(v7.6+) is another JavaScript(JS) Library/Framework used for implementing Routing in our Web Application using client-side scripting.

2.  Install the react-router module.

    Syntax:-
    
           ```js 
           npm i react-router-dom@latest
           ```

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
REDUX TOOLKIT(RTK) / Zustand
+++++++++++++++++++++++++++++++++++++++++++

1 Redux Toolkit(RTK) :- 

    Large applications often require a more structured approach to managing global state, especially when dealing with complex data flows and interactions. Redux Toolkit (RTK) is a library that provides a set of tools and best practices for managing global state in React applications.

    It is built on top of Redux and provides a more efficient and developer-friendly way to work with Redux.

    It is designed to reduce boilerplate code, improve performance, and enhance the developer experience.
    
    It is the standard way to write Redux logic in modern React applications.

    It is recommended for managing global state in React applications because it simplifies setup, reduces boilerplate code, and enforces best practices.

    Syntax:

        Install Dependencies

            ```js   
            npm install @reduxjs/toolkit react-redux
            ```

        Create a Redux Slice

        Use createSlice to generate actions and reducers for a part of your state.

            ```js
            import { createSlice } from '@reduxjs/toolkit';
        

            const counterSlice = createSlice({
            name: 'counter',
            initialState: { value: 0 },
            reducers: {
                increment: state => { state.value += 1 },
                decrement: state => { state.value -= 1 }
            }
            });

            export const { increment, decrement } = counterSlice.actions;
            export default counterSlice.reducer;
            ```
            
        Configure the Store

        Use configureStore (not createStore).

            ```js
            import { configureStore } from '@reduxjs/toolkit';
            import counterReducer from './counterSlice';

            export const store = configureStore({
                reducer: { counter: counterReducer }
            });
            ```
        
        Provide the Store

        Use <Provider store={store}> to wrap your app.

        Use Hooks in Components

        Use useSelector to access state and useDispatch to send actions.

            ```js
            import { useSelector, useDispatch } from 'react-redux';

            const count = useSelector(state => state.counter.value);
            const dispatch = useDispatch();

            dispatch(increment());
            ```
    
    5.2 Zustand (Newer Concept) :- 



+++++++++++++++++++++++++++++++++++++++++++
YouTube:- Top 12 React Interview Questions 🔥 for Freshers & Experienced | Preparation 2025 🚀
+++++++++++++++++++++++++++++++++++++++++++

Interview Question 2025:-

1.  Hooks
2.  Life-Cycle Of Component
3.  HOC(Higher Order Component)
4.  State Management Concepts:-

    4.1 State
    4.2 Props
    4.3 Prop Drilling
    4.4 Lifting (State,Function) Up

5.  Redux(RTL) 
6.  Zustand :-
