import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Chief Technology Officer',
      bio: 'Full-stack developer with 10+ years of experience in building scalable web applications.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      bio: 'Award-winning designer specializing in user experience and brand identity.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      }
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      bio: 'Passionate about modern web technologies and creating exceptional user experiences.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#',
      }
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our talented team of designers, developers, and strategists work together 
            to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-400/20 group-hover:border-blue-400/40 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.bio}</p>

                <div className="flex justify-center space-x-4">
                  {[
                    { icon: Github, href: member.social.github },
                    { icon: Linkedin, href: member.social.linkedin },
                    { icon: Twitter, href: member.social.twitter },
                  ].map((social, socialIndex) => (
                    <a
                      key={socialIndex}
                      href={social.href}
                      className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors duration-200"
                    >
                      <social.icon className="w-5 h-5 text-blue-400" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;