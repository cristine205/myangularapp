import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantGetComponent } from './merchant-get.component';

describe('MerchantGetComponent', () => {
  let component: MerchantGetComponent;
  let fixture: ComponentFixture<MerchantGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
