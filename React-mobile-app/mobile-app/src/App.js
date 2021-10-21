import './App.css';
import React from 'react';
import {useState, useEffect } from 'react';
import NavBar from './components/navBar/NavBar';
import SearchBar from './components/searchBar/SearchBar';
import PostList from './components/postList/PostList';
import Login from './screens/login/Login';
import Profile from './screens/profile/Profile'
import axios from 'axios';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App () {

  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [isloginOk, setIsloginOk] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
      if(userId){
        login();
      } 
  }, [userId]); 

  
  function login(){
    const userId = localStorage.getItem('userId');
    axios.get(`https://three-points.herokuapp.com/api/users/${userId}`)
    .then((response)=>{
      if(response.status === 200){
        setIsloading(true);
        axios.get("https://three-points.herokuapp.com/api/posts")
        .then((response)=>{
          setPosts(response.data);  
          setTimeout(() => {
            setIsloading(false);
          }, 3000); 
        })
        setCurrentUser(response.data);
        setIsloginOk(true);
      }
    })
  }

  function onClickLogout(){
    axios.post(`https://three-points.herokuapp.com/api/logout`)
    .then((response)=>{
      if(response.status === 204){
        localStorage.clear(userId, response.data.id);
        window.location.replace(`/login`);
      }
    })
  }

  function handleLogin (){
    setIsloginOk(true)
    login();
  }
  
  function onSearch(searchString){
    setSearch(searchString);
    setIsloading(true);
    axios.get("https://three-points.herokuapp.com/api/posts")
    .then((response)=>{
      const filteredPosts = response.data.filter((i)=>{return i.text.includes(search)})
      setPosts(filteredPosts);  
      setTimeout(() => {
        setIsloading(false);
      }, 3000); 
    })
  }

    return (
        <div className="App"> 
          <NavBar/>
          <Switch>
            <Route path="/login">
              {!currentUser && userId === null &&
                  <Login 
                  setCurrentUser={setCurrentUser}
                  onLoginComplete={() => {handleLogin()}}
                  ></Login>
              } 
            </Route> 
            <Route exact path="/" >
              {userId ?
                  <>
                    <SearchBar 
                      value={search}
                      onSearch={onSearch}
                    />
                    {!isloading
                    ? <PostList posts={posts}/> : <span>Loading...</span>
                    } 
                  </>
                 : <Redirect to="/login" />}
              </Route>
              <Route path="/profile">
                {isloginOk && currentUser &&
                  <Profile 
                    avatar={currentUser.avatar}
                    username={currentUser.username}
                    bio={currentUser.bio}
                    onClickLogout={onClickLogout}
                  ></Profile>
                }
              </Route>  
            </Switch>           
        </div>
    );
}

export default App;
