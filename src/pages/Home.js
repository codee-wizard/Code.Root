import React from 'react';
import '../styles/Home.css'; 

function App() {
  //  roadmaps section 
  const roadmaps = [
    {
      id: "beginner",
      title: "Introduction to Programming",
      description: "Start with the basics of coding using block-based programming. Learn fundamental concepts in a fun way.",
      gradeLevel: "Grades 6-7",
      duration: "4 weeks",
      topics: [
        { name: "Block programming basics", completed: true },
        { name: "Simple game creation", completed: true },
        { name: "Basic algorithms", completed: false }
      ]
    },
    {
      id: "intermediate",
      title: "Web Development Basics",
      description: "Learn how to build websites with HTML, CSS, and start exploring JavaScript fundamentals.",
      gradeLevel: "Grades 8-9",
      duration: "8 weeks",
      topics: [
        { name: "HTML structure", completed: true },
        { name: "CSS styling", completed: true },
        { name: "JavaScript basics", completed: false }
      ]
    },
    {
      id: "advanced",
      title: "Python & Data Science",
      description: "Master Python programming and explore data analysis, visualization and machine learning basics.",
      gradeLevel: "Grades 10-12",
      duration: "12 weeks",
      topics: [
        { name: "Python fundamentals", completed: true },
        { name: "Data analysis with pandas", completed: true },
        { name: "ML introduction", completed: false }
      ]
    }
  ];

  // benifits sec
  const benefits = [
    {
      id: "problem-solving",
      title: "Problem-Solving Skills",
      description: "Coding teaches you to break down complex problems into manageable parts and develop logical thinking.",
      icon: "🧠"
    },
    {
      id: "career",
      title: "Career Opportunities",
      description: "Technology jobs are growing rapidly. Start early to build skills that will be in high demand when you graduate.",
      icon: "💼"
    },
    {
      id: "creativity",
      title: "Creativity & Innovation",
      description: "Coding allows you to create anything you can imagine, from games and apps to solutions for real-world problems.",
      icon: "💡"
    },
    {
      id: "collaboration",
      title: "Collaboration Skills",
      description: "Learn to work effectively in teams, share ideas, and build projects together—just like professional developers do.",
      icon: "🔗"
    }
  ];

  // details
  const steps = [
    {
      id: 1,
      title: "Choose Your Path",
      description: "Select a learning roadmap based on your grade level and interests. Each path is designed to build skills progressively."
    },
    {
      id: 2,
      title: "Learn Through Practice",
      description: "Complete interactive lessons with hands-on coding exercises. Practice what you learn with real-time feedback."
    },
    {
      id: 3,
      title: "Build Projects",
      description: "Apply your knowledge by creating your own projects. Showcase your work and get feedback from peers."
    },
    {
      id: 4,
      title: "Track Your Progress",
      description: "Monitor your development with achievement badges and progress reports that show how far you've come."
    }
  ];

  // people's feedback
  const testimonials = [
    {
      id: "1",
      name: "Priya S.",
      grade: "Grade 8",
      location: "Delhi",
      stars: 5,
      comment: "I never thought I could build my own website at 13, but CodeRoot's step-by-step roadmap made it possible! I've even started helping my friends learn coding too."
    },
    {
      id: "2",
      name: "Arjun K.",
      grade: "Grade 11",
      location: "Mumbai",
      stars: 4.5,
      comment: "The Python & Data Science roadmap helped me create a climate analysis project that won first place at the national science fair. The skills I learned are incredible!"
    },
    {
      id: "3",
      name: "Zara M.",
      grade: "Grade 7",
      location: "Bangalore",
      stars: 5,
      comment: "I started with block programming and now I'm building games in Scratch! The way CodeRoot explains concepts makes coding fun and not intimidating at all."
    }
  ];

  return (
    <div className="App">
      {/* main */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Start Your Coding Journey Today</h1>
            <p>Follow our structured roadmaps designed for students from 6th to 12th grade. Learn to code at your own pace with interactive lessons.</p>
            <div className="hero-buttons">
              <button className="btn-secondary">Get Started</button>
              <button className="btn-outline">View Roadmaps</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Students coding together" />
          </div>
        </div>
      </section>

      {/* roadmap sec */}
      <section className="roadmaps">
        <div className="container">
          <div className="section-header">
            <h2>Coding Roadmaps</h2>
            <p>Follow our carefully designed learning paths tailored to your grade level and interests</p>
          </div>

          <div className="roadmap-cards">
            {roadmaps.map(roadmap => (
              <div key={roadmap.id} className={`roadmap-card ${roadmap.id}`}>
                <div className="card-header">
                  <span className="grade-badge">{roadmap.gradeLevel}</span>
                  <span className="duration">{roadmap.duration}</span>
                </div>
                <h3>{roadmap.title}</h3>
                <p>{roadmap.description}</p>
                <div className="topics">
                  {roadmap.topics.map((topic, idx) => (
                    <div key={idx} className="topic">
                      <div className={`check ${topic.completed ? 'completed' : ''}`}>✓</div>
                      <span className={!topic.completed ? 'pending' : ''}>{topic.name}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary full-width">Start Learning</button>
              </div>
            ))}
          </div>

          <div className="section-footer">
            <a href="#" className="link-arrow">View all roadmaps →</a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="section-header">
            <h2>Why Learn to Code?</h2>
            <p>Coding skills open doors to opportunities and develop critical thinking abilities</p>
          </div>

          <div className="benefit-cards">
            {benefits.map(benefit => (
              <div key={benefit.id} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* details sec */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Our step-by-step approach makes learning to code simple and engaging</p>
          </div>

          <div className="steps-container">
            <div className="steps">
              {steps.map(step => (
                <div key={step.id} className="step">
                  <div className="step-number">{step.id}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="steps-image">
              <img src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Students working on coding projects" />
            </div>
          </div>
        </div>
      </section>

      {/* feedback sec */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Student Success Stories</h2>
            <p>Hear from students who have followed our roadmaps and achieved their coding goals</p>
          </div>

          <div className="testimonial-cards">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="avatar">{testimonial.name.charAt(0)}</div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.grade}, {testimonial.location}</p>
                  </div>
                </div>
                <div className="stars">
                  {"★".repeat(Math.floor(testimonial.stars))}
                  {testimonial.stars % 1 !== 0 && "☆"}
                </div>
                <p className="testimonial-text">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* banner sec */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Begin Your Coding Journey?</h2>
          <p>Join thousands of students who are building the skills of tomorrow, today.</p>
          <div className="cta-buttons">
            <button className="btn-secondary">Get Started for Free</button>
            <button className="btn-outline light">Explore Roadmaps</button>
          </div>
        </div>
      </section>   
</div>
  );
}

export default App;