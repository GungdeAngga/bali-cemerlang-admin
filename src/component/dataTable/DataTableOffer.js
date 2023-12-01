import React, { useState } from 'react'

export default function DataTable({dataOffer}) {
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


      const sortedData = () => {
        const sorted = [...dataOffer];
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

      const totalPageCount = Math.ceil(dataOffer.length / rowsPerPage);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      const getVisiblePageNumbers = () => {
        const visiblePageNumbers = [];
        const totalPages = totalPageCount;
        const maxVisiblePages = 1; // Change this value to show more or fewer pages around the current page
    
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = startPage + maxVisiblePages - 1;
    
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
    
        for (let i = startPage; i <= endPage; i++) {
          visiblePageNumbers.push(i);
        }
    
        return visiblePageNumbers;
      };

      const [selectedItem, setSelectedItem] = useState(null); //filter day tabel
      const [isMenuOpen, setMenuOpen] = useState(false);

      const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };

      const selectItem = (item) => {
        setSelectedItem(item);
        setMenuOpen(false);
      };
      
      const menuItems = ["Minggu lalu", "Bulan lalu", "tahun lalu"];

  return (
    <div className="overflow-x-auto pt-5">
        <div className='pb-4'>
        <button onClick={toggleMenu} className="rounded-3xl border-VividRed border-2 w-32 h-10 pl-2">
              <div class='flex'>
                <img src='./assets/clock.svg' alt='clock' className='pr-2'/>
                {selectedItem ? selectedItem : "hari ini"}
                <img src='./assets/upper.svg' alt='clock' className='pl-2'/>
              </div>
          </button>
          {isMenuOpen && (
            <div class="absolute pt-1">
              <ul className="p-2 w-32 bg-white border border-VividRed rounded-3xl">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      className="font-poppins block px-2 py-2 hover:bg-blue-200 w-full text-left"
                      onClick={() => selectItem(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
      <div className='flex flex-row justify-end pt-4'>
        <div className="flex items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src='./assets/Left.svg' alt='next' className='px-1'/>
        </button>
        {getVisiblePageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 rounded ${page === currentPage ? 'bg-gray-200 text-black' : 'bg-gray-200'}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPageCount}
        >
          <img src='./assets/Right.svg' alt='next' className='px-1'/>
        </button>
        Dari {totalPageCount} Halaman
        </div>
        <div className="pl-[375px]">
        <label htmlFor="rowsPerPage" className="mr-1">
          Menampilkan
        </label>
        <select
          No="rowsPerPage"
          className="border border-gray-600 rounded py-1"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          {/* Add more options for rows per page as needed */}
        </select>
        <label htmlFor="rowsPerPage" className="ml-1">
          item per halaman
        </label>
        </div>
      </div>
      
    </div>
  )
}