import { useEffect, useMemo, useState } from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import FilterPanel from './components/FilterPanel'
import ProductGrid from './components/ProductGrid'
import CartSummary from './components/CartSummary'
import { useCart } from './hooks/useCart'

function App() {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const cart = useCart()

  useEffect(() => {
    let mounted = true
    fetch('/products.json')
      .then(r => r.json())
      .then(data => {
        if (!mounted) return
        setProducts(data)
      })
      .catch(() => {
        // fallback empty
        if (mounted) setProducts([])
      })
    return () => (mounted = false)
  }, [])

  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.category))
    return ['All', ...Array.from(set)]
  }, [products])

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory) return false
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [products, activeCategory, search])

  return (
    <Layout>
      <div className="space-y-4">
        <Header />

        <div className="lg:grid lg:grid-cols-[260px_1fr_320px] lg:gap-6">
          <div className="mb-4 lg:mb-0">
            <FilterPanel categories={categories} active={activeCategory} setActive={setActiveCategory} search={search} setSearch={setSearch} />
          </div>

          <div className="mb-4 lg:mb-0">
            <ProductGrid products={filtered} onAdd={cart.add} />
          </div>

          <div className="mb-4 lg:mb-0">
            <CartSummary cart={cart} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
