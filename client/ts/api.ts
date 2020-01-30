import api from "../../server/api/api"

class ApiClient {
	getMap(): Promise<number[]> {
		// const res = fetch(api.map).then(x => x.json()).then(map =>console.log(map));
		// return res
	}
}

export const apiClient = new ApiClient();

