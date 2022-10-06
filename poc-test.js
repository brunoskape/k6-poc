import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    
    vus: 10,
    duration: '3s'

}


export default function () {

  const res =  http.get('https://test.k6.io/')
    check(res, {
      'check status code 200' : (r => r.status == 200),
      'Verify homepage text':   (r => r.body.includes ('Collection of simple web-pages suitable for load testing.')
    )
  })
  }