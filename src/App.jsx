import React from 'react';
import NavBar from './components/NavBar';
import All from './components/All';
import Fullstackdev from './components/Fullstackdev';
import Datascience from './components/Datascience';
import Cybersecurity from './components/Cybersecurity';
import Career from './components/Career';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./components/style/style.css";//css file styles

const App = () => {
    let data = [
      {
        "id":1,
        "topic":"FullStackDevelopment",
        "heading": "Getting Started with Fullstack Development",
        "description": "A beginner's guide to fullstack development, covering essential front-end and back-end technologies.",
        "image_url": "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":2,
        "topic":"FullStackDevelopment",
        "heading": "Building Responsive Web Applications",
        "description": "Learn how to create responsive and user-friendly web applications using fullstack development principles.",
          "image_url": "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "date": "8 nov 2023",
        "comments":"no comments"
        
      },
        {
        "id":3,
        "topic":"FullStackDevelopment",
        "heading": "Mastering Fullstack Development",
        "description": "Learn the ins and outs of fullstack development, from front-end to back-end technologies, and become a proficient fullstack developer.",
            "image_url": "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
         "id":4,
        "topic":"FullStackDevelopment",
        "heading": "Introduction to Node.js and Express",
        "description": "Explore the fundamentals of Node.js and Express framework for building powerful server-side applications.",
          "image_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
         "id":5,
        "topic":"FullStackDevelopment",
        "heading": "Frontend Frameworks: Angular, React, Vue",
          "description": "A comparative overview of popular frontend frameworks Angular, React, and Vue.js for fullstack development.",
          "image_url": "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
         "id":6,
        "topic":"FullStackDevelopment",
        "heading": "Database Management with MongoDB",
          "description": "Discover the basics of MongoDB and how to integrate it into your fullstack applications for efficient data management.",
          "image_url": "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
         "id":7,
        "topic":"FullStackDevelopment",
        "heading": "Authentication and Authorization",
          "description": "Implement secure authentication and authorization mechanisms in your fullstack applications to protect user data.",
          "image_url": "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
         "id":8,
        "topic":"FullStackDevelopment",
        "heading": "Deploying Fullstack Applications with Docker",
          "description": "Learn how to containerize and deploy fullstack applications using Docker for simplified development and deployment.",
          "image_url": "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
         "id":9,
        "topic":"FullStackDevelopment",
        "heading": "Testing Strategies for Fullstack Applications",
          "description": "Explore various testing techniques and tools for ensuring the reliability and quality of fullstack applications.",
          "image_url": "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
         "id":10,
        "topic":"FullStackDevelopment",
        "heading": "Scaling Fullstack Applications",
        "description": "Strategies and best practices for scaling fullstack applications to handle increased traffic and user demands.",
          "image_url": "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
         "id":11,
        "topic":"FullStackDevelopment",
        "heading": "Continuous Integration and Deployment (CI/CD)",
        "description": "Implement CI/CD pipelines for automating the build, test, and deployment process of fullstack applications.",
          "image_url": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
        },
      { 
        "id":12,
        "topic":"datascience",
        "heading": "Introduction to Data Science",
        "description": "An overview of the fundamentals of data science, including data analysis, visualization, and machine learning.",
          "image_url": "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":13,
        "topic":"datascience",
        "heading": "Data Preprocessing Techniques",
          "description": "Learn how to preprocess and clean data effectively for use in data science projects and machine learning models.",
          "image_url": "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":14,
        "topic":"datascience",
        "heading": "Supervised Learning Algorithms",
          "description": "Explore popular supervised learning algorithms such as linear regression, decision trees, and support vector machines.",
          "image_url": "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":15,
        "topic":"datascience",
        "heading": "Unsupervised Learning Techniques",
        "description": "An introduction to unsupervised learning methods including clustering, dimensionality reduction, and association analysis.",
          "image_url": "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":16,
        "topic":"datascience",
        "heading": "Deep Learning Fundamentals",
          "description": "Discover the principles of deep learning and neural networks, including architectures like CNNs and RNNs.",
          "image_url": "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":17,
        "topic":"datascience",
        "heading": "Natural Language Processing (NLP)",
          "description": "Learn how to process and analyze natural language data using NLP techniques for tasks like sentiment analysis and text generation.",
          "image_url": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":18,
        "topic":"datascience",
        "heading": "Time Series Analysis",
          "description": "An overview of time series analysis techniques for analyzing and forecasting sequential data, with applications in finance, economics, and more.",
          "image_url": "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":19,
        "topic":"datascience",
        "heading": "Model Evaluation and Validation",
        "description": "Understand how to evaluate and validate machine learning models to ensure their accuracy and generalization to new data.",
        "image_url": "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600",
        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":20,
        "topic":"datascience",
        "heading": "Feature Engineering",
        "description": "Techniques for feature engineering to create meaningful and informative features from raw data for use in machine learning models.",
        "image_url": "https://images.pexels.com/photos/270549/pexels-photo-270549.jpeg?auto=compress&cs=tinysrgb&w=600",
        "date": "8 nov 2023",
        "comments":"no comments"
      },
      { 
        "id":21,
        "topic":"datascience",
        "heading": "Big Data Analytics with Spark",
        "description": "Introduction to Apache Spark for processing and analyzing large-scale datasets efficiently in distributed computing environments.",
          "image_url": "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
        },
      {
        "id":22,
        "topic":"career",
        "heading": "Choosing the Right Career Path",
        "description": "Guidance on how to explore different career options and choose a path that aligns with your interests, skills, and goals.",
          "image_url": "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":23,
        "topic":"career",
        "heading": "Effective Resume Writing",
        "description": "Tips and best practices for crafting a compelling resume that highlights your qualifications and experiences to potential employers.",
          "image_url": "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":24,
        "topic":"career",
        "heading": "Preparing for Job Interviews",
          "description": "Strategies for preparing for job interviews, including researching the company, practicing common interview questions, and presenting yourself confidently.",
          "image_url": "https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":25,
        "topic":"career",
        "heading": "Networking for Career Growth",
          "description": "Learn how to build and maintain professional networks to enhance your career opportunities and stay connected with industry peers.",
          "image_url": "https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":26,
        "topic":"career",
        "heading": "Negotiating Job Offers",
          "description": "Advice on negotiating job offers, including salary negotiation, benefits, and other aspects of the job offer package.",
          "image_url": "https://images.pexels.com/photos/653429/pexels-photo-653429.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":27,
        "topic":"career",
        "heading": "Career Development and Advancement",
          "description": "Strategies for advancing your career, including setting goals, seeking opportunities for growth, and continuously improving your skills.",
          "image_url": "https://images.pexels.com/photos/4065158/pexels-photo-4065158.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":28,
        "topic":"career",
        "heading": "Building a Personal Brand",
          "description": "Tips for building a strong personal brand online and offline to showcase your expertise and attract career opportunities.",
          "image_url": "https://images.pexels.com/photos/2977567/pexels-photo-2977567.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":29,
        "topic":"career",
        "heading": "Navigating Career Transitions",
          "description": "Guidance on how to successfully navigate career transitions, whether switching industries, roles, or pursuing further education.",
          "image_url": "https://images.pexels.com/photos/4065137/pexels-photo-4065137.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":30,
        "topic":"career",
        "heading": "Work-Life Balance",
          "description": "Importance of maintaining a healthy work-life balance and strategies for managing stress and prioritizing personal well-being alongside professional responsibilities.",
          "image_url": "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":31,
        "topic":"career",
        "heading": "Continuous Learning and Skill Development",
          "description": "The significance of continuous learning in career development and practical ways to acquire new skills and knowledge throughout your career journey.",
          "image_url": "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
        },
      {
        "id":32,
        "topic":"cybersecurity",
        "heading": "Understanding Cybersecurity Fundamentals",
        "description": "An introduction to cybersecurity concepts, threats, and best practices for protecting digital assets and information.",
          "image_url": "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":33,
        "topic":"cybersecurity",
        "heading": "Securing Networks and Systems",
          "description": "Learn essential techniques and tools for securing networks and systems against cyber threats such as malware, hackers, and data breaches.",
          "image_url": "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":34,
        "topic":"cybersecurity",
        "heading": "Cybersecurity Policies and Compliance",
          "description": "Overview of cybersecurity policies, regulations, and compliance standards to ensure organizations meet legal and industry requirements.",
          "image_url": "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":35,
        "topic":"cybersecurity",
        "heading": "Ethical Hacking and Penetration Testing",
          "description": "Explore the field of ethical hacking and penetration testing to identify and address vulnerabilities in systems and applications.",
          "image_url": "https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":36,
        "topic":"cybersecurity",
        "heading": "Incident Response and Disaster Recovery",
          "description": "Develop incident response plans and disaster recovery strategies to mitigate the impact of cybersecurity incidents and ensure business continuity.",
          "image_url": "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":37,
        "topic":"cybersecurity",
        "heading": "Cryptographic Principles and Practices",
        "description": "Understanding cryptographic principles and practices for securing data, communications, and identities in digital environments.",
          "image_url": "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":38,
        "topic":"cybersecurity",
        "heading": "Security Threat Intelligence",
        "description": "Learn how to gather, analyze, and leverage security threat intelligence to proactively defend against cyber threats and attacks.",
          "image_url": "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":39,
        "topic":"cybersecurity",
        "heading": "Cloud Security Best Practices",
        "description": "Best practices for securing cloud environments and services to protect data and applications hosted in the cloud.",
          "image_url": "https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":40,
        "topic":"cybersecurity",
        "heading": "Mobile Security",
        "description": "Explore mobile security challenges and solutions, including secure app development, device management, and data protection.",
          "image_url": "https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      },
      {
        "id":41,
        "topic":"cybersecurity",
        "heading": "Cybersecurity Career Paths",
        "description": "Overview of various career paths in cybersecurity, including roles, skills required, and opportunities for professional growth.",
          "image_url": "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600",
                "date": "8 nov 2023",
        "comments":"no comments"
      }
    ]
    return (
        <>
            <div className='container'>
                <BrowserRouter>
                    <NavBar />
                        <div className='card-container'>
                        <Routes>
                        <Route path='/' element={<All data={data}/>}/>         
                        <Route path='/fullstackdev' element={<Fullstackdev data={data} />} />     
                        <Route path='/datascience' element={<Datascience data={data} />} />     
                        <Route path='/cybersecurity' element={<Cybersecurity data={data}/>} />     
                        <Route path='/career' element={<Career data={data}/>}/>     
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
      </>
  );
};

export default App;