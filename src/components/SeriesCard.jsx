import cssModule from "./NetflixSeries.module.css";
import styled from "styled-components";

/* Notes:-
1. Types of CSS:-
  a. Normal CSS consider using className prop.

  b. Inline CSS consider value as object define within { object } for style prop
   eg. style={{ margin: "1.2rem 0" }} 
   (Instead create const object variable assign CSS object used that const variable)
   eg. 
   const btn_style = { margin: "1.2rem 0" };

   style = {btn_style} 

  c. Conditionally applying CSS
   1. Based on Ternary operator apply styling 
   eg className={i>0?"className1" : "className2"}
   2. When you want to append className with condition that derives another className based on condition
      mean append string with expression done below by using Template Literal
      eg. className={`className1 ${i>0?"className2" : "className3"}`}

  d. ModuleCSS:-
    Module CSS is component specific style and extension of file is <filename>.module.css
    In Module CSS each className is treated as property of that specific module.css object
    eg. To access className abc
       import cssModule from './<filename>.module.css'

      style={cssModule.abc}     --When className abc doesn't contain '-'
      style={cssModule["a-b-c"]}  --When className a-b-c contain '-'


      style={cssModule["abc"]}  OR  style={cssModule["a-b-c"]} can be use commonly
  
  e. Styled-Components:-
     In styled-component first need to install using terminal cmd
      eg bun install styled-components

     Import eg. import styled from "styled-components"

     Then using styled object can access react component and applied styled on it.

     2-ways to apply styled-components:-
     A. Template Literals:-
      eg: const Button=styled.button`color:grey`;
          
          style.button --> button is tag eg p,h,button,span

     B. Style Object:-
     eg: const Button=styled.button({
                                      color:grey,
                                   });
          
          style.button --> button is tag eg p,h,button,span

  d. Using Tailwind v4 CSS:-
     1. Instal through terminal cmd :- 
          npm install tailwindcss @tailwindcss/vite
     2. Configure the Vite plugin
          import tailwindcss from '@tailwindcss/vite'

          export default defineConfig({
            plugins: [
              tailwindcss(),
            ],
          })
     3. Import Tailwind CSS
          @import "tailwindcss";

     4. bun run dev

     -In tailwindcss you can set dynamic valus within [] such as 
     eg py-[3.2rem] 

     -In tailwindcss if css is getting overriden by default css then
     ! before each overriden cssclass      
     eg !py-6

   */

export const SeriesCard = (props) => {
  // console.log(props);
  // const { data } = props;
  // console.log(data);

  //Destructure props
  const { name, id, img_url, rating, description, cast, genre, watch_url } =
    props.data;

  const { children } = props;

  const ratingcontent_style = {
    fontSize: "1.5rem",
  };

  const rating_bgcolor =
    rating >= 8.5 ? cssModule["super_hit"] : cssModule["average"];

  // const btn_style = {
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor:
  //     rating_bgcolor === cssModule["super_hit"] ? "#7dcea0" : "#f7dc6f", //",
  //   color: "var(--bg-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // };

  //Using Styled-Components 2-way styled object
  const SeriesWatchNowBtn = styled.button({
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor:
      rating_bgcolor === cssModule["super_hit"] ? "#7dcea0" : "#f7dc6f", //",
    color: "var(--bg-color)",
    fontWeight: "bold",
    cursor: "pointer",
  });

  //Using Styled-Components 1-way template literal

  const Ratings = styled.b`
    font-size: 1.6rem;
    color: ${rating_bgcolor === cssModule["super_hit"] ? "#7dcea0" : "#f7dc6f"};
    text-transform: capitalize;
  `;

  return (
    <>
      <li key={id} className={cssModule.card}>
        <div>
          <b>{children}</b>
        </div>
        {/* <div className={cssModule["card-content"]}> */}
        <div className="flex flex-col gap-6 !py-[3.2rem] !px-[1.2rem]">
          <div>
            <img src={img_url} alt={img_url} />
          </div>
          <h2>
            <b>Name: </b>
            {name}
          </h2>
          <h3 style={ratingcontent_style}>
            <Ratings>Ratings: </Ratings>
            <span
              className={`${cssModule["rating_default"]} ${rating_bgcolor}`}
            >
              {rating}
            </span>
          </h3>
          <p>
            <b>Summary: </b>
            <span className="text-3xl font-bold underline color text-cyan-300">
              {description}
            </span>
          </p>
          <p>
            <b>Genre: </b>
            {genre.join(",")}
          </p>
          <p>
            <b>Caste: </b>
            {cast.join(",")}
          </p>
          <a href={watch_url} target="_blank">
            {/* <button style={btn_style}>Watch Now</button> */}
            <SeriesWatchNowBtn>Watch Now</SeriesWatchNowBtn>
          </a>
        </div>
      </li>
    </>
  );
};
