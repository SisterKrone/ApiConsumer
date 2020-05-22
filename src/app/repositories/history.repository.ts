import{Storage}from'@ionic/storage'
import { Injectable } from '@angular/core';

@Injectable({providedIn : "root"})
export class HistoryRepository{
    constructor(private storage:Storage){}
    
    private static readonly KEY : string="tokens"

 public save(token:any){
     this.list().then(tokens=>{
         tokens.push(token);
         this.storage.set(HistoryRepository.KEY,tokens);
     });
 }

 
 public async list(): Promise<any[]>{
    const tokens = await this.storage.get(HistoryRepository.KEY);
    if(tokens) return tokens;
    else return new Array <any>();
}

}