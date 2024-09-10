import './App.css'
import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/products'
import Filters from './components/filter'
import Cart from './components/cart'
import { CartProvider } from './contexts/CartContext'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === 'all' || product.category === filters.category) &&
        (filters.price === 0 || product.price >= filters.price)
      )
    })
  }

  return (
    <CartProvider>
      <h1>Shoping Cart</h1>
      <Cart />
      <Filters filters={filters} changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
    </CartProvider>
  )
}

export default App