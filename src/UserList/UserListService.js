import LocalDB from '../LocalDB';

export default class UserListService {
	constructor() {
		this.localHostDB = new LocalDB();
	}
	async getPersonList() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const data = this.localHostDB.getData();
				data
					.then((result) => {
						resolve({ data: result });
					})
					.catch((error) => {
						reject(error);
					});
			}, 300);
		});
	}
	async addPerson(newPerson) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const data = this.localHostDB.getData();
				data
					.then((result) => {
						const newList = result || [];
						newList.push(newPerson);
						this.localHostDB.setData(newList).catch((error) => {
							reject(error);
						});
						resolve({ data: newPerson });
					})
					.catch((error) => {
						reject(error);
					});
			}, 300);
		});
	}
	async updatePerson(id, newData) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const data = this.localHostDB.getData();
				let oldData;
				data
					.then((result) => {
						const newDataDB = result.map((element) =>
							element._id === id
								? ((oldData = element), { ...element, data: newData.data })
								: element
						);
						this.localHostDB.setData(newDataDB).catch((error) => {
							reject(error);
						});
						resolve({ data: oldData });
					})
					.catch((error) => {
						reject(error);
					});
			}, 300);
		});
	}
	async deletePerson(id) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const data = this.localHostDB.getData();
				data
					.then((result) => {
						const newDataDB = result.filter((item) =>
							item._id !== id ? item : null
						);
						this.localHostDB.setData(newDataDB).catch((error) => {
							reject(error);
						});
						resolve({ data: true });
					})
					.catch((error) => {
						reject(error);
					});
			}, 300);
		});
	}
}
