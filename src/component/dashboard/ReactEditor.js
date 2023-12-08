import { Editor } from 'primereact/editor';
import React, { useState } from 'react'

export default function ReactEditor() {

    const [text, setText] = useState('');

    const handleTextChange = (e) => {
      setText(e.htmlValue);
    };

  return (
    <div className='pt-3'>
        <p className='text-4xl font-bold text-VividRed font-balooBhai pb-3'>Atur Halaman About Disini</p>
        <Editor style={{ height: '220px' }} value={text} onTextChange={handleTextChange} />
      <div className='pt-4'>
        <button className='bg-VividRed text-white w-[1500px] flex items-center justify-center h-14 rounded-xl'>Simpan <img src='./assets/arrow-right.svg' alt='simpan'></img></button>
      </div>
    </div>
  )
}
        