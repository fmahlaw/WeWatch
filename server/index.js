import express from 'express'
import cors from 'cors'
import storeRoutes from './routes/stores.js'
import additionalData from './routes/addData.js'

const port = 4000 || process.env.PORT ;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/post_name_toped', storeRoutes,)
app.use('/post_add_data', additionalData,);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
