import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";

import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  errorSub: Subscription;

  constructor(private http: HttpClient,
              private postsService: PostsService) {}

  ngOnInit() {

    this.errorSub = this.postsService.error.subscribe(errorMessage => {
        this.error = errorMessage;
      });
    
    this.isFetching = true;
    this.postsService.fetchPosts()
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      });

    // this.fetchPosts();
  }


  onCreatePost(postData: Post){
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onCreatePost_old(postData: Post) {
    // console.log(postData);
    // Send Http request

    this.http
    .post<{name: string}>(
      'https://ng-complete-guide-21722.firebaseio.com//posts.json',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request

    this.isFetching = true;

    this.postsService.fetchPosts()
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
          this.isFetching = false;
          this.error = error.message;
          console.log(error);
      });

    // this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts(){

    this.isFetching = true;

    this.http.get<{[key: string]: Post}>('https://ng-complete-guide-21722.firebaseio.com//posts.json')    
    .pipe(map(responseData => {
        const postsArray: Post[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key], id:key});
          }
        }
        return postsArray;
      })
    )
    .subscribe(posts => {
      // console.log(posts);
      this.isFetching = false;
      this.loadedPosts = posts;
    });

    //Without subscription no request shall be sent
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(): void{
    this.errorSub.unsubscribe();
  }

}
