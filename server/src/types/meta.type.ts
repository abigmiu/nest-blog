export interface IMetaTypes {
    category: string;
    tag: string;
}

export type IMetaTypeValue = IMetaTypes[keyof IMetaTypes];
