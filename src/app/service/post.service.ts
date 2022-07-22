import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../moldel/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL: string = 'http://localhost:3000/post';
  constructor(private http: HttpClient) { }
  
  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.API_URL}`)
  }
  getPost(id: any): Observable<IPost> {
    return this.http.get<IPost>(`${this.API_URL}/${id}`);
  }

  removePost(id: number): Observable<IPost> {
    return this.http.delete<IPost>(`${this.API_URL}/${id}`);
  }
  addPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(`${this.API_URL}`, post);
  }

  updatePost(post: IPost): Observable<IPost> {
    return this.http.put<IPost>(`${this.API_URL}/${post.id}`, post);
  }
}
