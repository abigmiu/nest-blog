import * as path from 'path';
import { IAppConfig } from 'src/types/config.type';

const developmentAppConfig: IAppConfig = {
    port: 3005,
    db: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'nest_blog',
        charset: 'utf8mb4',
        entities: [path.join(__dirname, '../entities/**/*.entity{.js,.ts}')],
        synchronize: true,
    },
};

export default developmentAppConfig;
