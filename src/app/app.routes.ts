import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [

    {path:'home', title:'Home', component:HomeComponent},
    {path:'servicios', title:'Servicios', component:ServiciosComponent},
    {path:'formulario', title:'Formulario', component:FormularioComponent},

    
    {path:'', redirectTo:'/home', pathMatch:'full'},

    {path:'**', title:'PAGE NOT FOUND', component:PageNotFoundComponent}





];
