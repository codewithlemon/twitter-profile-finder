import { useRef, useState } from "react"
import UserProfile from "../components/UserProfile"

const HomeView = () => {
  const [selectedMethod, setSelectedMethod] = useState("id")
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const userIdentifier = useRef()

  async function handleSubmit(e) {
    e.preventDefault()
    if (userIdentifier.current.value === "") return

    setUser(null)
    setError(null)
    setIsPending(true)

    try {
      const response =
        selectedMethod === "id"
          ? await fetch(
              `https://twitterprofilefinderapi.onrender.com/profile/by-id/${userIdentifier.current.value}`
            )
          : await fetch(
              `https://twitterprofilefinderapi.onrender.com/profile/by-username/${userIdentifier.current.value}`
            )

      const data = await response.json()

      if (!data.user) throw new Error("No user found.")

      setUser(data.user)
    } catch (e) {
      if (e.message.startsWith("NetworkError"))
        setError("Search service could not be contacted.")
      else setError(e.message)
    }
    setIsPending(false)
  }

  return (
    <main className="home-view max-w-xl w-full mx-auto px-4 py-3">
      {/* Search box */}
      <form
        className="mb-3 grid sm:grid-cols-[auto_auto_auto]"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 flex justify-center items-center sm:justify-end sm:mb-0 gap-2">
          <label>Search by</label>
          <select
            value={selectedMethod}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="h-10 bg-white px-1 border rounded-lg sm:rounded-r-none sm:border-r-0 border-gray-300"
          >
            <option value="id">Twitter ID</option>
            <option value="username">Username</option>
          </select>
        </div>
        <input
          type="text"
          required
          ref={userIdentifier}
          className="h-10 min-w-0 px-2 border sm:border-l-0 border-gray-300 rounded-lg sm:rounded-l-none mr-2 mb-3 sm:mb-0 w-full"
        />
        {isPending && (
          <button
            disabled
            className="h-10 px-4 py-2 sm:ml-2 rounded-lg bg-blue-300 transition duration-200 text-white font-medium"
          >
            Find
          </button>
        )}
        {!isPending && (
          <button className="h-10 px-4 py-2 sm:ml-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition duration-200 text-white font-medium">
            Find
          </button>
        )}
      </form>

      {/* Results */}
      {isPending && <p className="text-center pt-3">Searching ...</p>}
      {user && <UserProfile user={user} />}
      {error && <p className="text-center pt-3">{error}</p>}
    </main>
  )
}

export default HomeView
