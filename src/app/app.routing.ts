import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { ArticleComponent } from './components/article/article.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },

    { path: 'examples', component: ExamplesComponent },
    { path: 'examples/:example', component: ExamplesComponent },

    { path: ':data_structure', component: ArticleComponent },
    { path: ':data_structure/:data_type', component: ArticleComponent },

    { path: '', pathMatch: 'full', redirectTo: 'home' },

    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
