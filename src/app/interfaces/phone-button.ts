export interface PhoneButton {
    column: number;
    row: number;
    label: string;
    isAlwaysInvalid: boolean;
    isCurrentChessPieceLocation: boolean;
    isValidNextMove: boolean;
    invalidOnIteration: number[][];
    validNextMoves: PhoneButton[];
  }