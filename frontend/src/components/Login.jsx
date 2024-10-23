import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Leaf particles animation
  const leaves = [...Array(12)].map((_, i) => ({
    id: i,
    size: Math.random() * 30 + 15, // Slightly larger than signup for variety
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    rotation: Math.random() * 360,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#4A5D23] via-[#3F4E1E] to-[#2F3A17]">
      {/* Animated leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            width: leaf.size,
            height: leaf.size
          }}
          initial={{ 
            x: `${leaf.initialX}vw`,
            y: -20,
            rotate: leaf.rotation,
            scale: 0
          }}
          animate={{ 
            x: [`${leaf.initialX}vw`, `${leaf.initialX + 10}vw`, `${leaf.initialX - 10}vw`],
            y: ['120vh'],
            rotate: [leaf.rotation, leaf.rotation + 360],
            scale: [1, 0.5]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            y: { duration: 20 + Math.random() * 10 },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }
          }}
        >
          {/* Leaf shape using CSS */}
          <div className="w-full h-full bg-gradient-to-br from-[#8FBD56]/20 to-[#B6CA8F]/20 
                        rounded-tl-[60%] rounded-tr-[60%] rounded-bl-[60%]
                        backdrop-blur-sm border border-[#8FBD56]/10"
          />
        </motion.div>
      ))}

      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <motion.div 
            className="bg-[#2F3A17]/80 backdrop-blur-xl rounded-xl shadow-2xl p-8 border border-[#8FBD56]/30"
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
          >
            {/* Logo/Icon Animation */}
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8FBD56]/20 flex items-center justify-center"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#8FBD56]/40 to-[#B6CA8F]/40 
                            rounded-tl-[60%] rounded-tr-[60%] rounded-bl-[60%] transform rotate-45"
              />
            </motion.div>

            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-[#D9E4C7]">Welcome Back</h1>
              <p className="text-[#B6CA8F] mt-2">Continue your sustainable journey</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {['email', 'password'].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <label className="block text-sm font-medium text-[#B6CA8F] mb-2 uppercase tracking-wider">
                    {field}
                  </label>
                  <input
                    type={field === 'password' ? 'password' : 'text'}
                    required
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-3 bg-[#2F3A17]/50 border border-[#8FBD56]/30 rounded-lg 
                              text-[#D9E4C7] placeholder-[#8FBD56]/50
                              focus:ring-2 focus:ring-[#8FBD56] focus:border-transparent
                              hover:bg-[#2F3A17]/70 transition-all duration-200"
                    placeholder={`Enter your ${field}`}
                  />
                </motion.div>
              ))}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-[#8FBD56] to-[#6A8D35] 
                           text-[#1A2309] py-3 px-4 rounded-lg font-medium
                           hover:from-[#6A8D35] hover:to-[#4A5D23] 
                           transition-all duration-300 transform
                           ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-[#8FBD56]/20'}`}
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Continue →'}
              </motion.button>
            </form>

            <motion.p 
              className="mt-6 text-center text-[#B6CA8F]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-[#8FBD56] hover:text-[#B6CA8F] font-medium transition-colors"
              >
                Sign up
              </Link>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;