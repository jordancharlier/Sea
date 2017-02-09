import { InMemoryDbService } from 'angular-in-memory-web-api';
export class SeaData implements InMemoryDbService {
  createDb() {
    let sea = [
      { id: 1, name: 'Saint zoulou', horaires: ['06h00', '07h00','08h00','09h00'] , count: [1,0,1,0]}, 
      { id: 2,name: 'Blibli Francise michou', horaires: ['06h00', '07h00','08h00','09h00'] , count: [0,5,0,3]},
       { id: 2,name: 'Cité', horaires: ['06h00', '07h00','08h00','09h00'] , count: [3,10,1,40]},
        { id: 2,name: 'Eiffel Tower', horaires: ['06h00', '07h00','08h00','09h00'] , count: [9,8,67,5]},
         { id: 2,name: 'New yorques', horaires: ['06h00', '07h00','08h00','09h00'] , count: [4,5,3,76]}
     
    ];
    let forms = [
      {  id: 1 ,text: 'Ce que tu as fait cest de la merde'},
      {id: 2 ,text: 'Ce que tu as fait cest de la merde'}
     
     
      
    ];
    return {forms, sea};
  }
}