
import { Component, OnInit, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { ChessPiece } from '../interfaces/chess-piece';
import { ChessPiecesService } from '../services/chess-piece.service';
import { PhonePad } from '../interfaces/phone-pad';
import { PhonePadService } from '../services/phone-pad.service';
import { PhoneNumberService } from '../services/phone-number.service'; 
import { PhoneButton } from '../interfaces/phone-button';
import { PhoneNumberResult } from '../interfaces/phone-number-result';
import { CommonModule } from '@angular/common';
import { CdkListbox } from '@angular/cdk/listbox';

@Component({
  selector: 'app-chess-phone-numbers',
  standalone: true,
  imports: [MatSelectModule, CommonModule,CdkListbox],
  templateUrl: './chess-phone-numbers.component.html',
  styleUrl: './chess-phone-numbers.component.css'
})
export class ChessPhoneNumbersComponent implements OnInit{
  private chessPieceService = inject(ChessPiecesService);
  private phonePadServiceService = inject(PhonePadService);
  private phoneNumberService = inject(PhoneNumberService);

  chessPieces: ChessPiece[] = [];
  phonePads: PhonePad[] = [];

  maximumNumberOfTurns: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
  chessPiece:ChessPiece;
  phonePad: PhonePad;
  turns: number;
  totalPhoneNumbersMessage: string = "";
  phoneNumberResult: PhoneNumberResult;

  ngOnInit(): void {
    this.loadChessPieces();
    this.loadPhonePads();
  }


  loadChessPieces(){
    this.chessPieceService.getChessPieces().subscribe({
      next: (chessPieces: any) =>{
        this.chessPieces = chessPieces as ChessPiece[];
        console.log('Chess Pieces fetched successfully');
      },
      error: (error: any) => console.log('Error Fetching Chess Pieces:', error)
    });
  }

  loadPhonePads(){
    this.phonePadServiceService.getPhonePads().subscribe({
      next: (phonePads: any) =>{
        this.phonePads = phonePads as PhonePad[];
        console.log('Phone Pads fetched successfully');
      },
      error: (error: any) => console.log('Error Fetching Phone Pads:', error)
    });
  }

  updateTotalPhoneNumbers(){
    this.totalPhoneNumbersMessage = "";
    if (!this.chessPiece || !this.phonePad || !this.turns || this.turns <= 0)
      {
        return;
      }
    
    this.phoneNumberService.getPhoneNumbers(this.chessPiece.id, this.phonePad.id, this.turns).subscribe({
      next: (phoneNumberResult: any) =>{
        this.phoneNumberResult = phoneNumberResult;
        this.updateTotalPhoneNumbersMessage();
        console.log('Phone Numbers fetched successfully');
      },
      error: (error: any) => console.log('Error Fetching Phone Pads:', error)
    });
  }

  updateTotalPhoneNumbersMessage(){
    if (this.phoneNumberResult.phoneNumberCount)
      this.totalPhoneNumbersMessage 
        = `Total Phone Numbers: ${this.phoneNumberResult.phoneNumberCount.toLocaleString()} in ${this.phoneNumberResult.generationTimeInMilliseconds.toLocaleString()} milliseconds`;
  }
    

  getPhoneButtonColumns() : number[]{
    if (!this.phonePad)
      return [];
    return Array.from(Array(this.phonePad.columnCount).keys());
  }

  getPhoneButtonRows() : number[]{
    if (!this.phonePad)
      return [];
    return Array.from(Array(this.phonePad.rowCount).keys());
  }

  getPhoneButtonLabel(colunmIndex: number, rowIndex: number): string {
    return (this.getPhoneButton(colunmIndex, rowIndex)).label;
  }
  getPhoneButton(colunmIndex: number, rowIndex: number): PhoneButton {
    return (this.phonePad.phoneButtons[colunmIndex][rowIndex]);
  }

  onChessPieceSelection(value: any) {
    console.log('Chess Piece Changed!');
    this.chessPiece = (this.chessPieces.find(piece => piece.id == value) as ChessPiece);
    console.log(value);
    this.updateTotalPhoneNumbers();

  }

  onPhonePadSelection(value: number) {
    console.log('Phone Pad Changed!');
    this.phonePad = (this.phonePads.find(pad => pad.id == value) as PhonePad);
    console.log(value);
    this.updateTotalPhoneNumbers();
  }
  
  onNumberOfTurnsSelection(value: any) {
    console.log('Number of Moves Changed!');
    this.turns = value;
    console.log(value);
    this.updateTotalPhoneNumbers()
  }

  movePieceTo(newPieceLocation: PhoneButton){
    console.log(newPieceLocation);
    if (this.chessPiece && this.phonePad){
      if (newPieceLocation == null)
        return;
      for (let row = 0; row < this.phonePad.rowCount; row++) {
            for (let column = 0; column < this.phonePad.columnCount; column++) {
                let valid = newPieceLocation.validNextMoves ?? [];
                let currentButton = this.getPhoneButton(column, row);
                currentButton.isCurrentChessPieceLocation =
                  (column == newPieceLocation.column && row == newPieceLocation.row);
                currentButton.isValidNextMove =
                  (valid.some(m => m.column == column && m.row == row));
            }
        }
    }
  }

  getPhoneButtonByLabel(value: any)  {
    for (let row = 0; row < this.phonePad.rowCount; row++) {
      for (let column = 0; column < this.phonePad.columnCount; column++) {
        let button = this.getPhoneButton(column, row);
          if(button?.label == value)
            return button;
      }
    }
    return null;
  }
}
