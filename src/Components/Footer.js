import React from 'react'

const Footer = () => {
  return (
    <div>
  <footer>
    <div className="l-footer">
      <div className="container d-flex">
        <div className="f-footer foot">
          <h2>ABOUT US</h2>
          <p>
            Lorem ipsum dolor sit, amet is a on consectetur adipisicing elit.
            Facere eum libero magni modi! Provident sapiente architecto nam?
            Saepe, is eveniet?
          </p>
        </div>
        <div className="s-footer foot">
          <h2>FEATURES</h2>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Press Releases</li>
            <li>Testimonials</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="t-footer">
          <h2>FOLLOW US</h2>
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook" /></a>
          <a href="https://twitter.com/i/flow/login" target="_blank"><i className="fa-brands fa-twitter" /></a>
          <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
          <a href="https://www.linkedin.com/" target="_blank">
            <i className="fa-brands fa-linkedin" /></a>
        </div>
      </div>
    </div>
  </footer>
</div>

  )
}

export default Footer
