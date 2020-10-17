import { TestBed } from '@angular/core/testing';

import { MockTaskService, TaskService } from './task.service';
import { AngularFirestore } from '@angular/fire/firestore';


describe('TaskService', () => {
 
  let service: MockTaskService;

  beforeEach(() => {

    
    TestBed.configureTestingModule({
      providers: [MockTaskService]
    });
    service = TestBed.inject(MockTaskService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
    service.getTasks().subscribe(value => {
      expect(value[0].payload.val().task).toEqual('Test');
      done();
    });
  });
});

