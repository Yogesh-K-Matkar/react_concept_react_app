/* Notes:-

1. Event Function is defined in Parent Component & pass as Props to Child Component & then Child Component decides when to call Parent Component Event Function which is passed as Props using Event Handler by Child Component.

*/

export const EventProps = () => {
  function handleWelcomeUser(user) {
    console.log(`Hey, ${user}`);
  }

  function handleMouseHover() {
    console.log("Thanks for hovering me.");
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Event Pass As Prop</h1>
      <div className="card">
        <WelcomeUser
          onButtonClick={() => handleWelcomeUser("User")}
          onMouseHover={handleMouseHover}
        ></WelcomeUser>
      </div>
    </>
  );
};

const WelcomeUser = (props) => {
  const { onButtonClick, onMouseHover } = props; //Destructuring concept

  function handleGreetings() {
    console.log("Hey User,Welcome.");
    onButtonClick();
  }

  return (
    <>
      <button style={{ backgroundColor: "#f7dc6f" }} onClick={onButtonClick}>
        Click
      </button>
      <button
        style={{ backgroundColor: "#f7dc6f" }}
        onMouseEnter={onMouseHover}
      >
        Hover Me
      </button>
      <button style={{ backgroundColor: "#f7dc6f" }} onClick={handleGreetings}>
        Greeting
      </button>
    </>
  );
};
