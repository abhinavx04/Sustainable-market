import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import icons for different sections
import { 
  Leaf, RecycleBin, Calendar, Users, MessageSquare, 
  Settings, Share2, BarChart2, Globe, Facebook, 
  Twitter, Instagram, Linkedin, Mail 
} from 'lucide-react';

const Dashboard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const dashboardItems = [
    {
      id: 1,
      title: "Resource Exchange",
      description: "Share and request sustainable resources within the community. Track your contributions and impact.",
      icon: <Share2 className="w-8 h-8" />,
      link: "/resources",
      stats: "150+ Active Listings"
    },
    {
      id: 2,
      title: "Community Events",
      description: "Join local sustainability events, workshops, and meetups. Create and manage your own events.",
      icon: <Calendar className="w-8 h-8" />,
      link: "/events",
      stats: "12 Upcoming Events"
    },
    {
      id: 3,
      title: "Recycling Hub",
      description: "Find recycling points, track waste reduction, and learn about proper recycling practices.",
      icon: <RecycleBin className="w-8 h-8" />,
      link: "/recycling",
      stats: "500kg Waste Saved"
    },
    {
      id: 4,
      title: "Community Chat",
      description: "Connect with other members, share tips, and discuss sustainable practices.",
      icon: <MessageSquare className="w-8 h-8" />,
      link: "/chat",
      stats: "Active Discussions"
    },
    {
      id: 5,
      title: "Impact Metrics",
      description: "Track your environmental impact and community contributions through detailed analytics.",
      icon: <BarChart2 className="w-8 h-8" />,
      link: "/metrics",
      stats: "View Your Impact"
    },
    {
      id: 6,
      title: "Global Initiatives",
      description: "Participate in worldwide sustainability projects and track global impact.",
      icon: <Globe className="w-8 h-8" />,
      link: "/global",
      stats: "15 Active Projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A5D23] via-[#3F4E1E] to-[#2F3A17]">
      {/* Header */}
      <header className="bg-[#2F3A17]/80 backdrop-blur-sm border-b border-[#8FBD56]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Leaf className="h-8 w-8 text-[#8FBD56]" />
              <h1 className="text-2xl font-bold text-[#D9E4C7]">EcoShare Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-[#B6CA8F] hover:text-[#D9E4C7] transition-colors">
                <Users className="h-6 w-6" />
              </button>
              <button className="text-[#B6CA8F] hover:text-[#D9E4C7] transition-colors">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative"
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={item.link}>
                <div className="h-full bg-[#2F3A17]/80 backdrop-blur-xl rounded-xl border border-[#8FBD56]/30 p-6
                            hover:shadow-lg hover:shadow-[#8FBD56]/20 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-[#8FBD56]/20 rounded-lg text-[#8FBD56]">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#D9E4C7]">{item.title}</h3>
                  </div>

                  <AnimatePresence>
                    {hoveredCard === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        <p className="text-[#B6CA8F]">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-[#8FBD56] text-sm">{item.stats}</span>
                          <span className="text-[#D9E4C7]">→</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2F3A17]/80 backdrop-blur-sm border-t border-[#8FBD56]/30 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[#D9E4C7] font-semibold mb-4">About EcoShare</h4>
              <p className="text-[#B6CA8F] text-sm">
                EcoShare is a registered platform dedicated to fostering sustainable communities 
                through resource sharing and environmental initiatives.
              </p>
            </div>
            <div>
              <h4 className="text-[#D9E4C7] font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, link: "#" },
                  { icon: <Twitter className="h-5 w-5" />, link: "#" },
                  { icon: <Instagram className="h-5 w-5" />, link: "#" },
                  { icon: <Linkedin className="h-5 w-5" />, link: "#" },
                  { icon: <Mail className="h-5 w-5" />, link: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="text-[#8FBD56] hover:text-[#D9E4C7] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[#D9E4C7] font-semibold mb-4">Legal</h4>
              <p className="text-[#B6CA8F] text-sm">
                © 2024 EcoShare. All rights reserved.<br />
                Registered Company No: 12345678<br />
                Green Business Certified
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;