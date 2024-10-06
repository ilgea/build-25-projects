import { useEffect, useState } from "react";
import Suggestion from "./suggestions";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    // en az 2 harf yazmalı
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick =(e)=>{
    console.log(e.target.innerText);
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([])
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);
  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h3>Loading data. Please wait!</h3>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}
      {showDropdown && <Suggestion handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
};

export default SearchAutoComplete;
