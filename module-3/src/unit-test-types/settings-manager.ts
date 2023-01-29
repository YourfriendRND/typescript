export const DEFAULT_PROFILE = "default";

export class SettingsManager {
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



