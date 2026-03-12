import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Disc, 
  Car, 
  Filter, 
  Settings, 
  Thermometer, 
  Zap,
  ArrowRight
} from 'lucide-react'

const iconMap = {
  disc: Disc,
  car: Car,
  filter: Filter,
  settings: Settings,
  thermometer: Thermometer,
  zap: Zap
}

const CategoryCard = ({ category, index }) => {
  const Icon = iconMap[category.icon] || Disc
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={`/products/${category.id}`}>
        <motion.div
          whileHover={{ y: -8 }}
          className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="relative p-8">
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-shadow duration-500"
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-primary text-center mb-3 group-hover:text-accent transition-colors duration-300">
              {category.name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-center mb-6 leading-relaxed">
              {category.description}
            </p>

            {/* Products Count */}
            {/* <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
              <span>{category.products.length} produits</span>
            </div> */}

            {/* CTA */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center justify-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors duration-300"
            >
              <span>Découvrir</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Bottom Accent */}
          <div className="h-2 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default CategoryCard

