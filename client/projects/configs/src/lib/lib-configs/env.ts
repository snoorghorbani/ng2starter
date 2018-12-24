import { environment } from "src/environments/environment";

// tslint:disable-next-line:class-name
export class env {
	static production = environment.production;

	static get frontend_server() {
		if (!environment.production) {
			return environment.frontend_server;
		}
		// developement server
		if (location.host.includes("localhost")) {
			return "http://localhost:3000";
		}
		// سرور اصلی شهرستان
		if (location.host.includes("192.168.11.11") || location.host.includes("provinceoss.rasana")) {
			return "http://172.22.33.139:3139";
		}
		// سرور اصلی تهران
		if (location.host.includes("192.168.11.15") || location.host.includes("oss.rasana")) {
			return "http://172.22.33.139:3149";
		}
		// سرور تست شهرستان
		if (location.host.includes("172.22.34.21") || location.host.includes("testwebprovince.software.shatel")) {
			return "http://172.22.34.28:3139";
		}
		// سرور تست تهران
		if (location.host.includes("172.22.34.41") || location.host.includes("testwebtehran.software.shatel")) {
			return "http://172.22.34.28:3149";
		}

		return "http://not-set-correct-frontend-server:3000";
	}

	static get server() {
		if (!environment.production) {
			return environment.server;
		}

		// developement server
		if (location.host.includes("localhost")) {
			return "http://localhost";
		}
		// سرور اصلی شهرستان
		if (location.host.includes("192.168.11.11")) {
			return "192.168.11.11";
		}
		if (location.host.includes("provinceoss.rasana")) {
			return "https://provinceoss.rasana.ir";
		}
		// سرور اصلی تهران
		if (location.host.includes("192.168.11.15")) {
			return "192.168.11.15";
		}
		if (location.host.includes("oss.rasana")) {
			return "https://oss.rasana.ir";
		}
		// سرور تست تهران
		if (location.host.includes("172.22.34.41")) {
			return "http://172.22.34.41";
		}
		if (location.host.includes("testwebtehran.software.shatel")) {
			return "http://testwebtehran.software.shatel";
		}
		// سرور تست شهرستان
		if (location.host.includes("172.22.34.21")) {
			return "http://172.22.34.21";
		}
		if (location.host.includes("testwebprovince.software.shatel")) {
			return "http://testwebprovince.software.shatel";
		}

		return "http://not-set-correct-server";
	}
}
