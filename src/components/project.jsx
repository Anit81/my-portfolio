import './project.css'

export function ProjectComponent(){
  return(
    <>
       <h3 id="project">My Project</h3>
     <div className="project-div">
       <div>
         <p className="project-name">🛒 E-Commerce Store</p>
         <img src="images/e-commerce.png" alt="e-commerce Store" className='project-img'/>
         <p>A mini e-commerce web app that displays products using a MockAPI.I used React to handle components and Local Storage to manage the cart and orders.Note: Since MockAPI’s free plan limits POST and PUT requests, I built those parts manually using React and Local Storage.</p>
        <p className="first-tech"><strong>Tech Stack:</strong>React, CSS, MockAPI, Local Storage</p>
        <button><a href='https://e-commerce-website-git-main-anit81-s-projects.vercel.app/'>Live Demo</a></button>
        <button> <a href='https://github.com/Anit81/e-commerce-website'>Source Code</a></button>
       </div>
      <div>
        <p className="project-name">🌤️ Weather App</p>
        <img src="images/weatherImg.png" alt="weather App"  className='project-imgw' />
        <p>Displays real-time weather updates based on city name.Uses an OpenWeather API to fetch temperature, humidity, and weather conditions (e.g., cloudy or rainy).</p>
       <p className="second-tech"><strong>Tech Stack:</strong>React, Weather API, CS
       </p>
        
         <button> <a href='https://weather-app-git-main-anit81-s-projects.vercel.app/'>Live Demo</a></button>
          <button><a href='https://github.com/Anit81/weather-app'>Source Code </a></button>
        </div>
     <div>
          <p className="proje<t-name">🧑‍💻 GitHub Finder</p>
          <img src="images/githubfinder.png" alt="GitHub Finder" className='project-imgf' />
          <p>Allows users to search GitHub usernames and view profile details such as repositories, followers, and bio using the GitHub API.</p>
          <p className="third-tech"><strong>Tech Stack:</strong> React, GitHub API, CSS</p>
          <button><a href='https://my-react-todo-list-app-fejr-git-main-anit81-s-projects.vercel.app/'>Live Demo</a></button>
          <button><a href='https://github.com/Anit81/github-finder'>Source Code</a> </button>
      </div>
      <div>
          <p className="project-name">💰 Crypto Price Tracker</p>
          <img src="images/cryptoprice-tracker.png" alt="crypto Tracker"  className='project-imgg' />
          <p>Shows the top 10 cryptocurrencies with their current market prices, updated from a public crypto API.Displays responsive cards and clean UI.</p>
          <p className="fourth-tech"><strong>Tech Stack:</strong> React, API, CSS</p>
          <button><a href='https://crypto-price-tracker-git-main-anit81-s-projects.vercel.app/'>Live Demo </a></button>
          <button><a href='https://github.com/Anit81/crypto-price-tracker/tree/main'>Source Code</a></button>
     </div>
     <div>
          <p className="project-name">🎬 Movie Landing Page</p>
          <img src="images/movieSite.png" alt="Movie App" className='project-imgm' />
          <p>A beautifully designed movie-themed landing page built with HTML and CSS, featuring a JavaScript-powered login page before accessing the main site. The layout is clean, responsive, and visually engaging — showcasing creativity and attention to detail in front-end design.</p>
          <p className="fifth-tech"><strong>Tech Stack:</strong>HTML, CSS, JavaScript,Local Storage</p>
          <button><a href='https://anit81.github.io/Movie-Site/'>Live Demo</a> </button>
         <button><a href='https://github.com/Anit81/Movie-Site/tree/main'>Source Code</a></button>
    </div>
    
  <div>
     <p className="project-name">✅ Todo List App</p>
          <img src="images/todo-list.png" alt="Todo List" className='project-imgt' />
          <p>A task manager that allows users to add, delete, and mark tasks as complete.Built with React’s useState and useEffect hooks to manage tasks and save them in Local Storage.</p>
          <p className="fifth-tech"><strong>Tech:</strong> React, CSS, Local Storage</p>
          <button><a href='https://my-react-todo-list-app.vercel.app/'>Live Demo</a> </button>
         <button><a href='https://github.com/Anit81/my-react-todo-list-app'>Source Code</a></button>
  </div>
    </div>
    </>
  );
}