import React from 'react';
import { Music as MusicIcon, Play, Calendar, MapPin, Award } from 'lucide-react';

const Music = () => {
  const performances = [
    {
      title: "Classical Piano Recital",
      date: "March 15, 2024",
      venue: "Community Arts Center",
      type: "Solo Performance",
      image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Sitar & Piano Fusion",
      date: "February 20, 2024",
      venue: "Cultural Heritage Hall",
      type: "Collaborative",
      image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Charity Concert for Autism Awareness",
      date: "January 10, 2024",
      venue: "Grand Theater",
      type: "Benefit Performance",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const upcomingEvents = [
    {
      title: "Spring Piano Concert",
      date: "April 22, 2024",
      venue: "Music Academy",
      status: "Confirmed"
    },
    {
      title: "Autism Awareness Month Special",
      date: "April 28, 2024",
      venue: "Community Center",
      status: "Featured Artist"
    }
  ];

  const achievements = [
    {
      title: "Regional Piano Competition",
      award: "First Place",
      year: "2023"
    },
    {
      title: "Cultural Heritage Festival",
      award: "Outstanding Performance",
      year: "2023"
    },
    {
      title: "Community Service Award",
      award: "Music Therapy Recognition",
      year: "2024"
    }
  ];

  return (
    <section id="music" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <MusicIcon className="w-8 h-8 text-amber-500 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Musical Journey
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Music has always been my sanctuary and my voice. Through piano and sitar, 
            I express emotions, connect with communities, and create bridges between cultures.
          </p>
        </div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-900">My Musical Story</h3>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                My journey with music began at age 6 when I first touched piano keys. The instant 
                connection I felt was magical – every note seemed to speak directly to my soul.
              </p>
              <p>
                Years later, I discovered the sitar and fell in love with its complex, 
                meditative sound. Learning this traditional Indian instrument opened up 
                a whole new world of musical expression and cultural understanding.
              </p>
              <p>
                Today, I use music not just as personal expression but as a tool for therapy, 
                community building, and raising awareness for autism and inclusion.
              </p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-100">
              <h4 className="font-semibold text-slate-900 mb-4">Music Philosophy</h4>
              <blockquote className="text-slate-700 italic leading-relaxed">
                "Music transcends language, ability, and background. It's the universal 
                language that brings us all together, celebrating our differences while 
                highlighting our shared humanity."
              </blockquote>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video bg-slate-900/50 flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Play className="w-10 h-10 opacity-80" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Featured Piano Performance</h3>
                  <p className="text-slate-300">Chopin's Nocturne in E-flat major</p>
                </div>
              </div>
            </div>
            
            {/* Audio Player */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <div className="flex items-center space-x-4">
                <button className="bg-amber-500 hover:bg-amber-600 rounded-full p-4 transition-colors duration-300">
                  <Play className="w-6 h-6 text-white" />
                </button>
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">Sitar Meditation</div>
                  <div className="text-sm text-slate-600">Original Composition</div>
                </div>
                <div className="text-sm text-slate-500">3:42</div>
              </div>
              <div className="mt-4 bg-slate-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Performances */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-slate-900 mb-16 text-center">Recent Performances</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {performances.map((performance, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={performance.image}
                    alt={performance.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-3 py-2 rounded-full font-semibold">
                    {performance.type}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">{performance.title}</h4>
                  <div className="space-y-3 text-slate-600 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-3" />
                      <span className="text-sm">{performance.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3" />
                      <span className="text-sm">{performance.venue}</span>
                    </div>
                  </div>
                  <button className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center transition-colors duration-300">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Recording
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events & Achievements */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-12">Upcoming Events</h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-slate-900">{event.title}</h4>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                      {event.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-3" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-3" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-12">Recognition & Awards</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Award className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">{achievement.title}</h4>
                      <p className="text-amber-600 font-medium mb-1">{achievement.award}</p>
                      <p className="text-sm text-slate-600">{achievement.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl text-white">
              <h4 className="font-semibold mb-3">Want to collaborate?</h4>
              <p className="text-sm opacity-90 mb-6">
                I'm always open to musical collaborations, especially for charity events and autism awareness initiatives.
              </p>
              <button className="bg-white text-amber-600 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;