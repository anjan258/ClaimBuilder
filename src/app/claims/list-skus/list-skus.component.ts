import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../claims.service';

@Component({
  selector: 'app-list-skus',
  templateUrl: './list-skus.component.html',
  styleUrls: ['./list-skus.component.css']
})
export class ListSkusComponent implements OnInit {

  searchText: string;
  listSkus: any[];
  listFilteredSkus: any[];
  constructor(private claimService: ClaimsService) { }

  ngOnInit(): void {

    this.claimService.getAllSkus().subscribe(data =>
      {
        this.listSkus =  data;
        this.listFilteredSkus = data;
      });
  }

  Search(): void{


    if (this.searchText)
    {
      this.listSkus = this.listSkus.filter(s => {
        return s.sku.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase());
    });
    }
    else{
      this.listSkus = this.listFilteredSkus;
    }
}

}
