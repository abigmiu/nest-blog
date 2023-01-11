import { webInfoKeys } from 'src/constant/option';

export type IWebInfoKey = typeof webInfoKeys[number];

export type IWebInfoResponse = Record<IWebInfoKey, any>;
