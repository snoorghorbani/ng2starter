/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetWidgetsStartAction } from "../services/api/get-widgets/get-widgets.actions";
import { DeleteWidgetStartAction } from "../services/api/delete-widget";
export class WidgetsManagementComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.widgets$ = this.store.select((state) => state.widgets.db.data);
        this._fill_anghazi();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.dispatch(new GetWidgetsStartAction());
    }
    /**
     * @param {?} item
     * @return {?}
     */
    remove(item) {
        debugger;
        this.store.dispatch(new DeleteWidgetStartAction(item));
    }
    /**
     * @return {?}
     */
    _fill_anghazi() {
        this.anghazi = {
            article: {
                color: "green",
                icon: "description"
            },
            links: {
                color: "orange",
                icon: "link"
            },
            list: {
                color: "blue",
                icon: "list"
            }
        };
    }
}
WidgetsManagementComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px" class="main-container">

  <div class="content-action">
    <mat-card class="with-sticky-action">
      <mat-card-header>
        <mat-card-title fxLayout="row" fxLayoutGap="5px">
          <mat-icon>widgets</mat-icon>
          <span>مدیریت افزونه‌ها</span>
        </mat-card-title>
        <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
          <span>
            افزونه‌ مورد نظر را براساس نوع آن ایجاد نمایید ...
          </span>
        </mat-card-subtitle>
      </mat-card-header>

      <div fxLayout="row wrap" fxLayoutAlign="start">

        <button mat-raised-button fxFlex.gt-lg="19" fxFlex.lg="24" fxFlex.md="31.7" fxFlex.sm="49" fxFlex.xs="100"
          class='link' *ngFor="let item of (widgets$ | async)">
          <button mat-icon-button (click)="remove(item)" class="remove-item">
            <mat-icon>delete</mat-icon>
          </button>
          <div class="link-button" [routerLink]="['../upsert' ,  item.type,  item._id]" fxLayout='column' fxLayoutAlign='space-between center'>
            <mat-icon color='primary' [style.color]="anghazi[item.type].color">{{anghazi[item.type].icon}}</mat-icon>
            <div fxFlex="nogrow" fxFlexAlign="stretch" fxLayoutAlign="center center" class="widget-type">
              {{item.type}}
            </div>
            <h4 class="title">{{item.name}}</h4>
          </div>
        </button>
      </div>

    </mat-card>

    <div fxLayout="column" class="sticky-action">
      <a mat-mini-fab routerLink="../upsert/article" [style.backgroundColor]="'#ffffff'">
        <mat-icon [style.color]="anghazi.article.color">{{anghazi.article.icon}}</mat-icon>
      </a>
      <a mat-mini-fab routerLink="../upsert/links" [style.backgroundColor]="'#ffffff'">
        <mat-icon [style.color]="anghazi.links.color">{{anghazi.links.icon}}</mat-icon>
      </a>
      <a mat-mini-fab routerLink="../upsert/list" [style.backgroundColor]="'#ffffff'">
        <mat-icon [style.color]="anghazi.list.color">{{anghazi.list.icon}}</mat-icon>
      </a>
    </div>

  </div>
