"use client"

import { useState, useEffect } from "react"
import axios from "axios"

export default function Home() {
  const [message, setMessage] = useState("Loading...")
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Fetch welcome message from backend
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        setMessage(response.data.message)
      })
      .catch((error) => {
        console.error("Error fetching message:", error)
        setMessage("Error connecting to backend")
      })

    // Fetch users from backend
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error("Error fetching users:", error)
      })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Full-Stack Application</h1>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Backend Connection</h2>
          <p className="text-gray-700 dark:text-gray-300">{message}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Users from Backend</h2>
          {users.length > 0 ? (
            <ul className="space-y-2">
              {users.map((user: any) => (
                <li key={user.id} className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 dark:text-gray-300">No users found</p>
          )}
        </div>
      </div>
    </main>
  )
}
