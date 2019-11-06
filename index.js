const polka = require('polka');
const db = require('./db.js');

polka()
  .get('/skills',(req,res) => {
    console.log(`> checking some mad skills!`);
    res.end(JSON.stringify(db.get('skills').value()));
  })
  .get('/experiences',(req,res) => {
	      console.log(`> checking some fascinating experiences!`);
	      res.end(JSON.stringify(db.get('experiences').value()))
  })
  .listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3000`);
  });
  
