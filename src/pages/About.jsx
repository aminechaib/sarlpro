import { motion } from 'framer-motion'
import { Award, Clock, Users, Truck, MapPin, Phone, Mail } from 'lucide-react'
import { companyInfo } from '../data/content'

const About = () => {
  const stats = [
{ icon: Clock, number: "50+", label: "Années d'expérience", color: "bg-blue-500" },
{ icon: Users, number: "10K+", label: "Clients satisfaits", color: "bg-green-500" },
{ icon: Award, number: "1000+", label: "Produits", color: "bg-purple-500" },
{ icon: Truck, number: "24/7", label: "Support", color: "bg-orange-500" }
  ]

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1920&q=80" 
            alt="About SARL PRO"
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
              Qui Sommes-Nous
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
              À Propos de SARL PRO
            </h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              Votre partenaire de confiance pour les pièces automobiles de qualité 
              originale depuis {companyInfo.established}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=800&q=80"
                  alt="SARL PRO - Pièces automobiles"
                  className="relative rounded-3xl shadow-2xl"
                />
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent">1967</div>
                    <div className="text-gray-500 text-sm">Established</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                Notre Histoire
              </span>
              <h2 className="text-4xl font-bold text-primary mt-4 mb-6">
                {companyInfo.fullName}
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-primary">SARL PRO</strong> est votre destination ultime pour toutes les pièces de rechange automobiles. 
                  Implantés à Alger depuis 1967, nous avons su nous imposer comme des pionniers dans le secteur.
                </p>
                <p>
                  Notre engagement envers la qualité et notre relation client 
                  distinguent de la concurrence. Nous proposons une large gamme de pièces originales, 
                  soigneusement sélectionnées et provient des marques mondialement reconnues.
                </p>
                <p>
                  Que vous soyez un professionnel ou un passionné, nous avons ce qu'il vous faut 
                  pour faire rugir votre moteur !
                </p>
                <p>
                  Chez <strong>SARL PRO</strong>, nous croyons que chaque client mérite le meilleur. 
                  C'est pourquoi notre équipe dévouée est toujours prête à vous aider à trouver la pièce parfaite.
                </p>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-10"
              >
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg"
                >
                  Rejoignez Notre Famille
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} rounded-2xl flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Nos Avantages
            </span>
            <h2 className="text-4xl font-bold text-primary mt-4 mb-6">
              Pourquoi Nous Choisir ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualité Garantie",
                description: "Toutes nos pièces sont originales et proviennent de marques reconnues mondialement",
                icon: Award
              },
              {
                title: "Expertise Professionnelle",
                description: "Plus de 50 ans d'expérience dans le domaine automobile",
                icon: Clock
              },
              {
                title: "Service Client",
                description: "Une équipe dédiée toujours prête à vous aider et vous conseiller",
                icon: Users
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary rounded-3xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-8">Notre Adresse</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-white/80">{companyInfo.address}</p>
              </div>
              
              <div className="mt-8 space-y-4">
                {companyInfo.phones.map((phone, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-accent" />
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-white/80 hover:text-white">
                      {phone}
                    </a>
                  </div>
                ))}
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href={`mailto:${companyInfo.email}`} className="text-white/80 hover:text-white">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-full min-h-[300px] rounded-3xl overflow-hidden shadow-xl"
            >
              <iframe
                src={companyInfo.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SARL PRO Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About

