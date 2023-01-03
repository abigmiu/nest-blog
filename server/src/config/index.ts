import { readFile } from 'fs/promises';
import * as path from 'path';

import type { IAppConfig } from 'src/types/config.type';
import baseAppConfig from './base.config';

const loadConfig = async () => {
    const env = process.env.NODE_ENV;
    const fullPath = path.resolve(__dirname, `./${env}.config.js`);
    const { default: environmentConfig }: { default: IAppConfig } = await import(fullPath);
    const config: IAppConfig = {
        ...baseAppConfig,
        ...environmentConfig,
    };
    return config;
};
export default loadConfig;
