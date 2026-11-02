import { useState } from 'react'
import './App.css'

import Books from './Books'
import Members from './Members'
import IssueBooks from './IssueBooks'

function App() {
  const [page, setPage] = useState('Dashboard')

  const menuItems = [
    'Dashboard',
    'Books',
    'Members',
    'Issue Books',
    'Return Books',
    'Transactions'
  ]

  return (
    <div className="app-container">

      {/* Sidebar */}
      <aside className="sidebar">

        <h2>📚 My Library</h2>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={page === item ? 'active' : ''}
              onClick={() => setPage(item)}
            >
              {item === 'Dashboard' && '🏠 '}
              {item === 'Books' && '📖 '}
              {item === 'Members' && '👥 '}
              {item === 'Issue Books' && '📤 '}
              {item === 'Return Books' && '📥 '}
              {item === 'Transactions' && '📋 '}

              {item}
            </button>
          ))}
        </nav>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Dashboard */}
        {page === 'Dashboard' && (
          <div className="dashboard">

            <h1>Dashboard</h1>
            <p>Welcome to Library Management System</p>

            <div className="dashboard-cards">

              <div className="card">
                <h3>Total Books</h3>
                <h2>500</h2>
              </div>

              <div className="card">
                <h3>Total Members</h3>
                <h2>120</h2>
              </div>

              <div className="card">
                <h3>Issued Books</h3>
                <h2>80</h2>
              </div>

              <div className="card">
                <h3>Returned Books</h3>
                <h2>60</h2>
              </div>

            </div>

            <section className="table-section">
              <h2>Library Overview</h2>

              <p>
                Manage books, members, issue records and return records
                easily using this application.
              </p>
            </section>

          </div>
        )}

        {/* Books Page */}
        {page === 'Books' && <Books />}

        {/* Members Page */}
        {page === 'Members' && <Members />}

        {/* Issue Books Page */}
        {page === 'Issue Books' && <IssueBooks />}

        {/* Other Pages */}
        {page !== 'Dashboard' &&
          page !== 'Books' &&
          page !== 'Members' &&
          page !== 'Issue Books' && (
            <section className="table-section">
              <h1>{page}</h1>
              <p>This module will be developed next.</p>
            </section>
          )}

      </main>

    </div>
  )
}

export default App
