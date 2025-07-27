<h1><span class="emoji">🛍️</span> W-Bozone ECom Marketplace (React + DummyJSON API)</h1>
<p>A modern e-commerce frontend built with React, Zustand, and TanStack Query, powered by <a href="https://dummyjson.com/">DummyJSON</a> API. This project mimics core marketplace functionality with product listings, cart management, and user authentication.</p>   
<h2><span class="emoji">✨</span> Features</h2>
<ul>
    <li><strong>Product Catalog</strong> with search and filtering</li>
    <li><strong>Shopping Cart</strong> with persistent storage (React Cookies)</li>
    <li><strong>User Authentication</strong> flow (login/profile)</li>
    <li><strong>Order History</strong> tracking</li>
    <li><strong>Responsive Design</strong> for all devices</li>
    <li><strong>State Management</strong> with Zustand</li>
    <li><strong>Data Fetching</strong> with React Query</li>
    <li><strong>Modern UI</strong> with React Icons, self-made UI kit and SASS</li>
</ul>
<h2><span class="emoji">🛠</span> Tech Stack</h2> 
<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Technologies</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Core</td>
            <td>React 19, React Router 7</td>
        </tr>
        <tr>
            <td>State</td>
            <td>Zustand, React Cookies</td>
        </tr>
        <tr>
            <td>Data</td>
            <td>Axios, TanStack Query 5</td>
        </tr>
        <tr>
            <td>Styling</td>
            <td>SASS, React Icons</td>
        </tr>
        <tr>
            <td>Utilities</td>
            <td>date-fns, UUID</td>
        </tr>
        <tr>
            <td>API</td>
            <td>DummyJSON (mock backend)</td>
        </tr>
    </tbody>
</table>
<h2><span class="emoji">🚀</span> Quick Start</h2> 
<h3>Prerequisites</h3>
<ul>
    <li>Node.js 18+</li>
    <li>npm 9+ or yarn 1.22+</li>
</ul>
<h3>Installation</h3>
<pre>
  <code>
    
    # Clone the repository
    git clone https://github.com/MSLadanov/ecommerce-project.git
    cd w-bozone

    # Install dependencies
    npm install
    # or
    yarn install

    # Start development server
    npm run dev
    # or
    yarn dev
  </code>
</pre>    
<h2><span class="emoji">🌐</span> API Integration</h2>  
<p>The app uses these DummyJSON endpoints:</p>   
<pre><code>{
  products: '/products',
  search: '/products/search?q=',
  categories: '/products/categories',
  auth: '/auth/login',
  user: '/users/',
  carts: '/carts/user/'
}</code></pre>    
<p>Made with <span class="emoji">❤️</span> and React. Enjoy your shopping experience! <span class="emoji">🛒</span></p>
