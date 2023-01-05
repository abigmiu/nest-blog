import type { Component } from 'vue';

export interface ILayoutHeaderMenu {
    id: number;
    icon: Component;
    title: string;
    routeName?: string;
    handler?: (...args: any[]) => any;
}
