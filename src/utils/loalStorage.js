export const saveToLocalStorage = (key, data, expirationInMs) => {
	if (!expirationInMs) {
		expirationInMs = 259200000; // 3 days
	}
	const expTime = new Date().getTime() + expirationInMs;
	data.expTime = expTime;
	localStorage.setItem(key, JSON.stringify(data));
};

export const getItemFromLocalStorage = (key) => {
	const itemStr = localStorage.getItem(key);

	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);

	const now = new Date().getTime();
	if (now > item.expiration) {
		localStorage.removeItem(key);
		return null;
	}
	return item;
};

export const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}
