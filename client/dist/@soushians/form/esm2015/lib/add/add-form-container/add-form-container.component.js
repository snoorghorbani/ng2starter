/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormSchemaModel } from "../../models";
import { AddFormAction } from "../add-form.actions";
import { AddFormSchemaAction, UpdateFormSchemaAction } from "../../list/list.actions";
import { FormService } from "../../services/form.service";
export class AddFormContainerComponent {
    /**
     * @param {?} store
     * @param {?} service
     */
    constructor(store, service) {
        this.store = store;
        this.service = service;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.schema = new FormSchemaModel();
        this.schema.init();
        this.store.dispatch(new AddFormSchemaAction(this.schema));
    }
    /**
     * @param {?} form
     * @return {?}
     */
    add(form) {
        this.store.dispatch(new AddFormAction(form));
    }
    /**
     * @param {?} form
     * @return {?}
     */
    update_schema(form) {
        this.store.dispatch(new UpdateFormSchemaAction(form));
    }
}
AddFormContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<ngs-form-add 
					[schema]="schema" 
					(changes)="update_schema($event)" 
					(submited)=add($event)
				></ngs-form-add>`
            }] }
];
/** @nocollapse */
AddFormContainerComponent.ctorParameters = () => [
    { type: Store },
    { type: FormService }
];
if (false) {
    /** @type {?} */
    AddFormContainerComponent.prototype.schema;
    /** @type {?} */
    AddFormContainerComponent.prototype.store;
    /** @type {?} */
    AddFormContainerComponent.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFTMUQsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFFckMsWUFBbUIsS0FBZ0MsRUFBUyxPQUFvQjtRQUE3RCxVQUFLLEdBQUwsS0FBSyxDQUEyQjtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQWE7S0FBSTs7OztJQUNwRixRQUFRO1FBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUMxRDs7Ozs7SUFDRCxHQUFHLENBQUMsSUFBcUI7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUM3Qzs7Ozs7SUFDRCxhQUFhLENBQUMsSUFBcUI7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3REOzs7WUFwQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7OztxQkFJVTthQUNwQjs7OztZQWRRLEtBQUs7WUFNTCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQWN0aW9uIH0gZnJvbSBcIi4uL2FkZC1mb3JtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybVNjaGVtYUFjdGlvbiwgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saXN0L2xpc3QuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG5ncy1mb3JtLWFkZCBcclxuXHRcdFx0XHRcdFtzY2hlbWFdPVwic2NoZW1hXCIgXHJcblx0XHRcdFx0XHQoY2hhbmdlcyk9XCJ1cGRhdGVfc2NoZW1hKCRldmVudClcIiBcclxuXHRcdFx0XHRcdChzdWJtaXRlZCk9YWRkKCRldmVudClcclxuXHRcdFx0XHQ+PC9uZ3MtZm9ybS1hZGQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0c2NoZW1hOiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+LCBwdWJsaWMgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnNjaGVtYSA9IG5ldyBGb3JtU2NoZW1hTW9kZWwoKTtcclxuXHRcdHRoaXMuc2NoZW1hLmluaXQoKTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZEZvcm1TY2hlbWFBY3Rpb24odGhpcy5zY2hlbWEpKTtcclxuXHR9XHJcblx0YWRkKGZvcm06IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkRm9ybUFjdGlvbihmb3JtKSk7XHJcblx0fVxyXG5cdHVwZGF0ZV9zY2hlbWEoZm9ybTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uKGZvcm0pKTtcclxuXHR9XHJcbn1cclxuIl19