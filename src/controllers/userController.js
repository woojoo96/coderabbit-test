// 임시 인메모리 데이터
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', password: '1234' },
  { id: 2, name: 'Bob', email: 'bob@example.com', password: 'abcd' },
]

const getUsers = (req, res) => {
  res.json(users)
}

const getUserById = (req, res) => {
  const user = users.find(u => u.id == req.params.id)
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json(user)
}

const createUser = (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Request body is required' })
  }
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'name, email, password are required' })
  }
  const newUser = { id: users.length + 1, name, email, password }
  users.push(newUser)
  res.status(201).json(newUser)
}

const deleteUser = (req, res) => {
  users = users.filter(u => u.id != req.params.id)
  res.json({ message: 'Deleted' })
}

module.exports = { getUsers, getUserById, createUser, deleteUser }