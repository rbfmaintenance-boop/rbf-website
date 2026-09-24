"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "./CountUp";

const STATS = [
  { value: 5, label: "Core trades under one roof" },
  { value: 6, label: "Commercial sectors served" },
  { value: 1, label: "Point of contact for every job" },
];

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <motion.p
            className="eyebrow-line eyebrow-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Commercial Facility Maintenance
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Reliable maintenance for <span>commercial properties.</span>
          </motion.h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Electrical, plumbing, HVAC, flooring, and interior repairs, coordinated by one
            accountable team from request to closeout.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link href="/request-service" className="btn">
              Request Service
            </Link>
            <Link href="/#services" className="btn btn-outline">
              View Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="stat-bar">
        <div className="wrap stat-bar-inner">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-value">
                <CountUp to={s.value} />
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
