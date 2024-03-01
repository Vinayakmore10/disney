// import '../App.css';
import disney from '../Assets/Disney.png'

function Navigation() {
    return (
       
    
       <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
               
                <img src={disney} alt="" className='' width="100px" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                        </li>
                    </ul>
                    <form className="d-flex">
                    <li className="">
                        
                            <a className="nav-link active"  type="search" placeholder="search "href="#">Tv</a>
                        </li>
                        <li className="">
                            <a className="nav-link active" href="#">Movies</a>
                        </li>
                        <li className="">
                            <a className="nav-link active" href="#">Sports</a>
                        </li>
                        <li className="">
                            <a className="nav-link active" href="#">News</a>
                        </li>
                        <li className="">
                            <a className="nav-link active" href="#">Premium</a>
                        </li>
                        <li className="">
                            <a className="nav-link active" href="#">Disney+</a>
                        </li>
                    {/* <input className="form-control me-2" placeholder="TV"></input>
                    <input className="form-control me-2" placeholder="movies"></input>
                    <input className="form-control me-2" placeholder="Sports"></input>
                    <input className="form-control me-2" placeholder="News"></input>
                    <input className="form-control me-2" placeholder="Premium"></input>
                    <input className="form-control me-2" placeholder="Disney+"></input>
                    
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        {/* {
                            <input className="from-control me-2" type="search" placeholder='search' aria-label="search"/>} */}
                        {/* <button className="btn btn-outline-success" type="submit" placeholder="search" href="#">login</button> */}
                    </form> 
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
