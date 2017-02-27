var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <h5>Thank you for visiting my little React app!</h5>
      <p>React weather was built with React(obvs), Foundation, and Webpack. I hope you enjoy your stay.</p>
        <a target="_blank" className="button" href="https://github.com/937aaron/ReactWeather">Cash me on github >></a>
  </div>
  )
}

module.exports = About;
