import React, { useState } from 'react';

// Sample data to simulate API fetching
const assignmentsData = [
  { id: 1, summary: "450 min for the assignment. There is part two for the two responses.", price: "$45.00", dueDate: "15/11/2023", bids: 41 },
  // ... other assignment objects
];

const BrowseTasks = () => {
  // State for handling search and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Logic to filter data based on search term
  const filteredData = assignmentsData.filter(row =>
    row.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic for data slicing based on pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Pagination change
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Make Money by Helping with Homework</h1>
      <input
        type="text"
        placeholder="Keyword & Hit Enter"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Price</th>
            <th>Due Date</th>
            <th>Bids</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map(row => (
            <tr key={row.id}>
              <td>{row.summary}</td>
              <td>{row.price}</td>
              <td>{row.dueDate}</td>
              <td>{row.bids}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div>
        {Array.from({ length: Math.ceil(filteredData.length / rowsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
