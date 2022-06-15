import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
vus: 1000, // users
duration: "30s", // run time
};

export default function () {
// http.get(`http://localhost:3000/products/?product_id=${Math.floor(Math.random() * (1000000 - 1 + 1)) + 1}/related`);
http.get(`http://localhost:3000/products/${Math.floor(Math.random() * (1000000 - 1 + 1)) + 1}`);
}
