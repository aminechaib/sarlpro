import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import BrandSlider from '../components/BrandSlider'
import FeatureCard from '../components/FeatureCard'
import { productCategories, features, companyInfo } from '../data/content'

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Nos Catégories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
              Explorez Notre Gamme
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Des pièces automobiles de qualité originale pour tous vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Pourquoi Nous Choisir
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
              Votre Satisfaction, Notre Priorité
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Depuis {companyInfo.established}, nous nous engageons à fournir les meilleures pièces automobiles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Votre Fournisseur de Pièces Automobiles Authentiques
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Contactez-nous dès aujourd’hui pour découvrir notre large gamme de pièces automobiles d’origine et devenir partenaire
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-10 py-4 bg-accent text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Nous Contacter
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/products"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 hover:bg-white hover:text-primary transition-colors"
              >
                Voir Les Produits
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Slider */}
      <BrandSlider />

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Venez Nous Visiter
            </h2>
            <p className="text-gray-500">{companyInfo.address}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
              src={companyInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SARL PRO Location"
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Home

