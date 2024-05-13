import { HttpClient } from '@angular/common/http';
import { ChessPiece } from '../interfaces/chess-piece';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

const API_URL = environment.apiChessPiecesUrl;

@Injectable({
  providedIn: 'root'
})
export class ChessPiecesService {
   private http = inject(HttpClient);
   
   
   constructor() { }

  public getChessPieces() :Observable<ChessPiece>{
    return this.http.get<ChessPiece>(API_URL);
  }

  public getChessPiece(chessPieceId: number) : Observable<ChessPiece> {
    return this.http.get<ChessPiece>(`${API_URL}${chessPieceId}`);
  }
}
