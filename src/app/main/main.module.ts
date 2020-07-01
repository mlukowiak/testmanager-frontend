import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main.component';
import { ScenarioListComponent } from './scenario-list/scenario-list.component';
import { ScenarioDetailsComponent } from './scenario-details/scenario-details.component';
import { ScenarioFormComponent } from './scenario-form/scenario-form.component';
import { CommentListComponent } from './scenario-details/comment-list/comment-list.component';
import { CommentFormComponent } from './scenario-details/comment-form/comment-form.component';
import { CaseListComponent } from './scenario-details/case-list/case-list.component';
import { CaseFormComponent } from './scenario-details/case-form/case-form.component';
import { ApiService } from '../api.service';
import { MaterializeButtonModule, MaterializeCardModule, MaterializeModalModule } from 'materialize-angular';

const routes: Routes = [
  {path: 'scenarios', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    ScenarioListComponent,
    ScenarioDetailsComponent,
    ScenarioFormComponent,
    CommentListComponent,
    CommentFormComponent,
    CaseListComponent,
    CaseFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterializeButtonModule,
    MaterializeCardModule,
    MaterializeModalModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
