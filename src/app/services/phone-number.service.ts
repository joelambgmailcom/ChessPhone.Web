import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

const API_WITH_LIST_URL = environment.apiPhoneNumbersWithListUrl;
const API_JUST_TOTAL_URL = environment.apiPhoneNumbersJustTotalUrl;

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {
   private http = inject(HttpClient);
   
   
   constructor() { }

  getPhoneNumbersCount(chessPieceId: number, phonePadId: number, numberOfMoves: number, phoneNumberGeneratorId: number) : any {
    let url = `${API_JUST_TOTAL_URL}?chessPieceId=${chessPieceId}&phonePadId=${phonePadId}&lengthOfPhoneNumber=${numberOfMoves}&phoneNumberGeneratorId=${phoneNumberGeneratorId}`;
    console.log(url);
    return this.http.get(url);
  }

  getPhoneNumbersList(chessPieceId: number, phonePadId: number, numberOfMoves: number, phoneNumberGeneratorId: number) : any {
    let url = `${API_WITH_LIST_URL}?chessPieceId=${chessPieceId}&phonePadId=${phonePadId}&lengthOfPhoneNumber=${numberOfMoves}&phoneNumberGeneratorId=${phoneNumberGeneratorId}`;
    console.log(url);
    return this.http.get(url);
  }
}
