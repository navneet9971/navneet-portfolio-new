import React from 'react';
import { skills } from '../data/data';

const Skills = () => {
  const skillCategories = {
    'Frontend': [
      'HTML', 'CSS', 'JavaScript',
      'React.js', 'Next.js', 'Tailwind',
      'Material UI', 'Framer Motion'
    ],
    'Backend': [
      'Node.js', 'Express.js', 'MongoDB',
      'AWS', 'Firebase', 'WebSocket'
    ],
    'AI & Automation': [
      'Google Gemini AI',
      'AI-Powered Chat', 'Voice Bots', 'Cron Jobs'
    ],
    'Tools & Others': [
      'Git', 'Postman', 'Visual Studio Code',
      'SEO', 'Video Editing', 'REST APIs',
      'Razorpay Integration', 'Cashfree Integration'
    ]
  };

  return (
    <section id="myskills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered through years of development experience.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {Object.entries(skillCategories).map(([category, categorySkills], index) => (
            <div
              key={category}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4 ${
                  index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  index === 2 ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                  'bg-gradient-to-r from-green-500 to-green-600'
                }`}>
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>

              <div className="space-y-3">
                {categorySkills.map((skillName) => {
                  const skill = skills.find(s => s.name === skillName);
                  return (
                    <div
                      key={skillName}
                      className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {skillName}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-400">Proficient</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Summary */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-300 mb-8">
              I believe in continuous learning and staying updated with the latest technologies and best practices in web development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{skills.length}</div>
                <div className="text-gray-400">Skills Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
                <div className="text-gray-400">Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400">Commitment</div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
