import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

export abstract class HttpResponseBaseModel<T> {
    Result: any;
    constructor() { }
    abstract extractData?(): any;
}