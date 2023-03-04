import { Component, OnInit } from '@angular/core';
import { IPostResponse } from 'src/app/interfaces/post.interface';
import { ServiceBlogService } from 'src/app/services/blog-service/service-blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userPosts: Array<IPostResponse> = []

  constructor(
    private blogService: ServiceBlogService
  ) { }

  ngOnInit(): void {
    this.loadPost()
  }

  loadPost(): void {
    this.blogService.getAll().subscribe(data => {
      this.userPosts = data
    })
  }
}
