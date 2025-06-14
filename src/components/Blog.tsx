import React, { useState } from 'react';
import { PenTool, Calendar, Tag, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'technology', name: 'Technology', count: 4 },
    { id: 'inclusion', name: 'Inclusion', count: 3 },
    { id: 'music', name: 'Music', count: 2 },
    { id: 'community', name: 'Community', count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Inclusive Learning Environments for Neurodiverse Students",
      excerpt: "How we can create educational spaces that celebrate and support different learning styles, fostering growth and confidence in every student.",
      category: "inclusion",
      date: "March 10, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["education", "autism", "learning"]
    },
    {
      id: 2,
      title: "The Power of Visual Programming Languages for Kids",
      excerpt: "Why Scratch and similar tools are revolutionizing how children learn to code, making programming accessible and fun for everyone.",
      category: "technology",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["programming", "kids", "education"]
    },
    {
      id: 3,
      title: "Music Therapy and Autism: A Personal Journey",
      excerpt: "Exploring how music becomes a bridge for communication and expression, opening new pathways for connection and understanding.",
      category: "music",
      date: "February 15, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["music", "therapy", "autism"]
    },
    {
      id: 4,
      title: "Arduino Projects That Teach More Than Just Coding",
      excerpt: "How hands-on electronics projects develop problem-solving skills, creativity, and confidence in young learners.",
      category: "technology",
      date: "January 20, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["arduino", "robotics", "learning"]
    },
    {
      id: 5,
      title: "Community Building Through Shared Interests",
      excerpt: "How focusing on what unites us creates stronger, more inclusive communities that celebrate diversity and foster belonging.",
      category: "community",
      date: "January 5, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["community", "inclusion", "social"]
    },
    {
      id: 6,
      title: "The Art of Storytelling Through Comics",
      excerpt: "Why visual narratives are powerful tools for awareness and education, breaking down barriers through relatable characters and stories.",
      category: "inclusion",
      date: "December 18, 2023",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/6192349/pexels-photo-6192349.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["comics", "storytelling", "awareness"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <section id="blog" className="py-32 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <PenTool className="w-8 h-8 text-violet-600 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Thoughts & Insights
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sharing experiences, insights, and learnings about technology, inclusion, 
            music, and building better communities for everyone.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-slate-900 mb-12">Featured Post</h3>
          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-violet-600 text-white text-sm px-4 py-2 rounded-full font-semibold capitalize">
                {featuredPost.category}
              </div>
            </div>
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center text-sm text-slate-500 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{featuredPost.date}</span>
                <span className="mx-3">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-slate-700 mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-violet-100 text-violet-800 text-xs px-3 py-2 rounded-full font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 self-start shadow-lg hover:shadow-xl hover:scale-105">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white shadow-sm"
              />
            </div>

            {/* Categories */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-violet-600 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-violet-50 shadow-sm border border-slate-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-700 text-xs px-3 py-2 rounded-full font-semibold capitalize">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight hover:text-violet-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-slate-500">
                      +{post.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                <button className="text-violet-600 hover:text-violet-700 font-semibold text-sm flex items-center group">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-20">
          <button className="bg-white hover:bg-violet-50 border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-violet-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get notified when I publish new articles about technology, inclusion, and community building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl text-slate-900 focus:ring-2 focus:ring-violet-300 focus:outline-none"
            />
            <button className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;