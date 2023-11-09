let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y comparto mi pasión por la música a través de ellos')
  .pauseFor(200)
  .deleteChars(10)
  .start();
