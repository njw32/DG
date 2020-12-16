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
    path: 'scorecard/:numberBaskets/:courseName/:coursePar',
    loadChildren: () => import('./pages/scorecard/scorecard.module').then(m => m.ScorecardPageModule)
  },
  {
    path: 'new-game',
    loadChildren: () => import('./pages/new-game/new-game.module').then(m => m.NewGamePageModule)
  },
  {
    path: 'the-bag',
    loadChildren: () => import('./pages/the-bag/the-bag.module').then(m => m.TheBagPageModule)
  },
  {
    path: 'new-disc',
    loadChildren: () => import('./pages/new-disc/new-disc.module').then(m => m.NewDiscPageModule)
  },
  {
    path: 'disc/:id',
    loadChildren: () => import('./pages/disc/disc.module').then(m => m.DiscPageModule)
  },
  {
    path: 'course-round-info',
    loadChildren: () => import('./pages/course-round-info/course-round-info.module').then(m => m.CourseRoundInfoPageModule)
  },  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
