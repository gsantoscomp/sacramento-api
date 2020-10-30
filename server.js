require('dotenv').config();
require('module-alias/register');

const config = require('@config');
const app = require('@app');
const routes = require('@routes');


app.use(routes);
app.listen(config.app.port, (err) => {
    if (err) {
        console.log(err);
    }

    console.log(`Server running. Port: ${config.app.port}`);
});
