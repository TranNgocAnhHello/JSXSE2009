import "./App.css";
import {useState} from "react";



let today = new Date().toLocaleDateString();
let timeNow = new Date().toLocaleTimeString();
function Header() {
  const name = "Na Tran";
  const user = {name: "Ngoc Anh", age: 20, mail: "tranngocanh04012006@gmail.com"};
  return (
    <>
      <h1>My React App</h1>
      <p>
        This is a simple React application.
      </p>
      <p>Created by {name}.</p>
      <p>
        Today is {today} and now is {timeNow}.
      </p>
      { /* JSX voi toan tu Ternary */ }
      <p>{name === "Na Tran" ? "Xin chao Na Tran" : "Xin chao khach!"}</p>

      {/* JSX voi Object */}
      <div>
        <h3>User infomation</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.mail}</p>
        <img src={user.avatar} alt="Avatar" className="avatar" /> 
      </div>
    </>
  );
}

function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followCount, setFollowCount] = useState(0);

  const handleClick = () => {
    if (!isFollowing) {
      setFollowCount(followCount + 1);
    } else {
      setFollowCount(followCount - 1);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isFollowing ? '✓ Following' : '+ Follow'}
      </button>
      <p>
        {followCount} {followCount === 1 ? 'person' : 'people'} following
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <hr />
      <FollowButton />
    </div>
  )
}

export default App
