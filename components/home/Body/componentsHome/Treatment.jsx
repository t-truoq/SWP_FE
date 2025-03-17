"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Treatment() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 md:py-24 w-full" ref={ref}>
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Signature Treatments</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our most popular and effective treatments designed to rejuvenate your skin and enhance your
              natural beauty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden group h-[400px] md:h-[500px]"
            >
              <img
                src="./home/treatment/treatment.jpg"
                alt="Facial Treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Luxury Facial Treatments</h3>
                <p className="text-white/90 mb-6">
                  Our signature facials combine advanced techniques with premium products for transformative results.
                </p>
                <button
                  onClick={() => (window.location.href = "/services")}
                  className="bg-white/20 hover:bg-white/30 text-white w-fit px-6 py-3 rounded-lg transition-colors"
                >
                  Explore Treatments
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden group h-[400px] md:h-[500px]"
            >
              <img
                src="./home/treatment/treatment2.jpg"
                alt="Body Treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Advanced Body Therapies</h3>
                <p className="text-white/90 mb-6">
                  Rejuvenate your body with our specialized treatments designed for total relaxation and wellness.
                </p>
                <button
                  onClick={() => (window.location.href = "/services")}
                  className="bg-white/20 hover:bg-white/30 text-white w-fit px-6 py-3 rounded-lg transition-colors"
                >
                  Discover More
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

