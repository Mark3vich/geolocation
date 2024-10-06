import { action, makeAutoObservable, observable } from "mobx";

class ThemeStores {
    @observable theme: boolean = true;
    constructor() {
        makeAutoObservable(this);
    }
    @action setTheme(theme: boolean): void {
        this.theme = theme;
    }

    @action getTheme(): boolean {
        return this.theme;
    }
}

export default new ThemeStores();