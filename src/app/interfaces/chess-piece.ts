import { Vector } from './vector';
export interface ChessPiece {
  id: number;
  name: string;
  phonePad: null;
  isCanOnlyMoveSingleSpace: boolean;
  vectors: Vector[];
}
