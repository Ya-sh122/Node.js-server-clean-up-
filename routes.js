  const requestHandler=(req,res)=>{
  const url= req.url;

    if(url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.end(
            `
            <form action='/message'>
            <input type='text' name='username'></input>
            <button type='submit'>Add</button>    
            `
        )

    }else if(url.startsWith('/message')){
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello from my side..</h1>');
    }else{
        res.statusCode=404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Page not found</h1>');
    }
}

const anotherFun = ()=>{
    console.log('This is another function dear');
}


//Exporting methods

// module.exports=requestHandler;

// ----------------------------------------

// module.exports={
//     handler: requestHandler,
//     testFun: anotherFun
// }

// -------------------------------------------

// module.exports.handler=requestHandler;
// module.exports.testFun=anotherFun;

// --------------------------------------------

exports.handler=requestHandler;
exports.testFun=anotherFun;

