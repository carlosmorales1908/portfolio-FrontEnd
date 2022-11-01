import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperiencieComponent } from './components/experience/new-experiencie.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProyectComponent } from './components/proyect/edit-proyect.component';
import { NewProyectComponent } from './components/proyect/new-proyect.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';
import { NewSkillComponent } from './components/skill/new-skill.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaExperiencia', component: NewExperiencieComponent},
  {path: 'editarExperiencia/:id', component: EditExperienceComponent},
  {path: 'nuevaEducacion', component: NewEducationComponent},
  {path: 'editarEducacion/:id', component: EditEducationComponent},
  {path: 'nuevoProyecto', component: NewProyectComponent},
  {path: 'editarProyecto/:id', component: EditProyectComponent},
  {path: 'nuevaHabilidad' , component: NewSkillComponent},
  {path: 'editarHabilidad/:id', component: EditSkillComponent},
  {path: 'editarPerfil/:id', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
