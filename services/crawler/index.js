require('dotenv').config();
const express = require('express');
const mongooseDatabseConnection = require('./database');
const app = express();
require('./routes');
// const swaggerAutoGen = require('swagger-autogen')();
// const swaggerUIExpress = require('swagger-ui-express');
app.use(express.json());

const doc = {
    info: {
        title: 'Crawler API',
        description: 'Microservice for adding content sources and crawling data through APIs',
    },
    host: process.env.HOST || `localhost:${process.env.PORT || 3000}`,
}

// app.use('/api/v1/', router);
// swaggerAutoGen(outputFile, routes, doc).then(() => {
//    const swaggerAutoGenFile = require('./swagger-output.json');
//    app.use('/api/v1/docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerAutoGenFile));
    app.listen(process.env.PORT || 3000, async () => {
        require('./services/elasticsearch');
        await mongooseDatabseConnection();
    });
// })

