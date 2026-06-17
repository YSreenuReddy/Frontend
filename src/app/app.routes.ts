import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    {path:'',redirectTo:'read',pathMatch:'full'},
    {path:'create',component:CreateComponent},
    {path:'read',component:ReadComponent},
    {path:'update/:id',component:UpdateComponent},
    {path:'delete/:id',component:DeleteComponent}
];
