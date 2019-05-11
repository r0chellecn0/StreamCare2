import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './_services/auth.service';
import { MemberListsComponent } from './member-lists/member-lists.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
//import { GuardComponent } from './_guards/guard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RegisterComponent,
    MemberListsComponent,
    ListsComponent,
    MessagesComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      //{
      //  path: '',
      //  runGuardsAndResolvers: 'always',
      //  canActivate: [GuardComponent],
      //  children: [
      //    {path: 'members', component: MemberListsComponent },
      //    { path: 'messages', component: MessagesComponent },
      //    { path: 'lists', component: ListsComponent },
      //  ]
      //},
      { path: 'members', component: MemberListsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },


    ])
  ],
  providers: [
    AuthService,
   // GuardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
