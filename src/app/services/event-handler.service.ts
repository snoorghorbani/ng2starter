import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class EventHandlerService {
    messageByStatusType: { [code: number]: string }
    translateOfStatusMessage: { [message: string]: string }
    defaultMessage: 'انجام عملیات با خطا مواجه شده است';
    constructor(
        private snackBar: MatSnackBar
    ) {
        this.messageByStatusType = {
            400: 'خطا در ورود اطلاعات',
            401: 'درخواست غیر مجاز است',
            402: 'نیاز به پرداخت مالی دارد',
            403: 'غیر قابل دسترسی',
            404: 'یافت نشد',
            409: 'شماره موبایل قبلا ثبت شده است.',
            500: ''
        }
        this.translateOfStatusMessage = {
            "bad request": "خطا در ورود اطلاعات",
            "forbidden": "درخواست غیر مجاز است",
            "conflict": "شماره وارد شده قبلا ثبت شده است.",
            "duplicate username": "شماره موبایل قبلا ثبت شده است.",
            "not found": "Not Found",
            "invalid request": "خطا در ورود اطلاعات",
            "invalid pin": "کد تایید اشتباه است",
            "invalid captcha code": "کد امنیتی اشتباه است"
        }
    }

    failed(data): void {
        debugger
        var message = ((data.json && data.json() && data.json().Message) ? this.translateOfStatusMessage[data.json().Message.toLowerCase()] || data.json().Message : null)
            || this.translateOfStatusMessage[(data.statusText as string).toLowerCase()]
            || data.statusText
            || this.messageByStatusType[+data.status]
            || this.defaultMessage;

        this.snackBar.open(message, null, {
            duration: 3000,
            direction: 'rtl'
        });
    }

}

export var EventHandlerServiceStub = {}