import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
	MatExpansionModule,
	MatSnackBarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatTabsModule,
	MatRadioModule,
	MatSlideToggleModule,
	MatDividerModule,
	MatCheckboxModule,
	MatTableModule
} from "@angular/material";
// import { EditorModule } from "@tinymce/tinymce-angular";

import { ArticleUpsertComponent } from "./article/article-upsert/article-upsert.component";
import { ArticleViewComponent } from "./article/article-view/article-view.component";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatRadioModule,
		MatDividerModule,
		FormsModule,
		ReactiveFormsModule,
		MatSlideToggleModule,
		MatDividerModule,
		MatCheckboxModule,
		MatTableModule
		// EditorModule
	],
	declarations: [ ArticleUpsertComponent, ArticleViewComponent ],
	entryComponents: [ ArticleUpsertComponent, ArticleViewComponent ],
	exports: [ ArticleViewComponent ]
})
export class NgsWidgetTypesModule {}
