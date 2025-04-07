"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { logos } from "@/app/constants";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const bounce = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8,
      },
    },
  };

  return (
    <section>
      <div className="flex flex-col md:px-28 max-md:px-10">
        <div className="flex flex-row items-center justify-between py-20">
          <motion.div
            className="flex flex-col gap-5 items-start"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h1
              className="text-6xl text-neutral-d_grey font-semibold"
              variants={item}
            >
              Lessons and insights{" "}
              <motion.span
                className="text-primary block"
                variants={slideInFromLeft}
              >
                from 8 years
              </motion.span>
            </motion.h1>

            <motion.h2 className="text-neutral-grey" variants={item}>
              Where to grow your business as a photographer: site or social
              media?
            </motion.h2>

            <motion.div
              className="mt-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={item}
            >
              <Link
                className="bg-primary rounded-md px-8 py-4 text-lg text-neutral-white active:bg-colorShade-shade2 hover:bg-primary-dark transition-colors"
                href={"/"}
              >
                Register
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={slideInFromRight}
          >
            <Image
              src={"/illustration.svg"}
              width={500}
              height={500}
              className="max-h-[450px] max-md:hidden"
              alt={"ilustração"}
            />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-row gap-2 self-center py-4"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            variants={bounce}
          />
          <motion.div
            className="w-2 h-2 bg-primary rounded-full opacity-30"
            variants={bounce}
            transition={{ delay: 0.1 }}
          />
          <motion.div
            className="w-2 h-2 bg-primary rounded-full opacity-30"
            variants={bounce}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
      </div>

      <div className="flex flex-col bg-neutral-white md:px-28 max-md:px-10">
        <motion.div
          className="flex flex-col py-10 gap-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h3
            className="text-3xl font-semibold text-center text-neutral-d_grey"
            variants={item}
          >
            Our Clients
          </motion.h3>
          <motion.h4 className="text-center text-neutral-grey" variants={item}>
            We have been working with some Fortune 500+ clients
          </motion.h4>
        </motion.div>

        <motion.div
          className="flex flex-row flex-wrap items-center justify-between pt-4"
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
            <motion.div key={logo} variants={bounce} whileHover={{ scale: 1.1 }}>
              <Image src={logo} width={50} height={50} alt="" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col py-10 gap-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h3
            className="text-3xl font-semibold text-center text-neutral-d_grey"
            variants={item}
          >
            Manage your entire community
            <br />
            in a single system
          </motion.h3>
          <motion.h4 className="text-center text-neutral-grey" variants={item}>
            Who is Nextcent suitable for?
          </motion.h4>
        </motion.div>

        <motion.div
          className="flex flex-row items-center justify-between max-lg:justify-center max-lg:flex-col"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="flex flex-col items-center justify-center text-center max-w-[300px] max-h-[260px] gap-2 p-4"
            variants={bounce}
            whileHover={{ y: -10 }}
          >
            <Image
              src={"/member-icon.svg"}
              width={50}
              height={50}
              alt="Membership software interface"
            />
            <h2 className="text-xl font-bold text-neutral-d_grey">
              Membership Organisations
            </h2>
            <p className="text-neutral-grey text-sm">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center text-center max-w-[300px] max-h-[260px] gap-2 p-4"
            variants={bounce}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.1 }}
          >
            <Image
              src={"/national-icon.svg"}
              width={50}
              height={50}
              alt="Membership software interface"
            />
            <h2 className="text-xl font-bold text-neutral-d_grey">
              National Associations
            </h2>
            <p className="text-neutral-grey text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center text-center max-w-[300px] max-h-[260px] gap-2 p-4"
            variants={bounce}
            whileHover={{ y: -10 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src={"/clubs-icon.svg"}
              width={50}
              height={50}
              alt="Membership software interface"
            />
            <h2 className="text-xl font-bold text-neutral-d_grey">
              Clubs And Groups
            </h2>
            <p className="text-neutral-grey text-sm">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
