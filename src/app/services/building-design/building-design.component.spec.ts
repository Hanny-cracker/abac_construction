import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDesignComponent } from './building-design.component';

describe('BuildingDesignComponent', () => {
  let component: BuildingDesignComponent;
  let fixture: ComponentFixture<BuildingDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
