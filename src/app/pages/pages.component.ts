
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { CensysService } from '../_services/censys.service';
import { ShodanService } from '../_services/shodan.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  menuItems: NbMenuItem[] = [
    {
      title: 'Product', 
      icon: 'hash-outline',
      children: [
        {
          title: 'Search',
          link: '/pages/product/search',
          icon: "search-outline"
        }
      ]
    }
  ]
  constructor(


    
    private censysService: CensysService,
    private shodanService: ShodanService,
    private sidebarService: NbSidebarService
  ) {

  }
  
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  ngOnInit(): void {
    // this.censysService.searchHosts("location.city: Goiania", "10").subscribe(response => {
    //   console.log(response.result.hits[0])
    // });
    // this.shodanService.searchHosts('{query}', "{country: 10}", 0).subscribe(response => {
    //   console.log(response)
    // })
  }

}
