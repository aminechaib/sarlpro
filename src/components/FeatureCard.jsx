import { motion } from 'framer-motion'
import { Award, Clock, Truck, Layers, ArrowRight } from 'lucide-react'

const iconMap = {
  award: Award,
  clock: Clock,
  truck: Truck,
  layers: Layers
}

const FeatureCard = ({ feature, index }) => {
  const Icon = iconMap[feature.icon] || Award

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ y: -10 }}
        className="group h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=600&q=80'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          
          {/* Icon Badge */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg"
          >
            <Icon className="w-7 h-7 text-primary" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            {feature.description}
          </p>
          
          {/* Learn More */}
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-accent font-semibold cursor-pointer"
          >
            <span>En savoir plus</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </motion.div>
    </motion.div>
  )
}

export default FeatureCard

