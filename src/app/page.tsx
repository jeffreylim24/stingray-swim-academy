"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Instagram, 
  MapPin, 
  Users, 
  Award, 
  Heart,
  Waves,
  Fish,
  MessageCircle,
  Sun
} from "lucide-react";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! I'm interested in swimming lessons for my child.

    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}

    Message: ${formData.message}`;
    
    const phoneNumber = '85586380';
    
    try {
      // Copy message to clipboard
      await navigator.clipboard.writeText(message);
      
      // Show success toast
      toast.success('Message copied to clipboard! 📋\nWhatsApp will open - please paste the message there.', {
        duration: 5000,
        style: {
          background: 'rgba(16, 185, 129, 0.9)',
          color: 'white',
          borderRadius: '12px',
          padding: '16px',
          fontSize: '14px',
          backdropFilter: 'blur(10px)',
        },
        iconTheme: {
          primary: 'white',
          secondary: 'rgba(16, 185, 129, 0.9)',
        },
      });
      
      // Open WhatsApp after a short delay to let user see the toast
      setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
      }, 1000);
      
    } catch (err) {
      // Fallback if clipboard doesn't work
      console.error('Failed to copy to clipboard:', err);
      toast.error(`Clipboard not available. Please copy this message and send it via WhatsApp to 8558 6380:\n\n${message}`, {
        duration: 10000,
        style: {
          background: 'rgba(239, 68, 68, 0.9)',
          color: 'white',
          borderRadius: '12px',
          padding: '16px',
          fontSize: '14px',
          backdropFilter: 'blur(10px)',
          maxWidth: '500px',
        },
        iconTheme: {
          primary: 'white',
          secondary: 'rgba(239, 68, 68, 0.9)',
        },
      });
      
      // Still try to open WhatsApp
      setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500 via-blue-700 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-blue-900/30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm"
        ></motion.div>
        
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-60 right-20 w-48 h-48 bg-cyan-400/10 rounded-full backdrop-blur-sm"
        ></motion.div>
        
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-orange-400/15 rounded-full backdrop-blur-sm"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex justify-center px-4 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4">
                  <Fish className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  LEARN
                </span>
                <br />
                <span className="text-white">Swim</span>
                <br />
                <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent italic">
                  Smile
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8 mb-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                    SAFE, FUN & FRIENDLY LEARN TO SWIM LESSONS
                  </h2>
                  <p className="text-xl text-blue-100 mb-6">
                    Inspired by the stingray&apos;s calm power and effortless grace, we empower every child to swim with confidence and strength - one smile at a time.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-white mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-cyan-300" />
                      <span>YOUR CONDO POOL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-cyan-300" />
                      <span>ALL AGES WELCOME</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-cyan-300" />
                      <span>NO EXPERIENCE NEEDED</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <Card className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-md border border-orange-300/30 p-6 mb-6">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    GET YOUR FIRST TRIAL LESSON AT 
                    <span className="text-orange-300"> 50% OFF</span> NOW!
                  </h3>
                  <p className="text-yellow-100">Limited time offer for new students</p>
                </CardContent>
              </Card>
              
              <Button 
                size="lg"
                className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white text-xl px-8 py-4 rounded-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Trial Lesson
                <Waves className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-6">About Us</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8 h-full">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                        <p className="text-blue-100">Experienced Coaches with Competitive Swimming Backgrounds</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                        <p className="text-blue-100">We Coach with Heart Every Step of the Way</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                        <p className="text-blue-100">Tailored Lessons for Your Child&apos;s Progress</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                        <p className="text-blue-100">Trusted by Parents, Loved by Kids</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8 h-full">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">Our Philosophy</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-cyan-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Heart-Centered Approach</h4>
                        <p className="text-blue-200 text-sm">Every lesson filled with care and encouragement</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center">
                        <Sun className="w-6 h-6 text-orange-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Personalized Learning</h4>
                        <p className="text-blue-200 text-sm">Adapted to each child&apos;s unique pace and style</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center">
                        <Award className="w-6 h-6 text-purple-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Professional Excellence</h4>
                        <p className="text-blue-200 text-sm">Certified coaches with competitive experience</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-white mb-6">Get Started</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto mb-8"></div>
              <p className="text-xl text-blue-100">Ready to dive in? Contact us to book your trial lesson!</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-green-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">WhatsApp</p>
                          <a href="https://wa.me/85586380" className="text-blue-200 hover:text-white transition-colors">
                            8558 6380
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                          <Mail className="w-6 h-6 text-blue-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Email</p>
                          <a href="mailto:stingrayswimacad@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                            stingrayswimacad@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-pink-400/20 flex items-center justify-center">
                          <Instagram className="w-6 h-6 text-pink-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">Instagram</p>
                          <a href="https://instagram.com/stingray.swim.academy" className="text-blue-200 hover:text-white transition-colors">
                            @stingray.swim.academy
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">Book Your Trial</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        placeholder="Child&apos;s Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder-white/60"
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder-white/60"
                        required
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder-white/60"
                        required
                      />
                      <Textarea
                        placeholder="Tell us about your child&apos;s swimming experience and any special needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder-white/60 h-24"
                      />
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 rounded-lg transition-all duration-300"
                      >
                        Send WhatsApp Message
                        <MessageCircle className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6">
              <CardContent className="p-0">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Fish className="w-8 h-8 text-cyan-300" />
                  <h3 className="text-2xl font-bold text-white">Stingray Swim Academy</h3>
                </div>
                <p className="text-blue-200 mb-4">
                  Empowering every child to swim with confidence and strength - one smile at a time.
                </p>
                <div className="flex justify-center gap-6 text-blue-200">
                  <a href="https://wa.me/85586380" className="hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="mailto:stingrayswimacad@gmail.com" className="hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/stingray.swim.academy" className="hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-sm text-blue-300 mt-4">
                  © 2024 Stingray Swim Academy. All rights reserved.
                </p>
              </CardContent>
            </Card>
          </div>
        </footer>
      </div>
      
      {/* Toast Notifications */}
      <Toaster 
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          top: 20,
        }}
        toastOptions={{
          style: {
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
    </div>
  );
}