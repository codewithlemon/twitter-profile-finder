const AboutView = () => {
  return (
    <main className="about-view max-w-md w-full mx-auto px-4">
      <p className="mb-3 leading-8 text-justify">
        I needed a way to track down the usernames of some specific Twitter
        users, so I created this app to help me find them.
      </p>
      <p className="mb-3 leading-8 text-justify">
        You will a need a user's Twitter ID to find their username. To get a
        user's Twitter ID, type their current username in the search box.
      </p>
      <p className="mb-3 leading-8 text-justify">
        Then, change the drop-down to Search by Username. Click{" "}
        <span className="h-10 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium mr-1">
          Find
        </span>
        , and that will give you their current Twitter ID, username, and display
        name.
      </p>
      <p className="mb-3 leading-8 text-justify">
        Save their Twitter ID. Then, the next time you need to find their new
        username, simply enter their Twitter ID in the search box.
      </p>
    </main>
  )
}

export default AboutView
