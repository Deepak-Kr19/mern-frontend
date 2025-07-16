import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({});
  const { user, setUser } = useContext(AppContext);
  const [error, setError] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const Navigate = useNavigate();
  const fetchProfile = async () => {
    try {
      const url = `${API_URL}/api/users/${user.id}/profile`;
      const result = await axios.get(url);
      setProfile(result.data);
      console.log(profile);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const logout = () => {
    setUser({});
    Navigate("/");
  };
  return (
    <div>
      <h3>My Profile</h3>
      <button onClick={logout}>Logout</button>
      <p>
        <input type="text" defaultValue={profile.firstName} />
      </p>
      <p>
        <input type="text" defaultValue={profile.lastName} />
      </p>
      <p>
        <input type="text" defaultValue={profile.email} />
      </p>
      <p>
        <input type="password" defaultValue={profile.password} />
      </p>
      <button>Update Profile</button>
    </div>
  );
}