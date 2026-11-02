
import { useState } from 'react'

function Members() {
  const [members, setMembers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function addMember(e) {
    e.preventDefault()

    if (!name || !email || !phone) {
      alert('Please fill all fields')
      return
    }

    const newMember = {
      id: Date.now(),
      name,
      email,
      phone
    }

    setMembers([...members, newMember])

    setName('')
    setEmail('')
    setPhone('')
  }

  function deleteMember(id) {
    setMembers(members.filter(member => member.id !== id))
  }

  return (
    <div className="books-page">
      <h1>Members Management</h1>
      <p>Add and manage library members</p>

      <form className="book-form" onSubmit={addMember}>
        <input
          placeholder="Member Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <button type="submit">Add Member</button>
      </form>

      <h2>Members List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
                <button
                  onClick={() => deleteMember(member.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Members
