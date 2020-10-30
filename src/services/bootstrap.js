const config = require('@Config');
const app = require('@app');

module.exports = (err) => {
    app.listen(config.app.port, (err) => {
        if (err) {
            console.log(err);
        }
    
        console.log(`Server running. Port: ${config.app.port}`);
    });
}

