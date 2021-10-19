export default class LocalDB {
	constructor(itemName) {
		this.storageName = itemName;
		if (!localStorage.getItem(this.storageName))
			localStorage.setItem(this.storageName, '[]');
	}
	getData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let data = null;
				try {
					data = localStorage.getItem(this.storageName);
				} catch (error) {
					reject(error);
				}
				resolve(JSON.parse(data));
			}, 300);
		});
	}
	setData(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					localStorage.setItem(this.storageName, JSON.stringify(data));
				} catch (error) {
					reject(error);
				}
			}, 300);
		});
	}

	removeDB() {
		setTimeout(() => {
			localStorage.removeItem(this.storageName);
		}, 300);
	}
}
