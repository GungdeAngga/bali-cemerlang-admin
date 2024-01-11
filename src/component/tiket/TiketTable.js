// import React, { useState,useEffect } from 'react'
import React from 'react';
import DataTable from '../dataTable/DataTableTiket';
// import axios from 'axios';
// import { baseApi } from '../../utility/API/API';

// function createData( nama_paket, destinasi, tanggal, jam_keberangkatan, harga ) {
//   return ( nama_paket, destinasi, tanggal, jam_keberangkatan, harga )
// }

export default function TiketTable() {
  // const [data, setData] = useState();
  
  // useEffect(() => {
  //   axios
  //     .get(baseApi + "package")
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const view = [
  //   createData(data),
  // ];
  

  return (
    <div>
        {/* <DataTable view={view}/> */}
        <DataTable/>
    </div>
  )
}
