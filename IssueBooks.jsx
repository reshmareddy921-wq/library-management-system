
import { useState } from 'react'

function IssueBooks() {

  const [book, setBook] = useState('')
  const [member, setMember] = useState('')
  const [issueDate, setIssueDate] = useState('')
  const [dueDate, setDueDate] = useState('')

  const [records, setRecords] = useState([])

  const handleIssue = (e) => {
    e.preventDefault()

    if (!book || !member || !issueDate || !dueDate) {
      alert('Please fill all fields')
      return
    }

    if (dueDate < issueDate) {
      alert('Due date cannot be before issue date')
      return
    }

    const newRecord = {
      id: Date.now(),
      book,
      member,
      issueDate,
      dueDate
    }

    setRecords([...records, newRecord])

    setBook('')
    setMember('')
    setIssueDate('')
    setDueDate('')

    alert('Book issued successfully!')
  }

  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id))
  }

  return (

    <div className="books-page">

      <h1>Issue Books</h1>

      <p>Enter book and member details to issue a book.</p>

      <form className="book-form" onSubmit={handleIssue}>

        <input
          type="text"
          placeholder="Enter Book Name"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Member Name"
          value={member}
          onChange={(e) => setMember(e.target.value)}
        />

        <label>Issue Date</label>

        <input
          type="date"
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
        />

        <label>Due Date</label>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button type="submit">
          Issue Book
        </button>

      </form>

      <h2>Issued Books List</h2>

      <table>

        <thead>
          <tr>
            <th>Book Name</th>
            <th>Member Name</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {records.length === 0 ? (

            <tr>
              <td colSpan="5">No books issued yet</td>
            </tr>

          ) : (

            records.map((record) => (

              <tr key={record.id}>

                <td>{record.book}</td>
                <td>{record.member}</td>
                <td>{record.issueDate}</td>
                <td>{record.dueDate}</td>

                <td>
                  <button
                    onClick={() => deleteRecord(record.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  )
}

export default IssueBooks
