import { useState } from 'react';
import './qrcode.css'

const QrCode = () => {
  const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
  const [name, setName] = useState('')
  const [src, SetSrc] = useState('')
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () =>{
    SetSrc(url + name)
  }
  return (
    <div className="qrcode">
      <form>
        <div className="qrcode__name">
            <label htmlFor="name">Enter text or URL</label>
            <input type="text" name="name" id="name"onChange={handleChange}/>
        </div>
        <div className="qrcode__img">
            <img src={src} />
        </div>
        <button type="button" onClick={handleClick}>Generate QR Code</button>
      </form>
    </div>
  )
}

export default QrCode
