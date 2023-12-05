import React, { useState, useCallback } from "react"
import { useDropzone } from 'react-dropzone'

export default function AddOffer(props) {
  const [myFiles, setMyFiles] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles])
  }, [myFiles])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  })

  // const removeFile = file => () => {
  //   const newFiles = [...myFiles]
  //   newFiles.splice(newFiles.indexOf(file), 1)
  //   setMyFiles(newFiles)
  // }

  const removeAll = () => {
    setMyFiles([])
  }

  const files = myFiles.map(file => (
    <li key={file.path}>
      {file.path}
    </li>
  ))

  return (
    <div>
      <div className='pt-5'>
        <label className='font-bold text-xl'>Judul Offer<span className='text-VividRed'>*</span></label>
        <div className='pt-1'>
          <input type='text' placeholder='Judul Offer' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
        </div>
      </div>
      <div className='pt-5'>
        <label className='font-bold text-xl'>Isi Offer<span className='text-VividRed'>*</span></label>
        <div className='pt-1'>
          <input type='text' placeholder='Isi Offer' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
        </div>
      </div>
      <div className='pt-5'>
        <label className='font-bold text-xl'>Jenis Offer<span className='text-VividRed'>*</span></label>
        <div className='pt-1'>
          <input type='text' placeholder='jenis Offer' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
        </div>
      </div>
      <div className='pt-5'>
        <label className='font-bold text-xl'>Foto Offer<span className='text-VividRed'>*</span></label>
        <div className='flex flex-row border-2 border-gray-400 rounded-lg h-9 py-4 px-2 items-center'>
          <div {...getRootProps({ className: "w-[740px] flex justify-center border-2 border-VividRed border-dashed rounded-lg" })}>
            <input {...getInputProps()} />
            <div className='flex'>
              <img src='./assets/upload.svg' alt='upload' className='pr-2'/><span>Browse Files to upload</span>
            </div>
          </div>

          <div className='w-[740px] pl-3'>
            <div className='bg-red-200 pl-2 flex rounded-md h-6'>
              <img src='./assets/imgUpload.svg' alt='img upload'/>
                <div className="absolute right-12 pt-[2px]">
                  <button onClick={removeAll} className="flex items-center">{files}<img src="./assets/deleteImg.svg" alt="delete img" className="h-5"/></button>
                </div>
            </div>
          </div>

        </div>
      </div>
      <div className='pt-10'>
        <button className='bg-VividRed text-white w-[1500px] flex items-center justify-center h-10 rounded-xl'>Tambah <img src='./assets/arrow-right.svg' alt='simpan'></img></button>
      </div>
    </div>
  )
}
