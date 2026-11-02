
import { useState } from 'react'

function Books() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [quantity, setQuantity] = useState('')

  function addBook(e) {
    e.preventDefault()

    if (!title || !author || !category || !quantity) {
      alert('Please fill all fields')
      return
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
      quantity
    }

    setBooks([...books, newBook])

    setTitle('')
    setAuthor('')
    setCategory('')
    setQuantity('')
  }

  function deleteBook(id) {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <div className="books-page">
      <h1>Book Management</h1>
      <p>Add and manage library books</p>

      <form className="book-form" onSubmit={addBook}>
        <input
          placeholder="Book Name"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          placeholder="Author Name"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />

        <input
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <input
          type="number"
          min="1"
          placeholder="Quantity"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />

        <button type="submit">Add Book</button>
      </form>

      <h2>Books List</h2>

      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.quantity}</td>
              <td>
                <button onClick={() => deleteBook(book.id)}>
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

export default Books
