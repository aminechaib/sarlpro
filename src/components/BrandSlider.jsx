import { motion } from 'framer-motion'
import { brands } from '../data/content'

const BrandSlider = () => {
  // Duplicate brands for infinite scroll effect
  const allBrands = [...brands, ...brands, ...brands]

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Découvrez Nos Marques
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Nous collaborons avec les plus grandes marques mondiales pour vous garantir 
            des pièces de qualité supérieure
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Slider */}
        <div className="flex">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -100 * brands.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {allBrands.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="w-40 h-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-4">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-primary font-bold text-lg">${brand.name}</span>`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandSlider

