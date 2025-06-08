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
                  <p><code>&lt;img&gt;</code> is a frame.   <code>src='dog.jpg'</code> is the picture inside. Wrong name? Empty frame!</p>
                  
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
              },
              {
              id :"web-techno",
              title:"What is web technology",
              content:`
               <div class="english">
    <h3>📘 Simple English Explanation:</h3>
    <p>Web Technology means all the tools and systems that help us create, design, and run websites on the internet.</p>
    <ul>
      <li>Languages like HTML, CSS, JavaScript</li>
      <li>Tools like browsers, servers, databases</li>
      <li>Everything used to make websites work and look nice</li>
    </ul>
    <h3>🧠 Analogy:</h3>
    <p>Think of a website as a house, and web technology as the bricks, paint, wires, and workers that build it.</p>
    <h3>✏️ For Exam:</h3>
    <ul>
      <li><strong>Definition:</strong> Web Technology = tools, software, and languages used for websites</li>
      <li><strong>Main Elements:</strong> HTML, CSS, JavaScript, PHP, databases</li>
    </ul>
  <h2>🎩  Why is Web Technology Important?</h2>
  </div>
  <div class="eng">
    <h3>📘 Because it helps us:</h3>
    <ul>
      <li>Get information (like Google, Wikipedia)</li>
      <li>Connect with people (like Facebook, Gmail)</li>
      <li>Sell and buy (like Daraz, Amazon)</li>
      <li>Create our own websites or blogs</li>
    </ul>
    <h3>🧠 Analogy:</h3>
    <p>It’s like a road for information — just like roads connect cities, the web connects people and data.</p>
  </div>
  <h2>🎩 : Examples of Web Technologies</h2>
  <div class="english">
    <ul>
      <li>HTML – builds the structure of websites (like bones)</li>
      <li>CSS – makes it look beautiful (like clothes)</li>
      <li>JavaScript – adds movement (like buttons, animations)</li>
      <li>PHP/Python – server-side coding</li>
      <li>MySQL – database to store data</li>
      <li>WordPress – easy tool to build websites</li>
    </ul>
    <h3>❌ Common Mistakes:</h3>
    <ul>
      <li>Thinking CSS is enough for a website to work</li>
      <li>Ignoring JavaScript (it's important for interaction)</li>
    </ul>
    <p><strong>Remember:</strong> HTML = Structure, CSS = Style, JS = Action</p>
  </div>
  
              `
              },
              {
                id:"web-life-cycle",
                title:"Web Development Life Cycle (WDLC)",
                content:`
                <h2>🎩 : Web Development Life Cycle (WDLC)</h2>
  <div class="english">
    <ul>
      <li>1. Gathering Info – Who is the website for? What should it do?</li>
      <li>2. Planning – Decide design, color, layout</li>
      <li>3. Design – Choose fonts, photos, structure</li>
      <li>4. Content Creation – Write the text, images, video</li>
      <li>5. Development – Use code to build the website</li>
      <li>6. Testing – Check if it works properly</li>
      <li>7. Maintenance – Keep it updated</li>
    </ul>
    <h3>🧠 Analogy:</h3>
    <p>Just like building a school needs blueprint, workers, paint, and final inspection, websites also follow steps.</p>
    <h3>✏️ Long Answer Exam Tip:</h3>
    <p>“Explain the 7 stages of the Web Development Life Cycle.”</p>
  </div>

                `
                
              },
              {
                id:"dns",
                title:"What is DNS",
                content: `
                 <h2>🎩  What is DNS?</h2>
  <div class="english">
    <p><strong>DNS = Domain Name System</strong></p>
    <p>It converts website names (like google.com) into numbers (called IP addresses) that computers understand.</p>
    <h3>🧠 Analogy:</h3>
    <p>Like a phone contact list – you see your friend's name, but your phone uses the number to call.</p>
    <h3>✏️ Remember:</h3>
    <ul>
      <li>DNS changes domain name → IP address</li>
      <li>.com, .org, .edu, .gov, .np are all domain types</li>
    </ul>
  </div>
  <h2> 🎩  Domain Name Types</h2>
  <div class="english">
    <table border="1">
      <tr><th>Domain</th><th>Use</th></tr>
      <tr><td>.com</td><td>Commercial/business site</td></tr>
      <tr><td>.edu</td><td>Education</td></tr>
      <tr><td>.gov</td><td>Government</td></tr>
      <tr><td>.org</td><td>Organizations</td></tr>
      <tr><td>.np</td><td>Nepal’s websites</td></tr>
    </table>
  </div>
                `
              },
              {
              id:"future-of-web",
              title:"Future of Web Technology",
              content:`
               <h2>🎩 Lesson 8: Future of Web Technology</h2>
  <div class="english">
    <ul>
      <li>AI Websites that give smart suggestions</li>
      <li>PWAs (Progressive Web Apps) – work like apps in browser</li>
      <li>AR/VR websites – for real-like 3D experiences</li>
      <li>Responsive design – websites that fit phone, tablet, and computer</li>
      <li>Edge computing – faster website speed</li>
      <li>Web security – more safety from hacking</li>
    </ul>
    <h3>✏️ Exam Alert:</h3>
    <p>“List 3 future trends of web technology.”</p>
  </div>
  <h2>🌍 Lesson 9: Getting Your Website Address</h2>
  <div class="english">
    <p><strong>Making your website findable (like giving your shop directions):</strong></p>
    <ul>
      <li>1. 🏷️ Pick a name<br>
          <small>(Like "ramrestaurant" instead of "ram's momo stall")</small></li>
      <li>2. 🛒 Buy the name<br>
          <small>(Pay Rs.1000/year at places like Nest Nepal)</small></li>
      <li>3. 🔗 Connect to internet<br>
          <small>(DNS works like Google Maps for websites)</small></li>
      <li>4. 🎉 Now anyone can visit!<br>
          <small>(Type "ramrestaurant.com" anywhere in the world)</small></li>
    </ul>
  </div>
  `
              }
            
            ]
          },
          {
            id:"con-of-programming",
            title:"Concept of programming",
            icon:"🧠",
            lessons:[
              {
                id:"define",
                title:"Programming?",
                content:`
  <h3>🧩 Lesson 1: What is Programming, Really?</h3>
  <p>Programming means giving clear instructions to the computer to make it do something — like a recipe for machines.</p>
  <ul>
    <li>Imagine you have a robot. It doesn’t know anything unless you say:</li>
    <ul>
      <li>“Wake up”</li>
      <li>“Walk 3 steps”</li>
      <li>“Say hello”</li>
    </ul>
    <li>That step-by-step instruction is called a program.</li>
  </ul>
      <h3>🧩 Lesson 2: Types of Programming Languages</h3>
   <p>Just like humans speak different languages, computers understand different kinds of languages:</p>
  <ul>
    <li><strong>Machine Language:</strong> Only 0 and 1. Computers understand this directly.</li>
    <li><strong>Assembly Language:</strong> Short codes like MOV, ADD. A bit easier but still difficult.</li>
     <li><strong>High-Level Language:</strong> Looks more like English. Easy to learn. Examples: QBASIC, Python, C.</li>
   </ul>          
                `
              },
              {
                id:"trans",
                title:"Translators",
                content:`
                <h3>🧩 Lesson 3: Translators – Compiler and Interpreter</h3>
  <p>Computers don’t understand QBASIC or Python directly. We need a translator to convert it into machine language.</p>
   <ul>
     <li><strong>Compiler:</strong> Translates whole program at once. Faster, but shows all errors later.</li>
     <li><strong>Interpreter:</strong> Translates one line at a time. Slower, but shows error immediately.</li>
   </ul>
                
                `
              },
              {
              id:"Algorithm",
              title:"Algorithm",
              content:`

  <h3>🧩 Lesson 4: Algorithm – The Recipe for Computers</h3>
  <p>An algorithm is a step-by-step method to solve a problem or complete a task.</p>
  <p><strong>Example:</strong> Making tea</p>
  <ul>
    <li>Boil water</li>
    <li>Add tea leaves</li>
    <li>Add milk</li>
    <li>Stir</li>
    <li>Serve</li>
  </ul>
    <h3>🧩 Lesson 5: Flowchart – Drawing the Plan</h3>
  <p>A flowchart is a diagram that shows the steps of a task using shapes and arrows.</p>
  <ul>
    <li>Oval → Start/End</li>
    <li>Rectangle → Process (e.g., “Add two numbers”)</li>
    <li>Diamond → Decision (Yes/No)</li>
    <li>Arrow → Shows direction of flow</li>
  </ul>

              `
              },
              {
                id:"Syntax",
                title:"Syntax and Commands",
                content:`
                
                <h3>🧩 Lesson 6: Syntax and Commands</h3>
  <p>Syntax is the grammar of programming languages.</p>
  <p><strong>Example:</strong></p>
  <ul>
    <li>✅ PRINT "Hello" → correct</li>
    <li>❌ PRINT Hello → wrong (missing quotes)</li>
  </ul>
     <h3>🧩 Lesson 7: Who is a Programmer?</h3>
  <p>A programmer is a person who writes programs (instructions) to solve problems using a computer.</p>
  <ul>
    <li>They decide what the computer should do</li>
    <li>Break it into steps</li>
    <li>Choose the right language to use</li>
  </ul>           
                `
              },

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
    siteName: "Coding Guide",
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
                  <p>वेबसाइट एक सडक जस्तै हो जसमा घरहरू (पृष्ठहरू) छन्। तपाईंको ब्राउजर (Chrome/Firefox) त्यहाँ जानको लागि कार हो।</p>
                  
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
              },
              {
                id:"web-techno",
                title:"वेब प्रविधि",
                content:`

               
  <h2>🎩  वेब प्रविधि भनेको के हो?</h2>
  <div class="nepali">
    <h3>📘 सरल नेपाली व्याख्या:</h3>
    <p>वेब प्रविधि भन्नाले इन्टरनेटमा वेबसाइट बनाउन, डिजाइन गर्न र चलाउन प्रयोग हुने सबै उपकरण र प्रणालीहरूलाई जनाइन्छ।</p>
    <ul>
      <li>HTML, CSS, JavaScript जस्ता भाषाहरू</li>
      <li>ब्राउजर, सर्भर, डाटाबेस जस्ता उपकरणहरू</li>
      <li>वेबसाइटलाई काम गर्ने र राम्ररी देखाउने सबै कुरा</li>
    </ul>
    <h3>🧠 उदाहरण (अनुप्रयोग):</h3>
    <p>वेबसाइटलाई घरको रूपमा सोच्नुहोस्, वेब प्रविधि भनेको त्यो घर बनाउने इट्टा, रंग, तार, र कामदार हुन्।</p>
    <h3>✏️ परीक्षाको लागि:</h3>
    <ul>
      <li><strong>परिभाषा:</strong> वेब प्रविधि = वेबसाइटका लागि प्रयोग हुने उपकरण, सफ्टवेयर, र भाषाहरू</li>
      <li><strong>मुख्य तत्वहरू:</strong> HTML, CSS, JavaScript, PHP, डाटाबेस</li>
    </ul>


    <h2>🎩 वेब प्रविधि किन आवश्यक छ?</h2>
    <h3>📘 कारणहरू:</h3>
    <ul>
      <li>जानकारी प्राप्त गर्न (जस्तै: Google, Wikipedia)</li>
      <li>मानिसहरूसँग जडान हुन (जस्तै: Facebook, Gmail)</li>
      <li>बेच्न र किन्न (जस्तै: Daraz, Amazon)</li>
      <li>आफ्नै वेबसाइट वा ब्लग बनाउन</li>
    </ul>
    <h3>🧠 तुलना:</h3>
    <p>यो सूचनाको सडक जस्तै हो — जसरी सडकहरूले शहरहरू जडान गर्छन्, वेबले मानिस र डाटा जडान गर्छ।</p>

    <h2>🎩 वेब प्रविधिका उदाहरणहरू:</h2>
    <ul>
      <li>HTML – वेबसाइटको संरचना बनाउँछ (हड्डी जस्तै)</li>
      <li>CSS – आकर्षक देखिन्छ (लुगा जस्तै)</li>
      <li>JavaScript – गतिविधि थप्छ (बटन, एनिमेसन)</li>
      <li>PHP/Python – सर्भर-साइड कोडिङ</li>
      <li>MySQL – डाटाबेसमा डाटा भण्डारण</li>
      <li>WordPress – सजिलो वेबसाइट बनाउने उपकरण</li>
    </ul>
    <h3>❌ सामान्य गल्तीहरू:</h3>
    <ul>
      <li>CSS मात्र पर्याप्त ठान्नु</li>
      <li>JavaScript बेवास्ता गर्नु</li>
    </ul>
    <p><strong>स्मरण:</strong> HTML = संरचना, CSS = सजावट, JS = क्रियाकलाप</p>
  </div>
  `
              },
              {
                id:"web-life-cycle",
                title:"वेब विकास जीवनचक्र ",
                content:`
                 <h2>🎩 वेब विकास जीवनचक्र (Web Development Life Cycle - WDLC)</h2>
  <div class="nepali">
    <ul>
      <li>१. जानकारी संकलन – वेबसाइट कसका लागि? के गर्नुपर्छ?</li>
      <li>२. योजना बनाउने – डिजाइन, रङ, लेआउट तय गर्नु</li>
      <li>३. डिजाइन – फन्ट, फोटो, संरचना छान्नु</li>
      <li>४. सामग्री तयार पार्ने – लेख, तस्बिर, भिडियो बनाउनु</li>
      <li>५. विकास – कोड प्रयोग गरेर वेबसाइट बनाउने</li>
      <li>६. परीक्षण – राम्रोसँग काम गर्छ कि जाँच गर्नु</li>
      <li>७. मर्मत – अपडेट राख्नु</li>
    </ul>
    <h3>🧠 तुलना:</h3>
    <p>स्कूल बनाउँदा जस्तै: नक्सा, कामदार, रंग, अन्तिम निरीक्षण – वेबसाइट पनि त्यस्तै चरणहरू पार गर्छ।</p>
    <h3>✏️ लामो उत्तरको सल्लाह:</h3>
    <p>“वेब विकास जीवनचक्रका ७ चरणहरू वर्णन गर्नुहोस्।”</p>
  </div>
`
              },
              {
                id:"dns",
                title:"DNS भनेको के हो?",
                content:
`

  <h2>🎩 DNS भनेको के हो?</h2>
  <div class="nepali">
    <p><strong>DNS = डोमेन नाम प्रणाली</strong></p>
    <p>यो वेबसाइटको नाम (जस्तै google.com) लाई अंक (IP ठेगाना) मा बदल्छ, जुन कम्प्युटरले बुझ्छ।</p>
    <h3>🧠 तुलना:</h3>
    <p>फोनको सम्पर्क सूची जस्तै – तपाईंले नाम देख्नुहुन्छ, तर फोनले नम्बर प्रयोग गर्छ।</p>
    <h3>✏️ याद राख्नुहोस्:</h3>
    <ul>
      <li>DNS ले डोमेन नामलाई IP ठेगानामा रूपान्तरण गर्छ</li>
      <li>.com, .org, .edu, .gov, .np जस्ता डोमेन प्रकारहरू हुन्छन्</li>
    </ul>
  </div>

  <h2>🎩 डोमेन नामका प्रकारहरू</h2>
  <div class="nepali">
    <table border="1">
      <tr><th>डोमेन</th><th>प्रयोग</th></tr>
      <tr><td>.com</td><td>व्यापारिक साइट</td></tr>
      <tr><td>.edu</td><td>शैक्षिक</td></tr>
      <tr><td>.gov</td><td>सरकारी</td></tr>
      <tr><td>.org</td><td>संस्था</td></tr>
      <tr><td>.np</td><td>नेपालका वेबसाइटहरू</td></tr>
    </table>
  </div>
`
              },

                {
                  id:"future-of-web",
                  title:"वेब प्रविधिको भविष्य",
                  content:

                  `
                   <h2>🎩 वेब प्रविधिको भविष्य</h2>
  <div class="nepali">
    <ul>
      <li>स्मार्ट सल्लाह दिने AI वेबसाइटहरू</li>
      <li>PWAs – ब्राउजरमै एप्स जस्तै काम गर्ने</li>
      <li>AR/VR वेबसाइटहरू – वास्तविकजस्तै अनुभव</li>
      <li>Responsive डिजाइन – मोबाइल, ट्याब्लेट, कम्प्युटर सबैमा मिल्ने</li>
      <li>Edge Computing – छिटो वेबसाइट लोड</li>
      <li>Web सुरक्षा – ह्याकिङबाट जोगिने</li>
    </ul>
    <h3>✏️ परीक्षा सल्लाह:</h3>
    <p>“वेब प्रविधिका ३ भविष्य प्रवृत्ति उल्लेख गर्नुहोस्।”</p>
  </div>

  <h2>🌍 तपाईंको वेबसाइट ठेगाना कसरी बनाउने?</h2>
  <div class="nepali">
    <p><strong>तपाईंको वेबसाइट अरूले भेटोस् भनेर (जस्तै तपाईंको पसलको नक्सा बनाउनु):</strong></p>
    <ul>
      <li>१. 🏷️ नाम छान्नुहोस्<br>
          <small>("ramrestaurant" जस्तै, "रामको म:म: पसल" भन्दा)</small></li>
      <li>२. 🛒 नाम खरिद गर्नुहोस्<br>
          <small>(Nest Nepal जस्ता स्थानहरूमा वर्षको करिब रु.१००० तिर्नु)</small></li>
      <li>३. 🔗 इन्टरनेटमा जडान गर्नुहोस्<br>
          <small>(DNS ले वेबसाइटको नक्सा जस्तै काम गर्छ)</small></li>
      <li>४. 🎉 अब संसारको जुनसुकै स्थानबाट हेर्न मिल्ने!<br>
          <small>(जस्तै "ramrestaurant.com" टाइप गर्दा)</small></li>
    </ul>
  </div> `
                }
              ]
            },
            {
            id:"con-of-programming",
            title:"प्रोग्रामिङको अवधारणा",
            icon:"🧠",
            lessons:[
                    {
                      id:"define",
                      title:"प्रोग्रामिङ ?",
                      content:`
   <h3>🧩 पाठ १: प्रोग्रामिङ भनेको के हो?</h3>
  <p>प्रोग्रामिङ भन्नाले कम्प्युटरलाई स्पष्ट निर्देशन दिने प्रक्रिया हो — एक प्रकारको recipe जस्तै।</p>
   <ul>
     <li>कल्पना गर्नुहोस् तपाईंसँग एउटा रोबोट छ। जबसम्म तपाईं भन्नुहुन्न, उसले केही गर्दैन:</li>
     <ul>
       <li>"उठ"</li>
       <li>"३ पाइला हिँड"</li>
     <li>"नमस्ते भन"</li>
     </ul>
   <li>यस्तो step-by-step निर्देशनलाई नै प्रोग्राम भनिन्छ।</li>
  </ul>
  <h3>🧩 पाठ २: प्रोग्रामिङ भाषाका प्रकारहरू</h3>
  <p>जसरी मानिसहरूले फरक-फरक भाषा बोल्छन्, कम्प्युटरले पनि फरक-फरक भाषा बुझ्छ:</p>
  <ul>
    <li><strong>मेसिन भाषा:</strong> ० र १ मात्र हुन्छ। कम्प्युटरले सिधै बुझ्छ।</li>
    <li><strong>असेम्बली भाषा:</strong> MOV, ADD जस्ता छोटा कोडहरू। अलिक सजिलो तर अझै गाह्रो।</li>
    <li><strong>उच्च स्तरीय भाषा:</strong> अङ्ग्रेजी जस्तै देखिने भाषा। सजिलो। जस्तै: QBASIC, Python, C।</li>
  </ul>

                      `
                    },
                    {
                      id:"trans",
                      title:"अनुवादक – Compiler र Interpreter",
                      content:`
                      <h3>🧩 पाठ ३: अनुवादक – Compiler र Interpreter</h3>
  <p>कम्प्युटरले QBASIC वा Python सिधै बुझ्दैन। त्यसलाई मेसिन भाषामा अनुवाद गर्न Translator चाहिन्छ।</p>
  <ul>
    <li><strong>Compiler:</strong> पूरै प्रोग्राम एकैचोटि अनुवाद गर्छ। छिटो तर सबै गल्ती पछि देखाउँछ।</li>
    <li><strong>Interpreter:</strong> एक लाइनमा अनुवाद गर्छ। ढिलो तर तुरुन्तै गल्ती देखाउँछ।</li>
  </ul>

                      
                      `
                    },
                    {
                       id:"Algorithm",
                       title:"एल्गोरिदम",
                       content:`
                         <h3>🧩 पाठ ४: एल्गोरिदम – कम्प्युटरका लागि recipe</h3>
  <p>एल्गोरिदम भनेको कुनै समस्या समाधान गर्ने step-by-step तरिका हो।</p>
  <p><strong>उदाहरण:</strong> चिया बनाउने तरिका</p>
  <ul>
    <li>पानी उमाल्ने</li>
    <li>चिया पत्ती हाल्ने</li>
    <li>दूध हाल्ने</li>
    <li>चलाउने</li>
    <li>पस्कने</li>
  </ul>

  <h3>🧩 पाठ ५: फ्लोचार्ट – योजनाको चित्र</h3>
  <p>फ्लोचार्ट भनेको diagram हो जुन कार्यक्रम आकृति र एरो प्रयोग गरेर देखाउँछ।</p>
  <ul>
    <li>ओवल → सुरु/अन्त्य</li>
    <li>आयत → प्रक्रिया (जस्तै: "दुई संख्या जोड")</li>
    <li>हीरा → निर्णय (हो/होइन)</li>
    <li>एरो → दिशा देखाउँछ</li>
  </ul>

                       
                       
                       `
                    },
                    {
                      id:"Syntax",
                      title:"Syntax र Command",
                      content:`
                        <h3>🧩 पाठ ६: Syntax र Command</h3>
  <p>Syntax भनेको प्रोग्रामिङ भाषा लेख्ने नियम हो।</p>
  <p><strong>उदाहरण:</strong></p>
  <ul>
    <li>✅ PRINT "Hello" → ठीक</li>
    <li>❌ PRINT Hello → गलत (quotes हराएको छ)</li>
  </ul>

  <h3>🧩 पाठ ७: Programmer भनेको को?</h3>
  <p>Programmer भनेको कम्प्युटरलाई step-by-step निर्देशन दिने व्यक्ति हो।</p>
  <ul>
    <li>कम्प्युटरले के गर्नुपर्छ भनेर सोच्दछ</li>
    <li>त्यो कामलाई स्टेपहरूमा बाँच्छ</li>
    <li>कुन भाषा प्रयोग गर्ने भनेर निर्णय गर्छ</li>
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





  

 

  


