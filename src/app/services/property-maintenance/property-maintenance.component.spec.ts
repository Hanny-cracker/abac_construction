import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMaintenanceComponent } from './property-maintenance.component';

describe('PropertyMaintenanceComponent', () => {
  let component: PropertyMaintenanceComponent;
  let fixture: ComponentFixture<PropertyMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
