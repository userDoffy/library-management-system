import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="display-4 fw-bold text-primary">Welcome to the Library System</h1>
          <p className="lead text-secondary mt-3">
            Our Library Management System helps you manage books, transactions, and users effortlessly.
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <h3 className="fw-bold text-success">Browse Books</h3>
            <p className="text-muted">
              Explore a vast collection of books across multiple genres. Discover new reads and classics alike.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="fw-bold text-success">Easy Transactions</h3>
            <p className="text-muted">
              Borrow and return books with ease. Stay updated with due dates and avoid late fees.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="fw-bold text-success">Admin Features</h3>
            <p className="text-muted">
              Administrators can manage books, users, and transactions to ensure smooth library operations.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
