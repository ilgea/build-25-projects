// this is reusable component to display user information

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div className="avatar-container">
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={html_url}>Username: <span>{name || login}</span></a>
        <p>
          User joined: {" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos:</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
