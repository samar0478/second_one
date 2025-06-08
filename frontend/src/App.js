import React, { useState, useEffect } from 'react';
import './App.css';
import OfflineIndicator from './components/OfflineIndicator';
import InstallPrompt from './components/InstallPrompt';
import useServiceWorker from './hooks/useServiceWorker';
import SAMPLE_CONTENT from './content';
// Enhanced Content Data with Essential Skills section


function App() {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [currentGrade, setCurrentGrade] = useState(null);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [visitedLessons, setVisitedLessons] = useState(() => {
    const saved = localStorage.getItem('visitedLessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [showOfflineSettings, setShowOfflineSettings] = useState(false);

  // Service Worker integration
  const { 
    isServiceWorkerReady, 
    isServiceWorkerUpdated, 
    cacheSize, 
    updateServiceWorker,
    updateCacheSize,
    clearCache 
  } = useServiceWorker();

  // Force re-render when language changes
  const [, forceUpdate] = useState({});
  
  const content = SAMPLE_CONTENT[language] || SAMPLE_CONTENT.en;

  // Search functionality - fixed to actually work
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = [];
    const grades = ['grade9', 'grade10', 'essentials'];
    
    grades.forEach(gradeKey => {
      const grade = content.grades[gradeKey];
      if (grade && grade.topics) {
        grade.topics.forEach(topic => {
          if (topic.lessons) {
            topic.lessons.forEach(lesson => {
              if (lesson.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push({
                  grade: gradeKey,
                  gradeTitle: grade.title,
                  topic: topic.id,
                  topicTitle: topic.title,
                  lesson: lesson.id,
                  lessonTitle: lesson.title,
                  icon: topic.icon
                });
              }
            });
          }
        });
      }
    });
    
    setSearchResults(results);
    setShowSearchResults(results.length > 0);
  }, [searchTerm, content]);

  const handleSearchResultClick = (result) => {
    setCurrentGrade(result.grade);
    setCurrentTopic(result.topic);
    setCurrentLesson(result.lesson);
    setSearchTerm('');
    setShowSearchResults(false);
    setSidebarOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('visitedLessons', JSON.stringify(visitedLessons));
  }, [visitedLessons]);

  useEffect(() => {
    if (currentLesson) {
      const lessonId = `${currentGrade}-${currentTopic}-${currentLesson}`;
      if (!visitedLessons.includes(lessonId)) {
        setVisitedLessons([...visitedLessons, lessonId]);
      }
    }
  }, [currentLesson, currentGrade, currentTopic, visitedLessons]);

  // Force re-render when language changes
  useEffect(() => {
    forceUpdate({});
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    console.log('Changing language to:', newLanguage);
    setLanguage(newLanguage);
    // Force component re-render
    setTimeout(() => forceUpdate({}), 10);
  };

  const getCurrentLessonData = () => {
    if (!currentGrade || !currentTopic || !currentLesson) return null;
    const grade = content.grades[currentGrade];
    const topic = grade?.topics.find(t => t.id === currentTopic);
    const lesson = topic?.lessons.find(l => l.id === currentLesson);
    return { grade, topic, lesson };
  };

  const navigateLesson = (direction) => {
    const { grade, topic } = getCurrentLessonData();
    if (!grade || !topic) return;

    const currentLessonIndex = topic.lessons.findIndex(l => l.id === currentLesson);
    if (direction === 'next' && currentLessonIndex < topic.lessons.length - 1) {
      setCurrentLesson(topic.lessons[currentLessonIndex + 1].id);
    } else if (direction === 'prev' && currentLessonIndex > 0) {
      setCurrentLesson(topic.lessons[currentLessonIndex - 1].id);
    }
  };

  const downloadPDF = () => {
    const { lesson } = getCurrentLessonData();
    if (!lesson) return;
    
    // Simple PDF generation (in real implementation, use jsPDF or similar)
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${lesson.title}</title>
          <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
          <h1>${lesson.title}</h1>
          ${lesson.content}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  if (!currentGrade) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
        {/* Offline Indicator */}
        <OfflineIndicator />
        
        {/* Install Prompt */}
        <InstallPrompt />

        {/* Service Worker Update Banner */}
        {isServiceWorkerUpdated && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white px-4 py-3 text-center">
            <div className="flex items-center justify-center space-x-4">
              <span>A new version is available!</span>
              <button
                onClick={updateServiceWorker}
                className="bg-white text-blue-500 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Update Now
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <header className={`sticky top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80 border-blue-100'} backdrop-blur-md border-b`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-2">
                <div className="text-2xl">📚</div>
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {content.siteName}
                </h1>
                {/* Offline Status Indicator */}
                {isServiceWorkerReady && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Offline Ready
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="hidden sm:block relative">
                  <input
                    type="text"
                    placeholder={content.search}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  
                  {/* Search Results Dropdown */}
                  {showSearchResults && (
                    <div className={`absolute top-full left-0 right-0 mt-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50`}>
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchResultClick(result)}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 last:border-b-0`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{result.icon}</span>
                            <div>
                              <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {result.lessonTitle}
                              </div>
                              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {result.gradeTitle} • {result.topicTitle}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Offline Settings Button */}
                <button
                  onClick={() => setShowOfflineSettings(!showOfflineSettings)}
                  className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 text-gray-400 hover:text-gray-300' : 'bg-gray-100 text-gray-600 hover:text-gray-700'}`}
                  title="Offline Settings"
                >
                  ⚙️
                </button>

                {/* Language Toggle */}
                <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange('np')}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'np' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                  >
                    नेपाली
                  </button>
                </div>

                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
                >
                  {darkMode ? content.lightMode : content.darkMode}
                </button>
              </div>
            </div>
            
            {/* Offline Settings Panel */}
            {showOfflineSettings && (
              <div className={`absolute top-full left-0 right-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t shadow-lg p-4`}>
                <div className="max-w-7xl mx-auto">
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Offline Settings
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-green-500">✓</span>
                        <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          App Status
                        </span>
                      </div>
                      <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {isServiceWorkerReady ? 'Ready for offline use' : 'Setting up offline mode...'}
                      </p>
                    </div>
                    
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-blue-500">💾</span>
                        <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Cache Size
                        </span>
                      </div>
                      <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {cacheSize}
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <button
                          onClick={updateCacheSize}
                          className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                          Refresh
                        </button>
                        <button
                          onClick={clearCache}
                          className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                    
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-purple-500">📱</span>
                        <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Install App
                        </span>
                      </div>
                      <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Install for the best offline experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="mb-8">
              <img 
                src="/images/front.png" 
                alt="Students learning programming"
                className="mx-auto w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {content.subtitle}
            </h2>
            <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {content.tagline}
            </p>
            
            {/* Grade Selection Cards - Now with 3 options */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div 
                onClick={() => setCurrentGrade('grade9')}
                className={`cursor-pointer group transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-blue-50'} rounded-2xl p-8 shadow-xl hover:shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-blue-100'}`}
              >
                <div className="text-6xl mb-4">🎯</div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {content.startGrade9}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Computer Basics & Fundamentals
                </p>
              </div>

              <div 
                onClick={() => setCurrentGrade('grade10')}
                className={`cursor-pointer group transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-blue-50'} rounded-2xl p-8 shadow-xl hover:shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-blue-100'}`}
              >
                <div className="text-6xl mb-4">🚀</div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {content.startGrade10}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Programming & Advanced Concepts
                </p>
              </div>

              {/* NEW Essential Skills Section */}
              <div 
                onClick={() => setCurrentGrade('essentials')}
                className={`cursor-pointer group transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-green-50'} rounded-2xl p-8 shadow-xl hover:shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-green-100'}`}
              >
                <div className="text-6xl mb-4">⚡</div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {content.startEssentials}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Downloads, Setup & Practical Skills
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className={`text-center p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Multilingual
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Learn in English or Nepali
              </p>
            </div>

            <div className={`text-center p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-4xl mb-4">📱</div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Mobile Friendly
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Works perfectly on all devices
              </p>
            </div>

            <div className={`text-center p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Smart Search
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Find lessons instantly
              </p>
            </div>

            <div className={`text-center p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-4xl mb-4">🆓</div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Completely Free
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                No signup required
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentLessonData = getCurrentLessonData();
  const gradeData = content.grades[currentGrade];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`md:hidden p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                ☰
              </button>
              
              <div 
                onClick={() => setCurrentGrade(null)}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="text-2xl">📚</div>
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {content.siteName}
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden sm:block relative">
                <input
                  type="text"
                  placeholder={content.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                
                {/* Search Results Dropdown */}
                {showSearchResults && (
                  <div className={`absolute top-full left-0 right-0 mt-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50`}>
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchResultClick(result)}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 last:border-b-0`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{result.icon}</span>
                          <div>
                            <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {result.lessonTitle}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {result.gradeTitle} • {result.topicTitle}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Toggle */}
              <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('np')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'np' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  नेपाली
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {darkMode ? content.lightMode : content.darkMode}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-80 transition-transform duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r overflow-y-auto`}>
          <div className="p-6">
            <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {gradeData.title}
            </h2>
            
            {gradeData.topics.map(topic => (
              <div key={topic.id} className="mb-6">
                <h3 
                  onClick={() => setCurrentTopic(currentTopic === topic.id ? null : topic.id)}
                  className={`flex items-center justify-between cursor-pointer font-semibold text-lg mb-3 p-3 rounded-lg transition-colors ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-50'}`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-xl">{topic.icon}</span>
                    <span>{topic.title}</span>
                  </span>
                  <span className={`transform transition-transform ${currentTopic === topic.id ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </h3>
                
                {currentTopic === topic.id && (
                  <div className="ml-4 space-y-2">
                    {topic.lessons.map(lesson => {
                      const lessonId = `${currentGrade}-${topic.id}-${lesson.id}`;
                      const isVisited = visitedLessons.includes(lessonId);
                      const isActive = currentLesson === lesson.id;
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setCurrentLesson(lesson.id)}
                          className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-2 ${
                            isActive 
                              ? 'bg-blue-500 text-white' 
                              : darkMode 
                                ? 'text-gray-300 hover:bg-gray-700' 
                                : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${isVisited ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                          <span>{lesson.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {currentLessonData?.lesson ? (
            <div className="max-w-4xl mx-auto p-6">
              {/* Lesson Header */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
                <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentLessonData.lesson.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                    {currentLessonData.topic.title}
                  </span>
                  <button
                    onClick={downloadPDF}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                  >
                    {content.downloadPdf}
                  </button>
                </div>
              </div>

              {/* Lesson Content */}
              <div className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} rounded-lg shadow-lg p-8 mb-6 lesson-content`}>
                <div dangerouslySetInnerHTML={{ __html: currentLessonData.lesson.content }} />
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => navigateLesson('prev')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                >
                  {content.previous}
                </button>
                
                <button
                  onClick={() => navigateLesson('next')}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  {content.next}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-6xl mb-4">📖</div>
                <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Select a Lesson
                </h2>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Choose a topic and lesson from the sidebar to get started
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default App;