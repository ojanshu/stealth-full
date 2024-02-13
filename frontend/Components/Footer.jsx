const Footer = () => {
  return <>
  <div className="foot">
    <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5   ">
    <div className="col mb-5">
      <a>
 <img src="https://wheelseye.com/fo/images/logo-darkbg.svg" alt="logo" className="logo"/>
      </a>
      <p className="text-body-secondary text-white-50">© 2023</p>
    </div>

    <div className="col mb-5">

    </div>

    <div className="col mb-5 ">
      <h4 className="texxx">ACCOUNT</h4>
      <ul className="nav flex-column ">
        <div className="tx">
        <li className="nav-item mb-2"><a href="#" className="nav-link text-black-100 ">Terms and Conditions for GPS</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link ">Privacy Policy</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link "></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link ">Cookie Policy</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link ">Help and Support</a></li>
        </div>
      </ul>
    </div>

    <div className="col mb-5">
      <h4 className="texxx">Menu</h4>
      <ul className="nav flex-column">
      <div className="tx">
        <li className="nav-item mb-2"><a href="#" className="nav-link ">About</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link ">Services</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link ">Contact</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link ">Careers</a></li>
        </div>
      </ul>
    </div>

    <div className="col mb-3">
      <h4 className="texxx">SOCIALS</h4>
      <ul className="nav flex-column">
      <div className="tx">
        <li className="nav-item mb-2"><a href="#" className="nav-link ">Facebook</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link ">LinkedIn</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link ">YouTube</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link ">Instagram</a></li>
        </div>
      </ul>
    </div>
  </footer>
</div>
<div className="fbot">

  
    <p className="text-center py-2">© Copyright <span className="wheel" ><a>WheelsEye </a></span> | All rights reserved.</p>
  

</div>
</div>
</>
};
export default Footer;