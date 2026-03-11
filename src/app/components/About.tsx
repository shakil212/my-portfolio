import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const experiences = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading design initiatives for enterprise SaaS products, collaborating with cross-functional teams to deliver user-centric solutions that drive business growth.',
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'Digital Studio',
    period: '2020 - 2022',
    description: 'Designed and prototyped responsive web applications, conducted user research, and created design systems that improved team efficiency by 40%.',
  },
  {
    id: 3,
    title: 'Junior Designer',
    company: 'Creative Agency',
    period: '2018 - 2020',
    description: 'Supported senior designers in creating marketing materials, websites, and mobile app interfaces for various clients across different industries.',
  },
];

const skills = [
  'React', 'TypeScript', 'Figma', 'UI/UX Design',
  'Tailwind CSS', 'Node.js', 'Product Strategy',
  'Design Systems', 'Motion Design', 'User Research',
  'Prototyping', 'Responsive Design'
];

export function About() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Story</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm a passionate designer and developer with over 5 years of experience creating digital experiences that users love. My approach combines aesthetic excellence with functional design, always keeping the end user at the center of every decision.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not pushing pixels or writing code, you'll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring designers.
            </p>
          </div>

          {/* Interactive Timeline/Accordion */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Work History</h3>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="backdrop-blur-md bg-gray-50/50 dark:bg-gray-800/50 rounded-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} • {exp.period}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                          {exp.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-full border-2 cursor-pointer transition-all duration-300 ${
                  hoveredSkill === skill
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-lg'
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm'
                }`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
