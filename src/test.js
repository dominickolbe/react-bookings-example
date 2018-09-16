import { filterBookings } from './utils';

const testBookings = [{
  id: 1,
  name: 'Name 1',
  time: '2018-10-01T15:17:22.552Z',
  status: 1,
}, {
  id: 2,
  name: 'Name 2',
  time: '2018-10-03T03:17:22.552Z',
  status: 2,
}, {
  id: 3,
  name: 'Name 3',
  time: '2018-10-03T03:17:22.552Z',
  status: 3,
}];

it('filter pending bookings - check length', () => {
  const pendingBookings = filterBookings(testBookings, 1);
  expect(pendingBookings.length).toBe(1);
});

it('filter accepted bookings - check name', () => {
  const pendingBookings = filterBookings(testBookings, 2);
  expect(pendingBookings[0].name).toBe('Name 2');
});

it('filter canceled bookings - check status', () => {
  const pendingBookings = filterBookings(testBookings, 3);
  expect(pendingBookings[0].status).toBe(3);
});
