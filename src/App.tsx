import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Editor from './pages/Editor';
import { CodeProvider } from './context/CodeContext';

function App() {
  return (
    <Router>
      <CodeProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/editor" element={<Editor />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </CodeProvider>
    </Router>
  );
}

export default App;