import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Trade with Rashid by ZuluTrade</h1>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Demo Project</h2>
          <p className="text-gray-300 mb-6">
            This is a portfolio/demo project created to showcase modern web development skills.
            It mimics the design and functionality of popular trading platforms like ZuluTrade,
            but contains entirely fictional data and no real trading functionality.
          </p>

          <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
            <li>React 18 with Vite for fast development</li>
            <li>Tailwind CSS for responsive styling</li>
            <li>Recharts for data visualization</li>
            <li>React Router for navigation</li>
            <li>Lucide React for icons</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Features Demonstrated</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
            <li>Modern React hooks and state management</li>
            <li>Responsive design for desktop and mobile</li>
            <li>Data filtering and sorting</li>
            <li>Interactive charts and visualizations</li>
            <li>Clean component architecture</li>
            <li>Professional UI/UX design</li>
          </ul>

          <p className="text-gray-300">
            <strong>Important:</strong> This is not a real trading platform. All data is mock/fake
            and should not be used for any financial decisions. This project is for educational
            and portfolio purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
