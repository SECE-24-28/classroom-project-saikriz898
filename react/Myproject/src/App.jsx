import './App.css'

function App() {
  return (
    <>
        <form action="">
      <label for="name">Name:</label>
      <input type="text" id="name" />

      <label for="email">Email</label>
      <input type="email" id="email" />

      <button type="submit">Submit</button>
    </form>
        <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>
    <a href="https://www.google.com/" target="_blank">Google</a> <img
      src="https://sece.ac.in/wp-content/uploads/2024/06/research-institute-intro-banner-1.jpg"
      alt="Google"
    />
    <table>
      <th>
        <tr>
          Name
        </tr>
        <tr>
          Address
        </tr>
      </th>
    </table>
        <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th colspan="3">Name</th>
        <th>Address</th>
      </tr>
      <tr>
        <td>Sai</td>
        <td>Ram</td>
        <td>dsjndsnkdssdkmkm</td>
      </tr>
    </table>
        <h1>Table</h1>
    <table border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>First Name</th>
        <th>Second Name</th>
        <th>Mobile</th>
      </tr>
      <tr>
        <td>Sai</td>
        <td>Ram</td>
        <td>983832923923923</td>
      </tr>
    </table>
        <h1 class="heading__style">Hello world</h1>
    <div class="rectangle"></div>
    </>
  )
}

export default App
