import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BajraComponent } from './bajra/bajra.component';
import { HomeComponent } from './home/home.component';
import { JowarComponent } from './jowar/jowar.component';
import { MaizeComponent } from './maize/maize.component';
import { PaddyComponent } from './paddy/paddy.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"paddy",component:PaddyComponent},
  {path:"maize",component:MaizeComponent},
  {path:"jowar",component:JowarComponent},
  {path:"bajra",component:BajraComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
