import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Animation for floating particles (representing sustainable elements)
  const particles = [...Array(15)].map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
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
      {/* Animated sustainable development elements */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-[#8FBD56]/20 to-[#B6CA8F]/20"
          style={{
            width: particle.size,
            height: particle.size
          }}
          initial={{ 
            x: `${particle.initialX}vw`,
            y: `${particle.initialY}vh`,
            scale: 0,
            opacity: 0 
          }}
          animate={{ 
            x: [`${particle.initialX}vw`, `${particle.initialX + 10}vw`, `${particle.initialX}vw`],
            y: [`${particle.initialY}vh`, `${particle.initialY - 10}vh`, `${particle.initialY}vh`],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 7 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-10 h-10 rounded-full border-2 border-[#B6CA8F] border-t-transparent"/>
            </motion.div>

            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-[#D9E4C7]">Create Account</h1>
              <p className="text-[#B6CA8F] mt-2">Join our sustainable community</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'password'].map((field, index) => (
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
                {loading ? 'Creating Account...' : 'Join the Movement →'}
              </motion.button>
            </form>

            <motion.p 
              className="mt-6 text-center text-[#B6CA8F]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[#8FBD56] hover:text-[#B6CA8F] font-medium transition-colors"
              >
                Sign in
              </Link>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;