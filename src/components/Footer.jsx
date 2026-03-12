import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Wrench } from 'lucide-react'
import { companyInfo, navigation } from '../data/content'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Logo container with subtle shadow */}
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 shadow-lg shadow-black/10 border border-white/50">
                  <img 
                    src="/LOGO PRO.svg" 
                    alt="SARL PRO" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </motion.div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Votre partenaire de confiance pour les pièces automobiles de qualité 
              originale depuis 1967 en Algérie.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors duration-300"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href={companyInfo.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent transition-colors duration-300"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-6">Nos Produits</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products/freinage" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Freinage
                </Link>
              </li>
              <li>
                <Link to="/products/suspension" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Suspension
                </Link>
              </li>
              <li>
                <Link to="/products/filtration" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Filtration
                </Link>
              </li>
              <li>
                <Link to="/products/embrayage" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Embrayage
                </Link>
              </li>
              <li>
                <Link to="/products/refroidissement" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Refroidissement
                </Link>
              </li>
              <li>
                <Link to="/products/pieces-moteur" className="text-white/70 hover:text-accent transition-colors duration-300">
                  Pièces Moteur
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-6">Contactez-Nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{companyInfo.address}</span>
              </li>
              {companyInfo.phones.map((phone, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a 
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-white/70 hover:text-accent transition-colors duration-300"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-white/70 hover:text-accent transition-colors duration-300"
                >
                  {companyInfo.email}
                </a>
              </li>
                 <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email1}`}
                  className="text-white/70 hover:text-accent transition-colors duration-300"
                >
                  {companyInfo.email1}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} SARL PRO - Tous droits réservés
            </p>
<p className="text-white/40 text-xs mt-2 md:mt-0">
  Made with passion in Algeria • Built by AC
</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

