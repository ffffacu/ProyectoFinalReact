import React from 'react'

export const Footer = () => {
  return (
<div className="container">
  <footer className="py-5">
    <div clasNames="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
      <li className="ms-3"><i className="bi bi-facebook"></i></li>
      <li className="ms-3"><i className="bi bi-instagram"></i></li>
      <li className="ms-3"><i className="bi bi-whatsapp"></i></li>
      </ul>
    </div>
  </footer>
</div>

  )
}

