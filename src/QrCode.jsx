import './qrcode.css'

const QrCode = () => {
  return (
    <div className="qrcode">
      <form>
        <div className="qrcode__name">
            <label htmlFor="name">Enter text or URL</label>
            <input type="text" name="name" id="name" />
        </div>
        <div className="qrcode__img">
            <img src="" />
        </div>
        <button type="button">Generate QR Code</button>
      </form>
    </div>
  )
}

export default QrCode
