import React, { useState, useEffect } from 'react';
import './App.css';
import OfflineIndicator from './components/OfflineIndicator';
import InstallPrompt from './components/InstallPrompt';
import useServiceWorker from './hooks/useServiceWorker';

// Sample Content Data - Easy to modify!
const SAMPLE_CONTENT = {
  en: {
    siteName: "Coding Guide",
    subtitle: "Learn Computer Science the Fun Way!",
    tagline: "Empowering Grade 9 & 10 students with essential CS knowledge",
    startGrade9: "Start Grade 9",
    startGrade10: "Start Grade 10",
    about: "About",
    search: "Search lessons...",
    previous: "← Previous",
    next: "Next →",
    downloadPdf: "📄 Download PDF",
    progressText: "Your Progress",
    darkMode: "🌙",
    lightMode: "☀️",
    grades: {
      grade9: {
        title: "Grade 9 Computer Science",
        topics: [
          {
            id: "intro",
            title: "📱 Introduction to Computers", 
            icon: "💻",
            lessons: [
              {
                id: "what-is-computer",
                title: "What is a Computer?",
                content: `
                  <h2>What is a Computer? 🖥️</h2>
                  <p>A computer is an electronic device that processes data according to a set of instructions called programs.</p>
                  
                  <h3>Key Characteristics:</h3>
                  <ul>
                    <li><strong>Speed:</strong> Computers can perform millions of calculations per second</li>
                    <li><strong>Accuracy:</strong> Computers rarely make mistakes when programmed correctly</li>
                    <li><strong>Storage:</strong> Can store vast amounts of information</li>
                    <li><strong>Automation:</strong> Can work without human intervention</li>
                  </ul>

                  <h3>Types of Computers:</h3>
                  <ol>
                    <li><strong>Personal Computers (PC)</strong> - Desktop and laptop computers</li>
                    <li><strong>Servers</strong> - Powerful computers that serve many users</li>
                    <li><strong>Supercomputers</strong> - Extremely fast computers for complex calculations</li>
                    <li><strong>Embedded Systems</strong> - Computers built into other devices</li>
                  </ol>

                  <div class="fun-fact">
                    💡 <strong>Fun Fact:</strong> The first computer ENIAC weighed 30 tons and took up an entire room!
                  </div>
                `
              },
              {
                id: "computer-history",
                title: "History of Computers",
                content: `
                  <h2>History of Computers 📚</h2>
                  <p>The evolution of computers spans several generations, each marked by significant technological advances.</p>

                  <h3>Computer Generations:</h3>
                  
                  <div class="generation">
                    <h4>🔹 First Generation (1940-1956): Vacuum Tubes</h4>
                    <ul>
                      <li>Used vacuum tubes for processing</li>
                      <li>Examples: ENIAC, UNIVAC</li>
                      <li>Very large and consumed lots of power</li>
                    </ul>
                  </div>

                  <div class="generation">
                    <h4>🔹 Second Generation (1956-1963): Transistors</h4>
                    <ul>
                      <li>Replaced vacuum tubes with transistors</li>
                      <li>Smaller, faster, and more reliable</li>
                      <li>Introduction of programming languages</li>
                    </ul>
                  </div>

                  <div class="generation">
                    <h4>🔹 Third Generation (1964-1971): Integrated Circuits</h4>
                    <ul>
                      <li>Multiple transistors on single chip</li>
                      <li>Much smaller and cheaper</li>
                      <li>Development of operating systems</li>
                    </ul>
                  </div>

                  <div class="generation">
                    <h4>🔹 Fourth Generation (1971-Present): Microprocessors</h4>
                    <ul>
                      <li>Entire CPU on a single chip</li>
                      <li>Personal computers become popular</li>
                      <li>Internet and mobile computing</li>
                    </ul>
                  </div>

                  <div class="timeline">
                    <h4>🕐 Important Milestones:</h4>
                    <ul>
                      <li><strong>1975:</strong> First personal computer (Altair 8800)</li>
                      <li><strong>1981:</strong> IBM PC launched</li>
                      <li><strong>1991:</strong> World Wide Web created</li>
                      <li><strong>2007:</strong> First iPhone introduced</li>
                    </ul>
                  </div>
                `
              }
            ]
          },
          {
            id: "hardware",
            title: "🔧 Computer Hardware",
            icon: "⚙️", 
            lessons: [
              {
                id: "input-devices",
                title: "Input Devices",
                content: `
                  <h2>Input Devices 🎯</h2>
                  <p>Input devices allow users to enter data and commands into a computer system.</p>

                  <h3>Common Input Devices:</h3>
                  
                  <div class="device-grid">
                    <div class="device">
                      <h4>⌨️ Keyboard</h4>
                      <ul>
                        <li>Primary text input device</li>
                        <li>QWERTY layout most common</li>
                        <li>Special function keys (F1-F12)</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>🖱️ Mouse</h4>
                      <ul>
                        <li>Pointing device for navigation</li>
                        <li>Left click, right click, scroll wheel</li>
                        <li>Optical or laser technology</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>📱 Touchscreen</h4>
                      <ul>
                        <li>Touch-sensitive display</li>
                        <li>Multi-touch gestures</li>
                        <li>Used in phones, tablets</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>🎤 Microphone</h4>
                      <ul>
                        <li>Audio input device</li>
                        <li>Voice commands</li>
                        <li>Recording and communication</li>
                      </ul>
                    </div>
                  </div>

                  <h3>Modern Input Technologies:</h3>
                  <ul>
                    <li><strong>Voice Recognition:</strong> Siri, Alexa, Google Assistant</li>
                    <li><strong>Gesture Control:</strong> Motion sensors, hand tracking</li>
                    <li><strong>Eye Tracking:</strong> Control using eye movements</li>
                    <li><strong>Brain-Computer Interface:</strong> Direct neural control</li>
                  </ul>
                `
              },
              {
                id: "output-devices", 
                title: "Output Devices",
                content: `
                  <h2>Output Devices 📺</h2>
                  <p>Output devices display or present information from the computer to users.</p>

                  <h3>Visual Output Devices:</h3>
                  
                  <div class="device-grid">
                    <div class="device">
                      <h4>🖥️ Monitor</h4>
                      <ul>
                        <li>Primary visual output</li>
                        <li>LCD, LED, OLED technologies</li>
                        <li>Various resolutions: HD, 4K, 8K</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>📽️ Projector</h4>
                      <ul>
                        <li>Large screen display</li>
                        <li>Presentations and movies</li>
                        <li>DLP or LCD technology</li>
                      </ul>
                    </div>
                  </div>

                  <h3>Audio Output Devices:</h3>
                  
                  <div class="device-grid">
                    <div class="device">
                      <h4>🔊 Speakers</h4>
                      <ul>
                        <li>Convert electrical signals to sound</li>
                        <li>Built-in or external</li>
                        <li>Stereo or surround sound</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>🎧 Headphones</h4>
                      <ul>
                        <li>Personal audio output</li>
                        <li>Wired or wireless</li>
                        <li>Noise cancelling features</li>
                      </ul>
                    </div>
                  </div>

                  <h3>Physical Output Devices:</h3>
                  
                  <div class="device">
                    <h4>🖨️ Printer</h4>
                    <ul>
                      <li><strong>Inkjet:</strong> Uses liquid ink cartridges</li>
                      <li><strong>Laser:</strong> Uses toner powder</li>
                      <li><strong>3D Printer:</strong> Creates physical objects</li>
                    </ul>
                  </div>

                  <div class="future-tech">
                    <h4>🚀 Future Output Technologies:</h4>
                    <ul>
                      <li>Virtual Reality (VR) headsets</li>
                      <li>Augmented Reality (AR) displays</li>
                      <li>Holographic projections</li>
                      <li>Haptic feedback devices</li>
                    </ul>
                  </div>
                `
              }
            ]
          }
        ]
      },
      grade10: {
        title: "Grade 10 Computer Science",
        topics: [
          {
            id: "programming",
            title: "💻 Introduction to Programming",
            icon: "🐍",
            lessons: [
              {
                id: "what-is-programming",
                title: "What is Programming?",
                content: `
                  <h2>What is Programming? 👨‍💻</h2>
                  <p>Programming is the process of creating instructions for computers to solve problems and perform tasks.</p>

                  <h3>Key Concepts:</h3>
                  <ul>
                    <li><strong>Algorithm:</strong> Step-by-step solution to a problem</li>
                    <li><strong>Code:</strong> Instructions written in a programming language</li>
                    <li><strong>Program:</strong> Complete set of instructions</li>
                    <li><strong>Bug:</strong> Error in the code</li>
                    <li><strong>Debug:</strong> Process of finding and fixing bugs</li>
                  </ul>

                  <h3>Popular Programming Languages:</h3>
                  
                  <div class="language-grid">
                    <div class="language">
                      <h4>🐍 Python</h4>
                      <p>Great for beginners, used in AI and web development</p>
                    </div>
                    
                    <div class="language">
                      <h4>☕ Java</h4>
                      <p>Object-oriented, used in enterprise applications</p>
                    </div>
                    
                    <div class="language">
                      <h4>🌐 JavaScript</h4>
                      <p>Essential for web development and interactivity</p>
                    </div>
                    
                    <div class="language">
                      <h4>⚡ C++</h4>
                      <p>Fast and powerful, used in games and systems</p>
                    </div>
                  </div>

                  <h3>Programming Process:</h3>
                  <ol>
                    <li><strong>Problem Analysis:</strong> Understand what needs to be solved</li>
                    <li><strong>Algorithm Design:</strong> Plan the solution steps</li>
                    <li><strong>Coding:</strong> Write the program</li>
                    <li><strong>Testing:</strong> Check if it works correctly</li>
                    <li><strong>Debugging:</strong> Fix any errors</li>
                    <li><strong>Documentation:</strong> Explain how it works</li>
                  </ol>

                  <div class="code-example">
                    <h4>🎯 Simple Python Example:</h4>
                    <pre><code>
# This program greets the user
name = input("What's your name? ")
print(f"Hello, {name}! Welcome to programming!")
                    </code></pre>
                  </div>
                `
              },
              {
                id: "algorithms",
                title: "Algorithms and Flowcharts",
                content: `
                  <h2>Algorithms and Flowcharts 📊</h2>
                  <p>An algorithm is a step-by-step method for solving problems. Flowcharts visualize these steps.</p>

                  <h3>What is an Algorithm?</h3>
                  <ul>
                    <li>Finite sequence of well-defined instructions</li>
                    <li>Solves a specific problem</li>
                    <li>Must terminate after finite steps</li>
                    <li>Should be unambiguous and effective</li>
                  </ul>

                  <h3>Algorithm Example - Making Tea:</h3>
                  <ol>
                    <li>Boil water in a kettle</li>
                    <li>Add tea leaves to teapot</li>
                    <li>Pour hot water over tea leaves</li>
                    <li>Let it steep for 3-5 minutes</li>
                    <li>Strain tea into cup</li>
                    <li>Add sugar/milk if desired</li>
                    <li>Serve hot</li>
                  </ol>

                  <h3>Flowchart Symbols:</h3>
                  
                  <div class="symbol-grid">
                    <div class="symbol">
                      <h4>🔵 Oval</h4>
                      <p>Start/End</p>
                    </div>
                    
                    <div class="symbol">
                      <h4>📦 Rectangle</h4>
                      <p>Process/Action</p>
                    </div>
                    
                    <div class="symbol">
                      <h4>💎 Diamond</h4>
                      <p>Decision</p>
                    </div>
                    
                    <div class="symbol">
                      <h4>📥 Parallelogram</h4>
                      <p>Input/Output</p>
                    </div>
                  </div>

                  <h3>Algorithm for Finding Maximum of Two Numbers:</h3>
                  <ol>
                    <li>Start</li>
                    <li>Input first number (A)</li>
                    <li>Input second number (B)</li>
                    <li>If A > B, then Max = A</li>
                    <li>Else Max = B</li>
                    <li>Display Max</li>
                    <li>End</li>
                  </ol>

                  <div class="practice-box">
                    <h4>🎯 Practice Exercise:</h4>
                    <p>Try creating an algorithm and flowchart for:</p>
                    <ul>
                      <li>Calculating area of a rectangle</li>
                      <li>Checking if a number is even or odd</li>
                      <li>Finding the largest of three numbers</li>
                    </ul>
                  </div>
                `
              }
            ]
          }
        ]
      }
    }
  },
  np: {
    siteName: "कोडिङ गाइड",
    subtitle: "कम्प्युटर विज्ञान मजाले सिक्नुहोस्!",
    tagline: "कक्षा ९ र १० का विद्यार्थीहरूलाई आवश्यक CS ज्ञान प्रदान गर्दै",
    startGrade9: "कक्षा ९ सुरु गर्नुहोस्",
    startGrade10: "कक्षा १० सुरु गर्नुहोस्",
    about: "बारेमा",
    search: "पाठहरू खोज्नुहोस्...",
    previous: "← अघिल्लो",
    next: "अर्को →",
    downloadPdf: "📄 PDF डाउनलोड",
    progressText: "तपाईंको प्रगति",
    darkMode: "🌙",
    lightMode: "☀️",
    grades: {
      grade9: {
        title: "कक्षा ९ कम्प्युटर विज्ञान",
        topics: [
          {
            id: "intro",
            title: "📱 कम्प्युटरको परिचय", 
            icon: "💻",
            lessons: [
              {
                id: "what-is-computer",
                title: "कम्प्युटर के हो?",
                content: `
                  <h2>कम्प्युटर के हो? 🖥️</h2>
                  <p>कम्प्युटर एक इलेक्ट्रोनिक उपकरण हो जसले प्रोग्राम भनिने निर्देशनहरू अनुसार डाटा प्रक्रिया गर्छ।</p>
                  
                  <h3>मुख्य विशेषताहरू:</h3>
                  <ul>
                    <li><strong>गति:</strong> कम्प्युटरले प्रति सेकेन्ड लाखौं गणना गर्न सक्छ</li>
                    <li><strong>शुद्धता:</strong> सही प्रोग्राम गर्दा कम्प्युटरले विरलै गल्ती गर्छ</li>
                    <li><strong>भण्डारण:</strong> ठूलो मात्रामा जानकारी भण्डारण गर्न सक्छ</li>
                    <li><strong>स्वचालन:</strong> मानव हस्तक्षेप बिना काम गर्न सक्छ</li>
                  </ul>

                  <h3>कम्प्युटरका प्रकारहरू:</h3>
                  <ol>
                    <li><strong>व्यक्तिगत कम्प्युटर (PC)</strong> - डेस्कटप र ल्यापटप कम्प्युटर</li>
                    <li><strong>सर्भर</strong> - धेरै प्रयोगकर्ताहरूलाई सेवा दिने शक्तिशाली कम्प्युटर</li>
                    <li><strong>सुपरकम्प्युटर</strong> - जटिल गणनाका लागि अत्यन्त तीव्र कम्प्युटर</li>
                    <li><strong>एम्बेडेड सिस्टम</strong> - अन्य उपकरणहरूमा निर्मित कम्प्युटर</li>
                  </ol>

                  <div class="fun-fact">
                    💡 <strong>रोचक तथ्य:</strong> पहिलो कम्प्युटर ENIAC को तौल ३० टन थियो र पूरै कोठा घेर्थे!
                  </div>
                `
              },
              {
                id: "computer-history",
                title: "कम्प्युटरको इतिहास",
                content: `
                  <h2>कम्प्युटरको इतिहास 📚</h2>
                  <p>कम्प्युटरको विकास धेरै पुस्ताहरूमा फैलिएको छ, हरेक महत्वपूर्ण प्राविधिक प्रगतिले चिह्नित।</p>

                  <h3>कम्प्युटर पुस्ताहरू:</h3>
                  
                  <div class="generation">
                    <h4>🔹 पहिलो पुस्ता (१९४०-१९५६): भ्याकुम ट्युब</h4>
                    <ul>
                      <li>प्रक्रियाका लागि भ्याकुम ट्युब प्रयोग</li>
                      <li>उदाहरण: ENIAC, UNIVAC</li>
                      <li>धेरै ठूलो र धेरै पावर खपत</li>
                    </ul>
                  </div>

                  <div class="generation">
                    <h4>🔹 दोस्रो पुस्ता (१९५६-१९६३): ट्रान्जिस्टर</h4>
                    <ul>
                      <li>भ्याकुम ट्युबलाई ट्रान्जिस्टरले प्रतिस्थापन</li>
                      <li>सानो, छिटो र अधिक भरपर्दो</li>
                      <li>प्रोग्रामिङ भाषाहरूको परिचय</li>
                    </ul>
                  </div>

                  <div class="generation">
                    <h4>🔹 तेस्रो पुस्ता (१९६४-१९७१): एकीकृत सर्किट</h4>
                    <ul>
                      <li>एकल चिपमा धेरै ट्रान्जिस्टर</li>
                      <li>धेरै सानो र सस्तो</li>
                      <li>अपरेटिङ सिस्टमको विकास</li>
                    </ul>
                  </div>

                  <div class="generation">
                    <h4>🔹 चौथो पुस्ता (१९७१-वर्तमान): माइक्रोप्रोसेसर</h4>
                    <ul>
                      <li>एकल चिपमा सम्पूर्ण CPU</li>
                      <li>व्यक्तिगत कम्प्युटर लोकप्रिय भयो</li>
                      <li>इन्टरनेट र मोबाइल कम्प्युटिङ</li>
                    </ul>
                  </div>

                  <div class="timeline">
                    <h4>🕐 महत्वपूर्ण माइलस्टोनहरू:</h4>
                    <ul>
                      <li><strong>१९७५:</strong> पहिलो व्यक्तिगत कम्प्युटर (Altair 8800)</li>
                      <li><strong>१९८१:</strong> IBM PC लन्च</li>
                      <li><strong>१९९१:</strong> वर्ल्ड वाइड वेब सिर्जना</li>
                      <li><strong>२००७:</strong> पहिलो iPhone परिचय</li>
                    </ul>
                  </div>
                `
              }
            ]
          },
          {
            id: "hardware",
            title: "🔧 कम्प्युटर हार्डवेयर",
            icon: "⚙️", 
            lessons: [
              {
                id: "input-devices",
                title: "इनपुट यन्त्रहरू",
                content: `
                  <h2>इनपुट यन्त्रहरू 🎯</h2>
                  <p>इनपुट यन्त्रहरूले प्रयोगकर्ताहरूलाई कम्प्युटर प्रणालीमा डाटा र आदेशहरू प्रविष्ट गर्न अनुमति दिन्छ।</p>

                  <h3>सामान्य इनपुट यन्त्रहरू:</h3>
                  
                  <div class="device-grid">
                    <div class="device">
                      <h4>⌨️ किबोर्ड</h4>
                      <ul>
                        <li>मुख्य पाठ इनपुट यन्त्र</li>
                        <li>QWERTY लेआउट सबैभन्दा सामान्य</li>
                        <li>विशेष प्रकार्य कुञ्जीहरू (F1-F12)</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>🖱️ माउस</h4>
                      <ul>
                        <li>नेभिगेसनका लागि पोइन्टिङ यन्त्र</li>
                        <li>बायाँ क्लिक, दायाँ क्लिक, स्क्रोल ह्वील</li>
                        <li>अप्टिकल वा लेजर प्रविधि</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>📱 टचस्क्रिन</h4>
                      <ul>
                        <li>स्पर्श-संवेदनशील डिस्प्ले</li>
                        <li>मल्टि-टच इशाराहरू</li>
                        <li>फोन, ट्याब्लेटमा प्रयोग</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>🎤 माइक्रोफोन</h4>
                      <ul>
                        <li>अडियो इनपुट यन्त्र</li>
                        <li>आवाज आदेशहरू</li>
                        <li>रेकर्डिङ र संचार</li>
                      </ul>
                    </div>
                  </div>

                  <h3>आधुनिक इनपुट प्रविधिहरू:</h3>
                  <ul>
                    <li><strong>आवाज पहिचान:</strong> Siri, Alexa, Google Assistant</li>
                    <li><strong>इशारा नियन्त्रण:</strong> गति सेन्सर, हात ट्र्याकिङ</li>
                    <li><strong>आँखा ट्र्याकिङ:</strong> आँखाको चालद्वारा नियन्त्रण</li>
                    <li><strong>मस्तिष्क-कम्प्युटर इन्टरफेस:</strong> प्रत्यक्ष न्यूरल नियन्त्रण</li>
                  </ul>
                `
              },
              {
                id: "output-devices", 
                title: "आउटपुट यन्त्रहरू",
                content: `
                  <h2>आउटपुट यन्त्रहरू 📺</h2>
                  <p>आउटपुट यन्त्रहरूले कम्प्युटरबाट जानकारी प्रयोगकर्ताहरूलाई प्रदर्शन वा प्रस्तुत गर्छन्।</p>

                  <h3>दृश्य आउटपुट यन्त्रहरू:</h3>
                  
                  <div class="device-grid">
                    <div class="device">
                      <h4>🖥️ मनिटर</h4>
                      <ul>
                        <li>मुख्य दृश्य आउटपुट</li>
                        <li>LCD, LED, OLED प्रविधिहरू</li>
                        <li>विभिन्न रिजोल्युसनहरू: HD, 4K, 8K</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>📽️ प्रोजेक्टर</h4>
                      <ul>
                        <li>ठूलो स्क्रिन डिस्प्ले</li>
                        <li>प्रस्तुतीकरण र चलचित्र</li>
                        <li>DLP वा LCD प्रविधि</li>
                      </ul>
                    </div>
                  </div>

                  <h3>अडियो आउटपुट यन्त्रहरू:</h3>
                  
                  <div class="device-grid">
                    <div class="device">
                      <h4>🔊 स्पिकर</h4>
                      <ul>
                        <li>विद्युतीय संकेतलाई आवाजमा रूपान्तरण</li>
                        <li>भित्री वा बाहिरी</li>
                        <li>स्टेरियो वा वरपरको आवाज</li>
                      </ul>
                    </div>

                    <div class="device">
                      <h4>🎧 हेडफोन</h4>
                      <ul>
                        <li>व्यक्तिगत अडियो आउटपुट</li>
                        <li>तारयुक्त वा ताररहित</li>
                        <li>आवाज रद्द गर्ने सुविधाहरू</li>
                      </ul>
                    </div>
                  </div>

                  <h3>भौतिक आउटपुट यन्त्रहरू:</h3>
                  
                  <div class="device">
                    <h4>🖨️ प्रिन्टर</h4>
                    <ul>
                      <li><strong>इन्कजेट:</strong> तरल मसी कार्ट्रिज प्रयोग</li>
                      <li><strong>लेजर:</strong> टोनर पाउडर प्रयोग</li>
                      <li><strong>3D प्रिन्टर:</strong> भौतिक वस्तुहरू सिर्जना</li>
                    </ul>
                  </div>

                  <div class="future-tech">
                    <h4>🚀 भविष्यका आउटपुट प्रविधिहरू:</h4>
                    <ul>
                      <li>भर्चुअल रियालिटी (VR) हेडसेट</li>
                      <li>संवर्धित वास्तविकता (AR) डिस्प्ले</li>
                      <li>होलोग्राफिक प्रक्षेपण</li>
                      <li>ह्याप्टिक फिडब्याक यन्त्रहरू</li>
                    </ul>
                  </div>
                `
              }
            ]
          }
        ]
      },
      grade10: {
        title: "कक्षा १० कम्प्युटर विज्ञान",
        topics: [
          {
            id: "programming",
            title: "💻 प्रोग्रामिङको परिचय",
            icon: "🐍",
            lessons: [
              {
                id: "what-is-programming",
                title: "प्रोग्रामिङ के हो?",
                content: `
                  <h2>प्रोग्रामिङ के हो? 👨‍💻</h2>
                  <p>प्रोग्रामिङ भनेको कम्प्युटरका लागि समस्या समाधान र कार्यहरू सम्पादन गर्न निर्देशनहरू सिर्जना गर्ने प्रक्रिया हो।</p>

                  <h3>मुख्य अवधारणाहरू:</h3>
                  <ul>
                    <li><strong>एल्गोरिदम:</strong> समस्याको चरणबद्ध समाधान</li>
                    <li><strong>कोड:</strong> प्रोग्रामिङ भाषामा लेखिएका निर्देशनहरू</li>
                    <li><strong>प्रोग्राम:</strong> निर्देशनहरूको पूर्ण सेट</li>
                    <li><strong>बग:</strong> कोडमा त्रुटि</li>
                    <li><strong>डिबग:</strong> बगहरू फेला पारेर सुधार्ने प्रक्रिया</li>
                  </ul>

                  <h3>लोकप्रिय प्रोग्रामिङ भाषाहरू:</h3>
                  
                  <div class="language-grid">
                    <div class="language">
                      <h4>🐍 Python</h4>
                      <p>शुरुआतीहरूका लागि राम्रो, AI र वेब डेभलपमेन्टमा प्रयोग</p>
                    </div>
                    
                    <div class="language">
                      <h4>☕ Java</h4>
                      <p>ऑब्जेक्ट-ओरिएन्टेड, एन्टरप्राइज एप्लिकेसनहरूमा प्रयोग</p>
                    </div>
                    
                    <div class="language">
                      <h4>🌐 JavaScript</h4>
                      <p>वेब डेभलपमेन्ट र अन्तरक्रियाका लागि आवश्यक</p>
                    </div>
                    
                    <div class="language">
                      <h4>⚡ C++</h4>
                      <p>छिटो र शक्तिशाली, खेल र सिस्टमहरूमा प्रयोग</p>
                    </div>
                  </div>

                  <h3>प्रोग्रामिङ प्रक्रिया:</h3>
                  <ol>
                    <li><strong>समस्या विश्लेषण:</strong> के समाधान गर्नुपर्छ बुझ्नुहोस्</li>
                    <li><strong>एल्गोरिदम डिजाइन:</strong> समाधानका चरणहरूको योजना</li>
                    <li><strong>कोडिङ:</strong> प्रोग्राम लेख्नुहोस्</li>
                    <li><strong>परीक्षण:</strong> यो सही तरिकाले काम गर्छ कि जाँच गर्नुहोस्</li>
                    <li><strong>डिबगिङ:</strong> कुनै त्रुटिहरू ठीक गर्नुहोस्</li>
                    <li><strong>प्रलेखन:</strong> यो कसरी काम गर्छ व्याख्या गर्नुहोस्</li>
                  </ol>

                  <div class="code-example">
                    <h4>🎯 सरल Python उदाहरण:</h4>
                    <pre><code>
# यो प्रोग्रामले प्रयोगकर्तालाई अभिवादन गर्छ
naam = input("तपाईंको नाम के हो? ")
print(f"नमस्कार, {naam}! प्रोग्रामिङमा स्वागत छ!")
                    </code></pre>
                  </div>
                `
              },
              {
                id: "algorithms",
                title: "एल्गोरिदम र फ्लोचार्ट",
                content: `
                  <h2>एल्गोरिदम र फ्लोचार्ट 📊</h2>
                  <p>एल्गोरिदम समस्या समाधानको चरणबद्ध विधि हो। फ्लोचार्टले यी चरणहरूलाई दृश्य रूप दिन्छ।</p>

                  <h3>एल्गोरिदम के हो?</h3>
                  <ul>
                    <li>राम्ररी परिभाषित निर्देशनहरूको सीमित क्रम</li>
                    <li>विशिष्ट समस्या समाधान गर्छ</li>
                    <li>सीमित चरणहरूमा समाप्त हुनुपर्छ</li>
                    <li>स्पष्ट र प्रभावकारी हुनुपर्छ</li>
                  </ul>

                  <h3>एल्गोरिदम उदाहरण - चिया बनाउने:</h3>
                  <ol>
                    <li>केतलीमा पानी उमाल्नुहोस्</li>
                    <li>चियापातमा चिया पात हाल्नुहोस्</li>
                    <li>चिया पातमा तातो पानी हाल्नुहोस्</li>
                    <li>३-५ मिनेट भिजाउन दिनुहोस्</li>
                    <li>चियालाई कपमा छान्नुहोस्</li>
                    <li>चाहिएमा चिनी/दूध थप्नुहोस्</li>
                    <li>तातै सर्भ गर्नुहोस्</li>
                  </ol>

                  <h3>फ्लोचार्ट प्रतीकहरू:</h3>
                  
                  <div class="symbol-grid">
                    <div class="symbol">
                      <h4>🔵 अंडाकार</h4>
                      <p>सुरु/अन्त्य</p>
                    </div>
                    
                    <div class="symbol">
                      <h4>📦 आयत</h4>
                      <p>प्रक्रिया/कार्य</p>
                    </div>
                    
                    <div class="symbol">
                      <h4>💎 हीरा</h4>
                      <p>निर्णय</p>
                    </div>
                    
                    <div class="symbol">
                      <h4>📥 समानान्तर चतुर्भुज</h4>
                      <p>इनपुट/आउटपुट</p>
                    </div>
                  </div>

                  <h3>दुई संख्याको अधिकतम फेला पार्ने एल्गोरिदम:</h3>
                  <ol>
                    <li>सुरु</li>
                    <li>पहिलो संख्या (A) इनपुट गर्नुहोस्</li>
                    <li>दोस्रो संख्या (B) इनपुट गर्नुहोस्</li>
                    <li>यदि A > B भने, Max = A</li>
                    <li>नत्र Max = B</li>
                    <li>Max प्रदर्शन गर्नुहोस्</li>
                    <li>अन्त्य</li>
                  </ol>

                  <div class="practice-box">
                    <h4>🎯 अभ्यास व्यायाम:</h4>
                    <p>यसका लागि एल्गोरिदम र फ्लोचार्ट बनाउन प्रयास गर्नुहोस्:</p>
                    <ul>
                      <li>आयतको क्षेत्रफल गणना गर्ने</li>
                      <li>संख्या सम वा बिषम जाँच गर्ने</li>
                      <li>तीन संख्याको सबैभन्दा ठूलो फेला पार्ने</li>
                    </ul>
                  </div>
                `
              }
            ]
          }
        ]
      }
    }
  }
};

function App() {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [currentGrade, setCurrentGrade] = useState(null);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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
  
  // Debug logging
  console.log('Current language:', language);
  console.log('Available languages:', Object.keys(SAMPLE_CONTENT));
  console.log('Content site name:', content.siteName);

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
                src="images/front.png" 
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
            
            {/* Grade Selection Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
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
              <div className="hidden sm:block">
                <input
                  type="text"
                  placeholder={content.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
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