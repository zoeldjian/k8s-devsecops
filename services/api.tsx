import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
const base_url = serverRuntimeConfig.NEXT_PUBLIC_API_URL;

// RY: store all api endpoint here
const api = {
	getAppStatus: base_url + "app-status",
};

export default api;
