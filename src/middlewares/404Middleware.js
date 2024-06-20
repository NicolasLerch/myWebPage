module.exports = notFound = function(req, res, next){
        let image = fetch('https://dog.ceo/api/breed/dachshund/images/random')
        .then(res => res.json())
        .then(data => {
            const imageURL = data.message
            res.render('404', {imageURL})        
    })
}