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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQXNEeEUsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUd0QyxZQUFtQixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDckI7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7S0FDakQ7Ozs7O0lBQ0QsTUFBTSxDQUFDLElBQUk7UUFDVixRQUFRLENBQUM7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDdkQ7Ozs7SUFDRCxhQUFhO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNkLE9BQU8sRUFBRTtnQkFDUixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsYUFBYTthQUNuQjtZQUNELEtBQUssRUFBRTtnQkFDTixLQUFLLEVBQUUsUUFBUTtnQkFDZixJQUFJLEVBQUUsTUFBTTthQUNaO1lBQ0QsSUFBSSxFQUFFO2dCQUNMLEtBQUssRUFBRSxNQUFNO2dCQUNiLElBQUksRUFBRSxNQUFNO2FBQ1o7U0FDRCxDQUFDO0tBQ0Y7OztZQWpGRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnREo7Z0JBQ04sTUFBTSxFQUFFLENBQUMsOGJBQThiLENBQUM7YUFDeGM7Ozs7WUExRFEsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRGVsZXRlV2lkZ2V0U3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj53aWRnZXRzPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDxzcGFuPtmF2K/bjNix24zYqiDYp9mB2LLZiNmG2YfigIzZh9inPC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAg2KfZgdiy2YjZhtmH4oCMINmF2YjYsdivINmG2LjYsSDYsdinINio2LHYp9iz2KfYsyDZhtmI2Lkg2KLZhiDYp9uM2KzYp9ivINmG2YXYp9uM24zYryAuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydFwiPlxyXG5cclxuICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGZ4RmxleC5ndC1sZz1cIjE5XCIgZnhGbGV4LmxnPVwiMjRcIiBmeEZsZXgubWQ9XCIzMS43XCIgZnhGbGV4LnNtPVwiNDlcIiBmeEZsZXgueHM9XCIxMDBcIlxyXG4gICAgICAgICAgY2xhc3M9J2xpbmsnICpuZ0Zvcj1cImxldCBpdGVtIG9mICh3aWRnZXRzJCB8IGFzeW5jKVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInJlbW92ZShpdGVtKVwiIGNsYXNzPVwicmVtb3ZlLWl0ZW1cIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWJ1dHRvblwiIFtyb3V0ZXJMaW5rXT1cIlsnLi4vdXBzZXJ0JyAsICBpdGVtLnR5cGUsICBpdGVtLl9pZF1cIiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdzcGFjZS1iZXR3ZWVuIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeScgW3N0eWxlLmNvbG9yXT1cImFuZ2hhemlbaXRlbS50eXBlXS5jb2xvclwiPnt7YW5naGF6aVtpdGVtLnR5cGVdLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJzdHJldGNoXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIndpZGdldC10eXBlXCI+XHJcbiAgICAgICAgICAgICAge3tpdGVtLnR5cGV9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj57e2l0ZW0ubmFtZX19PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L21hdC1jYXJkPlxyXG5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBjbGFzcz1cInN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPGEgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuLi91cHNlcnQvYXJ0aWNsZVwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiJyNmZmZmZmYnXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppLmFydGljbGUuY29sb3JcIj57e2FuZ2hhemkuYXJ0aWNsZS5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2xpbmtzXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCInI2ZmZmZmZidcIj5cclxuICAgICAgICA8bWF0LWljb24gW3N0eWxlLmNvbG9yXT1cImFuZ2hhemkubGlua3MuY29sb3JcIj57e2FuZ2hhemkubGlua3MuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi4uL3Vwc2VydC9saXN0XCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCInI2ZmZmZmZidcIj5cclxuICAgICAgICA8bWF0LWljb24gW3N0eWxlLmNvbG9yXT1cImFuZ2hhemkubGlzdC5jb2xvclwiPnt7YW5naGF6aS5saXN0Lmljb259fTwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgLmxpbmt7bWFyZ2luOi41JTtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzowfWJ1dHRvbi5saW5rIG1hdC1pY29ue2ZvbnQtc2l6ZTozNHB4O3dpZHRoOjM0cHg7aGVpZ2h0OjM0cHh9LmxpbmsgaDR7bWFyZ2luOjB9LnJlbW92ZS1pdGVte3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt6LWluZGV4OjEwMH0ubGluay1idXR0b257cGFkZGluZzoyNXB4IDE1cHh9YnV0dG9uLmxpbmsgLnJlbW92ZS1pdGVtIG1hdC1pY29ue2ZvbnQtc2l6ZTppbml0aWFsO3dpZHRoOmluaXRpYWw7aGVpZ2h0OmluaXRpYWw7dmlzaWJpbGl0eTpoaWRkZW47b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuM3MgZWFzZS1pbi1vdXR9YnV0dG9uLmxpbms6aG92ZXIgLnJlbW92ZS1pdGVtIG1hdC1pY29ue3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjF9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRhbmdoYXppOiB7IFt0eXBlOiBzdHJpbmddOiB7IGNvbG9yOiBzdHJpbmc7IGljb246IHN0cmluZyB9IH07XHJcblx0d2lkZ2V0cyQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55PltdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy53aWRnZXRzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKTtcclxuXHRcdHRoaXMuX2ZpbGxfYW5naGF6aSgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFdpZGdldHNTdGFydEFjdGlvbigpKTtcclxuXHR9XHJcblx0cmVtb3ZlKGl0ZW0pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlV2lkZ2V0U3RhcnRBY3Rpb24oaXRlbSkpO1xyXG5cdH1cclxuXHRfZmlsbF9hbmdoYXppKCkge1xyXG5cdFx0dGhpcy5hbmdoYXppID0ge1xyXG5cdFx0XHRhcnRpY2xlOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwiZ3JlZW5cIixcclxuXHRcdFx0XHRpY29uOiBcImRlc2NyaXB0aW9uXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlua3M6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJvcmFuZ2VcIixcclxuXHRcdFx0XHRpY29uOiBcImxpbmtcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaXN0OiB7XHJcblx0XHRcdFx0Y29sb3I6IFwiYmx1ZVwiLFxyXG5cdFx0XHRcdGljb246IFwibGlzdFwiXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl19