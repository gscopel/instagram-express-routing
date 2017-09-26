var express = require('express')
var router = express.Router()
var superagent = require('superagent')

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('profilesearch', {title: 'Profile Search'})

})


//Get API data
router.get('/:username', function(req, res, next){
  var username = req.params.username

  var url = 'https://www.instagram.com/'+username+'/media/'
  superagent
  .get(url)
  .query(null)
  .set('Accept', 'application/json')
  .end(function(err, response){
    if (err){
      res.json({
        confirmation: 'fail'
      })
      return
    }
    res.render('profile', response.body)
  })
})

//Post API data through input form
router.post('/', function(req, res, next){
    var username = req.body.username
    console.log(username)

    var url = '/profilesearch/'+username
    res.redirect(url)

  })

module.exports = router
