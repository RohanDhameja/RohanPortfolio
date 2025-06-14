import React, { useState } from 'react';
import { Heart, Users, Code, Palette, Cpu, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const AutismAwareness = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeComicIndex, setActiveComicIndex] = useState(0);

  const photos = [
    {
      id: 1,
      title: "Teaching JavaScript Basics",
      description: "Working with Sarah on her first web page",
      url: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Arduino Workshop Success",
      description: "Kids celebrating their first blinking LED",
      url: "https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Pair Programming Session",
      description: "Collaborative learning in action",
      url: "https://images.pexels.com/photos/5428005/pexels-photo-5428005.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Code Review Circle",
      description: "Sharing projects and celebrating achievements",
      url: "https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Graduation Day",
      description: "Celebrating completed programming courses",
      url: "https://images.pexels.com/photos/5427656/pexels-photo-5427656.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const comics = [
    {
      id: 1,
      title: "Different, Not Less",
      description: "Understanding neurodiversity in the workplace",
      url: "https://images.pexels.com/photos/6192349/pexels-photo-6192349.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "The Sensory World",
      description: "Exploring how we all experience the world differently",
      url: "https://images.pexels.com/photos/6192357/pexels-photo-6192357.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Communication Styles",
      description: "Celebrating diverse ways of expressing ourselves",
      url: "https://images.pexels.com/photos/6192663/pexels-photo-6192663.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Strengths & Talents",
      description: "Highlighting the unique abilities within autism",
      url: "https://images.pexels.com/photos/6192354/pexels-photo-6192354.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Parent",
      text: "Alex's patient teaching style helped my son Miguel discover his love for programming. He's now creating his own games!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Dr. Emily Chen",
      role: "Special Education Coordinator",
      text: "The Buddy program has transformed how our students engage with technology. Alex's approach is truly innovative.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "James Mitchell",
      role: "Program Graduate",
      text: "Learning to code gave me confidence and opened up a whole new world. Alex believed in me when I didn't believe in myself.",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const nextComic = () => {
    setActiveComicIndex((prev) => (prev + 1) % comics.length);
  };

  const prevComic = () => {
    setActiveComicIndex((prev) => (prev - 1 + comics.length) % comics.length);
  };

  return (
    <section id="community" className="py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-rose-500 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Community Impact
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building inclusive communities through technology education, creative storytelling, 
            and hands-on learning experiences that celebrate neurodiversity.
          </p>
        </div>

        {/* Teaching Programming Section */}
        <div className="mb-32">
          <div className="flex items-center mb-12">
            <Code className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-3xl font-bold text-slate-900">Buddy Program: Teaching Programming</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                Through our Buddy program, I work one-on-one with differently-abled children to introduce 
                them to the world of programming. We start with visual programming tools and gradually 
                progress to real coding languages, always adapting to each child's unique learning style.
              </p>
              
              {/* Photo Gallery */}
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={photos[activePhotoIndex].url}
                  alt={photos[activePhotoIndex].title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">{photos[activePhotoIndex].title}</h4>
                  <p className="text-sm opacity-90">{photos[activePhotoIndex].description}</p>
                </div>
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="flex justify-center space-x-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhotoIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activePhotoIndex ? 'bg-blue-600' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-slate-900">Program Impact</h4>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">47</div>
                    <div className="text-sm text-slate-600">Students Taught</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">89%</div>
                    <div className="text-sm text-slate-600">Completion Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-violet-600 mb-1">12</div>
                    <div className="text-sm text-slate-600">Months Running</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">5</div>
                    <div className="text-sm text-slate-600">Languages Taught</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105">
                <ExternalLink className="w-5 h-5" />
                <span>View More Photos</span>
              </button>
            </div>
          </div>
        </div>

        {/* Comic Strips Section */}
        <div className="mb-32">
          <div className="flex items-center mb-12">
            <Palette className="w-6 h-6 text-rose-500 mr-3" />
            <h3 className="text-3xl font-bold text-slate-900">Awareness Through Comics</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={comics[activeComicIndex].url}
                  alt={comics[activeComicIndex].title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">{comics[activeComicIndex].title}</h4>
                  <p className="text-sm opacity-90">{comics[activeComicIndex].description}</p>
                </div>
                <button
                  onClick={prevComic}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextComic}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {comics.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveComicIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeComicIndex ? 'bg-rose-500' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
              
              <button className="w-full mt-8 bg-rose-500 hover:bg-rose-600 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105">
                <ExternalLink className="w-5 h-5" />
                <span>View Full Collection</span>
              </button>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                Creating comic strips has become one of my favorite ways to raise autism awareness. 
                Through colorful characters and relatable stories, I aim to break down stereotypes 
                and showcase the beauty of neurodiversity in our communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Published in 3 local newspapers</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Shared in autism awareness campaigns</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Used in educational workshops</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Translated into 4 languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Robotics Section */}
        <div className="mb-32">
          <div className="flex items-center mb-12">
            <Cpu className="w-6 h-6 text-violet-600 mr-3" />
            <h3 className="text-3xl font-bold text-slate-900">Robotics & Arduino Projects</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Cpu className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h4 className="text-xl font-semibold mb-2">Building a Smart Garden</h4>
                  <p className="text-slate-300">Kids learn sensors and automation</p>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-semibold mb-3">Featured Project: Smart Garden</h4>
                <p className="text-slate-600">Watch as underprivileged kids build their first IoT project, combining Arduino sensors with plant care automation.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Cpu className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h4 className="text-xl font-semibold mb-2">Robot Dance Competition</h4>
                  <p className="text-slate-300">Programming creativity meets engineering</p>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-semibold mb-3">Community Showcase</h4>
                <p className="text-slate-600">Our annual robot dance competition where kids showcase their programming skills through creative robotic performances.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-violet-600 hover:bg-violet-700 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl hover:scale-105">
              <ExternalLink className="w-5 h-5" />
              <span>Watch More Projects</span>
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-16">What People Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
                <p className="text-slate-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutismAwareness;