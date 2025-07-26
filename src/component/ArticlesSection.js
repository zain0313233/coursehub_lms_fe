import React from 'react'
import { Calendar, User, MessageCircle } from 'lucide-react'


const ArticlesSection = () => {
 const articles = [
    {
      id: 1,
      title: "Understanding React Hooks",
      description: "A deep dive into React's powerful hooks feature and how to use them effectively in modern applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      author: "Admin",
      date: "25 JUL",
      comments: 3
    },
    {
      id: 2,
      title: "Advanced JavaScript Techniques",
      description: "Explore advanced concepts in JavaScript programming including closures, prototypes, and async patterns.",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
      author: "Admin",
      date: "25 JUL",
      comments: 3
    },
    {
      id: 3,
      title: "Web Development with Node.js",
      description: "Build scalable web applications using Node.js, Express, and modern backend development practices.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
      author: "Admin",
      date: "25 JUL",
      comments: 3
    },
  ]
  return (
    <div className="relative w-full flex flex-col p-4 bg-gray-500 h-[600px] mb-16">
      <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold text-center leading-tight italic">Latest  & New <br/> Articles</h2>
     <div className="flex flex-col lg:flex-row gap-8 mt-16">
          {articles.map((article, index) => (
            <div 
              key={article.id} 
              className="flex-1 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Date Circle */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
                    <span className="text-lg font-bold text-gray-900">{article.date.split(' ')[0]}</span>
                    <span className="text-xs font-semibold text-gray-600">{article.date.split(' ')[1]}</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-4 mb-3 text-sm opacity-90">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>by {article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{article.comments} Comments</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                    {article.title}
                  </h3>
                </div>

                {/* Decorative Elements */}
                {index === 0 && (
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-30">
                    <div className="w-full h-full bg-white transform rotate-45 rounded-lg"></div>
                    <div className="absolute inset-2 bg-teal-400 transform rotate-45 rounded-lg"></div>
                  </div>
                )}
                
                {index === 2 && (
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-30">
                    <div className="w-full h-full bg-white transform -rotate-45 rounded-lg"></div>
                    <div className="absolute inset-2 bg-orange-400 transform -rotate-45 rounded-lg"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

    </div>
  )
}

export default ArticlesSection
