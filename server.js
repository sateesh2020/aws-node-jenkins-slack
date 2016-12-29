var app = require('express')()

app.get('/',function(req,res) {
  res.send("Hurray everything is working fine");
})

app.listen(3000)