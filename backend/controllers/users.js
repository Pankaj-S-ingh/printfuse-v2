const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
]

// Get all users
export const getUsers = (req, res) => {
  res.json(users)
}

// Get user by ID
export const getUserById = (req, res) => {
  const id = Number.parseInt(req.params.id)
  const user = users.find((user) => user.id === id)

  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  res.json(user)
}

// Create new user
export const createUser = (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" })
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  }

  users.push(newUser)
  res.status(201).json(newUser)
}
