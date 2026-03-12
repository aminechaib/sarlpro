// Website content extracted from old site

export const companyInfo = {
    name: "SARL PRO",
    fullName: "SARL PRO - Pièces de Rechange Originales",
    tagline: "Importateur et Distributeur de pièces auto en Algérie",
    description: "SARL PRO est votre destination ultime pour toutes les pièces de rechange automobiles. Implantés à Alger depuis 1967, nous avons su nous imposer comme des pionniers dans le secteur. Notre client pour l'automobile et notre engagement envers la qualité nous distinguent de la concurrence.",
    established: 1967,
    address: "Cité Ouled Faraha (Ancien chemin Vicinal N°6), Eucalytus 16057 Alger",
    phones: [
        "+213 661 90 04 00",
        "+213 661 30 74 07",
        "+213 560 06 02 63"
    ],
    email: "commerce@sarlpro.com",
    social: {
        facebook: "https://www.facebook.com/profile.php?id=100075842000986&mibextid=ZbWKwL",
        tiktok: "https://www.tiktok.com/@sarlpro?_t=8rgrYIZ6Y80&_r=1",
        instagram: "https://www.instagram.com/sarl_pro?igsh=N3NkbzdwaDAxdXh2"
    },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6399.324241820027!2d3.159880500000005!3d36.6826241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5393e49d18df%3A0x4df6a66387f2c5ec!2sSARL%20PRO!5e0!3m2!1sfr!2sdz!4v1727948198229!5m2!1sfr!2sdz"
}

export const navigation = [
    { name: "ACCUEIL", path: "/" },
    { name: "A PROPOS", path: "/about" },
    { name: "PRODUITS", path: "/products" },
    { name: "CONTACT", path: "/contact" }
]

export const heroSlides = [
    {
        title: "Découvrez la SARL PRO",
        image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1920&q=80",
        subtitle: "Votre partenaire de confiance pour les pièces automobiles de qualité"
    },
    {
        title: "Importateur et Distributeur de pièces auto en Algérie",
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1920&q=80",
        subtitle: "Les meilleures marques mondiales à votre service"
    },
    {
        title: "Découvrez notre gamme",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80",
        subtitle: "Des produits originaux pour tous types de véhicules"
    }
]

