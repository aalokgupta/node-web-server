const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('home.hbs', {
              pageTitle: "HomePage",
              WelcomeMessage: "Hey, welcome to my first node server",
              currentYear: new Date().getFullYear()
            });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/help', (req, res) => {

});

app.get('/bad', (req, res) => {
  res.send({BadRequest: "No page found, unable to handle request"});
})

app.listen(port, () =>{
  console.log(`server started listening at port no ${port}`);
});
