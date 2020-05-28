import { Component } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/domain/models/user';
import { HistoryRepository } from '../repositories/history.repository';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private user= new User();
 
  constructor(private router:Router,private http: HttpClient,private repository : HistoryRepository) {}
   
  public goHistory(): void{
    this.router.navigate(['history']);

   }

   public goRegister(): void{
    this.router.navigate(['register']);

   }

 public logar(): void{
    const body={
      login: this.user.email,
      password: this.user.userPassword
    }

    this.http.post('http://example-ecommerce.herokuapp.com/user/login',body,{responseType: 'text'}).subscribe(token=>{
      this.repository.save(token);
      console.log(token);
      const data:any=token;
      const option: NavigationExtras={state:data};
      this.router.navigate(['list'],option);
    });


  }

}
