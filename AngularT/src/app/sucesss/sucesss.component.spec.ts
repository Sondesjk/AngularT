import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucesssComponent } from './sucesss.component';

describe('SucesssComponent', () => {
  let component: SucesssComponent;
  let fixture: ComponentFixture<SucesssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucesssComponent]
    });
    fixture = TestBed.createComponent(SucesssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
