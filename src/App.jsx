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
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button 
        onClick={handleClick}
        style={{
          backgroundColor: isFollowing ? '#e74c3c' : '#3498db',
          color: 'white',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        {isFollowing ? '✓ Following' : '+ Follow'}
      </button>
      <p style={{ marginTop: '10px', fontSize: '14px', color: '#bdc3c7' }}>
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
