// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { HttpRequestBaseModel } from '@soushians/shared';

// export class UserActivePackageReportApiResponseModel implements HttpRequestBaseModel<UserActivePackageReportApiResponseModel>  {
//     PackageName: string;
//     ExpirationDate: string;
//     TotalTimeCredit: number;
//     UsedTimeCredit: number;
//     TotalQuotaCredit: number;
//     UsedQuotaCredit: number;
//     MaxUsageInDay: number;
//     UseInDay: number;
//     ConnectionStatus: 'online' | 'offline';
//     IpAddress: string;
//     MacAddress: string;
//     ConnectionStartTime: string;
//     ConnectionDuration: string;

//     constructor({ PackageName, ExpirationDate, TotalTimeCredit, UsedTimeCredit, TotalQuotaCredit, UsedQuotaCredit, MaxUsageInDay, UseInDay, ConnectionStatus, IpAddress, MacAddress, ConnectionStartTime, ConnectionDuration }) {
//         this.PackageName = PackageName;
//         this.ExpirationDate = ExpirationDate;
//         this.TotalTimeCredit = TotalTimeCredit;
//         this.UsedTimeCredit = UsedTimeCredit;
//         this.TotalQuotaCredit = TotalQuotaCredit;
//         this.UsedQuotaCredit = UsedQuotaCredit;
//         this.MaxUsageInDay = MaxUsageInDay;
//         this.UseInDay = UseInDay;
//         this.ConnectionStatus = ConnectionStatus;
//         this.IpAddress = IpAddress;
//         this.MacAddress = MacAddress;
//         this.MacAddress = MacAddress;
//         this.ConnectionStartTime = ConnectionStartTime;
//         this.ConnectionDuration = ConnectionDuration;
//     }

//     getRequestBody() {
//         return {}
//     }

// }