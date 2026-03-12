import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Disc, 
  Car, 
  Filter, 
  Settings, 
  Thermometer, 
  Zap,
  ArrowLeft,
  Grid,
  List
} from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { productCategories } from '../data/content'

const iconMap = {
  disc: Disc,
  car: Car,
  filter: Filter,
  settings: Settings,
  thermometer: Thermometer,
  zap: Zap
}

const Products = () => {
  const { category } = useParams()
  const [viewMode, setViewMode] = useState('grid')

  // Find the selected category
  const selectedCategory = category 
    ? productCategories.find(cat => cat.id === category)
    : null

  const currentCategory = selectedCategory || null

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80" 
            alt="Products"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-dark/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              {currentCategory ? 'Catégorie' : 'Notre Catalogue'}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              {currentCategory ? currentCategory.name : 'Tous Nos Produits'}
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              {currentCategory 
                ? currentCategory.description 
                : 'Des pièces automobiles de qualité originale pour tous vos besoins'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary transition-colors">Accueil</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-primary transition-colors">Produits</Link>
            {currentCategory && (
              <>
                <span className="text-gray-400">/</span>
                <span className="text-primary font-medium">{currentCategory.name}</span>
              </>
            )}
          </nav>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {currentCategory ? (
          /* Single Category View */
          <motion.section
            key="category-products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <Link 
                  to="/products"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Retour à toutes les catégories</span>
                </Link>
              </motion.div>

              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-12"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-dark rounded-3xl flex items-center justify-center shadow-lg">
                  {(() => {
                    const Icon = iconMap[currentCategory.icon] || Disc
                    return <Icon className="w-12 h-12 text-white" />
                  })()}
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">{currentCategory.name}</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">{currentCategory.description}</p>
              </motion.div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCategory.products.map((product, index) => (
                  <ProductCard key={product.name} product={product} index={index} />
                ))}
              </div>
            </div>
          </motion.section>
        ) : (
          /* All Categories View */
          <motion.section
            key="all-categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Choisissez une Catégorie
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                  Explorez notre large gamme de pièces automobiles organisées par catégorie
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productCategories.map((cat, index) => {
                  const Icon = iconMap[cat.icon] || Disc
                  return (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link to={`/products/${cat.id}`}>
                        <motion.div
                          whileHover={{ y: -10 }}
                          className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                          {/* Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="relative p-8">
                            {/* Icon */}
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-dark rounded-2xl flex items-center justify-center shadow-lg"
                            >
                              <Icon className="w-10 h-10 text-white" />
                            </motion.div>

                            <h3 className="text-2xl font-bold text-primary text-center mb-3 group-hover:text-accent transition-colors">
                              {cat.name}
                            </h3>
                            <p className="text-gray-500 text-center mb-4">
                              {cat.description}
                            </p>
                            {/* <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                              <span>{cat.products.length} produits</span>
                            </div> */}
                          </div>

                          <div className="h-2 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-white/80 mb-8">
              N'hésitez pas à nous contacter. Notre équipe est là pour vous aider à trouver la pièce qu'il vous faut.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg"
            >
              Nous Contacter
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Products

