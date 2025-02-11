import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'teste',
    loadChildren: () => import('./teste/teste.module').then( m => m.TestePageModule)
  },
  {
    path: 'teste2',
    loadChildren: () => import('./teste2/teste2.module').then( m => m.Teste2PageModule)
  },
  {
    path: 'santos',
    loadChildren: () => import('./cidades/santos/santos.module').then( m => m.SantosPageModule)
  },
  {
    path: 'cubatao',
    loadChildren: () => import('./cidades/cubatao/cubatao.module').then( m => m.CubataoPageModule)
  },
  {
    path: 'praiagrande',
    loadChildren: () => import('./cidades/praiagrande/praiagrande.module').then( m => m.PraiagrandePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
