import { IAppConfig } from 'src/types/config.type';

const baseAppConfig: Required<IAppConfig> = {
    port: 3000,
    globalPrefix: '/api',
    db: {},
};

export default baseAppConfig;
