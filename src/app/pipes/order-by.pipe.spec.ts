import { resultMockList } from '../../assets/data/result-list.mock';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('should create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array in case result list is null', () => {
    const pipe = new OrderByPipe();
    const formatedData = pipe.transform(null);
    expect(formatedData).toEqual([]);
  });

  it('should return default result list in case key is not provided for sorting', () => {
    const pipe = new OrderByPipe();
    const formatedData = pipe.transform([...resultMockList]);
    expect(formatedData).toEqual([...resultMockList]);
  });

  it('should sort the given result list based on `name`', () => {
    const pipe = new OrderByPipe();
    const formatedData = pipe.transform([...resultMockList], 'name');
    expect(formatedData).toEqual([...resultMockList]);
  });

  it('should sort the given result list based on `downloadSpeed`', () => {
    const expectedResult = [
      {
        id: 4,
        name: 'Tarif Name d',
        downloadSpeed: 8000000,
        uploadSpeed: 2000000,
        benefits: ['Tarif benefit 1', 'Tarif benefit 2'],
        price: 70,
      },
      {
        id: 3,
        name: 'Tarif Name c',
        downloadSpeed: 10000000,
        uploadSpeed: 4000000,
        benefits: [
          'Tarif benefit 1',
          'Tarif benefit 2',
          'Tarif benefit 3',
          'Tarif benefit 4',
        ],
        price: 90,
      },
      {
        id: 1,
        name: 'Tarif Name a',
        downloadSpeed: 12000000,
        uploadSpeed: 6000000,
        benefits: [
          'Tarif benefit 1',
          'Tarif benefit 2',
          'Tarif benefit 3',
          'Tarif benefit 4',
        ],
        price: 123.45,
      },
      {
        id: 2,
        name: 'Tarif Name b',
        downloadSpeed: 12000000,
        uploadSpeed: 6000000,
        benefits: ['Tarif benefit 1', 'Tarif benefit 2', 'Tarif benefit 3'],
        price: 123.45,
      },
      {
        id: 5,
        name: 'Tarif Name e',
        downloadSpeed: 12000000,
        uploadSpeed: 7000000,
        benefits: [
          'Tarif benefit 1',
          'Tarif benefit 2',
          'Tarif benefit 3',
          'Tarif benefit 4',
        ],
        price: 120,
      },
    ];
    const pipe = new OrderByPipe();
    const formatedData = pipe.transform([...resultMockList], 'downloadSpeed');
    expect(formatedData).toEqual([...expectedResult]);
  });
});
