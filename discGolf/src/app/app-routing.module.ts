import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'scorecard/:numberBaskets/:courseName/:coursePar',
    loadChildren: () => import('./pages/scorecard/scorecard.module').then(m => m.ScorecardPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'new-game',
    loadChildren: () => import('./pages/new-game/new-game.module').then(m => m.NewGamePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'the-bag',
    loadChildren: () => import('./pages/the-bag/the-bag.module').then(m => m.TheBagPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'new-disc',
    loadChildren: () => import('./pages/new-disc/new-disc.module').then(m => m.NewDiscPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'disc/:id',
    loadChildren: () => import('./pages/disc/disc.module').then(m => m.DiscPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'course-round-info',
    loadChildren: () => import('./pages/course-round-info/course-round-info.module').then(m => m.CourseRoundInfoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
