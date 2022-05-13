const app = require('./index');
const dotenv = require('dotenv');

dotenv.config({ path: `.env` });

app.listen(4000, () => {
    console.log(`app running on port ${4000}`)
});