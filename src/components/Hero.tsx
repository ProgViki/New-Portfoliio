const Hero: React.FC = () => (
    <section className="h-screen flex flex-col justify-center items-center text-center pt-16 transition-all duration-700">
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-5xl">
        {/* Profile Picture */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/src/assets/ProfilePics.jpg"
            alt="Your Name"
            className="w-80 h-80 rounded-full object-cover mx-auto md:mx-0 shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
  
        {/* Hero Text */}
        <div className="md:w-1/2">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
            I'm Victor Ogunwehin
          </h1>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Software Engineer | SDLC Expert
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <a href="#contact" className="no-underline bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
              Contact Me
            </a>
            <a href="#contact" className="no-underline bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
  

  export default Hero;