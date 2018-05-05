import { Component, OnInit } from "@angular/core";
import { SocketService } from "@soushians/infra";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: [ "./dashboard.component.css" ]
})
export class DashboardComponent implements OnInit {
	constructor(private socketService: SocketService) {}

	ngOnInit() {
		// this.socketService.initSocket();
		// this.socketService.send("add-message");
		// this.socketService.onMessage().subscribe(msg=>{
		//         debugger
		// });
	}
}
