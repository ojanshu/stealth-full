const Log = () => {

return(
  <>
  <div className="body" style={{ paddingTop: '20px', paddingBottom: '20px'}}>
 <div className="frm " style={{borderRadius: '10px' }}>
      <form>
        <h1 className="h2 text-white mb-3 f-neue">Get your query solved</h1>

        <div className="form-floating pb-3 ">
          <input type="text" className="form-control" id="floatingInput" placeholder="Enter your name" />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating pb-3">
          <input type="" className="form-control" id="floatingInput" placeholder="Enter your number" />
          <label for="floatingInput">Mobile No.</label>
        </div>
        <div className="form-floating pb-3">
          <input type="name" className="form-control" id="floatingInput" placeholder="" />
          <label for="floatingInput">Product type</label>
        </div>
        <div className="form-floating pb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="Product Quantity " />
          <label for="floatingInput">Quantity</label>
        </div>
        <div className="form-floating pb-3">
          <input type="location" className="form-control" id="floatingInput" placeholder="export location" />
          <label for="floatingInput">Export Location</label>
        </div>
        <div className="form-floating pb-3">
          <input type="location" className="form-control" id="floatingInput" placeholder="destination location" />
          <label for="floatingInput pb-3">Destination Location</label>
        </div>


        <button className="btn btn-primary w-100 py-2" type="submit">SEND</button>

      </form>
     
    </div>
    </div></>


)

}
export default Log;