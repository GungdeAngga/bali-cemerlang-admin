import React from 'react'
import DataTable from '../dataTable/DataTablePromo'

export default function PromoTable() {
  const dataPromo = [
    { No: 1, JudulPromo: '50% Discount', IsiPromo: 'Flight Ticket to Singapore'},
    { No: 2, JudulPromo: 'Special Price', IsiPromo: 'Galungan Kuningan Day'},
    { No: 3, JudulPromo: '40% Off', IsiPromo: 'Ubud Tour'},
    { No: 4, JudulPromo: 'Family Package', IsiPromo: 'Special Price'},
    { No: 5, JudulPromo: '50% Discount', IsiPromo: 'Flight Ticket to Singapore'},
    { No: 6, JudulPromo: 'Special Price', IsiPromo: 'Galungan Kuningan Day'},
    { No: 7, JudulPromo: '40% Off', IsiPromo: 'Ubud Tour'},
    { No: 8, JudulPromo: 'Family Package', IsiPromo: 'Special Price'},
    { No: 9, JudulPromo: '50% Discount', IsiPromo: 'Flight Ticket to Singapore'},
    { No: 10, JudulPromo: 'Special Price', IsiPromo: 'Galungan Kuningan Day'},
    { No: 11, JudulPromo: '40% Off', IsiPromo: 'Ubud Tour'},
    { No: 12, JudulPromo: 'Family Package', IsiPromo: 'Special Price'},
    { No: 13, JudulPromo: '50% Discount', IsiPromo: 'Flight Ticket to Singapore'},
    { No: 14, JudulPromo: 'Special Price', IsiPromo: 'Galungan Kuningan Day'},
    { No: 15, JudulPromo: '40% Off', IsiPromo: 'Ubud Tour'},
    { No: 16, JudulPromo: 'Family Package', IsiPromo: 'Special Price'},
    // Add more data items as needed
  ];

  return (
    <div>
      <DataTable dataPromo={dataPromo} />
    </div>
  )
}
