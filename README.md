# HTML

   HTML is the standard markup language for creating web pages. 

   Follows W3C(World Wide Web Consortium) standards.

   HTML5 is the latest version of HTML, which includes new features and improvements over previous versions.

***
***
***
***

# CSS

CSS is the language we use to style an HTML document.

**Color**:-

- [Color Hex Code](https://colorhunt.co/)
- [Gradient Color](https://mycolor.space/gradient,https://uigradients.com/#DirtyFog)
- [Shapes](https://9elements.github.io/fancy-border-radius/,https://10015.io/tools/css-border-radius-generator)
- [Loader CSS](https://css-loaders.com/)
- [Box Shadow](https://cssmash.com/css-box-shadow-generator/)
- [Clip Path](https://bennettfeely.com/clippy/)
- [Border](https://www.cssportal.com/css-border-generator/)
- [Animation](https://animista.net/)
- [Background](https://www.heropatterns.com/)
- [Controls](https://css-tricks.com/controls/)

***
***
***
*** 

# JavaScript/JS Basics - "Javascript/JS is dynamic scripting language"

1. Javascript/JS is dynamic scripting language.

   - Visual Studio Code(IDE-Integrated Development Environment)

   - Javascript can be run in browser Dev Tool CONSOLE(client-side) but due to NodeJS(Open Source , cross-platform, JavaScript runtime environment)  uses Chrome V8 Engines internally environment to run Javascript code at runtime in VS Code terminal through below cmd.
    
        Syntax:-

        ```JS
                node first.js
        ```
   - Types of variable declaration in Javascript/JS:-

        1. **VAR**

            - Dynamic means the variable type e.g. var i whose value can be re-declared, and it can be changed at any time based on value assigned.

                Syntax:-

                ```JS
                        var i=10;  (Means now i declared and define with integer value)

                        i="a"; (Means now i declared and define with string value)
                ```

            - Function/global scope means re-declaring/re-defining the same variable is possible in same scope which also gives last assigned value as per scoped.

                Syntax:-

                    ```JS
                        var i=10;  
                        var i="a";  (Means now i re-declare  and define with string value)

                        console.log(i);  (Output is a)
                    ``` 
                
            - Support HOSTING concept, which means the variable is used before its declared and define,in such case when JS code is scanned and all var datatype variables declaration part is moved to top of scope and value defined remains at same position where it is previously define this process works internally by compiler.Thats why it gives Output as undefined value but not error as var type variable is defined after using it.
        
                Syntax:-

                ```JS
                    console.log(i);  (Used before declaration, which gives value as undefined but not error as while code is scan internally var type variable is hoisted(means declaration is moved at top but not seen)).
                    
                    var i=20;
                ```

            **NOTE**:- Due to Hoisting their is inconsistency and unmanageable code,that's why ES6(ES2015) introduced let and const keywords for variable declaration. 

            ES means ECMAScript is a standard for scripting languages such as JavaScript, JScript, and ActionScript.

        2. **LET**

            - Block scope means the variable value is limited to the block in which it is defined.

            - Value can be re-assigned but not re-declared. 
            It throws error.

        3. **CONST**

            - Block scope means the variable value is limited to the block in which it is defined.

            - Value once declared and define cannot be re-assigned nor re-declared. 
            It throws error.

        **NOTE**:- let and const are same and maximum used for runtime errors)


2. Looping concepts:-

      Syntax:-

      ```JS
               let arr=[1,2,3,4,5];
      ```

    - **for loop**

        - for...in loop  (looping index of array/collection)

            Syntax:-

            ```JS
                    for(let num in arr){
                        console.log(num);  // index
                        console.log(arr[num]);  // value
                    }
            ```

        - for...of loop   (looping value of array/collection)

            Syntax:-

            ```JS 
                    for(let num of arr){
                        console.log(num);  // value
                    }
            ```

    - **while loop**

        Syntax:-

        ```JS
                let i=0;
                while(i<arr.length){
                    console.log(arr[i]);
                    i++;
                }
        ```
        
    - **do...while loop**

        Syntax:-

        ```JS
                let i=0;
                do{
                    console.log(arr[i]);
                    i++;
                }while(i<arr.length)
        ```

3.  Working/Processing on Objects

    - **Destructuring Object Properties**:-

        Destructuring is a way to extract properties from an object and assign them to variables.

        It allows you to unpack values from arrays or properties from objects into distinct variables.

        Syntax:-

        ```JS

                const obj={id:1,name:"a",age:25};

                const {id,name,age}=obj;

                console.log(id);   //1
                console.log(name); //a
                console.log(age);  //25
            
        ```

    ***
    ***

    - **Spread Operator expand collection, array & object.**

        - Collection or Array(Merge Element of same type in below case array1 & array2 is type array):-

            Syntax:-

            ```JS

                    var array1=["a","b","c"];
                    var array2=["x","y","z"];

                    var mergearray1=[...array1,"x"];
                    var mergearray12=[...array1,...array2];

                    console.log(mergearray1);           //["a","b","c","x"]
                    console.log(mergearray12);          //["a","b","c","x","y","z"]
                    
            ```

       *** 

        - Object(Update Object Property):-

            Syntax:-

            ```JS

                    const obj={id:1,name:"a"};
                    const obj1={...obj,id:2,name:"b"};

                    console.log(obj1)  // {id:2,name:"b"}   //Expand object properties to update value of required property

            ```

4. Logic on collection by using method map(),filter() and reduce()

    Syntax:-

    ```JS
            const users=[{ id: 1, name: "Alice", age: 25 },{ id: 2, name: "Bob", age: 35 }]
        ```

  - **map()**:- Used for looping in a collection or array.
      	
    Syntax:-

    ```JS
                users.map((u)=><User name={u.name} age={u.age}>)
    ```

  - **filter()**:- It's like a WHERE condition to get a customized collection based on the condition
    
    Syntax:-

    ```JS
                users.filter((u)=>u.age<35)
    ```

  - **reduce()**:- It does computation on the collection and returns the required value
    
  	Syntax:-

    ```JS
                users.reduce((derivedCalculatedValue,u)=>{return derivedCalculatedValue + u.age},0)
    ```
    
***
***
***
***

# React Using VS Code With Vite


## Reference Docs 

### Official Sites

- https://javascript.info/
- https://www.geeksforgeeks.org/installation-of-node-js-on-windows/
- https://www.npmjs.com/package/create-react-app
- https://reactjs.org/docs/getting-started.html
- https://react.dev/learn
- https://vitejs.dev/guide/features.html

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

***
***

## Vite 

### ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

***
***

## VS Code Editor/IDE/Code Development Platform :-

### Shortcuts
 
 1. Editor(cntrl+1)
 2. Terminal show/hide(cntrl+`)
 3. Solution File/Folder Structure show/hide(cntrl+b)
 4. Focus on top search means Command Palette(cntrl+p, cntrl+shift+p)
 5. Format jsx,json :- shift+alt+f

***

### Terminal CMD's To Create and Manage Files

#### How to create a file and folder through the Terminal cmd.

1. Move inside into folder

   Syntax:-
   
   ```TERMINAL    
        cd <FolderName>
   ```

3. Move outside the folder

   Syntax:-
   
   ```TERMINAL
       cd ..
   ```

5. Create folder

   Syntax:-
    
   ```TERMINAL
       mkdir <NewFolderName>
   ```

7. Create any type of file, such as JSX, JSON, CSS, or image.

   Syntax:-
    
   ```TERMINAL
       code <NewFileName.extension>
   ```

9. To open the current folder in Explorer 

   Syntax:-
   
   ```TERMINAL
       explorer .
   ```

***

### Pre-requisite(Setup Development Environment For React v19) Using Terminal Option of VS Code Editor:-


#### Step 1: Installing Node.js (Open Source, cross-platform, JavaScript runtime environment)
   
   Node.js is essential for running React applications.
    
   Follow these steps to install Node.js:

   - Download and install LTS version suitable for your operating system from the [official website](https://nodejs.org/).


#### Step 2:- Setup VS Code

- Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/).
- Install the recommended extensions for React development:

   - Browser Chrome Extension:-
        - React Developer Tool

   - VS Code Editor Extensions:-
        - Auto Close Tag
        - Auto Comment
        - Auto Import
        - Auto Rename Tag
        - Babel JavaScript
        - Better Comments
        - Bootstrap 5 Quick Snippets
        - Bootstrap Class Autocomplete
        - Bootstrap IntelliSense
        - Code Runner
        - Code Spell Checker
        - CSS Navigation
        - CSS Peek
        - css-auto-prefix
        - ES7+ React/Redux/React-Native snippets
        - ESLint
        - GitHub Copilot
        - GitHub Copilot Chat
        - GitHub Pull Requests
        - Import Cost
        - IntelliCode
        - JavaScript (ES6) code snippets
        - Live Server
        - Markdown All in One
        - Markdown Preview Enhanced
        - npm Intellisense
        - Path Intellisense
        - Prettier - Code formatter
        - React PropTypes Generate
        - ReactJS code snippets
        - Tailwind CSS IntelliSense
        - Thunder Client
        - vscode-icons

#### Step 3:- Setup Package Manager

##### NPM (Node Package Manager)

   NPM (Node Package Manager) is included with Node.js installation. You can verify its installation by checking the version.

   Version Check:-
    
   Syntax:-
    
   ```TERMINAL
    
        node -v          (Node Version)

        npm -v           (Node Package Manager Version)

        npm list            (To view all installed packages with version as local packages)
        
        npm list -g         (To view all installed packages with version as global packages)

        npx npm-check-updates (To verify all packages listed with their current and latest available version)

        npx npm-check-updates -u (To update all packages to the latest version, listing with their older version in the previous npx command)

        npm update (Update to nearest to the latest version not the latest version)
   ```

***

##### BUN  (Latest, Lightweight, Faster Built as compare to NPM)

   Bun is a modern JavaScript runtime and package manager that focuses on speed and efficiency. It is designed to be a drop-in replacement for npm and yarn, with a focus on performance.

   Install:-

   Syntax:-
   
   ```TERMINAL
        npm install -g bun
   ```
   OR

   ```TERMINAL
        npm i -g bun 
   ```

   (Make sure to add -g flag for system level global installation)


   Version Check:-

   ```TERMINAL
        bun -v        (Bun Version)

        bun pm ls (To view all installed packages with version)
   ```

#### Step 4: Upgrading to React v19 RC

   If you're using React v18 and want to upgrade to React v19 Release Candidate, follow these steps:

   Open your terminal or command prompt.
   
   Run the following command to update React:

   Syntax:-
   
   ```TERMINAL

        npm install react@rc

        npm install react-dom@rc

        npm install react-router-dom@rc

   ```

#### Step 5: Creating a React App with Vite

   Vite is a build tool in v19 replacement to webpack that aims to provide a faster and leaner development experience/environment for building modern web projects.

   Follow these steps to create your first React app:

   Open your terminal or command prompt.
   
   Run the following commands to create a new React project with Vite:

   **Note**:- npm i create-react-app (Not Use Instead use npm create vite@latest)

   Syntax:-
   
   ```TERMINAL

        npm create vite@latest reactapp     (Initial folder structure will be created for React project)

        cd reactapp

        npm install
   ```

   Start the development server:

   Syntax:-
   
   ```TERMINAL

        npm run dev

   ```

***
***

## Project Deployment/Publishing/Hosting :-

### Manual Deployment :- Publish Local Folder/Files Then Manual Deploy To Free Hosting Site.  

   Use free hosting site:- [official website](https://app.netlify.com/) (Use GitHub login)
   
   - To create Production Build/Version to deploy

     Syntax:-
    
     ```TERMINAL

            npm run build

     ```

   - After above cmd executed successfully dist folder is create.

   - Go to netlify site in side menu select & click Projects it will display list of methods to deployed website.

   - Select Deploy Manual option in list then Drag & Drop OR Upload Files ,then go to folder path where dist folder is created within project that you want to host

   - Open dist folder you will see all files that are going to deploy.

   - Then hit Upload/Deploy/Ok button of dialog & wait don't refresh till files gets completely deployed.

   - After successful deploy at top you will see random project and netlify.app which you can modify by clicking on Project Configuration & then change name as required.

***

### Synchronous/Auto Deployment:- Sync Local VS Code Repository with GitHub Repository Which Then Automatically Deploy To Free Hosting Site.

#### Upload Files from VS Code to GitHub:-

   - In GitHub, first log in to your GitHub account, then in the  tab Repositories, click on the New button & create a  repository by giving a  Repository Name
       
       Syntax:-
     
         Yogesh_Matkar/<repository name> then click Create Repository button.

   - Install git external installer from [official website](https://git-scm.com/) 
       Install git and then restart VS Code,to execute git cmd's in VS Code terminal as required

      1. To check git is properly installed or not, in VS Code terminal try below cmd

        Syntax:-
     
        ```TERMINAL

            git init

        ```

       If the git cmd issues, then check the  git version using cmd.

        Syntax:-
     
        ```TERMINAL

            git --version

        ```

     2. If the version is not displayed or again a git cmd issue, that means git is not installed, then install the Git Package Manager  on the computer.

     3. After installation, in VS Code to get cmd setting UI, press Ctrl+Shift+P, type in search Open User Settings (JSON) and click,
      Then add a set of values in JSON format below,

        ```VS Code Config
        
           "git.enable": True,
           "git.path": "C:\\Program Files\\Git\\cmd\\git.exe.exe"
        
        ```

     4. Then, try the below cmd to check if git is properly enabled in VS Code,

         To check the installed version of git
    
         Syntax:-
        
         ```TERMINAL

             git --version

         ```
     5. To initialize git in VS Code

        Syntax:-
        
        ```TERMINAL

             git init

        ```

        Due to the above cmd of initialise in the left sidebar menu, one option of the Branch icon(Source Control), in which files were modified with U(Update) as the letter means these files are modified

     6. If you want to remove/ignore some file from pushing into git, then in the .gitignore file, mention the file extension/file name/folder name

     7. After that, for staging file changes cmd

        Stage All Files:-

        Syntax:-
            
        ```TERMINAL

             git add .         (. DOT means all files staged)

        ```

        Stage Specific Files:-

        Syntax:-
        
        ```TERMINAL

             git add filename1.txt filename1.jsx

        ```         

     8. After the above cmd file is moved from CHANGES to Staged Changes, with each file with A as a letter, means these files are going to be added to be final step before going to push in git

        Committing Changes:-
    
        Syntax:-

        ```TERMINAL

            git commit -m "<commit comments>"

        ```

     9. Then adding the origin of the remote git repository means connecting VS Code to a specific remote git repository path using the below cmd

        Syntax:-
     
        ```TERMINAL

             git remote add origin <repository-url>

        ```
        Repository-URL:-(https://github.com/Yogesh-K-Matkar/deploy_react_app_example1.git)

     10. Then, below cmd to push the final code to the specific active branch master/main

         ```TERMINAL

            git push origin <active branch name>

         ```
                   

     11. Refresh the GitHub repository of the project deployed, and it will show all published files.

***

#### Deploying from GitHub to Netlify:-

   1. In Netlify, Add New Project --> Import an existing project --> Select Repository Application Name(GitHub) --> All Repositories

   2. Selecting All repositories, a list of all deployed GitHub repositories is displayed.

   3. Select the repository that needs to be hosted in Netlify
  
       Write in Build Command(As per defined in package.json--> script --> build)

       Syntax:-
       
       ```TERMINAL

           npm run build

       ```
    
   4. If the .env variable file in the React project is available, then add the  Environment Variable by clicking on the Add Environment Variables button


***
***

## Project Cloning and Pull Request From GitHub to VS Code As Local Repository
 
### Cloning:-

   1. First, install Extension- GitHub Pull Requests, then through Settings open Command Palette and write GitHub Clone(Clone from GitHub)

   2. Then visit to GitHub account-->Select the repository, and copy the  browser URL of the repository, then need to clone it to VS Code.

   3. Now, explorer dialogue windows open --> select the folder where we want to clone the repository.

***

### Pull Request :-

   1. Sync the local exisitng project with repository from GitHub VS Code Terminal cmd

   Syntax:-
    
   ```Terminal
            git pull origin main
   ```

***
***

## REACT/REACTJS Language:-(v19)

1. What is React/ReactJS:-

    - ReactJS is a JavaScript Library used for front-end/UI development using reusable UI components.
   
   - It was first created by a Facebook developer(Jordan Walke) when they faced the issue of managing and maintaining the extensive increase of the Facebook application in 2011.
   
   - It was first implemented in their application Facebook in modules like Feeds, Chat Messaging and also made ReactJS Open Source to the outside world in 2012 and 2013, but suffered from criticism as the outside world was unable to properly understand the Separation Of Code(SOC) concept of ReactJS.
   
   - So then in 2013, one of the Khan Academy developer created a Web Application & achieved success in it. She is the first Non-Facebook React developer, due to which Facebook got a larger success and breakthrough in the outside world for ReactJS language usage & at the same time, Facebook developers create a web application for the Instagram Mobile App.
   
2. ReactJS is a Declarative Language, so faster to implement.
   
3. Component-Based Architecture.
   
4. Rich Eco-System-npm packages(Smaller concept/modules already develop in form of packages)
   
5. Strong & Large community support-Online/GitHub

6. It's only JavaScript Library, not a full-fledged framework like Angular or Vue.js, which makes it more flexible and lightweight for developers.

7.  To make it a full-fledged framework, React can be used in conjunction with other libraries and tools, such as Redux for state management and React Router for routing.

8.  NextJS encapsulate front-end ReactJS to form a complete full-stack framework.

***
***

### React Folder Structure:-
 
![FolderStructure](public/images/Folder_Structure.jpg)

***
***

### React Concepts:-

- **Evolution**:- 

    ReactJS is Javascript library used for front-end development by using reusable UI components.
                
    It doesn't provide framework that's why lightweight, so Angular comes into picture which provide both Javascript Library and Framework.  
                
    But ReactJS is only Javascript Library so it encapsulated in NextJS framework to form a complete full-stack framework to provide development Speed, Scalability & Simplicity.

- **DOM Reconciliation / Diffing Algorithm**:  
    React uses a Virtual DOM to efficiently update the UI. When a component's state changes, React creates a new Virtual DOM tree by Babel and compares it with the previous one to determine the minimal set of changes needed to update the actual DOM.

- **React.StrictMode**:-
    It is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.

    It helps to identify components with unsafe life-cycles, legacy API usage, and other side effects.   

    Syntax:-

    ```JSX
            import React from 'react';
            <React.StrictMode>
                <App />
            </React.StrictMode>
    ```

    **Note**:- Wrap the entire application with <React.StrictMode> tag
  
-  Each element/expression in JSX block must combine/enclosed multiple tags into one parent tag element, which means if you try to return multiple tags seperate elements.

    React will throw an error.

    **Error**: Adjacent JSX elements must be wrapped in an enclosing tag.

    **Solution**: Enclosed all tag elements into block then return using 

      Syntax:-

      ```JSX
          return(<div>{JSX Elements}</div>)
      ```
      
      OR
   
      Syntax:-
   
      ```JSX
          return (<>{JSX Elements}</>)         
      ```

-  To avoid using a non-required < div > tag to combine multiple tags element into one enslocing tag before returning block tag from the component function, and also to avoid DOM to create an unwanted < div > element.
   
    Then comes the React concept of Fragments,

    Syntax:-
 
    ```JSX

            const ComponentName=()=>
            {
                return(
                      <>
                        <div>jsx multiple elements</div>
                      </>
                );
            }

    ```

- Every tag needs to be closed. You can use self-closing tags for elements that don't have children

    Syntax:-

    ```JSX

            <img src="url" />

    ```

- Concept of dynamic variable where same is assigned with different types of values such as string,integer,object,array or collection etc.

- Concept of logical variable where we can assign derived value generated from JS function, expression or operations that can be shown at a specific location with JSX based on a Condition using Conditional Operators/Logic such as Ternary, IF-ELSE block, etc.

- **Types of Component**:- 2 Types of Component Declaration

    - **Class Component**:- ES6 classes extending React.Component. Uses render method and state.Legacy projects only.

         ![Lifecycle](public/images/ComponentLifecycle.png)



     **Lifecycle**:- Three main phases:

     1. Mounting Phase

        This phase occurs when a component is first created and inserted into the DOM. It involves initial setup and rendering.

           1.1. constructor(props): Initializes state and binds event handlers (only in class components).

           1.2. static getDerivedStateFromProps(props, state): Sync state to props before rendering.

           1.3. render(): Returns the JSX to build the UI.

           1.4. componentDidMount(): Runs after the component is mounted to the DOM, useful for side effects like data fetching or setting up subscriptions.

     2. Updating Phase

        This happens whenever the component's props or state change, triggering a re-render.

           2.1. static getDerivedStateFromProps(props, state)**: Called during updates to sync state to new props.

           2.2. shouldComponentUpdate(nextProps, nextState): Determines if component should re-render (returning false skips update).

           2.3. render(): Re-renders the component.

           2.4. getSnapshotBeforeUpdate(prevProps, prevState): Captures information before DOM updates (e.g., scroll position).

           2.5. componentDidUpdate(prevProps, prevState, snapshot): Runs after updates, suitable for DOM operations or fetching new data.

     3. Unmounting Phase

        This phase occurs when the component is removed from the DOM and is used for cleanup.

           3.1. componentWillUnmount(): Called right before the component is removed, where you can clear timers, cancel network requests, or remove event listeners.



   - **Functional Component**:-
  
        JS functions returning JSX. With Hooks, can manage state and effects.Preferred currently in projects.

        Functional components do not have these explicit lifecycle methods but achieve similar effects using React Hooks:

        useEffect hook replaces componentDidMount, componentDidUpdate, and componentWillUnmount. You can specify when the effect runs and perform cleanup by returning a cleanup function.

        - **Types of Functional Component**:-

          - Default Functional Component :- In case of importing the Export Default component, then while importing any component name be used without curly braces.

            Syntax:-

            ```JSX

                    import NetflixSeries from "./components/NetflixSeries";
                
            ```
            (Where export component name is NetflixSeries)


          - **Named Functional Component**:- In case of importing Export Named component, then while importing the same Component name to be used with curly braces.

            Syntax:-

            ```JSX

                    import { NetflixSeries } from "./components/NetflixSeries";

            ```
            (Where export component name is NetflixSeries)

          - **Combining Default and Named Exports**: In case of importing Export Default and Named component, then while importing the same Default Component and Named Component name from single same .jsx file.

            Syntax:-

            ```JSX 

                    import Series, { NetflixSeries } from "./components/NetflixSeries";

            ```
            (Where export default component is Series and named component is NetflixSeries from NetflixSeries.jsx file)


- Define/Use imported Components/Component from another JSX(ReactFrameworkApp.jsx) as below

    Syntax:-

    ```JSX

            <ReactApp/> (Is a Component)

    ```

- To avoid rewriting/redundancy of the same code multiple times, create a single component and reuse it multiple times where required in the same JSX or another JSX
    (import component function from a particular JSX where the component function is defined).

- Instead of FOR/FOREACH loop their is map() for looping on collection/array. In React map(), each element must have a key prop to differentiate each element generated while looping using map().

- **Props** is way of passing attributes as parameter to Component in React, and can be passed from a unidirectional(1-direction) Parent component to calling child components as separate properties and consumed in the child component as props as a parameter that combines all properties of the child component defined by the Parent component while calling the Child component, except the key property.

- While passing the integer value prop/attribute over the child component, pass it like this

    - Integer prop/attribute over child component pass like this

        Syntax:-

        ```JSX

                <ReactComponent id={integer_value} /> 

        ```

    - String value prop/attribute over child component pass like this

        Syntax:-

        ```JSX

                <ReactComponent name="string_value" />

        ```

    **Note**:- As per ECMAScript (ES6) rule, if in an object structure like { Name: Name }, when key and value are the same, then define the object like this {Name})

- To pass HTML content as JSX/string within opening and closing component tags, then a special prop is used, denoted as children, to access those elements.

    Syntax:-

    ```JSX

            const ReactComponent=(props)=>{
                const { children } = props;
            }

    ```

- **CSS Style** - 

    - **Specificity Calculation**:- 
        
        **Specificity** is calculated using a point system:

         - **Inline styles** = 1000 pointsEach 

         - **ID** = 100 points

         - **Each class, attribute, or pseudo-class** = 10 points

         - **Each element or pseudo-element** = 1 point
      

    - **Element Design Structure**
     
        - **Flexbox** is designed for one-dimensional layouts, aligning items either in a row or a column at a time. It works from the content outwards, ideal when you want to space items evenly in a single direction and let the content size determine spacing. Flexbox containers manage items along either a horizontal or vertical axis but not both simultaneously.

         Mainly used for navnat,menus and toolbar display.

         Syntax:-
      
         ```css

               .container {
                       display: flex;
                       justify-content: space-between;  
                       align-items: center;
                }

         ```

        - **CSS Grid** is designed for two-dimensional layouts, managing both rows and columns at the same time. It works from the layout inward, allowing you to define a grid structure and place items according to this grid. This makes it better suited for complex layouts where alignment in both directions is required, such as full webpage layouts or complex UI components.

        Mainly used for page layout.

        Syntax:-
      
        ```css

                .grid-container {
                         display: grid;
                         grid-template-columns: 1fr 1fr 1fr;
                         grid-template-rows: 1fr 1fr 1fr;
                         gap: 10px;
                }
        ```
  
    Instead of defining a class prop for applying a CSS class, use the className prop.

    **Ways of Applying CSS**:-

    - **Normal CSS** consider using the className prop.

    - **Inline CSS** consider value as an object defined within { object } for the style prop

        Syntax:-

        ```JSX

                <ReactComponent style={{ margin: "1.2rem 0" }} /> 

        ```

        OR

        Define the style object separately, then define it as a variable and then use it in the style prop

        Syntax:-
      
        ```JSX

                const btn_style = { margin: "1.2rem 0" };

                <ReactComponent style={btn_style} />

        ```


    - **Conditionally applying CSS**

        - Based on the Ternary operator, apply styling

            Syntax:-

            ```JSX

                    <ReactComponent className={i > 0 ? "className1" : "className2"} />

            ```

        - When you want to append a className with a condition that derives another className based on the condition,means append a string with an expression done below by using Template Literal

            Syntax:-

            ```JSX

                     <ReactComponent className={`className1 ${i > 0 ? "className2" : "className3"}`} />

            ```

    - **ModuleCSS**:-
    
       **Module CSS** is a component-specific style and extension of a file is <filename>.module.css

       In Module CSS, each className is treated as a property of that specific module.css object

       Syntax:-        
        
       ```JSX

                import cssModule from './<filename>.module.css'

       ```

       **Note**:- To access className abc, when className abc doesn't contain '-'

       Syntax:- 

       ```JSX

                <ReactComponent style={cssModule.abc} />

       ```

       **Note**:- To access className a-b-c, when className a-b-c contain '-'

       Syntax:-
      
       ```JSX
                
                <ReactComponent style={cssModule["a-b-c"]} />

       ```

      Second way of defining classname commonly used.

    - **Using Tailwind v4 CSS (Third Party)**:-

        - Install through Terminal cmd:-

            Syntax:-
          
            ```Terminal
                
                  npm install tailwindcss @tailwindcss/vite

            ```
            
        - Configure the Vite plugin

            Syntax:-
          
            ```JSX

                import tailwindcss from '@tailwindcss/vite'

                export default defineConfig({
                    plugins: [
                                tailwindcss(),
                            ],
                })

            ```

        - Import Tailwind CSS
     
            Syntax:-
          
            ```CSS

                @import "tailwindcss";

            ```

        - Run the development server.

            Syntax:-
          
            ```Terminal

                npm run dev

            ```

        **Notes**:- In TailwindCSS,

        1. Need to you can set dynamic values within [], such as

            E.g.:-

                py-[3.2rem]

        2. If CSS is getting overridden by default CSS, then '!' symbol before each overridden CSS class

            E.g.:-

                !py-6

        

- **Different Source of UI Controls**:-

    - **Styled-Components (Third Party)**:-

        In styled-component, first need to install using the Terminal cmd

        Syntax:- 

        ```Terminal

                npm install styled-components

        ```

        Import,
        
        Syntax:- 

        ```JSX

                import styled from "styled-components"

        ```

        Then, using a styled object can access a React component and apply the style to it.

        2 ways to apply styled-components:-

        - **Template Literals**:-
        
            Syntax:- 

            ```JSX

                    const Button=styled.button`color:grey`;

            ```

                style.button --> button is a tag, eg p, h, button, span

        - **Style Object**:-

            Syntax:- 

            ```JSX

                    const Button=styled.button(
                    {
                        color: grey,        
                    }
                    );
                    
            ```

            style.button --> button is a tag, eg p, h, button, span

- **Custom Error**:-
    To show custom error message, use the below syntax

    Syntax:- 

    ```JSX

           let customError=new Error("Custom Error Message");

    ```

- **Event Handler**  function in JS that handles Events such as onClick, onChange, onSubmit, etc, by calling handler function with prefix of **handle** ahead of each function handleClick, handleChange, handleSubmit, etc

    This function handles logic of Form Handling, User Interaction, State Management, and Callback Function.

    When such function also handle Synthetic Method default behaviour of browser and html control/element/tag through event argument such event.preventDefault, event.stopPropagation or event.stopImmediatePropagation.Then they are called as Synthetic Event Handler


     - **Ways Of Implememting Function**:-

          - **Named Function** is only calling the function name, not the function.
            
                       
              Syntax:-  Like this

              ```JSX
                            
                            onClick={handleButtonClick} (Not like this onClick={handleButtonClick()})
        
            
                            <button onClick={handleButtonClick}>Click Me</button>

              ```

          - **Arrow Function with parameter event**  which is Syntactic Event object

              Syntax:- 

              ```JSX

                            <button onClick={(event)=>handleButtonClick(event)}>Click Me</button>

              ```

          - **Inline Function with parameter event**  which is Syntactic Event object


              Syntax:- 

              ```JSX

                            <button onClick={(event) => console.log(event)}>Click Me</button>

              ```

          - **Inline Arrow Normal Function**

              Syntax:- 

              ```JSX

                            <button onClick={() =>{ console.log("Hi")}}>Click Me</button>

              ```

          - **Arrow function passing parameter and Syntactic Event object as arguments**

              Syntax:- 

              ```JSX

                            <button onClick={(event) =>{ console.log(event,"Data to pass to Function")}}>Click Me</button>

              ```

- **Passing Event Handler Function** from Parent Component & passed as Props to Child Component, & then Child Component decides when to call Parent Component Event Function.
 
    So Parent Component pass Event Function as Props as Event Handler to the Child Component.

- **Event Propagation**, propagate means moving & Event Propagation means moving each element and the occurrence of the event until it reaches the target event.

    Event Propagation has 3 components (Capture, Target & Bubbling)

    - **Phases of Event Propagation**:-

        - **Event Capture** means propagating/moving from the Parent Element to the Target Action Element and triggering all occurrence event functions in the path while moving.

        - **Event Bubbling** means propagating/moving from Target Action Element to Parent Element and triggering all occurrence event functions in the path while moving.

        But to avoid the unwanted bubbling of event functions we have to use

        Syntax:-  Stop bubbling after target event is Capture.

        ```JSX

                function handleButtonClick(event, txt){
                    event.stopPropagation();
                    console.log(txt);
                };


                <button onClick={(event) =>{ handleButtonClick(event, "Data to pass to Function")}}></button>

        ```

        If Target control is bind with multiple other event rather then onClick such as onChange,onBlur then to stop such events begin call.

        Syntax:-   Stop all other event after triggering a  target event is Capture.

        ```JSX

                function handleButtonClick(event, txt){
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    console.log(txt);
                };

                function handleChange(){
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                };

                <button onClick={(event) =>{ handleButtonClick(event, "Data to pass to Function")}} onChange={(event) =>{ handleChange()}}></button>

        ```

- **Derived State** means a variable value comes from a State Variable.

- **LiftingStateUp** means when the state is defined in children and the same is needed by children at the same node level.
  
    So we need to move the state to its parent, where both children are calling. This can be done through passing a function as a prop to the child,
    where the value from the child is passed to the parent via the parent function passed as a prop to set the State in the parent.
    Then the same state is passed as a prop to another child that requires the same state value.

    That means State is common to multiple states at the same level of the child component.

- **React Icons** for icons image from multiple sources(Font Awesome icons, Material UI icons, etc) at one place

    To access icons, first need to install using 
    
    Syntax:- 

    ```Terminal

            npm install react-icons --save

    ```

    Then import where needed to show the icon

    Syntax:- 

    ```JSX

            import { IconComponentName } from "react-icons/io";

    ```

    Use the icon component where a specific icon is required within the component

    Syntax:-
  
    ```JSX

            <IconComponentName style={{color:"blue"}}/>

    ```

- **Local Storage**:-
   To store & retain any value on refresh of the browser without a database.

    Syntax:-
    To set,
    
    ```JS
                localStorage.setItem("keyname","data");
    ```

    Syntax:-
    To get,
    
    ```JS
                localStorage.getItem("keyname");
    ```

- When any control is bound with a state variable(control is moving from uncontrolled to controlled). 
  
  In React, most components are uncontrolled components by default unless their values are bound to a state variable..

    - **Controlled Components** Data is tightly bind to Hooks values (Reflect changes immediately in DOM and on UI onChange - Sync Data - Operations:- Input value):- useState

    - **UnControlled Components** Data not bind with Hooks values (Does not reflect changes in DOM and not on UI onChange - Non-Sync Data - Operations:- Background values,timer):- useRefs

- The 'use' prefixes in a function name is all React Hooks.

    - **Types Of Hooks**:-

      - **State Management Hooks**:-
 
        1 **Local State Hooks**:-     
           
           - **useState**(Simple Value State Management(Form simple values not more then 3 controls) with re-rendering - Simple, local state mean state value scope remain in same single component where its defined)

                **Scenario** :- 
                
                Use only when form is simple has not more then 2 to 3 inputs.
                
                - The useState hook, when the state variable value gets updated, it renders the components where it is defined, such as form input, toggles, counters, fetched data flags, or UI visibility.

                - For local state management inside a single component and it remains until the component is mounted.

                - State Variable/Initial State Variable Value can store any type of value, such as {}-Object,[]-Array,""-String,1234-Number

                Syntax:-

                ```JSX

                        import React, { useState, useEffect } from 'react';

                        const Counter = () => {
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

                **Notes**:-

                - The effect updates the document title after every render where count changes.                   
                - If you omit [count], it would update after every render.             
                - Passing an empty array [] would run it only once after the initial render.

           
           - **useReducer**(**Complex Value State Management**(Form Complex Values more then 3 controls and object value which state value update multiple times) with Multiple State Values Updated- Operations:- Insert,Update,Delete,Increment,Decrement,Reset)
        
                **Scenario** :- 
                
                Use only when state undergoes multiple operation for e.g. insert,update,delete,increment,decrement. state value multiple times.
                
                This hook provides an action parameter for the reducer function, so based on the action type, different state values can be returned instead of creating a separate function for each control action, that update the state differently.

                Useful in forms, game states, or lists requiring add, remove, toggle operations.

                Syntax:-

                ```JSX

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

                        const Counter = () => {
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
 
        2 **Global State Hooks**:-
  
           - **useContext**(**Global Static State Management** to Avoid prop drilling by sharing states):-            

              - **Prop Drilling**(Problem which is resolved using useContext hook):-
               
                Passing Props through Source Component to subsequent child components until it reaches to the required destination/target component.

                This can lead to unnecessary complexity and makes it difficult to manage state and props, especially in larger applications with deeply nested components.

                This hook built into React with no additional installation.

                This hook best suited for simple or small-scale state sharing.

                Performance can degrade if the context value changes often, causing many components to re-render.
                    
                Good for static or infrequently changing state.

                This hook is mainly used when a scenario to shared global state or configuration like themes, authentication info, language settings, or user preferences across multiple components efficiently, avoiding the need to pass props through many component levels ("prop drilling").                

                Syntax:-

                ```JSX

                        import React, { createContext, useContext, useState } from "react";

                        // Create a context with a default value
                        const UserContext = createContext("Guest");

                        const App = () => {
                            const [user, setUser] = useState("Jesse Hall");

                            return (
                                <UserContext.Provider value={user}>
                                    <h1>Hello {user}!</h1>
                                    <ComponentA />
                                </UserContext.Provider>
                            );
                        }

                        const ComponentA = () => {
                            return <ComponentB />;
                        }

                        const ComponentB = () => {
                            return <ComponentC />;
                        }

                        const ComponentC = () => {
                            const user = useContext(UserContext); // Consume context value here

                            return <h2>Welcome back, {user}!</h2>;
                        }
                ```

                **Notes**:- <UserContext.Provider value="{data}">children components</UserContext.Provider> 
                            Shares the values to children components within <UserContext.Provider> and </UserContext.Provider> then specific components can access value using useContext hook.
                            ComponentC accesses the user value directly using useContext, without receiving it as props through intermediate components.
                                Changing user with setUser will cause all consuming components to update.

                
                **Notes** :-
                
                   Limitation of useContext hook conditionally calling useContext hook is not allowed, meaning it has to be defined at the top of the component function.

                   But the 'use' hook can be called within a condition, a looping logic, which gives more flexibility.

                   Syntax:-

                  ```JSX

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
       
               

      - **useRef**(DOM Manipulation without re-rendering) 
          
           **Scenario** :- 
                
           Use only when form is simple has not more then 2 to 3 inputs.
                
           - Built-in hook is used when control values are not tightly bound by any useState hook state variable, meaning an uncontrolled component.

           - When you need to access or manipulate a DOM element directly (e.g., to manipulate input fields, focus elements, scroll positions, or perform animations imperatively).

           - Persisting mutable values: Store values across renders (like timers, previous state values, or any mutable data) without triggering re-render.

           - In React, we can access the control using the document.getElementById() method, such as

           Syntax:-

           ```JSX

                        import React, { useRef } from 'react';

                        const TextInput = () => {
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


          **Notes**:-
                    
           Passing ref from Parent Component to Child Component                    
           --Before React v19 release forwardRef function (props,ref)=>{} is used                    
           --After React v19 release, ref can be accessed as props.                


      - **Unique Values/IDs Generate**:-

        - **useId**(Unique IDs):-
                 
            useId hook returns unique-id. Don't use it to generate an ID for each field, as it will violate the accessibility rule of the form.

            Syntax:-

            ```JSX

                    import { useId } from "react";

                    const MyComponent = () => {
                        const uniqueId = useId();
                    }

            ```

        
      - **Pre-Loaded Logic** (Initial Component Binding)/Side Effects State Management:-

        - **useEffect**(Side Effects):-
        
             **Scenario** :-                 
                Use only when pre-loaded component logic e.g. page_init,page_load.                
                Side effects functionality (data fetching, DOM manipulation, setting up subscriptions, or timers) which normally occur outside the rendering process.
                Runs side-effect code after React has updated the DOM.

             Syntax:-

             ```JSX

                        import React, { useState, useEffect } from 'react';

                        const Counter = () => {
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


             **Notes**:- Cleanup Code execute
                           1. When Component Unmount mean component does not render in JSX based on condition
                           2. When dependencies changes useEffect re-render.  
            

      - **Performance Optimization & Improvement** means no change in logic based on value then fetch existing value from cache

        - **useMemo**(Performance Optimization & Improvement):- 
                
            Built-in hook that optimize performance by memoizing (caching) the result of expensive calculations so they don't have to be recomputed on every render unless their dependencies change.

            Used when complex sorting, filtering, or computations.

            Syntax:-

            ```JSX

                        import React, { useState, useMemo } from 'react';

                        const ExpensiveCalculation = ({ number }) => {
                            function factorial = useMemo(() => {
                                function factorialOf = (n) => {
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


        - **useCallBack**(Memoized Callbacks):- 
                
            Built-in hook that memoizes a callback function and returns the same function instance between renders unless its dependencies change. 
                 
            This helps optimize React components by preventing unnecessary re-creations of functions and avoids unwanted re-renders in child components that receive these callbacks as props.

            Syntax:-

            ```JSX

                        import React, { useState, useCallback } from 'react';

                        const Parent = () => {
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

            With useCallback, the same function instance is called, so Child only re-renders when necessary.


      - Component Rendering Stage Hook:-

        - **useTransition**(Component undergoes various stages such as ideal,isPending,isDone):-
        
            useTransition is a hook that allows to perform an action asynchronously, such as fetching data or updating state, without blocking the user interface.

            Syntax:-    

            ```JSX

                        import { useTransition } from "react";

                        const [isPending, startTransition] = useTransition();

                        startTransition(() => {
                            // Perform an action that updates state asynchronously
                            fetchData();
                            // ...
                            // Update state or perform other actions
                            // ...
                            // After the action is complete, set isPending to false
                            setIsPending(false);
                            // ...
                            // Render the updated UI
                            // ...
                        });
                
            ```

- **Custom Hooks**:-
 
    **Custom hooks** are a way to encapsulate and reuse logic across multiple components in React. They allow you to create reusable functions that can use built-in hooks like useState, useEffect, and others.

    Custom hooks are just JavaScript functions that start with the word "use" and can call other hooks inside them. They can return any value, including state variables, functions, or objects.

    Custom hooks are useful for encapsulating complex logic that needs to be shared across multiple components, such as form handling, data fetching, or animations.

    To create a custom hook, define a function that uses React hooks and returns the desired values or functions. Then, you can use this custom hook in any component by calling it like a regular function.

    Syntax:- **Custom Hook** that uses useState and useEffect:

    ```JSX

            import { useState, useEffect, useContext } from "react";

            function useCustomHook1 = () => {
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

- **HOC/Higher Order Component**:-
  
    **HOC** is a function that takes a component and returns a new component with additional functionality or behavior.

    HOCs are useful for centralizing shared logic(authentication, authorization), data fetching, error handling, Theming, or analytics and logging across many components.

    - **Code Reusability**:
         HOCs enable sharing common logic (e.g., authentication, data fetching) across multiple components without repeating code.

    - **Separation of Concerns**:
            They help separate the UI rendering from logic or side effects, improving code organization and maintainability.

    - **Cleaner Components**:
            Components remain focused on UI, while HOCs handle behavior, making both easier to manage.

    - **Improved Testing**:
            You can isolate logic in HOCs and test them separately.

    - **Scalability**:
            HOCs simplify adding or modifying shared behavior as the app grows.

    - **Third-Party Integration**:
            They help inject functionalities like Theming, analytics, or API integration uniformly across components.

    Syntax:-

    ```JSX

            const WithExtraProps = (WrappedComponent) => {
                return (props) => {
                    const extraProps = { extraProp: "value" };
                    return <WrappedComponent {...props} {...extraProps} />;
                };
            };

            export default WithExtraProps(MyComponent);

    ```

    Here, `WithExtraProps` is a HOC that adds an `extraProp` to the wrapped component `MyComponent`.


- **React.Memo**:-

     React.Memo is a built-in HOC that memoizes a component, preventing unnecessary re-renders when its props haven't changed.

     It is used to optimize performance by avoiding re-rendering of components that receive the same props.

     Syntax:-

     ```JSX

                import React, { memo } from "react";

                const ChildComponent = (props) => {
                    return <div>{props.value}</div>;
                };

                export default memo(ChildComponent);

     ```

***
***

### ReactJS API Access Ways:-

#### 1. fetch():-

   Fetch is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a Promise that resolves to the Response object representing the response to the request.

##### 1.1 Promises:

   Fetch API uses Promises to handle asynchronous operations, allowing you to work with the response data once the request is complete.

   Syntax:-

   ```JS

                fetch(url).then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));

   ```


##### 1.2 Async-Await

   Async-Await is a more modern way to handle asynchronous operations in JavaScript, making the code look synchronous and easier to read.

   Syntax:-

   ```JS

                async function fetchData() {
                    try {
                        const response = await fetch(url);
                        const data = await response.json();
                        console.log(data);
                    } catch (error) {
                        console.error(error);
                    }
                };
                
   ```


#### 2. Axios() (Third-Party):-

   Axios is a promise-based HTTP client for the browser and Node.js. It is better than fetch() as it has more features and is more user-friendly.

   It simplifies making HTTP requests and handling responses, making it easier to work with APIs.

   **Benefits**:-

   1. Easier syntax and cleaner code.
   2. Automatic JSON transformation without extra code.
   3. Built-in error handling.
   4. Supports old browsers.

   Third-party libraries like Axios need to be installed separately.

##### 2.1. First install axios

   Syntax:-

   ```Terminal

                    npm install axios

   ```

   Then verify the module is installed or not in the package.json within the dependencies key's value, along with the module version


##### 2.1.1. Promises:-

   Axios returns a Promise that resolves to the response data.

   Syntax:-

   ```JS

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

##### 2.1.2 Async-Await

   Axios can also be used with async-await syntax, making the code more readable and easier to manage.

   Syntax:-

   ```JS

                                import axios from 'axios';

                                async function fetchData() {
                                    try {
                                        const response = await axios.get(url);
                                        console.log(response.data);
                                    } catch (error) {
                                        console.error(error);
                                    }
                                };

                                fetchData();

   ```

***

##### 2.1 Axios HTTP Methods(CRUD Methods):-

   Axios supports all standard HTTP methods like GET, POST, PUT, DELETE, PATCH, etc. Each method corresponds to a specific type of request.

##### 2.1.1. POST(Create-C):-

   The POST method is used to send data to the server to create a new resource. It is commonly used for submitting forms or uploading files.

   Syntax:-

   ```JS

                import axios from "axios";

                async function createResource(data) {
                    try {
                    const response = await axios.post("https://api.example.com/resources", data);
                    console.log("Resource created:", response.data);
                    } catch (error) {
                    console.error("Error creating resource:", error);
                    }
                };

   ```

##### 2.1.2 GET(Read-R):-

   The GET method is used to retrieve data from the server. It is commonly used for fetching resources or displaying data to the user.

   Syntax:-

   ```JS

                import axios from "axios";

                async function fetchResource(id) {
                    try {
                    const response = await axios.get(`https://api.example.com/resources/${id}`);
                    console.log("Resource fetched:", response.data);
                    } catch (error) {
                    console.error("Error fetching resource:", error);
                    }
                };

   ```

##### 2.1.3 PUT(Update-U):-

   The PUT method is used to update an existing resource on the server. It is commonly used for updating data or replacing a resource.

   Syntax:-

   ```JS

                import axios from "axios";

                async function updateResource(id, data) {
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

   ```JS

                import axios from "axios";

                async function patchResource(id, data) {
                    try {
                    const response = await axios.patch(`https://api.example.com/resources/${id}`, data);
                    console.log("Resource patched:", response.data);
                    } catch (error) {
                    console.error("Error patching resource:", error);
                    }
                };

   ```


##### 2.1.4. DELETE(Delete-D):-

   The DELETE method is used to delete a resource on the server. It is commonly used for removing data or resources.

   Syntax:-

   ```JS

                import axios from "axios";

                async function deleteResource(id) {
                    try {
                        const response = await axios.delete(`https://api.example.com/resources/${id}`);
                        console.log("Resource deleted:", response.data);
                    } catch (error) {
                            console.error("Error deleting resource:", error);
                        }
                }

   ```

***
***

### React/ReactJS Routing/Navigation


- **REACT ROUTER**(v7.6+)(Developed By Michael Jackson and Ryan Florence not Facebook or Google) is another JavaScript(JS) Library/Framework used for implementing Routing in our Web Application using client-side scripting.

- Install the react-router module.

    Syntax:-

           ```Terminal

                npm install react-router-dom@latest

           ```

    Then verify the module is installed or not in the package.json within the dependencies key's value, along with the module version

- **Routing/Navigation**:- Moving through different UI is SPA(Single Page Application) is done through React-Router framework
    concept.

    **Two ways to create a route**

    - **Old (Using helper createRoutesFromElements)**:

        Syntax:- 

        ```JSX

                    import { createBrowserRouter } from "react-router-dom";

                    const App = () => {
                        const router = createBrowserRouter(
                        createRoutesFromElements(
                            <>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                            </>
                        )    
                        );

                        <RouterProvider router={router} />
                    }

        ```


    - **New(Best Way)**:-
            
        Syntax:- 

        ```JSX

                    import { createBrowserRouter } from "react-router-dom";

                    const App=()=>{
                        const router = createBrowserRouter([
                                { path: "/", element: <Home/>  },
                                { path: "/about", element: <About/> },
                        ]);

                        <RouterProvider router={router} />
                    }
                    
        ```

    **Note**:- / in path defines the route/home route of the application means it loads the initial component.

    **IMP**:- <RouterProvider router={router} / > react-router-dom inbuilt component that shares the router path/url/links to calling components map to path in createBrowserRouter) in the entire application,
    means path call in browser anywhere within the application, that path is checked in the router array object by RouterProvider
    and then navigate to the associated component

    Syntax:- 

    ```JSX

                const App = () => {
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
                }
    ```

    **Props of createBrowserRouter**:-

    - **path**:- It accepts a navigation path name, which is displayed in the browser URL.

    - **element**:- It holds a component that gets rendered when the associated path is displayed in the browser URL

    - **children**:- It also holds an array of paths along with a child component, which is going to render in the Page Body section.

       - In the above element < AppLayout> is a component that consists of a Header and a Footer section, which is common for the entire application.
      
       - **Children** are included dynamically in the Body section between the Header section & Footer section by < Outlet> react router component, based on the associated path, gets called on clicking of the link which is generated using < NavLink> react router component.
        
           - **Loader prop** of children takes a function that returns JSON data from the function through fetchAPI() as API data.
          
           - **Action prop** of children takes a function that returns JSON data from the function through formData() that is used to UPDATE different fields of data submitted in the component by Form action.

    - **errorElement**:- It holds the component that gets rendered when the associated element component's error occurs due to syntax, logic, etc.

    
    **Scenario** (To REPLACE < a> tag by < NavLink>):-

    Due to the < a> HTML tag, when a link is clicked, there is a full postback of the page, so no use of <a> anchor HTML tags in React.

    Therefore, in React, the built-in component <NavLink> is provided in place of the <a> anchor tag or any navigation HTML tag to avoid postback/refresh of the entire page.

    In < NavLink>, their is 'to' attribute is replaced with the <a> tag 'href' attribute.

    Syntax:-

    HTML Tag:-

    Syntax:-
  
    ```HTML

                <a href="#">Link</a>

    ```

    In React:-

    Syntax:-
  
    ```JSX

                <NavLink to="#">Link</NavLink>

    ```

- **Active Link** is a concept of highlighting the current selected Link based on the color of the Link is different from all other non-selected Link colors.

    There are 3 ways of adding 'active' CssClass with 'nav-link' CssClass

    1. className with inline function
    2. Style with inline function
    3. Style with a function call

- **Hooks In React Router**:-

    Syntax:- 

    ```JSX

        import { createBrowserRouter, RouterProvider } from "react-router-dom";        

        const App = () => {    
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

            <RouterProvider router={routeLinks} />
        }

    ```

    1. **useRouteError**:- This hook provides error details, meaning the cause of the error, which gives details of the Type Of Error and error, status, statusText, etc.

        Syntax:-

        ```JSX

                  import { createBrowserRouter, RouterProvider } from "react-router-dom";
                  import { useRouteError } from "react-router-dom";

                  const ErrorPage = () => {
                    const errorDetails = useRouteError();

                    console.log(errorDetails);
                  }

        ```

        2- Ways of showing an error page

        - Using **errorElement** key -- Best way

            Syntax:- 

            ```JSX

                    const App=()=>{
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
                            errorElement: <ErrorPage />,
                        },
                        ]);

                        <RouterProvider router={routeLinks} />
                    }

            ```

        - Using **children's** JSON object

            Syntax:- 

            ```JSX

                    const App=()=>{
                        const routeLinks = createBrowserRouter([
                        {
                        path: "/",
                        element: <AppLayout />,
                        children: [
                                    { path: "/", element: <Home /> },
                                    { path: "/about", element: <About /> },
                                    { path: "/movie", element: <Movie /> },
                                    { path: "/contact", element: <Contact /> },

                                    { path: "*", element: <ErrorPage /> },                (Imp:- path: "*" -  Where * is Wild Card Route)

                                    ],
                        },
                        ]);

                        <RouterProvider router={routeLinks} />
                    }

            ```


    2. **useNavigate**:- This hook is used to navigate, especially to the immediate previous URL/Page. Can also navigate to any URL/Page.

        Syntax:-    

        ```JSX

                import { useNavigate } from "react-router-dom";

                const ReactComponent=()=>{
                    const navigate = useNavigate();

                    return(
                        <button className="btn btnclose" onClick={() => navigate(-1)}>
                            Go Back
                        </button>
                    )
                }

        ```

        **Note**:-   -1 means the previous page
                      / mean home page


    3. **useNavigation**:- This hook is used to get information about the current navigation state, such as location, action, etc.

        Syntax:-

        ```JSX

                import { useNavigation } from "react-router-dom";

                const ReactComponent=()=>{
                    const navigation = useNavigation();

                    return(
                        <div>
                            {navigation.state === "loading" && <p>Loading...</p>}
                            {navigation.state === "idle" && <p>Idle</p>}
                        </div>
                    )
                }

        ```

        **Note**:- navigation.state can be used to check the current state of navigation, such as loading, idle, etc.


    4. **useLoaderData**:- This hook is used to get data from the loader function, which is defined in the route's children array object.State property of the hook is used to know the current state of data loading, such as loading, idle, etc.

        Syntax:-

        ```JSX

                import { useLoaderData } from "react-router-dom";

                const ReactComponent=()=>{
                    const data = useLoaderData();

                    console.log(data);
                }

        ```

- **Dynamic Route Parameters**:-

    **Dynamic routing** is used to create routes based on data or user input. It allows you to create routes that can change at runtime.
    
    - **Dynamic route parameters of URL access in Component**.

       - Calling component in route with a dynamic route parameter in the path use useParams hook

         - **useParams**:- This hook is used to access dynamic route parameters from the URL when using component call.

            Syntax:-

            ```JSX

                  import { useParams } from "react-router-dom";

                  const ChildComponent=()=>{
                        
                     const params = useParams();

                     console.log(params);

                     const {movieID,movieName}= params;

                     console.log(movieID, movieName);
                    }           

            ```

            **Note**:- The params object will contain key-value pairs of dynamic route parameters defined in the path.

            **Example**: If the path is "/movie/:movieID/:movieName", then params will be an object like { movieID: "123", movieName: "Charlie" }.


    - **Dynamic route parameters of URL access in Loader attribute JS Funtion**.


      Syntax:-

      In React Router, dynamic routing can be achieved by using route parameters in the path.

      Syntax:- 

      ```JSX

                        { path: "/movie/:movieID", element: <Movie />, loader: getMoviesDataByParams }
                        
      ```

      - Calling component in route with a dynamic route parameter in path

           In this example, `:movieID` is a route dynamic parameter that can be accessed in the `Movie` component using the `useParams` hook.

          - Calling a function in the route with a dynamic route parameter in the loader prop of the route

             In this example, `:movieID` is a route dynamic parameter that can be accessed in the `getMoviesDataByParams` function by passing the `params` object as a prop.

             Syntax:- 

             ```JS

                            export const getMoviesDataByParams = async ({ params }) =>
                            {
                                let movieID = params.movieID;
                                const data = await resp.json();

                                    return data;
                            };

             ```


- **.env File**:-
    This file is used to store environment variables such as API keys, URLs, etc. It should not be committed to version control for security reasons.

    **Note**:- .env file should be placed at the root of the project directory.

    Syntax:-

    In a React project, below is an example of the .env file,

    Always append 'REACT_APP_' before the variable name to make it accessible in a React application.

    Syntax:- 

    ```ENV

                REACT_APP_API_KEY=your_api_key_here
                REACT_APP_API_URL=https://api.example.com

    ```

    ```JSX

                import (REACT.meta.env.REACT_APP_API_KEY) from "react"; --To Access Environment Variables

    ```

    But in the Vite project, below is an example of the .env file,

    Always append 'VITE_' before the variable name to make it accessible in a React application.

    ```ENV                

                VITE_API_KEY=your_api_key_here
                VITE_API_URL=https://api.example.com

    ```

    ```JSX

                import.meta.env.VITE_API_KEY from "react";  --To Access Environment Variables

    ```



- **Form Submission**:- 

    Actually form submission in React without React Router concept is like below,

    Syntax:-

    ```JSX

                    function handleSubmitPost(ev) {
                        ev.preventDefault();
                        try {
                            const action = ev.nativeEvent.submitter.value;
                            action === "Add" ? handleAddPost(post) : handlePutPost(post);
                            setPost(initPost);
                        } catch (error) {
                            console.error("Error Message ", error.message);
                            console.error("Error Status ", error.response.status);
                            console.error("Error Data ", error.response.data);
                        }
                    }

                    <form onSubmit={handleSubmitPost}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit" value="Add">Add Message</button>
                        <button type="submit" value="Update">Update Message</button>
                    </form>

    ```

    React Router provides a way to handle form submissions using the `action` prop in the route configuration. This allows you to handle form data submission and processing.

    Syntax:-

    - 1-Way:- In the route configuration, you can define an `action`  function that will be called when the form is submitted.

      Event call,

      Syntax:- 

      ```JSX

                    <Form method="post" action="/contact">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </Form>

      ```


      In route configuration, the action prop is used to handle form submission and process the form data as below.

      Syntax:- 

      ```JSX

                       { path: "/contact", element: <Contact />, action: submitContactFormData}.

      ```

      Then, passing the {request} object as a prop to a function where the formData() function returns a response, which is then converted to an object format through object.fromEntries(), which is further used for processing array-like structure data to convert to object format.

      Syntax:-
      
      ```JS

                       export function submitContactFormData = async ({ request }) =>
                       {
                         try {
                                 const formData = await request.formData();

                                 console.log(formData);

                                 const postedData= Object.fromEntries(formData);

                                 console.log(postedData);

                                 return postedData;
                            } catch (error) {

                                 console.log(error);

                            }
                       };

      ```

    - 2-Way:- Direct action function call that will be called when the form is submitted.

        Event call,
 
        Syntax:-    

        ```JSX
                    function handleFormSubmitContact(formData) {
                        console.log(formData.entries());
                        const formInputData = Object.fromEntries(formData.entries());

                        console.log(formInputData);

                        return <></>;
                    }


                    <form action={handleFormSubmitContact}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
        ```

***
***

### React Query / TanStack Query :-

   React Query/TanStack Query(Tanner Linsley not Facebook or Google) is a powerful library for managing server state in React applications. It simplifies data fetching, caching, and synchronization with the server, making it easier to build responsive and efficient applications.

   It fetches server-side data like a breeze, fast, efficient and reduce amount of time writing boilerplate code.

   Advantages:-
        1. **Data Fetching Made Easy**: With simple useQuery hooks, fetching data becomes super easy.
        2. **Built-in Loading and Error States**: No need to write custom code for handling loading, errors or success states.
        3. **Automatic Caching**: It automatically caches responses/data.
        4. **Background Refetching**: If your data gets stale or out of date, React Query can refetch data in the background, keeping your UI up-to-date without manual intervention.
        5. **Pagination and Infinite Scrolling**: It provides built-in support for pagination and infinite scrolling, making it easy to handle large datasets.

#### Install React Query

   Syntax:-

   ```Terminal

                npm install @tanstack/react-query

   ```

#### Usage React Query

   Syntax:- 

   ```JSX

            import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

            const ReactQueryApp = () => {
                const queryClient = new QueryClient();

                return (
                    <QueryClientProvider client={queryClient}>
                        <RouterProvider router={routingURLs} />
                    </QueryClientProvider>
            );
            };

   ```

   **IMP**:- <QueryClientProvider> is a query provider that makes the query  available to all components pass between <QueryClientProvider> and </QueryClientProvider>, allowing them to access and interact with the query cache and perform data fetching operations.

   **QueryClient**:- Core part of ReactQuery that performs manage cache data,background fetch when data is old,data synchronization and other query logic.    

### Hooks In React Query

 1 **useQuery**:- To fetch/get/read data from server.
   
   Then use hook **useQuery** to define queryKey required for while getting Cache data using key and queryFn for calling function that fetches data.

   Syntax:-

   ```JSX

                        import { useQuery, keepPreviousData } from "@tanstack/react-query";
                        
                        const { data, isLoading, isError } = useQuery({
                                queryKey: ["posts"],
                                queryFn: fetchPosts,
                                gcTime: 2 * 1000, //Garbage Collection Time Till 2sec
                                staleTime: 5 * 1000, //Keep Data Fresh Time Till 5sec
                                refetchInterval: 6 * 1000, //Refetch Data Every 6sec automatically call api without taking any action
                                refetchIntervalInBackground: true, //Refetch Data Every automatically call api without taking any action when Page/Tab is not active
                                placeholderData: keepPreviousData, //Use previous data when new data is not available to avoid in-between flicker/loaders
                            });

   ```

   useQuery hooks provides different states like isLoading, isError, data etc. to manage your UI accordingly.

            
   1. **gcTime**: This shows the time taken for garbage collection time for caching data during request processing.
           (Default value of gcTime is 5 minutes)
           (Scenario:- When the query is no longer needed, it will be garbage collected after this time.)

   2. **staleTime**: This shows the time after which fresh cached data gets stale/old. The default value is 0 seconds, meaning the data is fresh until it is fetched again.
           (Default value of staleTime is 0 seconds)
           (Scenario:- When the query data is became stale/old, it will be need to refetch updated data after this time.)

   3. **Polling**:- Keep data fresh/up-to-date by automatically refetching it at a specified interval.This can be achieved using the refetchInterval option refetch request only when tab is active or refetchIntervalInBackground option refetch request when tab is inactive.
           (Scenarios:- Real-time applications, dashboards, etc.)

        - **refetchInterval**: This shows the time interval at which the query will automatically refetch data. The default value is 0 seconds, meaning the query will not refetch automatically.
              (Default value of refetchInterval is 0 seconds means not applied)

        - **refetchIntervalInBackground**: This shows the time interval at which the query will automatically refetch data when the tab is inactive. The default value is 0 seconds, meaning the query will not refetch automatically in the background.
              (Default value of refetchIntervalInBackground is 0 seconds means not applied)


 2 **useMutation**:- To send/post/update(put,patch)/delete data to server. 

   Then mutation hook **useMutation** to provide data to server using post/put/patch/delete api call and get response back from server and also manage states like isLoading, isError, data etc. to manage your UI accordingly.

   Syntax:-

   ```JSX

                        import { useMutation } from "@tanstack/react-query";

                        const postDelete = useMutation({
                            mutationFn: async ()=> await deletePost(),
                            onSuccess: () => {
                                // Handle successful mutation
                            },
                            onError: (error) => {
                                // Handle mutation error
                            },
                            onSettled: () => {
                                // Handle mutation completion
                            }                            
                        })

                         <button onClick={(id) => postDelete.mutate(id)}>Delete</button>

   ```
                    
   **Note**:- mutate() method is used to trigger the useMutation hook and execute the mutationFn.


   - **onSuccess**:- A callback function that runs when the mutation is successful             
   - **onError**:- A callback function that runs when the mutation fails           
   - **onSettled**:- A callback function that runs when the mutation is either successful or fails
           

      - **useQueryClient**:- To use cache data from server and update data to server.

      Then data update hook **useQueryClient** uses **setQueryData** method having 2 parameters first parameter queryKey value which is defined in **useQuery** hook to fetch already cached data for further update based on second parameter as id value.

      Syntax:-   

      ```JSX  

                        import { useQuery, useQueryClient } from "@tanstack/react-query";                        

                        const { data, isLoading, isError } = useQuery({
                            queryKey: ["posts"],
                            queryFn: fetchPosts,
                        })

                        const queryClient = useQueryClient();

                        const deletePostData = async (id) => {
                            mutationFn: async () => await deletePost(id);
                            onSuccess: (response,id) => {
                                // Handle successful mutation
                                await queryClient.setQueryData(["posts"], (cachedPostsData) => {
                                    return cachedPostsData?.filter((singleCachePostData) => singleCachePostData.id !== id);
                                });
                            }   
                        }

      ```
      
 3. Infinity Scrolling Page Hooks
 
     - **useInfiniteQuery**:- To fetch data in infinite manner.

       Then infinite query hook **useInfiniteQuery** uses **fetchNextPage** method to fetch data in infinite manner.

       Syntax:-

       ```JSX

                        import { useInfiniteQuery } from "@tanstack/react-query";

                        const { data, isLoading, isError, fetchNextPage } = useInfiniteQuery({
                            queryKey: ["posts"],
                            queryFn: fetchPosts,
                            getNextPageParam: (lastPage, allPages) => {
                                return lastPage.length === 0 ? undefined : allPages.length + 1;
                            },   
                            initialPageParam: 1,                           
                        })

                        <button onClick={() => fetchNextPage()}>Load More</button>

         ```
       
     OR
    
      
     - **useInView** (Less config then **useInfiniteQuery hook**) :-
 
        This hook automatically capture active page region known as viewport and fixing element at bottom instead of measuring page scroll position done using scroll event listener.

        Syntax:-             
                    
        ```Terminal

                        npm install react-intersection-observer

        ```

        ```JSX

                        import { useInView } from "react-intersection-observer";

                        const { ref, inView } = useInView({
                            threshold: 1,
                        })

                        if (inView) {
                            // Fetch data
                            fetchNextPage()
                        }


                        <div ref={ref}>Capture active page region</div>
         ```

***
***

### React Query Devtools

#### Install

   React Query provide devtools similar to react devtools for inspecting queries and their states in details in browser developer options similar to components and profiler panels.

   To install React Query Devtools, you can use the following command:

   Syntax:-

   ```Terminal

            npm install @tanstack/react-query-devtools
            
   ```

#### Usage

   Then, you can use the Devtools in your application to view details of queries and their states on browser with React Query Devtools icon at the bottom right corner by including below jsx like this:

   Syntax:-

   ```JSX
            
                import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

                const App = () => {
                    return (
                        <>
                            <YourAppComponents />
                            <ReactQueryDevtools initialIsOpen={false} />
                        </>
                    );
                };

   ```

   **Devtools** over page position bottom-right icons when click expands abd shows 2 tabs Queries and Mutations that provides details of API reques call.

   1. **Queries**: This tab displays all the active queries, their status (loading, error, success), and the data they have fetched using useQuery hook. You can inspect each query's details, including its key, variables, and response data.

        API Request details such as:-
        - **Query Details**: This includes information about the query's key, variables, and the data it has fetched.And also provides Stale Time, Fetch Time, and other metadata.
        - **Actions**: This includes information about the actions that have been dispatched related to the query, such as refetching or invalidating the query.
        - **Data Explorer**: This allows you to explore the data returned by your queries in a more visual way, making it easier to understand the structure and contents of the data.
        - **Query Explorer**: This provides a way to inspect the query's variables, status, and other metadata in a more detailed manner.

           1. **gcTime**: This shows the time taken for garbage collection time for caching data during request processing.
           (Default value of gcTime is 5 minutes)
           (Scenario:- When the query is no longer needed, it will be garbage collected after this time.)

           2. **staleTime**: This shows the time after which fresh cached data gets stale/old. The default value is 0 seconds, meaning the data is fresh until it is fetched again.
           (Default value of staleTime is 0 seconds)
           (Scenario:- When the query data is became stale/old, it will be need to refetch updated data after this time.)

           3. **Polling**:- Keep data fresh/up-to-date by automatically refetching it at a specified interval.This can be achieved using the refetchInterval option refetch request only when tab is active or refetchIntervalInBackground option refetch request when tab is inactive.
           (Scenarios:- Real-time applications, dashboards, etc.)

              - **refetchInterval**: This shows the time interval at which the query will automatically refetch data. The default value is 0 seconds, meaning the query will not refetch automatically.
              (Default value of refetchInterval is 0 seconds means not applied)

              - **refetchIntervalInBackground**: This shows the time interval at which the query will automatically refetch data when the tab is inactive. The default value is 0 seconds, meaning the query will not refetch automatically in the background.
              (Default value of refetchIntervalInBackground is 0 seconds means not applied)

   2. **Mutations**: This tab shows all the mutations(means updates on data based on insert,put/patch,delete api call using useMutation hook) that have been triggered in your application. You can see their status, any errors that occurred, and the data they have modified.  

***
***

### REDUX / REDUX TOOLKIT(RTK) / Zustand


#### REDUX :-
   Redux is used mainly for large application having higher number of component hierarchy.
   In Redux data/state flow in one-direction from Parent to Target Child so to avoid unwanted travalling of data 


   **Redux Store**:- Store all data in one places and share share data as per required by components.

   Redux works based on 3 parts:-
      - Store:- Where all data is kept in one place.
      - Action:- What different task/action performed  on data information such as add,increment,decrement, etc
      - Reducer:- How task/action performed detailed logics are maintained.

   **Advantages**:-
      - Centralized storage of all data by Store
      - Global easy to access from Store
      - Predictable/Definite update of state by Reducer.
      - Provides its own Devtools for tracking changes in browser
      - Support async middleware process by JS scripts libraries such as Thunk or Saga
   
   **Reducer**:-
   - Always return new state
   - Never update original state value ,its takes copy by using ...spread operatior then update and return new state.

   The reducer function takes 2 arguments:
    - **State**:- Current State
    - **Action**:- This tells the reducer what to do. It has a type and sometimes a payload(which is data to update/add).

   Syntax:-   
   
         ```JS

            const initialState = { value: 0 };

            const reducerfn = (state = initialState , action) => {

               switch(action.type)
               {
                  case 'ACTION_TYPE':
                     return { ...state, value: state.value + action.payload };
                  default:
                     return state;               
               }            
            }

         ```
     
   **Notes**:-
   1. Action Type:- DomainName/Action   Eg:- task/add OR task/update OR task/delete
   2. State:- Never directly change the state, but use Spread Operator which creake copy of state then make chages such as add/update/delete items from state copy not the original state.
   
   **Store**:-
   Store is a global container for the entire application's state. It stores data temporarily and provides a unified way to access and update the state across the entire application.

   Syntax:-

         ```JS
                    import {createStore} from 'redux';
                    import {reducerfn} from './reducer';

                    const store = createStore(reducerfn);
         ```

  **Dispatch**:-
   Dispatch is a function provided by the Redux store that allows you to send actions to the store. It is used to trigger state changes in the store based on the actions dispatched.

   Syntax:-

         ```JS
                    import {createStore} from 'redux';

                    const store = createStore(reducerfn);

                    <button onClick={() => store.dispatch({ type: 'ACTION_TYPE', payload: data })}></button>
         ```

### REACT REDUX (Connect REDUX with REACT):-

   React Redux is a library that provides a way to connect React components to Redux stores, allowing you to access and modify the state within the components.

   It is built on top of React and Redux and provides a more efficient and developer-friendly way to work with Redux in React applications.

   It is designed to reduce boilerplate code, improve performance, and enhance the developer experience.

   It is the standard way to work with Redux in React applications.

   It is recommended for working with Redux in React applications because it simplifies setup, reduces boilerplate code, and enforces best practices.
       
   Syntax:-

   Install Dependencies

   ```Terminal
            npm install react-redux 
   ```

   Create a Redux Store

   Use createStore to create a Redux store.

   ```JS    
            import { createStore } from 'redux';

            const store = createStore(reducer);

   ```

   Connect a React Component to the Redux Store
    

#### Redux Toolkit(RTK) :-

   Large applications often require a more structured approach to managing global state, especially when dealing with complex data flows and interactions. Redux Toolkit (RTK) is a library that provides a set of tools and best practices for managing global state in React applications.

   It is built on top of Redux and provides a more efficient and developer-friendly way to work with Redux.

   It is designed to reduce boilerplate code, improve performance, and enhance the developer experience.

   It is the standard way to write Redux logic in modern React applications.

   It is recommended for managing global state in React applications because it simplifies setup, reduces boilerplate code, and enforces best practices.

   Syntax:
   
   Install Dependencies

   ```JS
            npm install @reduxjs/toolkit react-redux
   ```

   Create a Redux Slice

   Use createSlice to generate actions and reducers for a part of your state.

   ```JS
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

   ```JS
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

  ```JS
            import { useSelector, useDispatch } from 'react-redux';

            const count = useSelector(state => state.counter.value);
            const dispatch = useDispatch();

            dispatch(increment());
  ```

  **Action Creator**:- 
  It is a wrapper function over dispatch for better understanding, maintainability and reducing redundant code. 
  
  It is used to create actions that can be dispatched to the Redux store instead of directly calling dispatch method.

  

#### Zustand (Newer Concept) :-

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






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

5.  Redux/Redux(RTL)/Zustand :-
6.  Custom Hooks :-
7.  Lazy Loading/Code Splitting/Chunking/Suspense :-
8.  Virtual DOM/Reconciliation(Diffing Algorithm)/React Fiber/Renders :-
9.  SSR (Server-Side Rendering) vs CSR (Client-Side Rendering):-
10. Routing(RBAC):-DynamicRouting,Protected Routing
11. 
