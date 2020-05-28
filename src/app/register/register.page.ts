import { Component } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/domain/models/user';
import { HistoryRepository } from '../repositories/history.repository';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  
  private user= new User();
 
  constructor(private router:Router,private http: HttpClient,private repository : HistoryRepository) {}
   
  
  public goHistory(): void{
    this.router.navigate(['history']);

   }

   
 public registrar():void{
      
      const body={
      address:this.user.address,
      age:this.user.age,
      email:this.user.email,
      name:this.user.name,
      userPassword:this.user.userPassword

     }

    this.http.post('http://example-ecommerce.herokuapp.com/user/customer/add',body, {responseType: 'text'}).subscribe(token=>{
      this.repository.save(token);
      const data:any=token;
      const option: NavigationExtras={state:data};
      
      this.router.navigate(['list'],option);
    });
   
}

}
