import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { PhonePad } from '../interfaces/phone-pad';
import { Observable } from 'rxjs';

const API_URL = environment.apiPhonePadsUrl;
@Injectable({
  providedIn: 'root'
})
export class PhonePadService {

  private http = inject(HttpClient);
   
   
  constructor() { }

 getPhonePads() :Observable<PhonePad>{
   return this.http.get<PhonePad>(API_URL);
 }

 getPhonePad(phonePadId: number) : Observable<PhonePad> {
   return this.http.get<PhonePad>(`${API_URL}${phonePadId}`);
 }
}
