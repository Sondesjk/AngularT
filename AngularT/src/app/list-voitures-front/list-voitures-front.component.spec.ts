import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoituresFrontComponent } from './list-voitures-front.component';

describe('ListVoituresFrontComponent', () => {
  let component: ListVoituresFrontComponent;
  let fixture: ComponentFixture<ListVoituresFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVoituresFrontComponent]
    });
    fixture = TestBed.createComponent(ListVoituresFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
