import { defineStore } from 'pinia';

interface IState {
    info: Record<string, string>,
    announcement: string[]
}

export const useWebsiteStore = defineStore('website', {
    state(): IState {
        return {
            info: {},
            announcement: []
        };
    },
    actions: {
        setWebInfo(data: Record<string, string>) {
            this.info = data;
        },
        setAnnouncement(data: string[]) {
            this.announcement = data;
        }
    }
});
