import countComment from '../src/modules/comment-counter.js';

test('counting comments', () => {
  const comments = [
    {
      comment: 'test comment',
      username: 'test username',
      creation_date: '2023-01-05',
    },
    {
      comment: 'Hey I am a fullstack developer',
      username: 'Hein Thant',
      creation_date: '2023-01-05',
    },
    {
      comment: 'Hey I am a fullstack developer too',
      username: 'Aman Worku',
      creation_date: '2023-01-04',
    },
  ];
  const nOfComments = countComment(comments);
  expect(nOfComments).toBe(3);
});