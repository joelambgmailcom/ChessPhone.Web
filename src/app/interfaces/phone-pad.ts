import { PhoneButton } from './phone-button';

export interface PhonePad {
  id: number;
  name: string;
  numberOfTurnsMaximum: number;
  numberOfTurnsWithListMaximum: number;
  phoneButtons: PhoneButton[][];
  isSkipMoveValid: boolean;
  columnCount: number;
  rowCount: number;
  validMoveButtons: any[];
}


