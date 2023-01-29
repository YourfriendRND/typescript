// * Эталонное решение

import { DEFAULT_PROFILE } from "./settings-manager";

export interface SettingsManager {
    name: string;
    readonly path: string;
}

export class SettingsManagerImp implements SettingsManager {
    private profileName: string = DEFAULT_PROFILE;

    constructor(private readonly baseFolder: string) {}

    get name() {
        return this.profileName;
    }
    set name(value: string) {
        this.profileName = value;
    }

    get path() {
        return `${this.baseFolder}/${this.profileName}`;
    }
}