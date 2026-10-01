export function readLocalCollection(key) {
  try {
    const records = JSON.parse(window.localStorage.getItem(key) || '[]');
    return Array.isArray(records) ? records : [];
  } catch {
    return [];
  }
}

export function appendLocalRecord(key, record) {
  try {
    const records = readLocalCollection(key);
    records.push(record);
    window.localStorage.setItem(key, JSON.stringify(records));
    return true;
  } catch {
    return false;
  }
}