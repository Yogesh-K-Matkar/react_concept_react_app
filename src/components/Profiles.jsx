


export default function Profiles() {
  return (
    <div>
          <h1>User Profiles</h1>
          <ProfileCard name="Alice" age={"30"} greetings={<><strong>Hi Alice, have wonderful day</strong></>}> 
              {<><p>Hobbies: Reading,Hiking</p>
                 <button>Contact</button> 
              </>                  
              }
          </ProfileCard>
            <ProfileCard name="Bob" age={"25"} greetings={<><strong>Hi Bob, have wonderful day</strong></>}> 
              {<><p>Hobbies: Gaming,Cooking</p>
                 <button>Contact</button> 
              </>                  
              }
          </ProfileCard>
    </div>
  );
}


function ProfileCard({ name, age, greetings, children } ) { 
    return (<>    
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <div>Greetings: {greetings}</div>
        {children}
    </>);

}