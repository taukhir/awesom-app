import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GagdgetsShopComponent } from './gagdgets-shop.component';

describe('GagdgetsShopComponent', () => {
  let component: GagdgetsShopComponent;
  let fixture: ComponentFixture<GagdgetsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GagdgetsShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GagdgetsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
