import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessPhoneNumbersComponent } from './chess-phone-numbers.component';

describe('ChessPhoneNumbersComponent', () => {
  let component: ChessPhoneNumbersComponent;
  let fixture: ComponentFixture<ChessPhoneNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChessPhoneNumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChessPhoneNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
