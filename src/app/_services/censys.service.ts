import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { searchHosts } from './interfaces/censys';

const URI = environment.CENSYS_URL;
const TOKEN = environment.CENSYS_AUTH;

@Injectable({
  providedIn: 'root'
})
export class CensysService {
  censysAuthHeader: {} = {
    Authorization: `Basic ${TOKEN}`
  }
  constructor(
    private http: HttpClient
  ) { }


  searchHosts(query: string, perPage: string, nextPageToken: string = "", virtualHosts: string = "EXCLUDE") {
    return this.http.get<searchHosts>(`${URI}/v2/hosts/search`, {
      headers: {
        ...this.censysAuthHeader
      },
      params: {
        q: query,
        per_page: perPage,
        virtual_hosts: virtualHosts,
        cursor: nextPageToken
      }
    })
  }
}
