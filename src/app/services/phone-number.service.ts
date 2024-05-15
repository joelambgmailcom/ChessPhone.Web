import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

const API_JUST_TOTAL_URL = environment.apiPhoneNumbers;

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {
  private http = inject(HttpClient);
   
  constructor() { }

  getPhoneNumbers(chessPieceId: number, phonePadId: number, numberOfMoves: number) {
    let url = `${API_JUST_TOTAL_URL}?chessPieceId=${chessPieceId}&phonePadId=${phonePadId}&lengthOfPhoneNumber=${numberOfMoves}`;
    console.log(url);
    return this.http.get(url);
  }
}
