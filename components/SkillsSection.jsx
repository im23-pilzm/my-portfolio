import { motion } from "framer-motion";
import { 
    FaPython, 
    FaJs, 
    FaNodeJs, 
    FaHtml5, 
    FaCss3Alt, 
    FaReact 
} from 'react-icons/fa';
import { 
    SiExpress, 
    SiNextdotjs, 
    SiMysql, 
    SiPostgresql, 
    SiMongodb 
} from 'react-icons/si';

const skillsData = {
    languagesAndFrameworks: [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' }
    ],
    databases: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
    ]
};

export default function SkillsSection() {
    return (
        <section id="my_skills" className="py-16 md:py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Meine Skills
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Languages & Frameworks */}
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="bg-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Sprachen & Frameworks</h3>
                        <div className="flex flex-wrap gap-4">
                            {skillsData.languagesAndFrameworks.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.3, delay: index * 0.1}}
                                    viewport={{once: true}}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div 
                                        className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                                        style={{ color: skill.color }}
                                    >
                                        <skill.icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-sm text-white/80">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Databases */}
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        viewport={{once: true}}
                        className="bg-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Datenbanken</h3>
                        <div className="flex flex-wrap gap-4">
                            {skillsData.databases.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.3, delay: index * 0.1}}
                                    viewport={{once: true}}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div 
                                        className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                                        style={{ color: skill.color }}
                                    >
                                        <skill.icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-sm text-white/80">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 