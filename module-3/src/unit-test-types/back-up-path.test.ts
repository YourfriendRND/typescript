import { SettingsManager } from './settings-manager';
import { getBackupPath } from './back-up-path';

type ManagerType = InstanceType<typeof SettingsManager>

describe("back-up-path", () => {
  const getMockSettingsManager = (): SettingsManager => {
    const mockManager = {} as ManagerType;
    return mockManager;
  };
  it("добавляет название файла к базовому пути", () => {
    const mockSettingsManager = getMockSettingsManager();
    const backupPath = getBackupPath(mockSettingsManager);
    expect(backupPath.startsWith(mockSettingsManager.path)).toBeTruthy();
  });
});
