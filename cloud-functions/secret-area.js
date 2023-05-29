exports.handler = function(event, context, callback){
    const secrectContent = `
   <h3>Welcome To The Secrect Area</h3>
   <p>Here we can tel you the sky is <strong>blue</strong>, and two plus two equals four</p>
    `
    let body

    if(event.body) {
        body = JSON.parse(event.body)

    }else {
        body = {}
    }

    if(body.password == "javascript") {
        callback(null, {
            statusCode: 200,
            body: secrectContent
        })

    } else {
        callback(null, {
            statusCode: 401
        })

    }
    
}