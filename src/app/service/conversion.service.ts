import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  API = 'https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php';

  constructor(private http: HttpClient) { }

  getSLPConversion() {
    return this.http.get(this.API);
  }
}
