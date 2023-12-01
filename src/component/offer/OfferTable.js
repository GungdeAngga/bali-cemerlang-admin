import React from 'react'
import DataTable from '../dataTable/DataTableOffer'

export default function OfferTable() {
  const dataOffer = [
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

  return (
    <div>
      <DataTable dataOffer={dataOffer} />
    </div>
  )
}
