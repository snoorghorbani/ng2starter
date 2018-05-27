import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: [ "./dashboard.component.css" ]
})
export class DashboardComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		// this.socketService.initSocket();
		// this.socketService.send("add-message");
		// this.socketService.onMessage().subscribe(msg=>{
		//         debugger
		// });
	}
}
