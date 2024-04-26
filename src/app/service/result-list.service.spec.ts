import { TestBed } from '@angular/core/testing';
import { ResultListService } from './result-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IResultList } from '../interface/result-list.interface';
import { resultMockList } from '../../assets/data/result-list.mock';

describe('ResultListService', () => {
  let service: ResultListService;
  let resultListServiceMock!: {
    getResultList: jest.Mock<IResultList[]>;
  };

  beforeEach(() => {
    resultListServiceMock = {
      getResultList: jest.fn(),
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ResultListService,
          useValue: resultListServiceMock,
        },
      ],
    });
    service = TestBed.inject(ResultListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an result list', () => {
    resultListServiceMock.getResultList.mockReturnValue([...resultMockList]);

    expect(service.getResultList()).toEqual([...resultMockList]);
  });
});
