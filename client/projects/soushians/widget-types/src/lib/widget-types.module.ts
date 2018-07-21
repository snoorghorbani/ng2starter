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
	MatTableModule,
	MatListModule
} from "@angular/material";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import { FlexLayoutModule } from "@angular/flex-layout";

/**
 * article
 */
import { ArticleUpsertComponent } from "./article/article-upsert/article-upsert.component";
import { ArticleViewComponent } from "./article/article-view/article-view.component";
/**
 * links
 */
import { LinksUpsertComponent } from "./links/links-upsert/links-upsert.component";
import { LinksViewComponent } from "./links/links-view/links-view.component";

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
		MatTableModule,
		MatListModule,
		FlexLayoutModule,
		// EditorModule
		FroalaEditorModule.forRoot(),
		FroalaViewModule.forRoot()
	],
	declarations: [ ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent ],
	entryComponents: [ ArticleUpsertComponent, ArticleViewComponent, LinksUpsertComponent, LinksViewComponent ],
	exports: [ ArticleViewComponent ]
})
export class NgsWidgetTypesModule {}
