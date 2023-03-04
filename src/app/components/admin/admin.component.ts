import { Component, OnInit } from '@angular/core';
import { IPostRequest, IPostResponse } from 'src/app/interfaces/post.interface';
import { ServiceBlogService } from 'src/app/services/blog-service/service-blog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  public title!: string;
  public text!: string;
  public author!: string;
  public imgPath!: string;

  public currentId!: number;

  public editStatus = false;

  public adminPosts: Array<IPostResponse> = []

  constructor(
    private blogService: ServiceBlogService
  ) { }

  ngOnInit(): void {
    this.loadPost()
  }

  loadPost(): void {
    this.blogService.getAll().subscribe(data => {
      this.adminPosts = data
    })
  }

  addPost(): void {
    const newPost: IPostRequest = {
      title: this.title,
      text: this.text,
      author: this.author,
      img: this.imgPath
    }

    this.blogService.createOne(newPost).subscribe(() => {
      this.loadPost()
      this.reset()
    })

  }

  deletePost(id: number): void {
    this.blogService.deleteOne(id).subscribe(() => {
      this.loadPost()
    })
  }


  editPost(post: IPostResponse): void {
    this.editStatus = true;
    this.title = post.title
    this.text = post.text
    this.author = post.author
    this.imgPath = post.img
    this.currentId = post.id
  }

  savePost(): void {
    const newPost: IPostRequest = {
      title: this.title,
      text: this.text,
      author: this.author,
      img: this.imgPath
    }

    this.blogService.updateOne(newPost, this.currentId).subscribe(() => {
      this.loadPost()
      this.reset()
    })

  }

  reset(): void {
    this.title = ''
    this.text = ''
    this.author = ''
    this.imgPath = ''
    this.editStatus = false;
  }

}


