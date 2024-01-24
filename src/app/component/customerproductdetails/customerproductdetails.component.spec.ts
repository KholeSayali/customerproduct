import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerproductdetailsComponent } from './customerproductdetails.component';

describe('CustomerproductdetailsComponent', () => {
  let component: CustomerproductdetailsComponent;
  let fixture: ComponentFixture<CustomerproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerproductdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
