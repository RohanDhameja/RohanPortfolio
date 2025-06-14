import React from 'react';
import { Download, Play, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('community');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Building
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Inclusive Communities
                </span>
                Through Technology
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Software developer, autism advocate, and musician passionate about creating 
                positive change through technology, education, and the arts.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-200">My Mission:</h3>
              <div className="grid gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-300">Teaching programming to differently-abled children</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-300">Creating awareness through storytelling and comics</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-300">Sharing music as a bridge between cultures</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-300">Building robotics projects with underprivileged kids</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/resume.pdf"
                download
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                <Play className="w-5 h-5" />
                <span>Watch Story</span>
              </button>
            </div>
          </div>

          {/* Media Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video bg-slate-800/50 flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Play className="w-10 h-10 opacity-80" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">My Journey</h3>
                  <p className="text-slate-300 text-sm">A glimpse into my work with community and technology</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-white/60 hover:text-white transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;