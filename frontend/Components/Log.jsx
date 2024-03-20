import { useState } from 'react';

const Log = () => {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [exportLocation, setExportLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/v1/query', {
      method: 'POST',
      body: JSON.stringify({
        name,
        phoneNo: mobileNo,
        product : productType,
        prodQuantity : Number(quantity),
        exportLocation,
        destinationLocation
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // Handle successful response

      //reset all values after submission of form
      setName('');
      setMobileNo('');
      setProductType('');
      setQuantity('');
      setExportLocation('');
      setDestinationLocation('');
    })
    .catch(error => console.error('Error:', error))
  }

  return (
    <>
      <div className="body" style={{ paddingTop: '20px', paddingBottom: '20px'}}>
        <div className="frm " style={{borderRadius: '10px' }}>
          <form onSubmit={handleSubmit}>
            <h1 className="h2 text-white mb-3 f-neue">Get your query solved</h1>

            <div className="form-floating pb-3 ">
              <input type="text" className="form-control" id="floatingInput" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating pb-3">
              <input type="" className="form-control" id="floatingInput" placeholder="Enter your number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
              <label htmlFor="floatingInput">Mobile No.</label>
            </div>
            <div className="form-floating pb-3">
              <input type="name" className="form-control" id="floatingInput" placeholder="" value={productType} onChange={(e) => setProductType(e.target.value)} />
              <label htmlFor="floatingInput">Product type</label>
            </div>
            <div className="form-floating pb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Product Quantity " value={quantity} onChange={(e) => setQuantity(e.target.value)} />
              <label htmlFor="floatingInput">Quantity</label>
            </div>
            <div className="form-floating pb-3">
              <input type="location" className="form-control" id="floatingInput" placeholder="export location" value={exportLocation} onChange={(e) => setExportLocation(e.target.value)} />
              <label htmlFor="floatingInput">Export Location</label>
            </div>
            <div className="form-floating pb-3">
              <input type="location" className="form-control" id="floatingInput" placeholder="destination location" value={destinationLocation} onChange={(e) => setDestinationLocation(e.target.value)} />
              <label htmlFor="floatingInput pb-3">Destination Location</label>
            </div>

            <button action="" className="btn btn-primary w-100 py-2" type="submit">SEND</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Log;