</div>`,
                styles: [`.link{margin:.5%;box-sizing:border-box;position:relative;padding:0}button.link mat-icon{font-size:34px;width:34px;height:34px}.link h4{margin:0}.remove-item{position:absolute;top:0;left:0;z-index:100}.link-button{padding:25px 15px}button.link .remove-item mat-icon{font-size:initial;width:initial;height:initial;visibility:hidden;opacity:0;transition:opacity .3s ease-in-out}button.link:hover .remove-item mat-icon{visibility:visible;opacity:1}`]
            },] },
];
/** @nocollapse */
WidgetsManagementComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    WidgetsManagementComponent.prototype.anghazi;
    /** @type {?} */
    WidgetsManagementComponent.prototype.widgets$;
    /** @type {?} */
    WidgetsManagementComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQXNEeEUsTUFBTTs7OztJQUdMLFlBQW1CLEtBQXNCO1FBQXRCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNyQjs7OztJQUNELFFBQVE7UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQztLQUNqRDs7Ozs7SUFDRCxNQUFNLENBQUMsSUFBSTtRQUNWLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN2RDs7OztJQUNELGFBQWE7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2QsT0FBTyxFQUFFO2dCQUNSLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxhQUFhO2FBQ25CO1lBQ0QsS0FBSyxFQUFFO2dCQUNOLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxNQUFNO2FBQ1o7WUFDRCxJQUFJLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLE1BQU07YUFDWjtTQUNELENBQUM7S0FDRjs7O1lBakZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWdESjtnQkFDTixNQUFNLEVBQUUsQ0FBQyw4YkFBOGIsQ0FBQzthQUN4Yzs7OztZQTFEUSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEZWxldGVXaWRnZXRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXdpZGdldFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPndpZGdldHM8L21hdC1pY29uPlxyXG4gICAgICAgICAgPHNwYW4+2YXYr9uM2LHbjNiqINin2YHYstmI2YbZh+KAjNmH2Kc8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDYp9mB2LLZiNmG2YfigIwg2YXZiNix2K8g2YbYuNixINix2Kcg2KjYsdin2LPYp9izINmG2YjYuSDYotmGINin24zYrNin2K8g2YbZhdin24zbjNivIC4uLlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0XCI+XHJcblxyXG4gICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gZnhGbGV4Lmd0LWxnPVwiMTlcIiBmeEZsZXgubGc9XCIyNFwiIGZ4RmxleC5tZD1cIjMxLjdcIiBmeEZsZXguc209XCI0OVwiIGZ4RmxleC54cz1cIjEwMFwiXHJcbiAgICAgICAgICBjbGFzcz0nbGluaycgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHdpZGdldHMkIHwgYXN5bmMpXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlKGl0ZW0pXCIgY2xhc3M9XCJyZW1vdmUtaXRlbVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstYnV0dG9uXCIgW3JvdXRlckxpbmtdPVwiWycuLi91cHNlcnQnICwgIGl0ZW0udHlwZSwgIGl0ZW0uX2lkXVwiIGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J3NwYWNlLWJldHdlZW4gY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5JyBbc3R5bGUuY29sb3JdPVwiYW5naGF6aVtpdGVtLnR5cGVdLmNvbG9yXCI+e3thbmdoYXppW2l0ZW0udHlwZV0uaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cInN0cmV0Y2hcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwid2lkZ2V0LXR5cGVcIj5cclxuICAgICAgICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aXRsZVwiPnt7aXRlbS5uYW1lfX08L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGNsYXNzPVwic3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8YSBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi4uL3Vwc2VydC9hcnRpY2xlXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCInI2ZmZmZmZidcIj5cclxuICAgICAgICA8bWF0LWljb24gW3N0eWxlLmNvbG9yXT1cImFuZ2hhemkuYXJ0aWNsZS5jb2xvclwiPnt7YW5naGF6aS5hcnRpY2xlLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuLi91cHNlcnQvbGlua3NcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIicjZmZmZmZmJ1wiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBbc3R5bGUuY29sb3JdPVwiYW5naGF6aS5saW5rcy5jb2xvclwiPnt7YW5naGF6aS5saW5rcy5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2xpc3RcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIicjZmZmZmZmJ1wiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBbc3R5bGUuY29sb3JdPVwiYW5naGF6aS5saXN0LmNvbG9yXCI+e3thbmdoYXppLmxpc3QuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AubGlua3ttYXJnaW46LjUlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjB9YnV0dG9uLmxpbmsgbWF0LWljb257Zm9udC1zaXplOjM0cHg7d2lkdGg6MzRweDtoZWlnaHQ6MzRweH0ubGluayBoNHttYXJnaW46MH0ucmVtb3ZlLWl0ZW17cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3otaW5kZXg6MTAwfS5saW5rLWJ1dHRvbntwYWRkaW5nOjI1cHggMTVweH1idXR0b24ubGluayAucmVtb3ZlLWl0ZW0gbWF0LWljb257Zm9udC1zaXplOmluaXRpYWw7d2lkdGg6aW5pdGlhbDtoZWlnaHQ6aW5pdGlhbDt2aXNpYmlsaXR5OmhpZGRlbjtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyBlYXNlLWluLW91dH1idXR0b24ubGluazpob3ZlciAucmVtb3ZlLWl0ZW0gbWF0LWljb257dmlzaWJpbGl0eTp2aXNpYmxlO29wYWNpdHk6MX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGFuZ2hhemk6IHsgW3R5cGU6IHN0cmluZ106IHsgY29sb3I6IHN0cmluZzsgaWNvbjogc3RyaW5nIH0gfTtcclxuXHR3aWRnZXRzJDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+W10+O1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLndpZGdldHMkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS53aWRnZXRzLmRiLmRhdGEpO1xyXG5cdFx0dGhpcy5fZmlsbF9hbmdoYXppKCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxuXHRyZW1vdmUoaXRlbSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVXaWRnZXRTdGFydEFjdGlvbihpdGVtKSk7XHJcblx0fVxyXG5cdF9maWxsX2FuZ2hhemkoKSB7XHJcblx0XHR0aGlzLmFuZ2hhemkgPSB7XHJcblx0XHRcdGFydGljbGU6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJncmVlblwiLFxyXG5cdFx0XHRcdGljb246IFwiZGVzY3JpcHRpb25cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaW5rczoge1xyXG5cdFx0XHRcdGNvbG9yOiBcIm9yYW5nZVwiLFxyXG5cdFx0XHRcdGljb246IFwibGlua1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpc3Q6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJibHVlXCIsXHJcblx0XHRcdFx0aWNvbjogXCJsaXN0XCJcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4iXX0=