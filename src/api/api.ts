import {createServer, Response} from 'miragejs';
import {v4 as uuid, validate} from "uuid";

// The code in this file should not be changed. Feel free to inspect the code here to see what is returned by the api calls

const generateHistory = (a: number, b: number) => {
  if (Math.random() < 0.25) return null;
  return Array.from({length: Math.round(Math.random() * 5)}).map(() => Math.round(a - 1 + Math.random() * (1 + b - a)));
}

const iffyResponse = (goodResponse: any) => {
  if (Math.random() < 0.05) return new Response(500, {}, {error: 'Server error', code: 'SERVER_ERROR'});
  if (Math.random() < 0.05) return new Response(503, {}, {error: 'Service unavailable', code: 'SERVER_ERROR'});
  return goodResponse;
}

createServer({
  seeds(server) {
    server.db.loadData({
      widgets: [
        {id: uuid(), name: 'Alpha', image: '/icons/balance-scale-solid.svg', colour: 'red', type: 'bar', min: 5, max: 10, current: 7, history: generateHistory(5,10)},
        {id: uuid(), name: 'Beta', image: '/icons/bicycle-solid.svg', colour: 'blue', type: 'bar', min: 2, max: 5, current: 6, history: generateHistory(2,5)},
        {id: uuid(), name: 'Gamma', image: '/icons/bullhorn-solid.svg', colour: 'red', type: 'line', min: 7, max: 9, current: 1, history: generateHistory(7,9)},
        {id: uuid(), name: 'Delta', image: '/icons/cog-solid.svg', colour: 'green', type: 'line', min: 4, max: 6, history: generateHistory(4,6)},
        {id: uuid(), name: 'Epsilon', image: '/icons/cubes-solid.svg', colour: 'amber', type: 'line', min: 9, max: 9.5, current: 9.5, history: generateHistory(9,9.5)},
        {id: uuid(), name: 'Zeta', image: '/icons/bullhorn-solid.svg', colour: 'blue', type: 'bar', min: 1, max: 1.1, current: 1.001, history: generateHistory(1,1.1)},
        {id: uuid(), name: 'Eta', image: '/icons/bicycle-solid.svg', colour: 'amber', type: 'line', min: -4, max: null, current: -2, history: generateHistory(-4,-4)},
        {id: uuid(), name: 'Theta', image: '/icons/balance-scale-solid.svg', colour: 'green', type: 'bar', min: 3, max: 2, current: 4, history: generateHistory(3,2)},
      ],
    })
  },
  routes() {
    this.get(
      '/api/widgets',
      // @ts-ignore
      (schema, request) => iffyResponse(Array.from(schema.db.widgets).map(w => ({id: w.id, image: w.image, name: w.name}))),
      {timing: 2000}
    );
    this.get(
      '/api/widgets/:id',
      (schema, request) => {
        const id = request.params.id;
        if (!validate(id)) return new Response(400, {}, {error: 'id parameter is invalid', code: 'CLIENT_ERROR'});
        const widget = schema.db.widgets.find(id);
        if (widget === undefined) return new Response(404, {}, {error: 'widget could not be found', code: 'NOT_FOUND'});
        return iffyResponse(widget);
      },
      {timing: 1000}
    );
  }
});
