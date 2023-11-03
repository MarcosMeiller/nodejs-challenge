import router from './routes/index.js';
import express, { json } from 'express';
import cors from 'cors';
//import expressfileupload from 'express-fileupload';
import fileUpload from 'express-fileupload';

const app = express();

app.use(cors());

app.use(json())


app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '.uploads/'
}));
app.use('/api', router);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App ready in http://localhost:${port}`)
})


