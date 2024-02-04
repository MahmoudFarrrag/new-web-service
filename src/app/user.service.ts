import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.matlop.com/api/categories';
  userService: any;

  constructor(private http: HttpClient) {}





  public getUserFromPlaceholder(){
    let myData = this.http.post<any>("https://api.matlop.com/api/categories", {})
    // let myData = this.http.post<any>("https://jsonplaceholder.org/users", {})
    return myData;
  }
}
