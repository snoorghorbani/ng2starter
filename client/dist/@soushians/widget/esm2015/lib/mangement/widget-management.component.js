/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetWidgetsStartAction } from "../services/api/get-widgets/get-widgets.actions";
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
          <mat-icon>settings_input_component</mat-icon>
          <span>مدیریت افزونه ها</span>
        </mat-card-title>
        <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
          <span>
            شامل تمامی درخواست‌ها از قبیل دائری، جمع‌آوری و ...
          </span>
        </mat-card-subtitle>
      </mat-card-header>

      <div fxLayout="row wrap" fxLayoutGap="10px" fxLayoutAlign="start">

        <button fxFlex.lt-lg="18" fxFlex.lg="23.5" fxFlex.md="31" fxFlex.sm="48" fxFlex.xs="100" class='link'
          mat-raised-button [routerLink]="['../upsert' ,  item.type,  item._id]" *ngFor="let item of (widgets$ | async)">
          <div fxLayout='column' fxLayoutAlign='space-between center'>
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
    </div>

  </div>
</div>`,
                styles: [`.link{margin:.5%;box-sizing:border-box;padding:25px 15px}button.link mat-icon{font-size:34px;width:34px;height:34px}.link h4{margin:0}`]
            },] },
];
/** @nocollapse */
WidgetsManagementComponent.ctorParameters = () => [
    { type: Store }
];
function WidgetsManagementComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WidgetsManagementComponent.prototype.anghazi;
    /** @type {?} */
    WidgetsManagementComponent.prototype.widgets$;
    /** @type {?} */
    WidgetsManagementComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBZ0R4RixNQUFNOzs7O0lBR0wsWUFBbUIsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3JCOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0tBQ2pEOzs7O0lBQ0QsYUFBYTtRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLGFBQWE7YUFDbkI7WUFDRCxLQUFLLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsSUFBSSxFQUFFLE1BQU07YUFDWjtTQUNELENBQUM7S0FDRjs7O1lBbkVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTBDSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyx3SUFBd0ksQ0FBQzthQUNsSjs7OztZQW5EUSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nc19pbnB1dF9jb21wb25lbnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgPHNwYW4+2YXYr9uM2LHbjNiqINin2YHYstmI2YbZhyDZh9inPC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAg2LTYp9mF2YQg2KrZhdin2YXbjCDYr9ix2K7ZiNin2LPYquKAjNmH2Kcg2KfYsiDZgtio24zZhCDYr9in2KbYsduM2Iwg2KzZhdi54oCM2KLZiNix24wg2YggLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjEwcHhcIiBmeExheW91dEFsaWduPVwic3RhcnRcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXgubHQtbGc9XCIxOFwiIGZ4RmxleC5sZz1cIjIzLjVcIiBmeEZsZXgubWQ9XCIzMVwiIGZ4RmxleC5zbT1cIjQ4XCIgZnhGbGV4LnhzPVwiMTAwXCIgY2xhc3M9J2xpbmsnXHJcbiAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJy4uL3Vwc2VydCcgLCAgaXRlbS50eXBlLCAgaXRlbS5faWRdXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHdpZGdldHMkIHwgYXN5bmMpXCI+XHJcbiAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J3NwYWNlLWJldHdlZW4gY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5JyBbc3R5bGUuY29sb3JdPVwiYW5naGF6aVtpdGVtLnR5cGVdLmNvbG9yXCI+e3thbmdoYXppW2l0ZW0udHlwZV0uaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cInN0cmV0Y2hcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwid2lkZ2V0LXR5cGVcIj5cclxuICAgICAgICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aXRsZVwiPnt7aXRlbS5uYW1lfX08L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGNsYXNzPVwic3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8YSBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi4uL3Vwc2VydC9hcnRpY2xlXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCInI2ZmZmZmZidcIj5cclxuICAgICAgICA8bWF0LWljb24gW3N0eWxlLmNvbG9yXT1cImFuZ2hhemkuYXJ0aWNsZS5jb2xvclwiPnt7YW5naGF6aS5hcnRpY2xlLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuLi91cHNlcnQvbGlua3NcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIicjZmZmZmZmJ1wiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBbc3R5bGUuY29sb3JdPVwiYW5naGF6aS5saW5rcy5jb2xvclwiPnt7YW5naGF6aS5saW5rcy5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5saW5re21hcmdpbjouNSU7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MjVweCAxNXB4fWJ1dHRvbi5saW5rIG1hdC1pY29ue2ZvbnQtc2l6ZTozNHB4O3dpZHRoOjM0cHg7aGVpZ2h0OjM0cHh9LmxpbmsgaDR7bWFyZ2luOjB9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRhbmdoYXppOiB7IFt0eXBlOiBzdHJpbmddOiB7IGNvbG9yOiBzdHJpbmc7IGljb246IHN0cmluZyB9IH07XHJcblx0d2lkZ2V0cyQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55PltdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy53aWRnZXRzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKTtcclxuXHRcdHRoaXMuX2ZpbGxfYW5naGF6aSgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFdpZGdldHNTdGFydEFjdGlvbigpKTtcclxuXHR9XHJcblx0X2ZpbGxfYW5naGF6aSgpIHtcclxuXHRcdHRoaXMuYW5naGF6aSA9IHtcclxuXHRcdFx0YXJ0aWNsZToge1xyXG5cdFx0XHRcdGNvbG9yOiBcImdyZWVuXCIsXHJcblx0XHRcdFx0aWNvbjogXCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpbmtzOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwib3JhbmdlXCIsXHJcblx0XHRcdFx0aWNvbjogXCJsaW5rXCJcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIl19