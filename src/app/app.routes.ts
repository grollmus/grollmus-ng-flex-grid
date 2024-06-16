import { Route } from '@angular/router';
import { FlexPage } from './pages/flex/flex.page';
import { GridPage } from './pages/grid/grid.page';
import { IndexPage } from './pages/index/index.page';

export const appRoutes: Route[] = [
  { path: '', component: IndexPage },
  { path: 'flex', component: FlexPage },
  { path: 'grid', component: GridPage },
  { path: '**', redirectTo: '/' },
];
