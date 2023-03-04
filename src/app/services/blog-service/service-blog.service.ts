import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostRequest, IPostResponse } from 'src/app/interfaces/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceBlogService {
  private url = environment.BACKEND_URL;
  private api = {
    posts: `${this.url}/posts`
  }
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<IPostResponse[]> {
    return this.http.get<IPostResponse[]>(this.api.posts)
  }

  createOne(post: IPostRequest): Observable<IPostResponse> {
    return this.http.post<IPostResponse>(this.api.posts, post)
  }

  deleteOne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.posts}/${id}`)
  }

  updateOne(post: IPostRequest, id: number): Observable<IPostResponse> {
    return this.http.patch<IPostResponse>(`${this.api.posts}/${id}`, post)
  }

  
}
