
const Navbar = () => {

  return(
   <div className=" nava">
    <nav className="navbar">
 <img src="https://www.pngfind.com/pngs/b/678-6782955_pokemon-xyz-logo-hd-png-download.png" alt="logo" className="logo" style={{width: '200px', height: '100px', marginBottom: '2px', paddingTop: '2px'}}/>
 <link href="https://fonts.googleapis.com/css?family=Arvo&display=swap" rel="stylesheet"/>

<nav role="navigation" className="primary-navigation">
  <ul>
    <li><a href="#">ABOUT
      </a></li>
      <li><a href="#">BUY FASTAG
      </a></li>
      <li><a href="#">BUY GPS
      </a></li>
    <li><a href="#">BOOK TRUCK<i className="bi bi-caret-down-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></a>
      <ul className="dropdown">
        <li><a href="#">GWALIOR TRANSPORT SERVICES</a></li>
        <li><a href="#">DELHI TRANSPORT SERVICES</a></li>
        <li><a href="#">NOIDA TRANSPORT SERVICES</a></li>
        <li><a href="#">KANPUR TRANSPORT SERVICES</a></li>
      </ul>
    </li>
    <li><a href="#">ROUTES<i className="bi bi-caret-down-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></a>
      <ul className="dropdown">
        <li><a href="#">GWALIOR TO KANPUR TRANSPORT</a></li><br />
        <li><a href="#">GWALIOR TO MUMBAI TRANSPORT</a></li>
        <li><a href="#">GWALIOR TO DELHI TRANSPORT</a></li>
        <li><a href="#">GWALIOR TO JAIPUR TRANSPORT</a></li>
        <li><a href="#">GWALIOR TO HYDERABAD TRANSPORT</a></li>
      </ul>
    </li>
    <button className="btn"><a>I'm a business</a></button>
  </ul>
</nav>
 
</nav>

</div>


  )
}
export default Navbar;
