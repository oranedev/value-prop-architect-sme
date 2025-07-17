// Storage utility functions for persisting value proposition data

const STORAGE_PREFIX = 'valueProp_';

export interface StorageData {
  data: any;
  timestamp: number;
  version: string;
}

export function saveToStorage(key: string, data: any): boolean {
  try {
    const storageData: StorageData = {
      data,
      timestamp: Date.now(),
      version: '1.0'
    };
    localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(storageData));
    return true;
  } catch (error) {
    console.error('Failed to save to storage:', error);
    return false;
  }
}

export function loadFromStorage(key: string): any | null {
  try {
    const stored = localStorage.getItem(`${STORAGE_PREFIX}${key}`);
    if (!stored) return null;
    
    const parsed: StorageData = JSON.parse(stored);
    return parsed.data;
  } catch (error) {
    console.error('Failed to load from storage:', error);
    return null;
  }
}

export function removeFromStorage(key: string): boolean {
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
    return true;
  } catch (error) {
    console.error('Failed to remove from storage:', error);
    return false;
  }
}

export function clearAllStorage(): boolean {
  try {
    const keys = Object.keys(localStorage).filter(key => 
      key.startsWith(STORAGE_PREFIX)
    );
    keys.forEach(key => localStorage.removeItem(key));
    return true;
  } catch (error) {
    console.error('Failed to clear storage:', error);
    return false;
  }
}

export function getStorageInfo(): { size: number; keys: string[] } {
  try {
    const keys = Object.keys(localStorage).filter(key => 
      key.startsWith(STORAGE_PREFIX)
    );
    const size = keys.reduce((total, key) => {
      const value = localStorage.getItem(key);
      return total + (value ? value.length : 0);
    }, 0);
    
    return { size, keys: keys.map(key => key.replace(STORAGE_PREFIX, '')) };
  } catch (error) {
    console.error('Failed to get storage info:', error);
    return { size: 0, keys: [] };
  }
}