import app from './config/server.config';
import { GlobalErrorHandler } from './modules/common/middleware/global-error-handler.middleware';

const PORT = process.env.PORT || 8200;

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    console.log(err.name, '/n');
    console.log(err.message, '/n');
    console.log(err.stack, '/n');
    process.exit(1);
});

app.use(new GlobalErrorHandler().handler);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    if (process.env.NODE_ENV === 'production') {
        console.log('PRODUCTION MODE: console.log() is disabled.');
        console.log = () => {};
    }
});
