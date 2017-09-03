import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MdListModule,
  MdToolbarModule,
  MdProgressSpinnerModule,
  MdPaginatorModule,
  MdIconModule, MdCardModule,
  MdSelectModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {RepoListingComponent} from './repo-listing/repo-listing.component';
import {HomeComponent} from './home/home.component';
import {APIServiceService} from "./apiservice.service";
import {UserRepoListingComponent} from './user-repo-listing/user-repo-listing.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'repo/:title', component: RepoListingComponent},
  {path: 'user/:username', component: UserRepoListingComponent},
  {
    path: 'heroes',
    component: AppComponent,
    data: {title: 'Heroes List'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    RepoListingComponent,
    HomeComponent,
    UserRepoListingComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdToolbarModule,
    HttpClientModule,
    MdListModule, MdIconModule, MdPaginatorModule, MdProgressSpinnerModule, MdCardModule, MdSelectModule
  ],
  providers: [APIServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {
}



