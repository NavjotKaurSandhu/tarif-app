import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListComponent } from './result-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResultListService } from '../../service/result-list.service';
import { formatCurrency } from '@angular/common';
import { of } from 'rxjs';
import { MbpsPipe } from '../../pipes/mbps.pipe';
import { resultMockList } from '../../../assets/data/result-list.mock';

describe('ResultListComponent', () => {
  let component: ResultListComponent;
  let fixture: ComponentFixture<ResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultListComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ResultListService,
          useValue: {
            getResultList: () => of([...resultMockList]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultListComponent);
    component = fixture.componentInstance;
    component.resultDataList = of([...resultMockList]);
    component.sortBy = 'name';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show result list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[data-test-id="result-list"]')).toBeTruthy();
  });

  it('should format price in result list', () => {
    const priceResult = formatCurrency(123.45, 'fr', '€');

    const compiled = fixture.nativeElement as HTMLElement;
    const price = compiled.querySelector('[data-test-id="result-list-price"]');
    expect(price?.textContent).toContain(priceResult);
  });

  it('should format download or upload speed in result list', () => {
    const downloadResult = new MbpsPipe().transform(12000000);
    const uploadResult = new MbpsPipe().transform(6000000);

    const compiled = fixture.nativeElement as HTMLElement;
    const downloadSpeed = compiled.querySelector('[data-test-id="result-list-download-speed"]');
    expect(downloadSpeed?.textContent).toContain(downloadResult);
    
    const uploadSpeed = compiled.querySelector('[data-test-id="result-list-upload-speed"]');
    expect(uploadSpeed?.textContent).toContain(uploadResult);
  });
});
