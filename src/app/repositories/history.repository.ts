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
 public async delete(token:string):Promise<any[]>{
    let tokens=await this.list()
    tokens= tokens.filter(t=>t!==token);
    this.storage.set(HistoryRepository.KEY,tokens);
    return tokens;

}
 
 public async list(): Promise<any[]>{
    const tokens = await this.storage.get(HistoryRepository.KEY);
    if(tokens) return tokens;
    else return new Array <any>();
}

}