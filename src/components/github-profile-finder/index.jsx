import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import "./styles.css";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("ilgea");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGithubUserData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if(loading){
    return <h1>Loading data ! Please wait.</h1>
  }

  return (
    <div className="github-profile-continer">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search by Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData}/> : null}
    </div>
  );
};

export default GithubProfileFinder;
