import React from 'react'
import DataTable from '../dataTable/DataTableTiket';

export default function TiketTable() {
    const dataTiket = [
        { No: 1, Paket: 'Platinum Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 2, Paket: 'Gold Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 3, Paket: 'Silver Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 4, Paket: 'Platinum Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 5, Paket: 'Gold Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 6, Paket: 'Silver Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 7, Paket: 'Platinum Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 8, Paket: 'Gold Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 9, Paket: 'Silver Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 10, Paket: 'Platinum Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 11, Paket: 'Gold Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 12, Paket: 'Silver Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 13, Paket: 'Platinum Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 14, Paket: 'Gold Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        { No: 15, Paket: 'Silver Package', Destinasi: 'Nusa Lembongan', Tanggal:'30 Novemebr 2023', Keberangkatan:'18.00 WITA', Harga:'Rp. 500.000,00'},
        // Add more data items as needed
      ];

  return (
    <div>
        <DataTable dataTiket={dataTiket}/>
    </div>
  )
}
