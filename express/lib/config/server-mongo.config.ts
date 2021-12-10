import * as express from 'express';
import * as bearerToken from 'express-bearer-token';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import { MongoConnection } from './mongo.config';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import initiateRoutes from '../routes';
var dotenvExpand = require('dotenv-expand');

class App {
    public app: express.Application;
    private mongoConnection = new MongoConnection();

    constructor() {
        this.initiate()
        this.setConfig();
        initiateRoutes(this.app);
    }

    // initiators
    private async initiate() {
        console.log('Initializing the server...');

        try {
            const env = dotenv.config();
            dotenvExpand(env);
            await this.mongoConnection.connect();
        } catch (error) {
            console.error('An error occurred while initiating data', error);
            process.exit(1);
        }
    }

    private setConfig(): void {
        this.app = express();
        this.app.use(express.json({ limit: '25mb' }));
        this.app.use(express.urlencoded({ extended: false, limit: '25mb' }));

        // Authorization header
        this.app.use(bearerToken());

        // Parse cookies
        this.app.use(cookieParser());

        // Set cors
        this.app.use(cors());

        if (process.env.NODE_ENV !== 'production') {
            swaggerDocument.info.version = '0.0.1';
            swaggerDocument.info.title = process.env.EXPRESS_APP_NAME || 'No title provided';
            //@ts-ignore
            swaggerDocument.host = process.env.EXPRESS_APP_BASE_URL || 'No base url provided';
            this.app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        }

        // Add custom middleware
        this.app.use((req, res, next) => {
            // If request comes with the '/api' prefix, then have to remove it.
            if (req.url.substr(0, 4) === '/api') {
                req.url = req.url.substr(4);
            }

            next();
        });
    }
}

export default new App().app;
