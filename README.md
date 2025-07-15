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

VS Code Editior Shortcuts:-

Terminal show/hide(cntrl+`),Solution File/Folder Structure show/hide(cntrl+b),Focus on top search(cntrl+p, cntrl+shift+p)

How to create file and folder through Terminal cmd.
a. Move inside into folder
cd <FolderName>
b. Move outside from folder
cd..
c. Create folder
mkdir <NewFolderName>
d. Create any type of such as jsx, json, css, image.
code <NewFileName.extension>
e. To open current folder in explorer from terminal cmd
explorer .

---

Commands:-To setup React application using in Terminal option in VS Code

Vite is a builder tool.

npm-Package Manager:-
Version Check:-
node -v
npm -v

Project Setup:-
npm i create-react-app (Not Use Instead us npm create vite@latest)
npm react
npm i react

npx npm-check-updates -- To verify all packages listing with their current and latest available version
npx npm-check-updates -u -- To update all packages to latest version listing with their older version in previous npx command

---

bun-Package Manager:-

node -v
bun -v

Project Setup:-

bun create vite@latest
bun install / bun i
bun run dev / bun dev

bun pm ls --To view all installed packages with version

Project Deployment :-

Use free hosting site:- https://app.netlify.com/ (Use GitHub login)

Steps:-

1 bun run build --To create Production Build/Version to deploy

2 After above cmd executed successfully dist folder is create.

3. Go to netlify site in side menu select & click Projects it will display list of deployed website.

4. Below is option to Drag & Drop OR Upload Files ,then go to folder path where dist folder is created within project that you want to host

5. Open dist folder you will see all files that are going to deploy.

6. Then hit Upload/Deploy/Ok button of dialog & wait don't refresh till files gets completely deployed.

7. After successful deploy at top you will see random project and netlify.app which you can modify by clicking on Project Configuration & then change name as required.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

REACTJS Language:-(v19)

A.

1. Introduction(What is ReactJS):-

1. REACT(v19) is framework in which ReactJS language is implemented. ReactJS is JavaScript Library used for ForntEnd/UI development.
1. It's firstly created by Facebook developer(Jordan Walke) when they face issue of managing and maintaining extensively increase of Facebook application in 2011.
1. It's firstly implement by in their own application Facebook in modules like Feeds, Chat Messaging and also made ReactJS Open Source to outside world in 2012 and 2013 but suffer from criticism as outside world unable to properly understand the Separation Of Code(SOC) concept of ReactJS.
1. So then in 2013 one of Khan academy developer creates Web Application & got success in it,she is first Non-Facebook React developer due to which Facebook get a larger success and breakthrough in outside world for ReactJS language usage & at same time Facebook developer create web application for Instagram Mobile App.
1. ReactJS is Declarative Language so faster to implement.
1. Component Based Architecture.
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
If it's not working then 👇
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

## (Bun - Latest Package manager)

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

+++++++++++++++++++++++++++++++
Practicle Points:-

1. HTML code inside component is converted in React element(means Virtual DOM) by babel then derived to Final DOM UI.

   JSX code render 2 time during development due to React.StrictMode tag which is then removed when code is publish.

2. Each JSX element/expression must have one parent element, which means if you try to return multiple elements
   React will throw and error.
   Error: Adjacent JSX elements must be wrapped in an enclosing tag.

3. Every JSX tag needs to be closed. You can self-closing tags for elements that don't have
   children, eg. <img src="url" />

4. To avoid rewriting/redundancy of same code multiple times create a single component and reuse it multiple where required in
   same jsx or another jsx(import component function from particular jsx where componenet function is defined).

5. Imported Components/Component from another JSX(ReactFrameworkApp.jsx) as below
   eg. ReactApp (Components Name)

6. Used imported component eg. <Intro />
   <App />
   <GroupOfSameComponent />

7. To avoid using non-required <div> tag to combine multiple element into one before return jsx from component function and also to avoid DOM to create unwanted <div> element. Then comes React concept of Fragments ,
   eg.
   const ComponentName=()=>{
   return(
   <>
   jsx multiple element
   </>
   );
   }

8. Concept of dynamic variable where we can assign derived value generated from JS function, expression or operations that can be shown at specific location with jsx.

9. Concept of logical variable where we can assign derived value generated from JS function, expression or operations that can be shown at specific location with jsx based on Condition using Conditional Operators/Logic such Ternary,IF-ELSE block,etc.

10. Concept of dynamic variable where we can assign derived value generated from JS function, expression or operations that can be shown at specific location with jsx.

11. Concept of logical variable where we can assign derived value generated from JS function, expression or operations that can be shown at specific location with jsx based on Condition using Conditional Operators/Logic such Ternary, IF-ELSE block, etc.

12. Incase of importing Export Default component then while import any component name be used without curly braces.
    eg. import NetflixSeries from "./components/NetflixSeries"; (Where export component name is NetflixSeries)

13. While in case importing Export Named component then while import same Component name to be used with curly braces {ComponentName}
    eg. import {NetflixSeries} from "./components/NetflixSeries"; (Where export component name is NetflixSeries)

14. Instead of for loop their is map() for looping on collection/array. In React map() each element must have key prop to differentiate each element generated while looping using map().

15. Props in React which are known as attribute in C# can be pass from unidirectional(1-direction) from Parent component to calling child components as separate properties and consume in child component as props as parameter which combines all properties of child component defined by Parent component while calling Child component except key property.

16. While padding integer value prop/attribute over child component pass like this
    eg. id={integer_value}
    And string value prop/attribute over child component pass like this
    eg. name="string_value"

(Imp:- As per EMCAScript(ES6) rule if in object structure like { Name:Name } when key and value are same then define object like this {Name})

17. To passing html content as jsx/string within opening and closing component tag then special prop is used denoted as children to access that elements.

18. CSS Style- grid or flex-box CSS always give it to parent tag.
    Instead of defining class prop for applying CSS class use className prop.

    Types of CSS:-
    a. Normal CSS consider using className prop.

    b. Inline CSS consider value as object define within { object } for style prop
    eg. style={{ margin: "1.2rem 0" }}

        (Instead create const object variable assign CSS object used that const variable)

        eg. const btn_stryle = { margin: "1.2rem 0" };

        style = {btn_stryle}

    c. Conditionally applying CSS 1. Based on Ternary operator apply styling
    eg className={i>0?"className1" : "className2"}

        2. When you want to append className with condition that derives another className based on condition

    mean append string with expression done below by using Template Literal
    eg. className={`className1 ${i>0?"className2" : "className3"}`}

    d. ModuleCSS:-
    Module CSS is component specific style and extension of file is <filename>.module.css
    In Module CSS each className is treated as property of that specific module.css object
    eg. To access className abc
    import cssModule from './<filename>.module.css'

    style={cssModule.abc} --When className abc doesn't contain '-'
    style={cssModule["a-b-c"]} --When className a-b-c contain '-'

    style={cssModule["abc"]} OR style={cssModule["a-b-c"]} can be use commonly

    e. Styled-Components:-
    In styled-component first need to install using Terminal cmd
    eg bun install styled-components

    Import eg. import styled from "styled-components"

    Then using styled object can access react component and applied styled on it.

    2-ways to apply styled-components:-
    A. Template Literals:-
    eg: const Button=styled.button`color:grey`;

          		    style.button --> button is tag eg p, h, button, span

    B. Style Object:-
    eg: const Button=styled.button({
    color:grey,
    });

          		style.button --> button is tag eg p, h, button, span

    d. Using Tailwind v4 CSS:- 1. Instal through Terminal cmd :-
    npm install tailwindcss @tailwindcss/vite

    2.  Configure the Vite plugin
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
        plugins: [
        tailwindcss(),
        ],
        })

    3.  Import Tailwind CSS
        @import "tailwindcss";

            4. bun run dev

        -In tailwindcss you can set dynamic valus within [] such as
        eg py-[3.2rem]

        -In tailwindcss if CSS is getting overridden by default css then ! symbol before each overridden CSS class  
         eg !py-6

19. Event Handler in js such as onClick, onChange, onSubmit, etc which then call Syntactic Event Handler Function in React should be written as function name such as handleClick, handleChange,handleSubmit, etc
    This know as Syntactic Event Handler Function.

    Type Of Function:- 1. Named Function is only calling function name not function.
    e.g. onClick={handleButtonClick} (Not like this onClick={handleButtonClick()})

        2. Arrow Function with event as parameter to get Syntactic Event object
           e.g. onClick={(event)=>handleButtonClick(event)}

        3. Inline Function With Syntactic Event object

    e.g. onClick={(event) => console.log(event)}

        4. Inline Arrow Normal Function
               e.g. onClick={() =>{ console.log("Hi")}}

        5. Arrow function passing parameters/arguments

    e.g. onClick={(event) => handleButtonClick3(event, "Raju")}>

20. Event Handler passing as props can used in concept such as From Handling, User Interaction, State Management, Callback Function.

21. Event Function is defined in Parent Component & pass as Props to Child Component & then Child Component decides when to call Parent Component Event Function which is passed as Props using Event Handler by Child Component.

22. Event Propagation, propagate means moving & Event Propagation means moving each element and occur event until reach target event.

    Event Propagation has 3 components (Capture,Target & Bubbling)

    Type of Event Propagation:-

        1. Event Capture means propagate/moving from Parent Element to Traget Action Element and triiger all occur event fuction in path while moving.
        2. Event Bubbling means propagate/moving from Target Action Element to Parent Element and triiger all occur event fuction in path while moving.

    But to avoid unwanted trigger of event function other then Target Action Event Function we have to use
    e.g. event.stopPropagation() -- stop after trigger single target event.

23. States - useState Hook:-

    1. Values that need to be render in jsx code after update then need to use concept of State to maintain value on multiple updates.

    2. State made of 2 components one is State Varibale and another is setter function that update State Variable.
       e.g. const [count,setCount]=useState(0)

    3. To maintain value on multiple render of jsx useState function concepts comes in that set initial value in State Variable.

    4. Any function start with word 'use' then that function in React known as concept call hooks function.

    5. Component get render when State Variables define within it get Updated then all Child Components defined within it is also get render.

24. Derived State mean a variable value comes from State Variable.

25. Logic on collection by using method map(),filter() and reudce()

        const users=[{ id: 1, name: "Alice", age: 25 },
        			 { id: 2, name: "Bob", age: 35 }]

        a. map():- Used for looping in collection or array.
        	eg  users.map((u)=><User name={u.name} age={u.age}>)

        b. filter():- Its like WHERE condition to get customize collection based on condition
        	eg users.flter((u)=>u.age<35)

        c. reduce():- Its does computation on collection return required value
        	eg users.reduc((calulatedval,u)=>return calulatedval + u.age,0)

26. LiftingStateUp mean when state is defined in children and same is need to children at same node level,
    so need to move state to its parent where both child's is calling. This can be done through passing function as prop to child
    where value from child is pass to parent via parent function passed as prop to set State in parent.
    Then same state is pass as prop to another child that require same state value.

    That means State is common to multiple state at same level child component.

27. React Icons for icons image from multiple sources(Font Awesome icons, Material UI icons, etc) at one place
    To access icons first need to install using Terminal cmd
    eg bun install react-icons

    Then import where need to show icon
    eg import { IconComponentName } from "react-icons/io";

    Use icon component where specific icon in required within component
    <IconComponentName style={{color:"blue"}}/>

28. Spread Operator expand collection, array & object.

    A. Collection or Array

    eg var array1=["a","b","c"];
    var array2=["x","y","z"];

        var mergearray1=[...array1,"x"];
        var mergearray12=[...array1,...array2];

        console.log(mergearray1);           //["a","b","c","x"]
        console.log(mergearray12);          //["a","b","c","x","y","z"]

    B. Object

    eg. const obj={id:1,name:"a"};
    const obj1={...obj,id:2,name:"b"};

         console.log(obj1)  // {id:1,name:"b"}   //Expand object properties to update value of required property

29. To store & retain any value on refresh of browser without database.

    To set:- localStoreage.setItem("keyname","data");
    To get:- localStoreage.getItem("keyname");

30. When any control is bind with state variable(control is moving from uncontrolled to controlled). In React maximum are uncontrolled component by default until unless its values bind with state variable..

Controlled Data Hooks:- useState,useEffect
UnControlled Data Hooks:- useRefs,useId

31. use prefix are all hooks.

    2 Types Of Hooks:-

    A. State Management :-
    a. useState:- useState hook when state variable value gets updated it render then components where it us defined.

        Syntax:-
          import { useState } from "react";

                  const [State Variable,Set State Variable Function]= useState(Initial State Variable Value)


           State Variable/Initial State Variable Value  can store any type of value such as {}-Object,[]-Array,""-String,1234-Number

    b. useRefs:- useRefs hook is used when controls value are not tightly bind by any useState hook state variable mean uncontrolled component.
    To work on uncontroller stateless form or component then for storing uncontrolled control value useRefs hook is used.
    In vanilla js ,we are accessing value of control using below syntax

                const inputcontrol=document.getElementById("#controlId");

                But in react above method is not prefer for accessing control so instead in React useRefs hook is used to access control.


        Syntax:-
          import { useRef } from "react";

                  const username=useRef(null);

         	  <input type="text" id="username" ref={username}>

        ref attribute on input field will bind with constant variable <username> to stored value enter in input field.

        Passing ref from Parent Component to Child Component
        --Before React v19 release forwardRef function (props,ref)=>{} is used
        --After React v19 release ref can be access as props.

    c. useId:- useId hook returns uniqueid.Don't use to generate Id for each fields it will violate  
     Syntax:-
    import { useId } from "react";

              const uniqueid=useId();

    d. useReducer:- This hook is similar to useState hook, but for entry value of each control we have to create separate useState hook,
    but useReducer provides action parameter for reducer function so based on action type different state value can be return instead of creating separate useReducer function for each control similar to useState hook concept.

    Syntax:-

    import { useReducer } from "react";

           const reducer=(state, action)=>{
                  if(action.type=="increment"){
                   return state+1;
         }
                 else if(action.type=="decrement"){
                   return state-1;
         }
           }

           const [state,dispatch]=useReducer(reducer,0)

          --> dispatch function with type object which internal calls reducer function and set type parameter to action parameter based on which
              for different action can perform different logic and return new state value

B. Logical :-
a. useEffect:- Secondary logic performed based on changes occur in dependencies such as StateVariable value change.

        Syntax:-

    	import { useEffect } from "react";



    	useEffect(

()=>{
//Your side effect code  
 return Value;

                                return ()=>{
    				   //Cleanup code
    				   };
    			},
                                [dependencies]);

     b. useMemo:- This hook is used to skip un-necessary value re-generating if value is already in cached, which will
                  reduce delay occur to minimal in getting actual result from other necessary components


    Syntax:- Syntax similar to useEffect hook

    	import { useMemo } from "react";


                 const memoizedValue=useMemo(
                                  	     ()=>{
                                             	     //Your code execute base on value in dependencies changes
                               			     return Value;
                                            	 },
                                            	 [dependencies]);

c. useCallBack:- This hook is used to skip un-necessary function re-execution if value is already in cached, which will
reduce delay occur to minimal in getting actual result from other necessary components

    Syntax:- Syntax similar to useEffect hook

                 const memoizedValue=useCallBack(
                                  	     ()=>{
                                             	     //Your code execute base on value in dependencies changes
                               			     return Value;
                                            	 },
                                            	 [dependencies]);

31. To ways to call and get data from third party API

    1. Using Promises:-
       fetchAPI(url).then

    2. Using async await mechanism

    async () => {
    const apidata=await fetchAPI(url);
    }

32. Steps for Hosting Application with Synchronous Update:-

A. Upload Files from VS Code to GitHub:-

    1. In GitHub, first login into GitHub account then in tab Repositories, click on New button & create repository by giving Repository Name
       e.g. Yogesh_Matkar/<repository name> then click Create Repository button.

    2. Initialize git into VS Code by cmd,

      a.
       > git init

       If git cmd issue then check git version using cmd,

      > git --version

      b. If version not display or again git cmd issue that mean git is not installed, then install Git Package Manager in computer.

      c. After installation ,in VS Code to get cmd setting UI press Cntrl+Shift+P type in search Open User Settings (JSON) and click,
      then add set of values in json format below,

       "git.enable":True,
       "git.path":"C:\\Program Files\\Git\\cmd\\git.exe"

      d. Then try below cmd to check git is properly enable in VS Code,

      To check install version of git
       > git --version

      e. To initialize git in VS Code
      > git init

      Due to above cmd of intilize in left sidebar menu one option of Branch icon(Source Control) in which file where modified files with U(Update) as letter mean this files are modified

      f. If you want to remove/ignore some file from pushing into git then in .gitignore file mention file extension/file name/folder name

      g. After that for staging file changes cmd

     > git add .

     h. After above cmd file are moved from CHANGES to Staged Changes with each file with A as letter mean this files are going to add to be finally step before going to push in git

     > git commit -m "<commit comments>"

     i. Then adding origin of git repository means connecting VS Code to specific git repository path using below cmd

     > git remote add origin https://github.com/Yogesh-K-Matkar/deploy_react_app_example1.git

     j. Then below cmd to push final code to specific master branch

     > git push origin master

             OR

     > git push origin main

     k. Refresh GitHub repository of project deployed ,it will show all publish files.

B. Deploying from GitHub to Netlify :-

    a. In Netlify, Add New Project --> Import an existing project --> Select Repository Application Name(GitHub) --> All Repositories

    b. Selecting All repositories ,list of all deployed GitHub repositories is displayed.

    c. Select repository that need to host in Netlify

       Write in Build Command(As per defined in package.json--> script --> build)

       bun run build

    d. If .evn variable file in react project available then add Environment Variable by clicking on Add Environment Variables button

33. Prop Drilling:-
    Passing Props through Source Component to sub-sequent child component until it reach to required destination component.
    To solve above problems ContextAPI concept comes into picture.

34. ContextAPI :- This concept helps in passing data to required destination component directly without passing through sub-sequent component.
    ContextAPI is mainly used when scenario of same data required by multiple child components.

    Syntax:-
    import { createContext, useContext } from "react";

    1. createContext(Source Component):- Creates a Context object which acts like a Component.
       E.g. createContext objects acts as WholeSeller that sells multiple products.

    2. Provider:- A works as component which actually property of Context object created using createContext that provides the context value to its children.
       E.g. Provider acts as Distributor/Delivery Person of WholeSeller that takes variety of Products and Store it in Tempo.

    3. useContext(Consumer/Destination Component):- A hook that allows you to consume a context.
       E.g. useContext acts as Consumer which uses required Stored Product from delivered by Delivery Boy.

35. Custom Hooks:- Requirement of custom hook is when want to put multiple times calling of same react hooks into created custom hook & then calling that custom hook to reduce code of multiple calling same hooks.

        Syntax:- const useCustomHook1=()=>{
                         	const hookObject=useContext(BioContext);
                         	return hookObject;
                         }

    a. All custom hooks can be prefix with 'use' basic rule of hooks.
    b. Custom hooks is create upon as wrapper of same react hook that is used multiple times in multiple component to avoid DRY(Do Not Repeat Your Self) principle.

36. use Hook:- Is replacement to useContext hook which has limitation of defining at top of component but 'use' hook can be call within condition, looping logic which gives more flexibility.

    E.g.

    import { use } from "react";

    const newHook=true;

    let myName,myAge;

    if(newHook)
    {
    ({myName,myAge}=use(BioContext))
    }

37. Memo:-(HOC-Higher Order Component)- Prevent unnecessary rendering of entire child component due to parent component rendering as child component is wrap inside parent component

        Syntax:- export child components as below with memo hook wrap around

                 import { memo } from "react";

                 export default memo(Childcomponent);

                          OR

                 export const Childcomponent=memo(()=>{return <>Child Component</>});

    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(Imp:- In REACT, Routing can be achieve using REACT-ROUTER JS Framework)

REACT-ROUTER JS Framework:-

B.

1.  REACT ROUTER(v7.6+) is another JavaScript(JS) Library/Framework used for implementing Routing in our Web Application using client-side scripting.

2.  Install react-router module.

    Syntax:-

           > npm i react-router-dom@latest

    Then verify module is installed or not in package.json within dependencies key's value along with module version

3.  Routing/Navigation :- Moving through different UI is SPA(Single Page Application) is done through React-Router framework
    concept.

    Syntax:- Two ways to create route

    1.  Old (Using helper createRoutesFromElements):

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

    2.  New:-
        import { createBrowserRouter } from "react-router-dom";

             const router = createBrowserRouter([
                     { path: "/", element: <Home/>  },
                     { path: "/about", element: <About/> },
             ]);

             <RouterProvider router={router} />

    (Note:- / in path defines route/home route of application means it load initial component)

    <RouterProvider> react-router-dom inbuilt component that shares router path to entire application,
    means path call in browser anywhere within application that path is check in router array object by RouterProvider
    and then navigate to associated component

Eg:-

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

     <RouterProvider router={router} />

Props of createBrowserRouter:-

a. path :- It accept navigation path name which is display in browser URL.

b. element :- It holds component which gets render when associated path display in browser URL

c. children:- It also hold array of path along with child component which is going to render in Page Body section.

       1.  In above element <AppLayout> is component which consist of Header and Footer section which common for entire application.
       2.  Children are included dynamically in Body section between Header section & Footer section by <Outlet> react router component based on associated 	   path gets called on clicking of link which is generated using <NavLink> react router component.
       3.  loader prop of children takes function that return's JSON data from function through fetchAPI() as API data.
       4.  action prop of children takes function that return's JSON data from function through formData() that is used to UPDATE different fields data submited in component by Form action.

d. errorElement :- It holds component which gets render when associated element components error occur due to syntax, logical etc.

4. Due to <a> html tag when link is click their is full postback of page so no use of <a> anchor html tags in React.
   Therefore in React in-built component as <NavLink> is provided in place on <a> anchor tag or any navigation html tag to avoid postback/refresh of entire page.
   In <NavLink> their is 'to' attribute replace with <a> tag 'href' attribute.

Syntax:-
HTML Tag:-
<a href="#">Link</a>

    In React:-
              <NavLink to="#">Link</NavLink>

5.  Active Link is concept of highlighting current selected Link based on colour of Link is different from all other non-selected Link colour.

    Their are 3-way of adding 'active' CssClass with 'nav-link' CssClass

    1.className with inline function , 2. style with inline function ,3. style with function call

6.  Hooks In React Router:-

    const routeLinks = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/movie", element: <Movie />, loader: getMoviesDataByParams },
    { path: "/contact", element: <Contact />, action: submitContactFormData},
    ],
    errorElement:<ErrorPage />,
    },
    ]);

    1.  useRouteError :- This hook provide error details means cause of error which gives details of Type Of Error and error, status, statusText, etc.

        Syntax:-

              import { useRouteError } from "react-router-dom";

              const errorDetails = useRouteError();

        2- Ways of showing error page

        a. Using errorElement key -- Best way

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

    b. Using children json object

    const routeLinks = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    children: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/movie", element: <Movie /> },
    { path: "/contact", element: <Contact /> },

        		{ path: "*", element: <ErrorPage /> },                              --- (Imp:- path: "*" -  Where * is Wild Card Route)

    ],

    },
    ]);

    2.  useNavigate :- This hook is use to navigate specially to immediate previous URL/Page. Can also navigate to any URL/Page.

        Syntax:-

               import { useNavigate } from "react-router-dom";

               const navigate = useNavigate();



                <button className="btn btnclose" onClick={() => navigate(-1)}>
            		Go Back
                </button>

        Note:- -1 mean previous page
        / mean home page

    3.  useNavigation :- This hook is use to get information about current navigation state such as location, action, etc.

        Syntax:-

               import { useNavigation } from "react-router-dom";

               const navigation = useNavigation();

        Note:- navigation.state can be used to check current state of navigation such as loading, idle, etc.

    4.  useLoaderData :- This hook is use to get data from loader function which is defined in routes children array object.State property of hook is used to know the current
        state of data loading such as loading, idle, etc.

            Syntax:-

                   import { useLoaderData } from "react-router-dom";

                   const data = useLoaderData();

    5.  Dynamic Route Parameters:-

        Dynamic route parameters are used to access dynamic values from the URL.

        1. Calling component in route with dynamic route parameter in path

           useParams(OLD React version below 6.4) :- This hook is used to access dynamic route parameters from the URL when doind through component call in loader prop of route.

           Syntax:-

           import { useParams } from "react-router-dom";

           const params = useParams();

           Note:- params object will contain key-value pairs of dynamic route parameters defined in the path.

           Example: If the path is "/movie/:movieID", then params will be an object like { movieID: "123" }.

        2. Calling function in route with dynamic route parameter in loader prop of route

           Note:- {params} object is passed as prop to function where dynamic route parameter is required.

7.  .env File :-
    This file is used to store environment variables such as API keys, URLs, etc. It should not be committed to version control for security reasons.

    (Note:- .env file should be placed at the root of the project directory.)

    Syntax:-

    In React project below is the example of .env file,

    Alway append REACT (FOLLED BY UNDERSCROLL 'APP' UNDERSCROLL) before variable name to make it accessible in React application.

    REACT_APP_API_KEY=your_api_key_here
    REACT_APP_API_URL=https://api.example.com

    import (REACT.meta.env.REACT_APP_API_KEY) from "react"; --To Access Environment Variables

    But in Vite project below is the example of .env file,

    Alway append VITE(FOLLED BY UNDERSCROLL) before variable name to make it accessible in React application.

    VITE_API_KEY=your_api_key_here
    VITE_API_URL=https://api.example.com

    import.meta.env.VITE_API_KEY from "react";  
    --To Access Environment Variables

8.  Dynamic Routing:-
    Dynamic routing is used to create routes based on data or user input. It allows you to create routes that can change at runtime.

    Syntax:-
    In React Router, dynamic routing can be achieved by using route parameters in the path.

    Example:-

    ```jsx
    { path: "/movie/:movieID", element: <Movie />, loader: getMoviesDataByParams }
    ```

    1. Calling component in route with dynamic route parameter in path

    In this example, `:movieID` is a route dynamic parameter that can be accessed in the `Movie` component using the `useParams` hook.

    2. Calling function in route with dynamic route parameter in loader prop of route

    In this example, `:movieID` is a route dynamic parameter that can be accessed in the `getMoviesDataByParams` function by passing the `params` object as a prop.

    ```jsx
    export const getMoviesDataByParams = async ({ params }) => {
      let movieID = params.movieID;
      const data = await resp.json();
      return data;
    };
    ```

9.  Form Submission:-
    React Router provides a way to handle form submissions using the `action` prop in the route configuration. This allows you to handle form data submission and processing.

    Syntax:-
    In the route configuration, you can define an `action` function that will be called when the form is submitted.

    Example:
    In route configuration, action prop is used to handle form submission and process the form data as below.

    ```jsx
    { path: "/contact", element: <Contact />, action: submitContactFormData}.
    ```

    Then, passing {request} object as prop to function where formData() function retrun response which is then converted in object format through object.fromEntries() which further used for processing array like structure data to convert to object format.

    ```jsx
    export const submitContactFormData = async ({ request }) => {
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
