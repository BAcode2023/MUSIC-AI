import { Link } from 'react-router-dom';
import './App.css'

function App() {
 return(
  <>
    <nav className="nav_bar">
      <img src="#" href="" alt="logo"/>
      <ul>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Log In</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </nav>
    <section className='Introduction'>
      <div>
        <h2>Generate your own Music With AI</h2>
        <h4>Enter Prompt</h4>
        <button className='Generate' type='submit'>Generate</button>
      </div>
    </section>
  
    <section className='Sample'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
    </section>

<div class="container">
    <img src="" alt="Image" class="image"/>
    <div>
        <p>Time to create</p>
    </div>
</div>

  </>
  )
}

export default App
