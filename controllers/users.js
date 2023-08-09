const users = require("../data/index")
const sample = require("../data/sampleUser")

//listUsers -> retrieves entire array from _data/index_
const listUsers = (req, res) => {
  res.json(users)
}

//showUser -> retrieve just the user matching the passed-in ID
const showUser = (req, res) => {
  if (req.params.id > users.length) {
    res.sendStatus(404) //ERROR HANDLING
  }
  users.forEach(user => {
    if (user.id == req.params.id) {
      res.json(user)
    }
  })
}

//createUser -> add a user to the array
//POST: create new user
const createUser = (req, res) => {
  let counter = ++users.length
  users.push({
    id: ++counter,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    website: req.body.website,
    company: req.body.company
  })
  res.json(users[users.length - 1])
}

//updateUser -> update one user in the array based on its id
//PUT: update a user
const updateUser = (req, res) => {
  if (req.params.id > users.length) {
    res.sendStatus(400) //ERROR HANDLING
  }
  users.forEach(user => {
    if (user.id == req.params.id) {
      let index = users.indexOf(user)
      users[index] = sample
      res.json(users)
    }
  })
}

//deleteUser -> delete a user from the array based on its id
//DELETE: a user by its ID
const deleteUser = (req, res) => {
  if (req.params.id > users.length) {
    res.sendStatus(400) //ERROR HANDLING
  }
  users.forEach(user => {
    if (user.id == req.params.id) {
      let index = users.indexOf(user)
      users.splice(index, 1)
      res.json(users)
    }
  })
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }
