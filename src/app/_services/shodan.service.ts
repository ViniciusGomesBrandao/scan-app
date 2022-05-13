import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { searchHosts } from './interfaces/shodan';
const AUTH_KEY = environment.SHODAN_API_KEY;
const URI = environment.SHODAN_URL;
@Injectable({
  providedIn: 'root'
})
export class ShodanService {
  shodanAuthParams: {} = {
    key: AUTH_KEY
  }
  constructor(
    private http: HttpClient
  ) { }

  searchHosts(query: string = "{query}", facets: string = "{facets}", page: number = 1){
    return this.http.get<searchHosts  >(`${URI}/shodan/host/search`, {
      params: {
        ...this.shodanAuthParams,
        query: query,
        facets: facets,
        page: page
      }
    })
  }
}
