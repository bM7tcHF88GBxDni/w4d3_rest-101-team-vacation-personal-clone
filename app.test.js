import request from 'supertest'
import app from './app.js'

const { deployAstronauts, newAstronaut } = require('./libs/data');
const {
  deleteAstronautById,
  updateAstronautById,
} = require('./models/astronauts');

const LEVELS = {
  one: 'level_one',
  two: 'level_two',
  three: 'level_three',
};

describe(LEVELS.one, () => {
  it('app should have a GET request handler that returns all astronauts', async () => {
    const astronauts = deployAstronauts();
    const res = await request(app).get('/astronauts');
    const expected = { success: true, payload: astronauts };
    const actual = res.body;

    expect(actual).toEqual(expected);
  });
  it('app should have a POST request handler that creates a new astronaut', async () => {
    const res = await request(app).post('/astronauts').send(newAstronaut);
    const expected = { success: true, payload: newAstronaut };
    const actual = res.body;

    expect(actual).toEqual(expected);
  });
});
describe(LEVELS.two, () => {
  it('app should have a GET request handler that retrieves an astronaut by id', async () => {
    const astronauts = deployAstronauts();
    const res = await request(app).get('/astronauts/1111');
    const expected = { success: true, payload: astronauts[0] };
    const actual = res.body;

    expect(actual).toEqual(expected);
  });

  it('app should have a PUT request handler that replaces an astronaut by id', async () => {
    const astronauts = deployAstronauts();
    const res = await request(app).put('/astronauts/1111').send(newAstronaut);
    const expected = { success: true, payload: newAstronaut };
    const actual = res.body;

    expect(actual).toEqual(expected);
  });

  it('app should have a DELETE request handler that deletes an astronaut by id', async () => {
    const astronauts = await deleteAstronautById('1111');
    const res = await request(app).delete('/astronauts/1111');
    const expected = { success: true, payload: astronauts };
    const actual = res.body;

    expect(actual).toEqual(expected);
  });
  it('app should have a PATCH request handler that updates an astronaut by id', async () => {
    const astronautUpdate = {
      firstName: 'Zainab',
    };
    const astronauts = await updateAstronautById('1111', astronautUpdate);
    const res = await request(app)
      .patch('/astronauts/1111')
      .send(astronautUpdate);
    const expected = { success: true, payload: astronauts };
    const actual = res.body;

    expect(actual).toEqual(expected);
  });
});


