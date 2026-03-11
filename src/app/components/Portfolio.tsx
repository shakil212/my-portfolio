import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { unsplash_tool } from '../utils/unsplash';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Tech',
    description: 'A modern e-commerce solution with advanced filtering and seamless checkout experience.',
    imageUrl: 'https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc3MzEyMzg1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    category: 'Design',
    description: 'Complete brand identity redesign for a sustainable fashion startup.',
    imageUrl: 'https://images.unsplash.com/photo-1763069228076-c7e3995e1769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBkZXNpZ258ZW58MXx8fHwxNzczMTY1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Product Strategy',
    category: 'Strategy',
    description: 'Go-to-market strategy for a B2B SaaS platform targeting enterprise clients.',
    imageUrl: 'https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzczMDcwMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Tech',
    description: 'Intuitive mobile banking application with biometric authentication and real-time insights.',
    imageUrl: 'https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc3MzE2MjE2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Visual Design System',
    category: 'Design',
    description: 'Comprehensive design system for a multinational corporation with 200+ components.',
    imageUrl: 'https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MzEyMzg1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Digital Transformation',
    category: 'Strategy',
    description: 'Led digital transformation initiative for a traditional retail company.',
    imageUrl: 'https://images.unsplash.com/photo-1726607424583-d1a2d1ff71df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzMwODkyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const filters = ['All', 'Design', 'Tech', 'Strategy'];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Work
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my expertise in design, development, and strategy
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredId === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>

                {/* Read Case Study Button */}
                <motion.button
                  initial={{ y: 100 }}
                  animate={{ y: hoveredId === project.id ? 0 : 100 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Read Case Study
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}