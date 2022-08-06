const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="max-w-[24rem] mx-auto pt-3">
        <div className="grid grid-cols-[auto_1fr]">
          <p className="text-right pr-2 font-medium">Twitter ID:</p>
          <p>{user.id}</p>
          <p className="text-right pr-2 font-medium">Username:</p>
          <p>
            <a
              href={`http://twitter.com/${user.username}`}
              target="_blank"
              className="twitter-profile-link hover:underline underline-offset-4"
            >
              @{user.username}
            </a>
          </p>
          <p className="text-right pr-2 font-medium">Display name:</p>
          <p>{user.name}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
