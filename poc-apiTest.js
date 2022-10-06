import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    
    vus: 10,
    duration: '3s'

}


export default function () {

  const res =  http.get('https://jsonplaceholder.typicode.com/')
    check(res, {
      'check status code 200' : (r => r.status == 200)
     
    
  })


  
  }