import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },   // sobe até 50 users
    { duration: '1m', target: 50 },    // sustenta
    { duration: '30s', target: 0 },    // desce
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],     // <1% erro
    http_req_duration: ['p(95)<200'],   // 95% < 200ms
  }
};

export default function () {
  const res = http.get(`${__ENV.API_URL}/`);
  
  check(res, {
    'status is 200': r => r.status === 200,
  });

  sleep(1);
}
