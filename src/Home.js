import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);


  useEffect(() => {
    axios.get("https://dummyjson.com/products/search?q= id")
      .then(res => {
        console.log(res.data.products);
        setData(res.data.products)
      })


  }, [])
  function SearchData() {
    axios.get(`https://dummyjson.com/products/search?q=${search}`)
      .then((response) => {
        setData(response.data.products);
      });
  }
  return (

    <>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/Home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Produstshow">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <center class="d-flex">
              <input type="text" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} />
              <button onClick={SearchData} className="btn btn-primary"> Search </button>
            </center>
          </div>
        </div>
      </nav>

      <h1>Home Page</h1>

      <div className="container" >
        <div className="row product" >

          {data.map((v, i) => {
            var nextpage = `/prodcustshow/${v.id}`;


            return (

              <div class=" col-md-4 g-4" key={i}>
                <div class="col">
                  <div class="card h-100">
                    <img src={v.images} class="card-img-top" height={150} width={100} />
                    <div class="card-body">
                      <h5 class="card-title">{v.title}</h5>
                      <h3 class="card-title">$.{v.price}</h3>
                      <p class="card-text">{v.description}</p>
                    </div>
                    <div class="card-footer">
                      <small class="text-body-secondary" classname="btn btn-primary"><Link to={nextpage} className='button'>Viwe products</Link></small>
                    </div>
                  </div>
                </div>
              </div>


            )
          })}
        </div>
      </div>

    </>
  );
}

export default Home;