import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutadminComponent } from './admin/layout/layoutadmin/layoutadmin.component';
import { HomeComponent } from './ui/components/home/home.component';
import { LayoutuiComponent } from './ui/layoutuserinterface/layoutui/layoutui.component';

const routes: Routes = [
  {path:"admin",component:LayoutadminComponent, children:[
    {path:"articles",loadChildren:()=>
      import('./admin/components/article/article.module')
      .then(m=>m.ArticleModule)
    },
    {path:"courses",loadChildren:()=>
      import('./admin/components/course/course.module')
      .then(m=>m.CourseModule)
    },
    {path:"events",loadChildren:()=>
      import('./admin/components/event/event.module')
      .then(m=>m.EventModule)
    },
  ]},
  {path:"",component:LayoutuiComponent, children:[
    {path:"",component:HomeComponent},
    {path:"applicants",loadChildren:()=>
      import('./ui/components/applicants/applicants.module')
      .then(m=>m.ApplicantsModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
