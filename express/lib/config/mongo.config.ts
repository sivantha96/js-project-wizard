import { connect, set, connection } from 'mongoose';

export class MongoConnection {
    public connect(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const mongoDB = process.env.EXPRESS_APP_DB_URL;

            if (!mongoDB) {
                console.log(mongoDB);
                return reject(new Error('DB URL is not valid'));
            }

            connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

            set('useCreateIndex', true);
            set('useFindAndModify', false);

            connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

            resolve(true);
        });
    }
}
