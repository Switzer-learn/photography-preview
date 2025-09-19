import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Globe, Star, Users, MapPin, Award } from 'lucide-react';

const TrustStrip = () => {
  const trustItems = [
    {
      icon: Camera,
      stat: '2,000+',
      label: 'stories captured worldwide',
      color: '#CFAE70'
    },
    {
      icon: MapPin,
      stat: 'Bali • Bandung • International',
      label: 'Serving couples globally',
  color: '#dc2626' // rose-600
    },
    {
      icon: Star,
      stat: '5-star',
      label: 'reviews from couples and families',
  color: '#f59e0b' // amber-500
    },
    {
      icon: Users,
      stat: '500+',
      label: 'weddings documented',
  color: '#14b8a6' // teal-500
    },
    {
      icon: Globe,
      stat: '15+',
      label: 'countries and destinations',
  color: '#0c4a6e' // sky-800
    },
    {
      icon: Award,
      stat: '8+ years',
      label: 'of cinematic storytelling',
  color: '#8b5cf6' // violet-500
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-stone-50 py-12 border-t border-stone-100">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-6"
        >
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <IconComponent 
                    size={24} 
                    style={{ color: item.color }}
                  />
                </div>

                {/* Stat */}
                <div className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mb-1">
                  {item.stat}
                </div>

                {/* Label */}
                <div className="text-sm text-neutral-600 font-medium leading-tight">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider with decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-stone-200 relative"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-[#CFAE70] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-neutral-500 text-sm font-medium">
              Trusted by couples across Indonesia and beyond
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStrip;