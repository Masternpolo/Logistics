import React from 'react'
import Logo from '../assets/Logo.png'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mx-auto">
    <div class="container">
      <a class="navbar-brand" href="#"><img src={Logo} alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Service">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Tracking">Tracking</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Contact">Contact</a>
          </li>
        </ul>
      <a href="" className="btn btn-danger">Request Qoute</a>

      </div>
    </div>
  </nav>

  )
}

export default Header