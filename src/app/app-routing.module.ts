import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'student-create',
    loadChildren: () => import('./student-create/student-create.module').then(m => m.StudentCreatePageModule)
  },
  {
    path: 'student-update',
    loadChildren: () => import('./student-update/student-update.module').then(m => m.StudentUpdatePageModule)
  },
  {
    path: 'student-delete',
    loadChildren: () => import('./student-delete/student-delete.module').then(m => m.StudentDeletePageModule)
  },
  {
    path: 'student-edit/:id',
    loadChildren: () => import('./student-edit/student-edit.module').then(m => m.StudentEditPageModule)
  },
  {
    path: 'student-search',
    loadChildren: () => import('./student-search/student-search.module').then( m => m.StudentSearchPageModule)
  },
  {
    path: 'message-students',
    loadChildren: () => import('./message-students/message-students.module').then( m => m.MessageStudentsPageModule)
  },
  {
    path: 'import-export-data',
    loadChildren: () => import('./import-export-data/import-export-data.module').then( m => m.ImportExportDataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
