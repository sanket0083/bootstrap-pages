import React from 'react'

const Contact = () => {
  return (
   <div>
  <section className="second-section">
    <div className="second-content">
      <h2>CONTACT ME</h2>
    </div>
  </section>
  <div className="elevan-section">
    <div className="container d-flex">
      <div className="elevan-first elevan">
        <form>
          <input type="text" placeholder="first name" required />
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="password" required />
          <textarea name id cols={30} rows={10} placeholder="massage" defaultValue={""} />
          <button>
            <div className="btn">Buy Now</div>
          </button>
        </form>
      </div>
      <div className="elevan-second elevan">
        <h2>NEED TO KNOW MORE</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus enim
          iste est maxime corrupti minus dolorem velit! Suscipit asperiores ab
          veritatis ut numquam blanditiis, molestiae, vitae iusto veniam, non
          aliquam?
        </p>
        <button>
          <div className="btn">Buy Now</div>
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact
