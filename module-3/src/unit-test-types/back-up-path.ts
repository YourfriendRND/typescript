import { SettingsManager } from "./settings-manager";

export const getBackupPath = (settings: SettingsManager) =>
  `${settings.path}/daily-backup.txt`;
