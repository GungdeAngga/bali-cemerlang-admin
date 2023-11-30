import React, { useState } from 'react'

export default function DataTable() {
    const [rowsPerPage, setRowsPerPage] = useState(5); // Default number of rows per page
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setCurrentPage(1); // Reset to the first page when changing rows per page
    };

    const handleEdit = (No) => {
        // Implement edit functionality here using the item ID
        console.log(`Edit item with ID ${No}`);
    };

    const handleDelete = (No) => {
        // Implement delete functionality here using the item ID
        console.log(`Delete item with ID ${No}`);
    };

    const data = [
        { No: 1, Judul: 'Tour to Lempuyang Temple', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'diskon'},
        { No: 2, Judul: 'Tour to Nusa Penida', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'free voucher'},
        { No: 3, Judul: 'Tour to Ubud', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'promo'},
        { No: 4, Judul: 'Tour to Lempuyang Temple', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'diskon'},
        { No: 5, Judul: 'Tour to Nusa Penida', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'free voucher'},
        { No: 6, Judul: 'Tour to Ubud', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'promo'},
        { No: 7, Judul: 'Tour to Lempuyang Temple', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'diskon'},
        { No: 8, Judul: 'Tour to Nusa Penida', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'free voucher'},
        { No: 9, Judul: 'Tour to Ubud', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'promo'},
        { No: 10, Judul: 'Tour to Lempuyang Temple', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'diskon'},
        { No: 11, Judul: 'Tour to Nusa Penida', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'free voucher'},
        { No: 12, Judul: 'Tour to Ubud', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'promo'},
        { No: 13, Judul: 'Tour to Lempuyang Temple', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'diskon'},
        { No: 14, Judul: 'Tour to Nusa Penida', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'free voucher'},
        { No: 15, Judul: 'Tour to Ubud', Isi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Jenis:'promo'},
        // Add more data items as needed
      ];

      const sortedData = () => {
        const sorted = [...data];
        if (sortConfig.key !== null) {
          sorted.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
          });
        }
        return sorted;
      };
    

      const sortedAndPaginatedData = () => {
        const sorted = sortedData();
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return sorted.slice(startIndex, endIndex);
      };

      const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
          direction = 'desc';
        }
        setSortConfig({ key, direction });
      };
    
      const arrow = (key) => {
        if (sortConfig.key === key) {
          return sortConfig.direction === 'asc' ? '↑' : '↓';
        }
        return '';
      };

      const totalPageCount = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="overflow-x-auto pt-5">
        <button>

        </button>
      <table className="min-w-full table-auto bg-VividRed">
        <thead>
          <tr className='text-white'>
            <th className="border px-4 py-2" onClick={() => requestSort('No')}>No{arrow('No')}</th>
            <th className="border px-4 py-2" onClick={() => requestSort('Judul')}>Judul Offer{arrow('Judul')}</th>
            <th className="border px-4 py-2" onClick={() => requestSort('Isi')}>Isi Offer{arrow('Isi')}</th>
            <th className="border px-4 py-2" onClick={() => requestSort('Jenis')}>Jenis Offer{arrow('Jenis')}</th>
            <th className="border px-4 py-2" >Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
        {sortedAndPaginatedData().map((item, index) => (
            <tr key={item.No} className={index % 2 === 0 ? 'bg-white' : 'bg-red-100'}>
              <td className="border px-4 py-2">{item.No}</td>
              <td className="border px-4 py-2">{item.Judul}</td>
              <td className="border px-4 py-2">{item.Isi}</td>
              <td className="border px-4 py-2">{item.Jenis}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(item.id)} className="mr-2 bg-blue-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex flex-row'>
        <div className="">
        <label htmlFor="rowsPerPage" className="mr-2">
          Rows per page:
        </label>
        <select
          No="rowsPerPage"
          className="border rounded px-2 py-1"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          {/* Add more options for rows per page as needed */}
        </select>
        </div>
        <div className="">
            Page {currentPage} of {totalPageCount}
        </div>
      </div>
      
    </div>
  )
}
