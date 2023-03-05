const app = require('./app');
const dotenv=require("dotenv");

dotenv.config({path:"./config/config.env"})
const PORT = process.env.PORT||4000 ;

app.listen(PORT, () => {
  console.log(`server is started on post :${PORT}`);
});