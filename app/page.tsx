"use client";
import { useState, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Minus,
  Plus,
  Star,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function siddhanInfraWebsite() {
  const [currentPage, setCurrentPage] = useState("interiors");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at top
        setIsNavVisible(true);
      } else {
        // Scrolling down
        setIsNavVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const testimonials = [
    {
      quote:
        "siddhan Infrastructure transformed our commercial complex beyond our expectations. Their expertise in both construction and interior design created a space that perfectly balances functionality with aesthetic appeal.",
      name: "Rajesh Sharma",
      position: "CEO, Sharma Enterprises",
    },
    {
      quote:
        "Working with siddhan Infra on our residential project was exceptional. They delivered quality construction with attention to every detail, completing the project on time and within budget.",
      name: "Priya Patel",
      position: "Homeowner",
    },
    {
      quote:
        "The interior design team at siddhan created a workspace that has significantly improved our team's productivity. Their understanding of modern office dynamics is remarkable.",
      name: "Michael Johnson",
      position: "Operations Director, TechCorp",
    },
  ];

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const faqData = [
    {
      question: "How involved can I be in the design process?",
      answer:
        "We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive infrastructure development and interior design services including residential, commercial, and industrial projects.",
    },
    {
      question: "What is your design process?",
      answer:
        "Our process includes initial consultation, concept development, design development, permitting & approvals, and project closeout.",
    },
    {
      question: "How do you establish your design fees?",
      answer:
        "Our fees are based on project scope, complexity, and timeline. We provide transparent pricing after the initial consultation.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope and complexity, typically ranging from 3-12 months for most interior projects and 6-24 months for infrastructure projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <header
        className={`fixed top-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ${
          isNavVisible || window.innerWidth >= 768
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation - Pill Shape */}
          <div className="hidden md:flex items-center justify-between bg-gray-100/95 backdrop-blur-md rounded-full px-8 py-4 shadow-lg border border-gray-200">
            {/* Left Navigation */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() => handlePageChange("construction")}
                className={`text-sm font-medium transition-colors ${
                  currentPage === "construction"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Construction
              </button>
              <button
                onClick={() => handlePageChange("interiors")}
                className={`text-sm font-medium transition-colors ${
                  currentPage === "interiors"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Interiors
              </button>
              <button
                onClick={() => handlePageChange("contact")}
                className={`text-sm font-medium transition-colors ${
                  currentPage === "contact"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Contact
              </button>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <button onClick={() => handlePageChange("interiors")}>
                <Image
                  src="/siddhan-logo.png"
                  alt="Siddhan Infrastructure"
                  width={160}
                  height={45}
                  className="w-60 h-13 hover:opacity-80 transition-opacity"
                />
              </button>
            </div>

            <Button
              onClick={() => handlePageChange("contact")}
              className="bg-[#0d93b4] hover:bg-[#0b7a96] text-white px-6 py-2 rounded-full text-sm font-medium"
            >
              Get in touch
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <button onClick={() => handlePageChange("interiors")}>
                <Image
                  src="/siddhan-logo.png"
                  alt="Siddhan Infrastructure"
                  width={140}
                  height={48}
                  className="w-18 h-12 hover:opacity-80 transition-opacity"
                />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 animate-in fade-in-0 duration-200">
                <button
                  onClick={() => {
                    handlePageChange("construction");
                    setIsMobileMenuOpen(false); // ✅ closes menu
                  }}
                  className="block w-full text-left text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
                >
                  Construction
                </button>

                <button
                  onClick={() => {
                    handlePageChange("interiors");
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
                >
                  Interiors
                </button>

                <button
                  onClick={() => {
                    handlePageChange("contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-sm font-medium text-gray-600 hover:text-gray-900 py-2"
                >
                  Contact
                </button>

                <Button
                  onClick={() => {
                    handlePageChange("contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#0d93b4] hover:bg-[#0b7a94] text-white rounded-full text-sm font-medium mt-4"
                >
                  Get in touch
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {currentPage === "contact" && (
        <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to start your next project? Let's discuss how we can bring
                your vision to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const form = e.target as HTMLFormElement;

                    const data = {
                      name: (
                        form.elements.namedItem("name") as HTMLInputElement
                      ).value,
                      email: (
                        form.elements.namedItem("email") as HTMLInputElement
                      ).value,
                      phone: (
                        form.elements.namedItem("phone") as HTMLInputElement
                      ).value,
                      projectType: (
                        form.elements.namedItem(
                          "projectType"
                        ) as HTMLSelectElement
                      ).value,
                      message: (
                        form.elements.namedItem(
                          "message"
                        ) as HTMLTextAreaElement
                      ).value,
                    };

                    try {
                      const response = await fetch(
                        "https://script.google.com/macros/s/AKfycbz3xPtVqK4v6LpwRHl_6Fcwgo0StiliXFKTND892O_YL4Ikt2YnyIZRy0vXR4VM1FKR/exec", // 🔗 Replace with your deployed Google Script Web App URL
                        {
                          method: "POST",
                          body: JSON.stringify(data),
                          headers: { "Content-Type": "application/json" },
                          mode: "no-cors", // 👈 Important to bypass CORS restriction
                        }
                      );

                      // Since mode: "no-cors" doesn’t return JSON, we just show success directly
                      alert("✅ Message sent successfully!");
                      form.reset();
                    } catch (error) {
                      console.error("Error:", error);
                      alert("❌ Failed to send message. Please try again.");
                    }
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d93b4] focus:border-[#0d93b4]"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d93b4] focus:border-[#0d93b4]"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d93b4] focus:border-[#0d93b4]"
                      placeholder="94948 41613"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d93b4] focus:border-[#0d93b4]"
                      required
                    >
                      <option value="">Select project type</option>
                      <option>Construction</option>
                      <option>Interior Design</option>
                      <option>Both Construction & Interiors</option>
                      <option>Sales</option>
                      <option>Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d93b4] focus:border-[#0d93b4]"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#0d93b4] hover:bg-[#0b7a94] text-white py-3 rounded-lg font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[#0d93b4]/10 rounded-lg flex items-center justify-center mt-1">
                        <Phone className="w-5 h-5 text-[#0d93b4]" />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">
                          <a
                            href="tel:+919494841613"
                            className="hover:underline cursor-pointer"
                          >
                            +91 94948 41613
                          </a>
                        </p>
                        <p className="text-gray-600">
                          <a
                            href="tel:+919908808958"
                            className="hover:underline cursor-pointer"
                          >
                            +91 99088 08958
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[#0d93b4]/10 rounded-lg flex items-center justify-center mt-1">
                        <Mail className="w-5 h-5 text-[#0d93b4]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=siddhaninfrastructures682@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline cursor-pointer"
                          >
                            siddhaninfrastructures682@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Addresses */}
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-[#0d93b4]/10 rounded-lg flex items-center justify-center mt-1">
                          <MapPin className="w-5 h-5 text-[#0d93b4]" />
                        </div>
                        <div className="flex flex-col space-y-2">
                          {/* Address 1 */}
                          <a
                            href="https://maps.app.goo.gl/wqmqPbtB9grkLzELA"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                              <p className="font-medium text-gray-900">
                                Address 1
                              </p>
                              <p className="text-gray-600">
                                Sy No.307/E/24/&307/2, T20 Arena, <br />
                                Tagore Estates, Mithila Nagar, <br />
                                Pragathi Nagar, Hyderabad, Medchal Malkajgiri,{" "}
                                <br />
                                Telangana-500090, India.
                              </p>
                            </div>
                          </a>

                          {/* Address 2 */}
                          <a
                            href="https://www.google.com/maps?q=The+Gardeniya+building+1st+floor,+Akshay+park,+near+Bharat+petroleum,+GOKUL+ROAD+HUBLI+-+580020"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                              <p className="font-medium text-gray-900">
                                Address 2
                              </p>
                              <p className="text-gray-600">
                                The Gardeniya building 1st floor, <br />
                                Akshay park, <br />
                                near Bharat petroleum, <br />
                                GOKUL ROAD HUBLI - 580020
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage === "home" && (
        <>
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://framerusercontent.com/images/uzpCtuYDgW95T4BOxvHZMRJKE.png?scale-down-to=2048"
                alt="Hero background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 "></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center">
                {/* Circular Badge */}
                {/* Award Badge */}

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-in fade-in-0 duration-700">
                  <span className="block">Elevating Spaces</span>
                  <span className="block">Crafting Dreams</span>
                </h1>

                {/* Description */}
                <div className="mb-8 animate-in fade-in-0 duration-700 delay-200">
                  <p className="text-lg text-white/90 mb-2">
                    We specialize in transforming visions into reality.
                  </p>
                  <p className="text-lg text-white/90">
                    Explore our work of innovative architectural.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="animate-in fade-in-0 duration-700 delay-300">
                  <Button
                    asChild
                    className="bg-[#0d93b4] hover:bg-[#0b7a96] text-white px-8 py-3 rounded-full text-lg font-semibold group hover:scale-105 transition-all duration-200"
                  >
                    <a href="#contact-form">
                      Book an appointment
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-in fade-in-0 duration-1000 delay-500">
              <div className="flex flex-col items-center text-white/70 animate-bounce">
                <span className="text-sm mb-2">Scroll to explore</span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16 items-start"
              >
                {/* Left Content */}
                <div>
                  <div className="text-sm font-semibold text-teal-700 mb-4 tracking-wider">
                    ABOUT US
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-teal-800 mb-8 leading-tight">
                    Architecture
                    <br />
                    Interior.
                  </h2>
                </div>

                {/* Right Content */}
                {/* <div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We specialize in transforming visions into reality.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Explore our portfolio of innovative architectural and interior design projects crafted with precision.
              </p>
            </div> */}
              </motion.div>

              {/* Image Grid - Auto Sliding Carousel */}
              <div className="mt-16 overflow-hidden w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* First Row - Moving Left to Right */}
                  <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="flex gap-6 mb-6 w-max"
                    style={{ maxWidth: "none" }}
                  >
                    {/* Duplicate images for seamless loop */}
                    {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-6">
                        <div className="relative w-80 h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                          <Image
                            src="https://framerusercontent.com/images/4sU8ZcE1VPt5tOMPRWaOZKjCMk.png"
                            alt="Modern living space"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                          <Image
                            src="https://framerusercontent.com/images/TvRymMb9eE6gexPti05pMO8KzfI.png"
                            alt="Contemporary bathroom"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative w-96 h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                          <Image
                            src="https://framerusercontent.com/images/4kzBVuRSxzERYTPFFvq46XUrexA.png"
                            alt="Modern kitchen design"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                          <Image
                            src="https://framerusercontent.com/images/MeKJAlOXXupItPDmkok7GEkRjg.png"
                            alt="Elegant bedroom"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="relative w-80 h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                          <Image
                            src="https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-1080x675.jpg"
                            alt="Industrial workspace"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Second Row - Moving Right to Left (Offset) */}
                  <motion.div
                    animate={{ x: [-1000, 0] }}
                    transition={{
                      duration: 25,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="flex gap-6 w-max"
                    style={{ maxWidth: "none" }}
                  >
                    {/* Duplicate images for seamless loop */}
                    {/* {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-6">
                    <div className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=288&width=256"
                        alt="Luxury office space"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-88 h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=256&width=352"
                        alt="Modern dining room"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=320&width=288"
                        alt="Contemporary living space"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-80 h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=256&width=320"
                        alt="Minimalist bedroom"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=288&width=256"
                        alt="Modern bathroom"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))} */}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Client Stories Section */}

          <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="text-sm font-semibold text-[#0d93b4] mb-4 tracking-wider uppercase">
                  Our Expertise
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  Comprehensive Infrastructure
                  <br />
                  <span className="text-[#0d93b4]">Solutions</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  From groundbreaking construction to award-winning interiors,
                  we deliver end-to-end solutions that transform spaces and
                  exceed expectations.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Construction & Engineering",
                    description:
                      "Complete construction solutions from residential complexes to commercial towers with advanced engineering techniques and sustainable practices.",
                    image: "/modern-construction-site.png",
                    features: [
                      "Residential Construction",
                      "Commercial Buildings",
                      "Infrastructure Development",
                    ],
                  },
                  {
                    title: "Interior Design & Architecture",
                    description:
                      "Sophisticated interior solutions that blend functionality with aesthetic excellence, creating spaces that inspire and perform.",
                    image:
                      "https://framerusercontent.com/images/ZJhNDLLf6sRbkkK0RzfjqvLy94M.png",
                    features: [
                      "Luxury Interiors",
                      "Space Planning",
                      "Custom Furniture",
                    ],
                  },
                  {
                    title: "Project Management",
                    description:
                      "End-to-end project management ensuring timely delivery, quality control, and seamless coordination across all phases.",
                    image: "/construction-project-team.png",
                    features: [
                      "Timeline Management",
                      "Quality Assurance",
                      "Cost Optimization",
                    ],
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-102"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-500"
                          >
                            <div className="w-1.5 h-1.5 bg-[#0d93b4] rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Working Process Section */}
          <section className="py-32 bg-[#0d93b4] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm font-semibold mb-6 tracking-wider opacity-80">
                    SERVICES
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                    Our Working
                    <br />
                    Process
                  </h2>
                </motion.div>

                {/* Right Content - Process Steps Grid */}
                <div className="space-y-12">
                  {/* Row 1: 01 and 02 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-6"
                    >
                      <div className="text-3xl font-bold text-teal-300 min-w-[4rem]">
                        01
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white">
                          Initial Consultation
                        </h3>
                        <p className="text-teal-100 leading-relaxed">
                          The process often begins with an initial consultation
                          between the designer/architect. Get started from here.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex gap-6"
                    >
                      <div className="text-3xl font-bold text-teal-300 min-w-[4rem]">
                        02
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white">
                          Concept Development
                        </h3>
                        <p className="text-teal-100 leading-relaxed">
                          In this stage, the designer/architect gathers detailed
                          information about the project requirements.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Row 2: 03 and 04 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex gap-6"
                    >
                      <div className="text-3xl font-bold text-teal-300 min-w-[4rem]">
                        03
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white">
                          Design Development
                        </h3>
                        <p className="text-teal-100 leading-relaxed">
                          Depending on the project scope and location, the
                          designer/architect may assist the client in obtaining.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex gap-6"
                    >
                      <div className="text-3xl font-bold text-teal-300 min-w-[4rem]">
                        04
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white">
                          Permitting & Approvals
                        </h3>
                        <p className="text-teal-100 leading-relaxed">
                          Depending on the project scope and location, the
                          designer/architect may assist the client. We work to
                          make you 100% happy.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Row 3: 05 centered */}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex gap-6 max-w-md"
                    >
                      <div className="text-3xl font-bold text-teal-300 min-w-[4rem]">
                        05
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-white">
                          Project Closeout
                        </h3>
                        <p className="text-teal-100 leading-relaxed">
                          Once construction is complete, the designer/architect
                          conducts a final inspection of the project.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="text-sm font-semibold text-teal-700 mb-4 tracking-wider">
                  WORKS
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-teal-800 leading-tight">
                  Our Projects
                  <br />& Designs
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Large Project */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src="https://framerusercontent.com/images/KQl9gxWQKSWL4CeS4TljSLOwE.png"
                    alt="Luxury hotel interior"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Small Project Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src="https://framerusercontent.com/images/wALlbbKhTTayUCnfD20DvuRAbs.png"
                      alt="Modern home interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-teal-800 mb-1">
                          D-Orex Home Interior
                        </h3>
                        <p className="text-gray-600">Milwaukee, WI</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-teal-700" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Portfolio Grid Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Orion Home Studio Interior",
                    location: "Milwaukee, WI",
                    image:
                      "https://framerusercontent.com/images/oTYSHLRWpijaNmpr5wrNa6JSVw.png",
                  },
                  {
                    title: "Titan Office Interior",
                    location: "Milwaukee, WI",
                    image:
                      "https://framerusercontent.com/images/ZJhNDLLf6sRbkkK0RzfjqvLy94M.png",
                  },
                  {
                    title: "Luxury Residential Project",
                    location: "Milwaukee, WI",
                    image:
                      "https://framerusercontent.com/images/2y6fIbGFbBpG5BR5EcDXaXhU.png?scale-down-to=1024",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <div className="relative h-64">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-teal-800 mb-1">
                            {project.title}
                          </h3>
                          <p className="text-gray-600">{project.location}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-teal-700" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://framerusercontent.com/images/nea6cG4ercYbVNoNyb021NdQye4.png"
                alt="Modern interior background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto py-20"
              >
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                  Unlock Your Dream
                  <br />
                  Home Today!
                </h2>

                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  We encourage clients to actively participate in discussions,
                  share their ideas, preferences, and feedback.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="hover:scale-105 transition-transform duration-200">
                    <Button
                      asChild
                      className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full text-lg font-semibold group"
                    >
                      <a
                        href="#contact-form"
                        onClick={() => handlePageChange("contact")}
                      >
                        Get in touch
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>

                  <div className="hover:scale-105 transition-transform duration-200">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
                    >
                      Call us: +1 483 944 954
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm font-semibold text-teal-700 mb-4 tracking-wider">
                    FAQS
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-teal-800 mb-8 leading-tight">
                    Still Have A
                    <br />
                    Question?
                  </h2>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full text-lg font-semibold group"
                    >
                      <a href="#contact-form">
                        See all FAQs
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right Content - FAQ Items */}
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100"
                    >
                      <button
                        onClick={() =>
                          setOpenFaq(openFaq === index ? null : index)
                        }
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-gray-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-lg font-semibold text-teal-800">
                            {faq.question}
                          </span>
                        </div>
                        <div className="text-teal-700">
                          {openFaq === index ? (
                            <Minus className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </div>
                      </button>

                      {openFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <div className="pl-12">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact-form" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16 items-start"
              >
                {/* Left Content - Contact Info */}
                <div>
                  <div className="text-sm font-semibold text-teal-700 mb-4 tracking-wider">
                    CONTACT US
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-teal-800 mb-8 leading-tight">
                    Get in Touch
                    <br />
                    With Us.
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Have a question or a project in mind? We'd love to hear from
                    you. Fill out the form or reach us directly.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-teal-700" />
                      <span className="text-lg text-gray-700">
                        +1 483 944 954
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-teal-700" />
                      <span className="text-lg text-gray-700">
                        siddhaninfrastructures682@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6 text-teal-700" />
                      <span className="text-lg text-gray-700">
                        123 Design St, Milwaukee, WI 53202
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Content - Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg"
                >
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your Message"
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-full text-lg font-semibold">
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {currentPage === "construction" && (
        <>
          {/* Construction Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="absolute inset-0">
              <Image
                src="https://i.pinimg.com/736x/aa/59/8c/aa598cea41048ba12dcc064ce34ac8b4.jpg"
                alt="Construction site background"
                fill
                className="object-cover opacity-20"
              />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <div
                  className="text-sm font-semibold mb-4 tracking-wider"
                  style={{ color: "#0d93b4" }}
                >
                  CONSTRUCTION DIVISION
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                  <span className="block">Building Tomorrow's</span>
                  <span className="block" style={{ color: "#0d93b4" }}>
                    Infrastructure
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  With over two decades of experience, we deliver world-class
                  construction projects that stand the test of time. From
                  commercial complexes to residential developments, we build
                  with precision and excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-[#0d93b4] hover:text-gray-900 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
                    onClick={() => setCurrentPage("contact")}
                  >
                    Get Quote
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Company Overview Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="text-sm font-semibold mb-4 tracking-wider"
                    style={{ color: "#0d93b4" }}
                  >
                    ABOUT OUR CONSTRUCTION DIVISION
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    7+ Years of
                    <br />
                    <span style={{ color: "#0d93b4" }}>
                      Construction Excellence
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Since 1999, siddhan Infra has been at the forefront of
                    construction innovation, delivering projects that exceed
                    expectations and set new industry standards.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#0d93b4" }}
                      ></div>
                      <span className="text-gray-700">
                        15+ Projects Completed Successfully
                      </span>
                    </div>
                    {/* <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0d93b4" }}></div>
                      <span className="text-gray-700">ISO 9001:2015 Certified Quality Management</span>
                    </div> */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#0d93b4" }}
                      ></div>
                      <span className="text-gray-700">
                        Project Management & Sustainable Construction
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#0d93b4" }}
                      ></div>
                      <span className="text-gray-700">
                        24/7 Project Management & Support
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/modern-construction-team.png"
                      alt="Construction team at work"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div
                    className="absolute -bottom-6 -right-6 text-white p-6 rounded-2xl shadow-xl"
                    style={{ backgroundColor: "#0d93b4" }}
                  >
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Projects Delivered</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Construction Services Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div
                  className="text-sm font-semibold mb-4 tracking-wider"
                  style={{ color: "#0d93b4" }}
                >
                  OUR CONSTRUCTION SERVICES
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  Comprehensive Construction
                  <br />
                  <span style={{ color: "#0d93b4" }}>Solutions</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From initial planning to final handover, we provide end-to-end
                  construction services with unmatched quality and reliability.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Commercial Construction",
                    description:
                      "Office buildings, retail spaces, warehouses, and industrial facilities built to the highest standards.",
                    image: "/modern-commercial-construction.png",
                    features: [
                      "Office Complexes",
                      "Retail Centers",
                      "Warehouses",
                      "Industrial Plants",
                    ],
                  },
                  {
                    title: "Residential Development",
                    description:
                      "Luxury homes, apartment complexes, and residential communities designed for modern living.",
                    image: "/modern-home-construction.png",
                    features: [
                      "Luxury Homes",
                      "Apartments",
                      "Gated Communities",
                      "Townhouses",
                    ],
                  },
                  {
                    title: "Material Contract",
                    description:
                      "Supplying and managing high-quality construction materials to ensure durability, safety, and cost efficiency.",
                    image: "/infrastructure-construction.png",
                    features: [
                      "Cement & Concrete Supply",
                      "Structural Steel & Rebars",
                      "Sand, Gravel & Aggregates",
                      "Bricks, Blocks & Tiles",
                    ],
                  },

                  {
                    title: "Renovation & Remodeling",
                    description:
                      "Transform existing spaces with our expert renovation and modernization services.",
                    image: "/building-renovation.png",
                    features: [
                      "Building Upgrades",
                      "Space Optimization",
                      "Modernization",
                      "Restoration",
                    ],
                  },
                  {
                    title: "Project Management",
                    description:
                      "Complete project oversight from conception to completion with dedicated project managers.",
                    image: "/construction-project-team.png",
                    features: [
                      "Timeline Management",
                      "Quality Control",
                      "Budget Oversight",
                      "Risk Management",
                    ],
                  },
                  {
                    title: "Sales Apartments",
                    description:
                      "Modern residential apartments designed for comfort, convenience, and contemporary living.",
                    image: "/green-sustainable-building.png",
                    features: [
                      "1 BHK Units",
                      "2 BHK Units",
                      "3 BHK Units",
                      "Luxury & Penthouse Apartments",
                    ],
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-[#0d93b4] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Past Projects Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="text-sm font-semibold text-teal-700 mb-4 tracking-wider">
                  FEATURED PROJECTS
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  Our Construction
                  <br />
                  <span className="text-[#0d93b4]">Portfolio</span>
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Featured Large Project */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/Page 1.png"
                    alt="Skyline Commercial Tower"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      siddhan infra
                    </h3>
                    {/* <p className="text-gray-200 mb-2">
                      42-story mixed-use development
                    </p> */}
                    <div className="flex items-center gap-4 text-sm">
                      <span> Hubli ,Karnataka</span>
                      <span>•</span>
                      <span>Completed 2024</span>
                      {/* <span>•</span> */}
                      {/* <span>$85M Project</span> */}
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  {[
                    {
                      title: "kanumuri",
                      location: "Bachupally, Hyderabad",
                      year: "2023",
                      // value: "$45M",
                      description:
                        "G+4 luxury apartment ",
                      image: "/WhatsApp Image 2025-08-30 at 3.15.56 PM.jpeg",
                    },
                    {
                      title: "siddhan infra ",
                      location: "Hubli ,Karnataka", 
                      year: "2024",
                      // value: "$62M",
                      description:
                        "Duplex luxury ",
                      image: "/WhatsApp Image 2025-08-30 at 3.12.03 PM.jpeg",
                    },
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex">
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {project.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3">
                            {project.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>{project.location}</span>
                            <span>•</span>
                            <span>{project.year}</span>
                            <span>•</span>
                            <span>{project.value}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8 bg-[#0d93b4] rounded-2xl p-8 text-white"
              >
                {[
                  { number: "15+", label: "Projects Completed" },
                  { number: "₹5cr+", label: "Total Project Value" },
                  { number: "7+", label: "Years Experience" },
                  { number: "98%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-teal-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Construction Process Section */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="text-sm font-semibold text-[#0d93b4] mb-4 tracking-wider">
                  OUR PROCESS
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                  How We Build
                  <br />
                  <span className="text-[#0d93b4]">Excellence</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Planning & Design",
                    description:
                      "Comprehensive project planning, architectural design, and engineering analysis.",
                  },
                  {
                    step: "02",
                    title: "Permits & Approvals",
                    description:
                      "Handling all regulatory requirements, permits, and compliance documentation.",
                  },
                  {
                    step: "03",
                    title: "Construction Phase",
                    description:
                      "Skilled execution with quality control, safety protocols, and timeline management.",
                  },
                  {
                    step: "04",
                    title: "Delivery & Support",
                    description:
                      "Final inspection, handover, and ongoing maintenance support services.",
                  },
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[#0d93b4] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Construction CTA Section */}
          <section className="py-20" style={{ backgroundColor: "#0d93b4" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Ready to Start Your
                  <br />
                  Construction Project?
                </h2>
                <p
                  className="text-xl mb-8 max-w-2xl mx-auto"
                  style={{ color: "#b3e5fc" }}
                >
                  Get in touch with our construction experts for a free
                  consultation and project estimate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-3 rounded-full text-lg font-semibold"
                    style={{ backgroundColor: "white", color: "#0d93b4" }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "white")
                    }
                    onClick={() => setCurrentPage("contact")}
                  >
                    Get Free Quote
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
                    style={{ borderColor: "white" }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "white";
                      e.target.style.color = "#0d93b4";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "white";
                    }}
                    onClick={() => setCurrentPage("contact")}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {currentPage === "interiors" && (
        <>
          {/* Interiors Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://framerusercontent.com/images/uzpCtuYDgW95T4BOxvHZMRJKE.png?scale-down-to=2048"
                alt="Hero background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 "></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center">
                {/* Circular Badge */}
                {/* Award Badge */}

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-in fade-in-0 duration-700">
                  <span className="block">Elevating Spaces</span>
                  <span className="block">Crafting Dreams</span>
                </h1>

                {/* Description */}
                <div className="mb-8 animate-in fade-in-0 duration-700 delay-200">
                  <p className="text-lg text-white/90 mb-2">
                    We specialize in transforming visions into reality.
                  </p>
                  <p className="text-lg text-white/90">
                    Explore our work of innovative architectural.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="animate-in fade-in-0 duration-700 delay-300">
                  <Button
                    asChild
                    className=" bg-[#0d93b4] text-white px-8 py-3 rounded-full text-lg font-semibold group hover:scale-105 transition-all duration-200"
                  >
                    <a
                      href="#contact-form"
                      onClick={() => handlePageChange("contact")}
                    >
                      Book an appointment
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-in fade-in-0 duration-1000 delay-500">
              <div className="flex flex-col items-center text-white/70 animate-bounce">
                <span className="text-sm mb-2">Scroll to explore</span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </section>

          {/* Interior Design Overview Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm font-semibold  mb-4 tracking-wider">
                    ABOUT OUR INTERIOR DESIGN DIVISION
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    <br />
                    <span className="text-[#0d93b4]">Interior Design</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Our interior design team combines artistic vision with
                    practical expertise to create spaces that are both beautiful
                    and functional. From concept to completion, we handle every
                    detail.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0d93b4] rounded-full"></div>
                      <span className="text-gray-700">
                        150+ Interior Projects Completed
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0d93b4] rounded-full"></div>
                      <span className="text-gray-700">
                        {" "}
                        Interior Design from 2020
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0d93b4] rounded-full"></div>
                      <span className="text-gray-700">
                        Sustainable & Eco-Friendly Design
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0d93b4] rounded-full"></div>
                      <span className="text-gray-700">
                        3D Visualization & Virtual Tours
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://framerusercontent.com/images/wALlbbKhTTayUCnfD20DvuRAbs.png"
                      alt="Luxury interior design showcase"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-[#0d93b4] text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-sm opacity-90">Designs Created</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Interior Design Services Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="text-sm font-semibold text-[#0d93b4] mb-4 tracking-wider">
                  OUR INTERIOR DESIGN SERVICES
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  Complete Interior
                  <br />
                  <span className="text-[#0d93b4]">Design Solutions</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From residential homes to commercial spaces, we offer
                  comprehensive interior design services tailored to your unique
                  style and needs.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Residential Design",
                    description:
                      "Transform your home into a personal sanctuary with our residential interior design expertise.",
                    image:
                      "https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room-1080x675.jpg",
                    features: [
                      "Living Rooms",
                      "Bedrooms",
                      "Kitchens",
                      "Dining Rooms",
                    ],
                  },
                  {
                    title: "Commercial Interiors",
                    description:
                      "Create inspiring work environments that boost productivity and reflect your brand identity.",
                    image:
                      "https://framerusercontent.com/images/4sU8ZcE1VPt5tOMPRWaOZKjCMk.png",
                    features: [
                      "Office Spaces",
                      "Retail Stores",
                      "Restaurants",
                      "Hotels",
                    ],
                  },
                  {
                    title: "Space Planning",
                    description:
                      "Optimize your space layout for maximum functionality and flow with expert space planning.",
                    image:
                      "https://framerusercontent.com/images/TvRymMb9eE6gexPti05pMO8KzfI.png",
                    features: [
                      "Layout Design",
                      "Traffic Flow",
                      "Furniture Placement",
                      "Storage Solutions",
                    ],
                  },
                  {
                    title: "Color Consultation",
                    description:
                      "Expert color selection and coordination to create the perfect mood and atmosphere.",
                    image:
                      "https://framerusercontent.com/images/oTYSHLRWpijaNmpr5wrNa6JSVw.png",
                    features: [
                      "Color Schemes",
                      "Paint Selection",
                      "Accent Colors",
                      "Mood Creation",
                    ],
                  },
                  {
                    title: "Furniture & Decor",
                    description:
                      "Curated furniture selection and decorative elements that complete your design vision.",
                    image:
                      "https://framerusercontent.com/images/2y6fIbGFbBpG5BR5EcDXaXhU.png?scale-down-to=1024",
                    features: [
                      "Custom Furniture",
                      "Art Selection",
                      "Lighting Design",
                      "Accessories",
                    ],
                  },
                  {
                    title: "3D Visualization",
                    description:
                      "See your space come to life with photorealistic 3D renderings and virtual walkthroughs.",
                    image:
                      "https://framerusercontent.com/images/KQl9gxWQKSWL4CeS4TljSLOwE.png",
                    features: [
                      "3D Renderings",
                      "Virtual Tours",
                      "Material Samples",
                      "Design Previews",
                    ],
                  },
                  //
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0, delay: index * 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-[#0d93b4] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Interior Design Portfolio Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="text-sm font-semibold text-[#0d93b4] mb-4 tracking-wider">
                  FEATURED DESIGNS
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  Our Interior Design
                  <br />
                  <span className="text-[#0d93b4]">Portfolio</span>
                </h2>
              </motion.div>

              {/* Featured Project Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 }}
                  viewport={{ once: false }}
                  className="lg:col-span-2 relative h-96 rounded-2xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="https://framerusercontent.com/images/uzpCtuYDgW95T4BOxvHZMRJKE.png?scale-down-to=2048"
                    alt="Luxury Living Room Design"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Modern Luxury Living Room
                    </h3>
                    <p className="text-gray-200 mb-2">
                      Contemporary design with premium finishes
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span>Milwaukee, WI</span>
                      <span>•</span>
                      <span>Completed 2024</span>
                      <span>•</span>
                      <span>Residential</span>
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Executive Office Suite",
                      type: "Commercial",
                      year: "2024",
                      description:
                        "Sophisticated workspace design for C-suite executives",
                      image:
                        "https://framerusercontent.com/images/MeKJAlOXXupItPDmkok7GEkRjg.png",
                    },
                    {
                      title: "Boutique Hotel Lobby",
                      type: "Hospitality",
                      year: "2023",
                      description:
                        "Elegant and welcoming hotel entrance design",
                      image:
                        "https://framerusercontent.com/images/4sU8ZcE1VPt5tOMPRWaOZKjCMk.png",
                    },
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0, delay: index * 0 }}
                      viewport={{ once: false }}
                      className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-32">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {project.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{project.type}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* More Portfolio Items */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Modern Kitchen Design",
                    category: "Residential",
                    image:
                      "https://framerusercontent.com/images/oTYSHLRWpijaNmpr5wrNa6JSVw.png",
                  },
                  {
                    title: "Luxury Master Bedroom",
                    category: "Residential",
                    image:
                      "https://framerusercontent.com/images/ZJhNDLLf6sRbkkK0RzfjqvLy94M.png",
                  },
                  {
                    title: "Contemporary Bathroom",
                    category: "Residential",
                    image:
                      "https://framerusercontent.com/images/2y6fIbGFbBpG5BR5EcDXaXhU.png?scale-down-to=1024",
                  },
                  {
                    title: "Restaurant Interior",
                    category: "Commercial",
                    image:
                      "https://framerusercontent.com/images/TvRymMb9eE6gexPti05pMO8KzfI.png",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0, delay: index * 0 }}
                    viewport={{ once: true }}
                    className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-200">{item.category}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Design Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-8 bg-[#0d93b4] rounded-2xl p-8 text-white mt-16"
              >
                {[
                  { number: "150+", label: "Interior Projects" },
                  { number: "10+", label: "services" },
                  { number: "5+", label: "Years Experience" },
                  { number: "99%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Design Process Section */}
          <section className="py-20 bg-[#0d93b4]/5 to-[#0d93b4]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="text-sm font-semibold text-[#0d93b4] mb-4 tracking-wider">
                  OUR DESIGN PROCESS
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  How We Create
                  <br />
                  <span className="text-[#0d93b4]">Beautiful Spaces</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description:
                      "Understanding your lifestyle, preferences, and functional requirements.",
                  },
                  {
                    step: "02",
                    title: "Concept Design",
                    description:
                      "Creating initial design concepts and mood boards for your approval.",
                  },
                  {
                    step: "03",
                    title: "3D Visualization",
                    description:
                      "Detailed 3D renderings to help you visualize the final design.",
                  },
                  {
                    step: "04",
                    title: "Material Selection",
                    description:
                      "Choosing finishes, furniture, and accessories that match your style.",
                  },
                  {
                    step: "05",
                    title: "Implementation",
                    description:
                      "Project management and installation to bring your design to life.",
                  },
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="w-16 h-16 bg-[#0d93b4] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Interior Design Testimonial Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="text-sm font-semibold text-[#0d93b4] mb-4 tracking-wider">
                  CLIENT TESTIMONIALS
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                  What Our Clients
                  <br />
                  <span className="text-[#0d93b4]">Say About Us</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Vamshi Raju",
                    role: "8464950950",
                    quote:
                      "I recently got my home interiors done by SIDDHAN INTERIORS and I am extremely happy with the results. From the very beginning, the team was professional, patient, and attentive to my ideas. They suggested modern yet practical designs that suited my budget and lifestyle.",
                    rating: 5,
                    image: "/placeholder.svg?key=client1",
                  },
                  {
                    name: "Pawan",
                    role: "7658925094",

                    quote:
                      "The workmanship is excellent — the wardrobes, modular kitchen, and false ceiling all look very premium. They also made sure the space was functional, not just beautiful. What impressed us most was their after-service support, always available for small adjustments even after project completion.",
                    rating: 5,
                    image: "/placeholder.svg?key=client2",
                  },
                  {
                    name: "Krishna",
                    role: "7680044611",
                    quote:
                      "We wanted a simple yet elegant look for our new flat, and SIDDHAN INTERIORS  delivered exactly that. Their carpentry, painting, and lighting work are excellent. They really transformed our space into a BEAUTIFUL home. Highly satisfied and definitely recommend their services.",
                    rating: 5,
                    image: "/placeholder.svg?key=client3",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#0d93b4] text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#0d93b4] text-[#0d93b4]"
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Interior Design CTA Section */}
          <section className="py-20 bg-[#0d93b4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Ready to Transform
                  <br />
                  Your Space?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Schedule a free consultation with our interior design experts
                  and let's bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-white text-[#0d93b4] hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold"
                    onClick={() => handlePageChange("contact")}
                  >
                    Free Consultation
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img
                src="/siddhan-logo.png"
                alt="siddhan Infra Logo"
                className="h-14 mb-4"
              />
              <p className="text-black-900 leading-relaxed max-w-md">
                Transforming visions into reality through innovative
                infrastructure development and interior design solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-black-900">
                <li>Infrastructure Development</li>
                <li>Interior Design</li>
                <li>Project Management</li>
                <li>Sales</li>
                <li>Consultation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-black-900">
                <li>
                  <a
                    href="tel:+919494841613"
                    className="hover:underline cursor-pointer"
                  >
                    +91 94948 41613
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919908808958"
                    className="hover:underline cursor-pointer"
                  >
                    +91 99088 08958
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:siddhaninfrastructures682@gmail.com"
                    className="hover:underline cursor-pointer"
                  >
                    siddhaninfrastructures682@gmail.com
                  </a>
                </li>
                <li>
                  <p className="font-medium text-gray-900">Address</p>
                  <a
                    href="https://maps.app.goo.gl/wqmqPbtB9grkLzELA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                      <p className="text-gray-600">
                        Sy No.307/E/24/&307/2, T20 Arena, <br />
                        Tagore Estates, Mithila Nagar, <br />
                        Pragathi Nagar, Hyderabad, Medchal Malkajgiri, <br />
                        Telangana-500090, India.
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://www.facebook.com/share/1Znwccsikc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/siddhaninteriors?igsh=MW40M2UyNWQxazJkbg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com/@siddhaninfraandinteriors?si=9XmBkPaXlO7WCdCm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-black-900">
            <p>&copy; 2024 siddhan Infra. All rights reserved.</p>
          </div>

          {/* WhatsApp floating button */}
          <a
            href="https://wa.me/919494841613"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors cursor-pointer">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}
