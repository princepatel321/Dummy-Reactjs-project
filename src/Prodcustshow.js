import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Prodcustshow() {
  var { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])
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
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <h1>Show</h1>
      <div className="container" >
        <div className="row product" >


          <>

            <div class=" col-md-4 g-4">
              <div class="col">
                <div class="card h-100">
                  <img src={data.thumbnail} class="card-img-top" height={150} width={100} />
                  <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <h3 class="card-title">${data.price}</h3>
                    <p class="card-text">{data.description}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary" classname="btn btn-primary">Catgory</small>
                  </div>
                </div>
              </div>
            </div>

          </>

        </div>
      </div>

    </>
  );
}

export default Prodcustshow;