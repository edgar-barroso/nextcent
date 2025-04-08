"use client";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaHandshake,
  FaRegHandPointer,
  FaCreditCard,
} from "react-icons/fa";
import { logos } from "@/app/constants";

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

  const blogContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const blogItem = {
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
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const textPop = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200 },
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
      <motion.div
        className="flex px-36 py-5 gap-20 max-lg:flex-col max-lg:px-10 max-lg:gap-10 max-lg:items-center justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div
          variants={slideInFromLeft}
          className="max-lg:order-2 drop-shadow-lg"
        >
          <Image
            alt="banner"
            src={"/banner-1.png"}
            width={326}
            height={326}
            className="max-md:w-[280px] max-md:h-[280px]"
          />
        </motion.div>

        <motion.div className="flex flex-col gap-2 max-w-[700px] max-lg:text-center max-lg:items-center">
          <motion.p className="text-neutral-grey text-sm" variants={item}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </motion.p>

          <motion.p
            className="text-xl text-primary font-semibold"
            variants={item}
          >
            Tim Smith
          </motion.p>

          <motion.p className="text-neutral-l_grey" variants={item}>
            British Dragon Boat Racing Association
          </motion.p>

          <motion.div
            className="flex flex-row flex-wrap items-center justify-between pt-4 max-lg:justify-center max-lg:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {logos.map((logo) => (
              <motion.div
                key={logo}
                variants={bounce}
                whileHover={{ scale: 1.1 }}
              >
                <Image src={logo} width={50} height={50} alt="" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col py-12 bg-neutral-white items-center gap-4 px-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={blogContainer}
      >
        <motion.h3
          className="text-3xl font-semibold text-neutral-d_grey text-center"
          variants={textPop}
        >
          Caring is the new marketing
        </motion.h3>

        <motion.p
          className="text-neutral-grey text-sm max-w-[500px] text-center"
          variants={textPop}
        >
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read about
          how our community are increasing their membership income and lot&apos;s
          more.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-start gap-10 justify-center"
          variants={blogContainer}
        >
          <motion.div
            className="flex flex-col items-center w-full max-w-[368px]"
            variants={blogItem}
            whileHover="hover"
          >
            <motion.div variants={blogItem} className="w-full">
              <Image
                src={"/image1.png"}
                alt=""
                width={368}
                height={286}
                className="w-full h-auto rounded-t-lg object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center bg-neutral-silver rounded-md drop-shadow-lg p-6 -mt-20 w-[85%] mx-auto"
              variants={blogItem}
            >
              <motion.p
                className="text-neutral-grey text-lg font-semibold mb-4"
                variants={textPop}
              >
                Creating Streamlined Safeguarding Processes with OneRen
              </motion.p>
              <motion.div
                className="text-primary font-semibold flex items-center gap-2 cursor-pointer"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a href="#" className="text-xl">
                  Readmore
                </motion.a>
                <GoArrowRight size={25} />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center w-full max-w-[368px]"
            variants={blogItem}
            whileHover="hover"
          >
            <motion.div variants={blogItem} className="w-full">
              <Image
                src={"/image2.png"}
                alt=""
                width={368}
                height={286}
                className="w-full h-auto rounded-t-lg object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center bg-neutral-silver rounded-md drop-shadow-lg p-6 -mt-20 w-[85%] mx-auto"
              variants={blogItem}
            >
              <motion.p
                className="text-neutral-grey text-lg font-semibold mb-4"
                variants={textPop}
              >
                What are your safeguarding responsibilities and how can you
                manage them?
              </motion.p>
              <motion.div
                className="text-primary font-semibold flex items-center gap-2 cursor-pointer"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a href="#" className="text-xl">
                  Readmore
                </motion.a>
                <GoArrowRight size={25} />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center w-full max-w-[368px]"
            variants={blogItem}
            whileHover="hover"
          >
            <motion.div variants={blogItem} className="w-full">
              <Image
                src={"/image3.png"}
                alt=""
                width={368}
                height={286}
                className="w-full h-auto rounded-t-lg object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center bg-neutral-silver rounded-md drop-shadow-lg p-6 -mt-20 w-[85%] mx-auto"
              variants={blogItem}
            >
              <motion.p
                className="text-neutral-grey text-lg font-semibold mb-4"
                variants={textPop}
              >
                Revamping the Membership Model with Triathlon Australia
              </motion.p>
              <motion.div
                className="text-primary font-semibold flex items-center gap-2 cursor-pointer"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a href="#" className="text-xl">
                  Readmore
                </motion.a>
                <GoArrowRight size={25} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
