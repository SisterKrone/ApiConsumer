import { Component, OnInit } from '@angular/core';
import { HistoryRepository } from '../repositories/history.repository';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  private historic=[];

  constructor(private repository:HistoryRepository,) { 
  
  }

  ngOnInit() {
    this.repository.list().then(tokens=>{
      this.historic=tokens;
      })
      

  }

}
