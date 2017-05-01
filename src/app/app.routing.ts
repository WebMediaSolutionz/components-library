import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { ComponentsComponent } from './components/components/components.component';
import { FormExampleComponent } from './components/form-example/form-example.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'form-example', component: FormExampleComponent },
    { path: ':page', component: ComponentsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);