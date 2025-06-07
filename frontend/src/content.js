const SAMPLE_CONTENT = {
  en: {
    siteName: "Coding Guide",
    subtitle: "Learn Computer Science the Fun Way!",
    tagline: "Empowering Grade 9 & 10 students with essential CS knowledge",
    startGrade9: "Start Grade 9",
    startGrade10: "Start Grade 10",
    startEssentials: "Essential Skills",
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
            id: "web-development",
            title: " Introduction to Web Development",
            icon: "💻",
            lessons: [
              {
                id: "what-is-website",
                title: "What is a Website?",
                content: `
                  <h2>What is a Website? 🚗</h2>
                  <p>A website is like a street with houses (pages). Your browser (Chrome/Firefox) is the car that drives you there.</p>
                  
                  <h3>Key Facts:</h3>
                  <ul>
                    <li>✔ Each page is a separate file (e.g., home.html, contact.html)</li>
                    <li>✔ Websites open in <strong>browsers</strong>, not app stores</li>
                  </ul>

                  <h3>⚠️ Common Mistake:</h3>
                  <p>If you type the wrong address (e.g., contat.html), your ‘car’ won’t find the house!</p>
                `
              },
              {
                id: "html-tags",
                title: "HTML Tags: The Labels",
                content: `
                  <h2>HTML Tags: The Labels 🏷️</h2>
                  <p>Tags are like name tags: <code>&lt;h1&gt;</code> is the principal’s tag (biggest), <code>&lt;p&gt;</code> is a student’s tag (normal). Forgetting <code>&lt;/h1&gt;</code> is like wearing half a uniform!</p>
                  
                  <h3>Must-Know Tags:</h3>
                  <table>
                    <tr>
                      <th>Tag</th>
                      <th>Purpose</th>
                      <th>Example</th>
                    </tr>
                    <tr>
                      <td><code>&lt;h1&gt;</code></td>
                      <td>Main heading</td>
                      <td><code>&lt;h1&gt;My School&lt;/h1&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;p&gt;</code></td>
                      <td>Paragraph</td>
                      <td><code>&lt;p&gt;Welcome!&lt;/p&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;img&gt;</code></td>
                      <td>Image</td>
                      <td><code>&lt;img src="photo.jpg"&gt;</code></td>
                    </tr>
                  </table>

                  <h3>💡 Teacher’s Tip:</h3>
                  <p>Always close tags like shoes – left (<code>&lt;h1&gt;</code>) and right (<code>&lt;/h1&gt;</code>)!</p>
                `
              },
              {
                id: "links",
                title: "Links: The Bridges",
                content: `
                  <h2>Links: The Bridges 🌉</h2>
                  <p>A link (<code>&lt;a&gt;</code>) is a bridge between pages. A broken bridge (href='wrong.html') means you fall!</p>
                  
                  <h3>Code Example:</h3>
                  <pre><code>&lt;a href="about.html"&gt;About Us&lt;/a&gt;</code></pre>

                  <h3>🔍 Error Check:</h3>
                  <ol>
                    <li>Does about.html exist?</li>
                    <li>Is the spelling <strong>exact</strong>?</li>
                  </ol>
                `
              },
              {
                id: "images",
                title: "Images: The Photo Frames",
                content: `
                  <h2>Images: The Photo Frames 🖼️</h2>
                  <p><code>&lt;img&gt;</code> is a frame. <code>src='dog.jpg'</code> is the picture inside. Wrong name? Empty frame!</p>
                  
                  <h3>Critical Checks:</h3>
                  <ul>
                    <li>✔ File exists (e.g., dog.jpg is in the same folder)</li>
                    <li>✔ No typos (e.g., dgo.jpg won’t work)</li>
                  </ul>
                `
              },
              {
                id: "folders",
                title: "Folders: The Filing Cabinet",
                content: `
                  <h2>Folders: The Filing Cabinet 🗄️</h2>
                  <p>Your website folder is a filing cabinet. If index.html and photo.jpg are in different drawers, the browser gets lost!</p>
                  
                  <h3>Correct Structure:</h3>
                  <pre><code>my_website/\n├── index.html\n├── about.html\n└── photo.jpg</code></pre>
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
 
  id: "qbasic-basics",
  title: "🎮 QBASIC Made Simple",
  icon: "🧱",
  lessons: [
    {
      id: "qbasic-intro",
      title: "QBASIC = Your Computer’s Toy Box!",
      content: `
        <h2>QBASIC = Your Computer’s Toy Box! 🎁</h2>
        <p>QBASIC is a <strong>language</strong> like English or Nepali, but it talks to a <strong>computer</strong> instead of people.</p>

        <h3>🔧 Real-Life Code Examples</h3>
        <ul>
          <li><code>PRINT "HELLO"</code> → Computer writes <strong>HELLO</strong></li>
          <li><code>PRINT 5+3</code> → Computer calculates and shows <strong>8</strong></li>
        </ul>

        <h3>🚀 Try This:</h3>
        <ol>
          <li>Open QBASIC (Start → Type <kbd>QBASIC</kbd> → Hit <kbd>Enter</kbd>)</li>
          <li>Type this code: <code>PRINT "MY NAME IS _____"</code></li>
          <li>Press <kbd>F5</kbd> → ✨ Your name appears on screen!</li>
        </ol>
      `
    },
    {
      id: "qbasic-break-code",
      title: "Break the Code (Like a Tiffin Box!)",
      content: `
        <h2>Break the Code 🍱</h2>
        <p>Think of each QBASIC command like a lunchbox with different sections.</p>

        <h3>📦 Code Parts:</h3>
        <table>
          <tr><th>Part</th><th>Description</th><th>Examples</th></tr>
          <tr><td>COMMAND</td><td>Action word</td><td>PRINT, CLS, INPUT</td></tr>
          <tr><td>DATA</td><td>What to use/show</td><td>"HELLO", 5+3, X$</td></tr>
        </table>

        <h3>🔍 Example Breakdown:</h3>
        <ul>
          <li><code>PRINT "HI"</code> → <strong>PRINT</strong> is the command, <strong>"HI"</strong> is the data → Shows HI</li>
          <li><code>CLS</code> → Clears the screen</li>
        </ul>

        <h3>⚠️ Common Mistake:</h3>
        <p><code>PRNT "HELLO"</code> ❌ (Wrong spelling)<br><code>PRINT "HELLO"</code> ✅ (Correct spelling)</p>
      `
    },
    {
      id: "qbasic-syntax",
      title: "Computer’s Traffic Rules (Syntax)",
      content: `
        <h2>Computer's Traffic Rules 🚦 (Syntax)</h2>
        <p>Syntax is like grammar. Computers need things to be just right!</p>

        <h3>📏 QBASIC Syntax Rules:</h3>
        <ul>
          <li>✅ Spelling counts: Use <code>PRINT</code>, not <code>PRNT</code></li>
          <li>✅ Use quotes: <code>PRINT "HELLO"</code></li>
          <li>✅ No spaces in math: <code>PRINT 5+3</code></li>
        </ul>

        <h3>🧠 Practice Question:</h3>
        <p>Which one is correct?</p>
        <ul>
          <li><strong>A:</strong> <code>PRINT "BYE"</code> ✅</li>
          <li><strong>B:</strong> <code>PRINT BYE</code> ❌</li>
          <li><strong>C:</strong> <code>PRNT "BYE"</code> ❌</li>
        </ul>
      `
    },
    {
      id: "qbasic-mini-project",
      title: "Mini Project – Talk to Computer!",
      content: `
        <h2>Mini Project – Talk to Computer! 💬</h2>
        <p>This project lets the computer ask your name and reply.</p>

        <h3>📄 Code:</h3>
        <pre><code>
CLS
INPUT "WHAT’S YOUR NAME? "; N$
PRINT "HELLO "; N$; "! YOU ARE AWESOME!"
        </code></pre>

        <h3>🔄 Modify It:</h3>
        <ul>
          <li>Change <code>AWESOME</code> to <code>COOL</code>, <code>SMART</code>, or <code>THE BEST</code></li>
        </ul>
      `
    },
    {
      id: "qbasic-tips",
      title: "Notes for Slow Learners",
      content: `
        <h2>Notes for Slow Learners 🐢</h2>
        <p>Take your time and try step by step!</p>

        <ul>
          <li>⏸️ Re-read just the last 2 lines if stuck</li>
          <li>📝 Copy and run code <strong>exactly</strong></li>
          <li>🤝 Ask a friend or teacher – Don’t give up!</li>
        </ul>
      `
    }
  ]
},



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
             
            ]
          }
        ]
      },
      essentials: {
        title: "Essential Skills & Setup",
        topics: [
          {
            id: "downloads",
            title: "📥 Download & Setup Guides",
            icon: "⬇️",
            lessons: [
              {
                id: "python-download",
                title: "Download & Install Python",
                content: `
                  <h2>Download & Install Python 🐍</h2>
                  <p>Python is one of the most popular programming languages. Here's how to download and install it on your computer.</p>
                  
                  <div class="download-guide">
                    <img src="https://images.pexels.com/photos/2882550/pexels-photo-2882550.jpeg" alt="Download Process" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 16px 0;" />
                  </div>

                  <h3>Step-by-Step Installation:</h3>
                  <ol>
                    <li><strong>Visit Python.org:</strong> Go to <a href="https://python.org" target="_blank">python.org</a></li>
                    <li><strong>Click Downloads:</strong> The website will automatically detect your operating system</li>
                    <li><strong>Download Latest Version:</strong> Click the big yellow "Download Python" button</li>
                    <li><strong>Run the Installer:</strong> Double-click the downloaded file</li>
                    <li><strong>Check "Add to PATH":</strong> This is very important!</li>
                    <li><strong>Click Install Now:</strong> Wait for installation to complete</li>
                  </ol>

                  <h3>Verify Installation:</h3>
                  <p>Open Command Prompt (Windows) or Terminal (Mac/Linux) and type:</p>
                  <div class="code-example">
                    <pre><code>python --version</code></pre>
                  </div>
                  <p>You should see something like "Python 3.12.0"</p>

                  <div class="fun-fact">
                    💡 <strong>Tip:</strong> Make sure to check "Add Python to PATH" during installation!
                  </div>
                `
              },
              {
                id: "vscode-download",
                title: "Download & Install VS Code",
                content: `
                  <h2>Download & Install VS Code 💻</h2>
                  <p>Visual Studio Code is the most popular code editor for programming. It's free and works on all operating systems.</p>
                  
                  <div class="download-guide">
                    <img src="https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRvd25sb2FkfGVufDB8fHx8MTc0OTE4ODc4MXww&ixlib=rb-4.1.0&q=85" alt="VS Code Setup" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 16px 0;" />
                  </div>

                  <h3>Installation Steps:</h3>
                  <ol>
                    <li><strong>Visit VS Code Website:</strong> Go to <a href="https://code.visualstudio.com" target="_blank">code.visualstudio.com</a></li>
                    <li><strong>Download for Your OS:</strong> Click the download button for Windows, Mac, or Linux</li>
                    <li><strong>Run the Installer:</strong> Follow the installation wizard</li>
                    <li><strong>Launch VS Code:</strong> Open it from your applications menu</li>
                  </ol>

                  <h3>Essential Extensions:</h3>
                  <ul>
                    <li><strong>Python Extension:</strong> Adds Python support</li>
                    <li><strong>Prettier:</strong> Code formatting</li>
                    <li><strong>Live Server:</strong> For web development</li>
                    <li><strong>GitLens:</strong> Enhanced Git capabilities</li>
                  </ul>

                  <h3>First Time Setup:</h3>
                  <ol>
                    <li>Open VS Code</li>
                    <li>Go to Extensions (Ctrl+Shift+X)</li>
                    <li>Search for "Python" and install the official Python extension</li>
                    <li>Create your first Python file: File → New File → Save as "hello.py"</li>
                  </ol>
                `
              }
            ]
          },
          {
            id: "python-basics",
            title: "🐍 Python Fundamentals",
            icon: "🚀",
            lessons: [
              {
                id: "python-intro",
                title: "Getting Started with Python",
                content: `
                  <h2>Getting Started with Python 🐍</h2>
                  <p>Python is an excellent first programming language. It's easy to read and very powerful!</p>
                  
                  <div class="setup-guide">
                    <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Python Programming" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 16px 0;" />
                  </div>

                  <h3>Why Learn Python?</h3>
                  <ul>
                    <li><strong>Easy to Learn:</strong> Simple, readable syntax</li>
                    <li><strong>Versatile:</strong> Web development, AI, data science, games</li>
                    <li><strong>Popular:</strong> Used by Google, Instagram, Netflix</li>
                    <li><strong>Great Community:</strong> Lots of help and resources</li>
                  </ul>

                  <h3>Your First Python Program:</h3>
                  <div class="code-example">
                    <h4>Hello World:</h4>
                    <pre><code>
print("Hello, World!")
print("Welcome to Python programming!")
                    </code></pre>
                  </div>

                  <h3>Basic Python Concepts:</h3>
                  <div class="concept-grid">
                    <div class="concept">
                      <h4>Variables</h4>
                      <pre><code>
name = "Alice"
age = 16
height = 5.6
                      </code></pre>
                    </div>
                    
                    <div class="concept">
                      <h4>Input & Output</h4>
                      <pre><code>
name = input("What's your name? ")
print(f"Hello, {name}!")
                      </code></pre>
                    </div>
                  </div>

                  <h3>Try This Exercise:</h3>
                  <p>Create a program that asks for your favorite color and responds with a message!</p>
                  <div class="code-example">
                    <pre><code>
color = input("What's your favorite color? ")
print(f"{color} is a great choice!")
                    </code></pre>
                  </div>
                `
              }
            ]
          },
          {
            id: "web-basics",
            title: "🌐 Web Development Basics",
            icon: "🏗️",
            lessons: [
              {
                id: "html-intro",
                title: "Introduction to HTML",
                content: `
                  <h2>Introduction to HTML 🌐</h2>
                  <p>HTML (HyperText Markup Language) is the foundation of all websites. It structures content on web pages.</p>
                  
                  <div class="web-guide">
                    <img src="https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg" alt="Web Development" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 16px 0;" />
                  </div>

                  <h3>What is HTML?</h3>
                  <ul>
                    <li><strong>Markup Language:</strong> Uses tags to structure content</li>
                    <li><strong>Building Blocks:</strong> Foundation of every website</li>
                    <li><strong>Easy to Learn:</strong> Simple syntax with opening/closing tags</li>
                    <li><strong>Universal:</strong> Works in all web browsers</li>
                  </ul>

                  <h3>Basic HTML Structure:</h3>
                  <div class="code-example">
                    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Website!&lt;/h1&gt;
    &lt;p&gt;This is my first paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
                    </code></pre>
                  </div>

                  <h3>Common HTML Tags:</h3>
                  <ul>
                    <li><strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Headings (largest to smallest)</li>
                    <li><strong>&lt;p&gt;:</strong> Paragraphs</li>
                    <li><strong>&lt;a&gt;:</strong> Links</li>
                    <li><strong>&lt;img&gt;:</strong> Images</li>
                    <li><strong>&lt;div&gt;:</strong> Containers</li>
                    <li><strong>&lt;ul&gt; and &lt;li&gt;:</strong> Lists</li>
                  </ul>

                  <h3>Try This Exercise:</h3>
                  <p>Create a simple webpage about yourself with a heading, paragraph, and list of hobbies!</p>
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
            id: "web-development",
            title: "🌐 वेब विकासको परिचय",
            icon: "💻",
            lessons: [
              {
                id: "what-is-website",
                title: "वेबसाइट के हो?",
                content: `
                  <h2>वेबसाइट के हो? 🚗</h2>
                  <p>वेबसाइट एक सडकको जस्तै हो जसमा घरहरू (पृष्ठहरू) छन्। तपाईंको ब्राउजर (Chrome/Firefox) त्यहाँ जानको लागि कार हो।</p>
                  
                  <h3>मुख्य तथ्यहरू:</h3>
                  <ul>
                    <li>✔ प्रत्येक पृष्ठ एक अलग फाइल हो (जस्तै, home.html, contact.html)</li>
                    <li>✔ वेबसाइटहरू <strong>ब्राउजरहरू</strong> मा खुल्छन्, एप स्टोरमा होइन</li>
                  </ul>

                  <h3>⚠️ सामान्य गल्ती:</h3>
                  <p>यदि तपाईंले गलत ठेगाना टाइप गर्नुहुन्छ (जस्तै, contat.html), तपाईंको ‘कार’ घर फेला पार्दैन!</p>
                `
              },
              {
                id: "html-tags",
                title: "HTML ट्यागहरू: लेबलहरू",
                content: `
                  <h2>HTML ट्यागहरू: लेबलहरू 🏷️</h2>
                  <p>ट्यागहरू नाम ट्यागहरू जस्तै हुन्: <code>&lt;h1&gt;</code> प्रिन्सिपलको ट्याग हो (सबैभन्दा ठूलो), <code>&lt;p&gt;</code> विद्यार्थीको ट्याग हो (सामान्य)। <code>&lt;/h1&gt;</code> बिर्सनु भनेको आधा युनिफर्म लगाउनु हो!</p>
                  
                  <h3>जान्नै पर्ने ट्यागहरू:</h3>
                  <table>
                    <tr>
                      <th>ट्याग</th>
                      <th>उद्देश्य</th>
                      <th>उदाहरण</th>
                    </tr>
                    <tr>
                      <td><code>&lt;h1&gt;</code></td>
                      <td>मुख्य शीर्षक</td>
                      <td><code>&lt;h1&gt;मेरो स्कूल&lt;/h1&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;p&gt;</code></td>
                      <td>प्याराग्राफ</td>
                      <td><code>&lt;p&gt;स्वागतम्!&lt;/p&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;img&gt;</code></td>
                      <td>छवि</td>
                      <td><code>&lt;img src="photo.jpg"&gt;</code></td>
                    </tr>
                  </table>

                  <h3>💡 शिक्षकको सुझाव:</h3>
                  <p>ट्यागहरूलाई जुत्ताजस्तै बन्द गर्नुहोस् - बायाँ (<code>&lt;h1&gt;</code>) र दायाँ (<code>&lt;/h1&gt;</code>)!</p>
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
                `
              }
            ]
          }
        ]
      },
      essentials: {
        title: "आवश्यक सीपहरू र सेटअप",
        topics: [
          {
            id: "downloads",
            title: "📥 डाउनलोड र सेटअप गाइडहरू",
            icon: "⬇️",
            lessons: [
              {
                id: "python-download",
                title: "Python डाउनलोड र इन्स्टल गर्नुहोस्",
                content: `
                  <h2>Python डाउनलोड र इन्स्टल गर्नुहोस् 🐍</h2>
                  <p>Python एक धेरै लोकप्रिय प्रोग्रामिङ भाषा हो। यहाँ तपाईंको कम्प्युटरमा यसलाई कसरी डाउनलोड र इन्स्टल गर्ने भनेर दिइएको छ।</p>
                  
                  <div class="download-guide">
                    <img src="https://images.pexels.com/photos/2882550/pexels-photo-2882550.jpeg" alt="डाउनलोड प्रक्रिया" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 16px 0;" />
                  </div>

                  <h3>चरणबद्ध इन्स्टलेसन:</h3>
                  <ol>
                    <li><strong>Python.org मा जानुहोस्:</strong> <a href="https://python.org" target="_blank">python.org</a> मा जानुहोस्</li>
                    <li><strong>डाउनलोडमा क्लिक गर्नुहोस्:</strong> वेबसाइटले स्वचालित रूपमा तपाईंको अपरेटिंग सिस्टम पत्ता लगाउनेछ</li>
                    <li><strong>नवीनतम संस्करण डाउनलोड गर्नुहोस्:</strong> ठूलो पहेंलो "Download Python" बटनमा क्लिक गर्नुहोस्</li>
                    <li><strong>इन्स्टलर चलाउनुहोस्:</strong> डाउनलोड गरिएको फाइलमा डबल-क्लिक गर्नुहोस्</li>
                  </ol>
                `
              },
              {
                id: "vscode-download",
                title: "VS Code डाउनलोड र इन्स्टल गर्नुहोस्",
                content: `
                  <h2>VS Code डाउनलोड र इन्स्टल गर्नुहोस् 💻</h2>
                  <p>Visual Studio Code प्रोग्रामिङका लागि सबैभन्दा लोकप्रिय कोड एडिटर हो। यो निःशुल्क छ र सबै अपरेटिंग सिस्टमहरूमा काम गर्छ।</p>
                  
                  <div class="download-guide">
                    <img src="https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRvd25sb2FkfGVufDB8fHx8MTc0OTE4ODc4MXww&ixlib=rb-4.1.0&q=85" alt="VS Code सेटअप" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 16px 0;" />
                  </div>
                `
              }
            ]
          },
          {
            id: "python-basics",
            title: "🐍 Python आधारभूत कुराहरू",
            icon: "🚀",
            lessons: [
              {
                id: "python-intro",
                title: "Python सँग सुरुवात गर्दै",
                content: `
                  <h2>Python सँग सुरुवात गर्दै 🐍</h2>
                  <p>Python एक उत्कृष्ट पहिलो प्रोग्रामिङ भाषा हो। यो पढ्न सजिलो र धेरै शक्तिशाली छ!</p>
                  
                  <div class="setup-guide">
                    <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Python प्रोग्रामिङ" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 16px 0;" />
                  </div>
                `
              }
            ]
          },
          {
            id: "web-basics",
            title: "🌐 वेब विकासका आधारहरू",
            icon: "🏗️",
            lessons: [
              {
                id: "html-intro",
                title: "HTML को परिचय",
                content: `
                  <h2>HTML को परिचय 🌐</h2>
                  <p>HTML (HyperText Markup Language) सबै वेबसाइटहरूको आधार हो। यसले वेब पृष्ठहरूमा सामग्रीलाई संरचना दिन्छ।</p>
                  
                  <div class="web-guide">
                    <img src="https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg" alt="वेब विकास" style="width: 100%; max-width: 500px; border-radius: 8px; margin: 16px 0;" />
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
 export default SAMPLE_CONTENT;