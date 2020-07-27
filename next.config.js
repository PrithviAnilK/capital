const isProduction = (process.env.NODE_ENV || 'production') === 'production';
const serverURL = "http://localhost:5000/api";
module.exports = {
    isProduction,
    serverURL,
}