export const productCategories = [
    {
        id: "freinage",
        name: "Freinage",
        icon: "disc",
        description: "Disques, tambours, plaquettes et mâchoires de frein",
        products: [
            { name: "Disque de frein", image: "/old-site/ourproducts/ssqd.webp" },
            { name: "Tambour de frein", image: "/old-site/ourproducts/tambour.webp" },
            { name: "Plaquettes de frein", image: "/old-site/ourproducts/plaquette.webp" },
            { name: "Mâchoires de frein", image: "/old-site/ourproducts/ferodo.webp" },
            { name: "Moyeu de roue", image: "/old-site/ourproducts/moyeau.webp" },
            { name: "Maître-cylindre de frein", image: "/old-site/ourproducts/pompe fr.webp" }
        ]
    },
    {
        id: "suspension",
        name: "Suspension",
        icon: "car",
        description: "Amortisseurs, triangles, rotules et crémaillères",
        products: [
            { name: "Amortisseur Avant", image: "/old-site/ourproducts/suspension.webp" },
            { name: "Amortisseur Arrière", image: "/old-site/ourproducts/c1204e247956c56b071eccf26c2828f494bcc6d7.webp" },
            { name: "Rotule", image: "/old-site/ourproducts/9fc76f4b52249447d1ee140173e9c2b78adea10b.webp" },
            { name: "Triangle", image: "/old-site/ourproducts/9bbebbec68ec3523d8bf86fd9fed5a35d092bb8f.webp" },
            { name: "Bielle Suspension", image: "/old-site/ourproducts/5ba6ea3a04e34c1ef874fef9118f2472db11d471.webp" },
            { name: "Crémaillère de direction", image: "/old-site/ourproducts/crem.webp" }
        ]
    },
    {
        id: "filtration",
        name: "Filtration",
        icon: "filter",
        description: "Filtres à air, huile, carburant et climatisation",
        products: [
            { name: "Filtre à Air", image: "/old-site/ourproducts/4d32142a2343c8cd653fc4072053fedf7c535045.webp" },
            { name: "Filtre à Huile", image: "/old-site/ourproducts/3e5c6a96662475aef9606560b7d7337fe8333a81.webp" },
            { name: "Filtre Essence", image: "/old-site/ourproducts/dbe1870199dad0cdc6445ccd5efb25a9ce6fd204.webp" },
            { name: "Filtre Gasoil", image: "/old-site/ourproducts/f gasoil.webp" },
            { name: "Filtre Clim", image: "/old-site/ourproducts/filtre clim.webp" },
            { name: "Filtre hydraulique", image: "/old-site/ourproducts/f boit.webp" }
        ]
    },
    {
        id: "embrayage",
        name: "Embrayage",
        icon: "settings",
        description: "Kits d'embrayage, volants moteur et cylindres",
        products: [
            { name: "Kit d'embrayage", image: "/old-site/ourproducts/42ffb68e86519f0301917b0c0b19cd3c821989bd.webp" },
            { name: "Volant Moteur", image: "/old-site/ourproducts/921c57a43b2b8710dde67206f6abd3ab013a4f3e.webp" },
            { name: "Cylindre Récepteur Embrayage", image: "/old-site/ourproducts/9c41e519e6c994bb960c047b13f55357b554cc1a.webp" },
            { name: "Cylindre Emetteur Embrayage", image: "/old-site/ourproducts/c7da3c6ac776217c0df5de12eef078f4d6b9621d.webp" },
            { name: "Fourchette Embrayage", image: "/old-site/ourproducts/d11b071e7afa6848598a0c6996e332a1778a992b.webp" },
            { name: "Butée hydraulique", image: "/old-site/ourproducts/015fa6fe461bdbc5a1ec4e1dd40b0b385126e1c5.webp" }
        ]
    },
    {
        id: "refroidissement",
        name: "Refroidissement",
        icon: "thermometer",
        description: "Radiateurs, durites, pompes à eau et ventilateurs",
        products: [
            { name: "Radiateur", image: "/old-site/ourproducts/9d991b7b9e4455747650b8a0fdc20833cc130dd4.webp" },
            { name: "Durite", image: "/old-site/ourproducts/b0b462ff7d90a37827c12607e6c449a7bf1f38c1.webp" },
            { name: "Bride de liquide refroidissement", image: "/old-site/ourproducts/2ae407eb3cd6b338e4e2ed466b2a233dd37c7a2f.webp" },
            { name: "Ventilateur Refroidissement", image: "/old-site/ourproducts/c28f3b0669b7921f7e530a61029f826544ef92b9.webp" },
            { name: "Pompe à Eau", image: "/old-site/ourproducts/f6e0fe7453eac594363808e7c60b21837f953506.webp" },
            { name: "Vase d'eau", image: "/old-site/ourproducts/936b215b1babb16c706f60d6323b18f0ec791146.webp" }
        ]
    },
    {
        id: "pieces-moteur",
        name: "Pièces Moteur",
        icon: "zap",
        description: "Bobines, démarreurs, pompes à carburant et pistons",
        products: [
            { name: "Bobine", image: "/old-site/ourproducts/dfc4c634b6149daa42ae4a0eb541eed25a144be7.webp" },
            { name: "Bougie", image: "/old-site/ourproducts/9bb80c7441400dc9ceaf379918fa04ff2bd6c630.webp" },
            { name: "Piston", image: "/old-site/ourproducts/51drqvCbtZL._AC_SL1500_.webp" },
            { name: "Corps papillon", image: "/old-site/ourproducts/40680214093ea3debaff298854a9ee232be29a19.webp" },
            { name: "Démarreur", image: "/old-site/ourproducts/396971af9f31af708063377bcfb2c0cd5cf16db2.webp" },
            { name: "Pompe Carburant", image: "/old-site/ourproducts/070278f2a6010c8b5948fd5ee8f0c03a6f2aac23.webp" }
        ]
    }
]

export const brands = [
    { name: "CAUTEX", image: "/old-site/notre marque/CAUTEX.svg" },
    { name: "FISPA", image: "/old-site/notre marque/FISPA.webp" },
    { name: "GRAF", image: "/old-site/notre marque/graf.svg" },
    { name: "MEAT & DORIA", image: "/old-site/notre marque/MEAT&DORIA.webp" },
    { name: "METELLI", image: "/old-site/notre marque/metelli.webp" },
    { name: "MEYLE", image: "/old-site/notre marque/meyle.svg" },
    { name: "HOFFER", image: "/old-site/notre marque/Hoffer-Products - Since 1999.webp" },
    { name: "MOTRIO", image: "/old-site/notre marque/motrio.svg" }
]

export const features = [
    {
        title: "Produits Originaux",
        description: "Découvrez notre sélection de produits originaux par les marques mondiales",
        icon: "award",
        image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Expertise depuis 1967",
        description: "Plus de 50 ans d'expérience dans la distribution de pièces automobiles",
        icon: "clock",
        image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Livraison Disponible",
        description: "Profitez de notre service de livraison pour recevoir vos produits directement",
        icon: "truck",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Large Gamme",
        description: "Des milliers de pièces pour tous types de véhicules",
        icon: "layers",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80"
    }
]

