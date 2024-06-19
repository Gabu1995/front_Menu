import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAdminComponent } from './item-admin.component';

describe('ItemAdminComponent', () => {
  let component: ItemAdminComponent;
  let fixture: ComponentFixture<ItemAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemAdminComponent]
    });
    fixture = TestBed.createComponent(ItemAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
