const app = require('./index');
const PORT = 8080;

app.listen(
    PORT, 
    (err) => {
        if(err) throw err;
        console.log(`Listening on the port ${PORT}. Check this out at http://localhost:${PORT}`)
    });