import addMessageToDatabase from '../src/public/js/modules/addMessageToDatabase';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

test('Check if sending message to database properly', () => {
    const mock = new MockAdapter(axios);
    const data = { response: true };
    mock.onGet('http://localhost:8080/add').reply(200, data);

    addMessageToDatabase('Hello', 'Pat', 4).then(response => {
        expect(response).toEqual(data);
        done();
    });
});
