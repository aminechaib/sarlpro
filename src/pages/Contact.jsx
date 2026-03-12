import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle, Navigation2 } from 'lucide-react'
import { companyInfo } from '../data/content'
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const phones = companyInfo.phones;
  const socialLinks = [
    { icon: Facebook, name: "Facebook", link: companyInfo.social.facebook },
    { icon: FaTiktok, name: "TikTok", link: companyInfo.social.tiktok },
    { icon: Instagram, name: "Instagram", link: companyInfo.social.instagram },
  ];

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    // Toast or alert could be added
    console.log(`${label} copied!`);
  };

  return (
    <main>
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
            alt="Contact"
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
              Contactez-nous directement
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              Nos Coordonnées
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Appelez-nous, envoyez-nous un WhatsApp ou visitez-nous
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* CTA Buttons - Better than form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-accent to-red-600 rounded-3xl p-10 text-white shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="w-8 h-8" />
                  Appelez-nous dès maintenant
                </h2>
                <div className="space-y-4">
                  {phones.map((phone, index) => (
                    <motion.a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      whileHover={{ scale: 1.05 }}
                      className="block w-full p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-2xl font-bold text-center hover:bg-white/20 transition-all"
                    >
                      {phone}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a
                  href={`https://wa.me/213661900400`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-6 bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-lg"
                >
                  <FaWhatsapp className="w-8 h-8" />
                  WhatsApp Commercial
                </motion.a>

                <motion.a
                  href={`mailto:${companyInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-6 bg-primary hover:bg-primary-dark text-white rounded-2xl shadow-lg"
                >
                  <Mail className="w-8 h-8" />
                  Envoyer Email
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-gray-50 rounded-3xl"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">Horaires</h3>
                <p className="text-xl">Lun - Sam: 8h00 - 17h00</p>
              </motion.div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <MapPin className="w-7 h-7" />
                  Notre Adresse
                </h3>
                <p className="text-gray-600 mb-4">{companyInfo.address}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => copyToClipboard(companyInfo.address, 'Address')}
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl hover:bg-red-600 transition-colors"
                >
                  <Navigation2 className="w-5 h-5" />
                  Ouvrir Google Maps
                </motion.button>
              </div>

              <div className="bg-primary rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Suivez-nous sur les réseaux</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all"
                    >
                      <social.icon className="w-8 h-8" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Large Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-24 p-4 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-3xl shadow-xl"
          >
            <iframe
              src={companyInfo.mapEmbed}
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SARL PRO Location"
              className="w-full h-[500px] rounded-3xl"
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Contact

