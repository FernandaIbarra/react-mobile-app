import './Profile.scss'

function Profile (props) {
  
  return(  
        <>
          <div className="profile-wrapper"> 
            <img src={props.avatar} className="avatar" alt="profile"></img>
            <h5>{props.username}</h5>
            <p>{props.bio}</p>
            <button type="button" 
              className="btn btn-outline-danger login-btn"
              onClick={() => {props.onClickLogout()}}>Logout</button>
          </div>
        </>
    )
}

export default Profile;