"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaHandshake,
  FaRegHandPointer,
  FaCreditCard,
} from "react-icons/fa";

export function Body() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const bounce = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const statsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const statItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const textSlideUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section>
      <motion.div
        className="flex flex-row md:px-28 max-md:px-10 items-center justify-center bg-neutral-white max-lg:flex-col py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div variants={slideInFromLeft} className="max-lg:order-2">
          <Image
            src={"/mobile-login.svg"}
            alt={"Mobile login illustration"}
            width={500}
            height={500}
            className="max-lg:w-full max-lg:h-auto"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-5 max-lg:items-center max-lg:text-center max-lg:mb-10"
          variants={container}
        >
          <motion.h3
            className="text-3xl font-semibold text-neutral-d_grey"
            variants={item}
          >
            The unseen of spending three
            <br /> years at Pixelgrade
          </motion.h3>

          <motion.p
            className="text-neutral-grey text-sm max-w-[500px]"
            variants={item}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </motion.p>

          <motion.div
            className="mt-5"
            variants={bounce}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              className="bg-primary rounded-md px-8 py-4 text-lg text-neutral-white active:bg-colorShade-shade2 hover:bg-primary-dark transition-colors"
              href={"/"}
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center py-16 gap-36 max-lg:flex-col max-lg:gap-10 max-lg:px-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={statsContainer}
      >
        <motion.div className="flex flex-col gap-2" variants={textSlideUp}>
          <motion.h3 className="text-4xl text-neutral-d_grey font-semibold max-lg:text-center">
            Helping a local{" "}
            <motion.span className="text-primary">
              <br />
              business reinvent itself
            </motion.span>
          </motion.h3>
          <motion.p className="max-lg:text-center">
            We reached here with our hard work and dedication
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-y-9 gap-x-10 max-md:grid-cols-1"
          variants={statsContainer}
        >
          <motion.div
            className="flex gap-4 items-center"
            variants={statItem}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 10 }}>
              <FaUsers className="text-primary" size={40} />
            </motion.div>
            <motion.div>
              <motion.h4 className="text-2xl font-semibold text-neutral-d_grey">
                2,245,341
              </motion.h4>
              <motion.p className="text-neutral-grey">Members</motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-4 items-center"
            variants={statItem}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 10 }}>
              <FaHandshake className="text-primary" size={40} />
            </motion.div>
            <motion.div>
              <motion.h4 className="text-2xl font-semibold text-neutral-d_grey">
                46,328
              </motion.h4>
              <motion.p className="text-neutral-grey">Clubs</motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-4 items-center"
            variants={statItem}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 10 }}>
              <FaRegHandPointer className="text-primary" size={40} />
            </motion.div>
            <motion.div>
              <motion.h4 className="text-2xl font-semibold text-neutral-d_grey">
                828,867
              </motion.h4>
              <motion.p className="text-neutral-grey">Event Bookings</motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-4 items-center"
            variants={statItem}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 10 }}>
              <FaCreditCard className="text-primary" size={40} />
            </motion.div>
            <motion.div>
              <motion.h4 className="text-2xl font-semibold text-neutral-d_grey">
                1,926,436
              </motion.h4>
              <motion.p className="text-neutral-grey">Payments</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-row md:px-28 max-md:px-10 items-center justify-center bg-neutral-white max-lg:flex-col py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div variants={slideInFromLeft} className="max-lg:order-2">
          <Image
            src={"/pana.svg"}
            alt={"Mobile login illustration"}
            width={500}
            height={500}
            className="max-lg:w-full max-lg:h-auto"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-5 max-lg:items-center max-lg:text-center max-lg:mb-10"
          variants={container}
        >
          <motion.h3
            className="text-3xl font-semibold text-neutral-d_grey"
            variants={item}
          >
            How to design your site footer like we did
          </motion.h3>

          <motion.p
            className="text-neutral-grey text-sm max-w-[500px]"
            variants={item}
          >
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </motion.p>

          <motion.div
            className="mt-5"
            variants={bounce}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              className="bg-primary rounded-md px-8 py-4 text-lg text-neutral-white active:bg-colorShade-shade2 hover:bg-primary-dark transition-colors"
              href={"/"}
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
