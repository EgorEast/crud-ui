const CRUD_STORAGE = 'CRUD-Storage';
export default class LocalDB {
	constructor() {
		if (!localStorage.getItem(CRUD_STORAGE))
			localStorage.setItem(CRUD_STORAGE, '[]');
	}
	getData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let data = null;
				try {
					data = localStorage.getItem(CRUD_STORAGE);
				} catch (error) {
					reject('Storage is empty');
				}
				resolve(JSON.parse(data));
			}, 300);
		});
	}
	setData(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					localStorage.setItem(CRUD_STORAGE, JSON.stringify(data));
				} catch (error) {
					reject(error);
				}
			}, 300);
		});
	}

	removeDB() {
		setTimeout(() => {
			localStorage.removeItem(CRUD_STORAGE);
		}, 300);
	}
}
