let diaryId = 12;

const diaries = [
  {
    id: 1,
    title: 'Diary Title 1',
    content: 'This is diary 1',
    date: '2020/03/02',
    location: { lat: 37.62197524055062, lng: 127.16017523675508 },
    imagePaths: [
      'https://dictionary.cambridge.org/ko/images/thumb/diary_noun_002_10619.jpg?version=5.0.102',
      'https://dictionary.cambridge.org/ko/images/thumb/diary_noun_002_10619.jpg?version=5.0.102',
    ],
    isBookmarked: true,
  },
  {
    id: 2,
    title: 'Diary Title 2',
    content: 'This is diary 2',
    date: '2020/04/17',
    location: { lat: 37.620842424005616, lng: 127.1583774403176 },
    imagePaths: [],
    isBookmarked: false,
  },
  {
    id: 3,
    title: 'Diary Title 3',
    content: 'This is diary 3',
    date: '2020/04/21',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    id: 4,
    title: 'Diary Title 4',
    content: 'This is diary 4',
    date: '2020/04/25',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    id: 5,
    title: 'Diary Title 5',
    content: 'This is diary 5',
    date: '2020/04/28',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    id: 6,
    title: 'Diary Title 6',
    content: 'This is diary 6',
    date: '2020/05/01',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    id: 7,
    title: 'Diary Title 7',
    content: 'This is diary 7',
    date: '2020/05/02',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    id: 8,
    title: 'Diary Title 8',
    content: 'This is diary 8',
    date: '2020/06/01',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    id: 9,
    title: 'Diary Title 9',
    content: 'This is diary 9',
    date: '2020/07/01',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    id: 10,
    title: 'Diary Title 10',
    content: 'This is diary 10',
    date: '2020/07/04',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    id: 11,
    title: 'Diary Title 11',
    content: 'This is diary 11',
    date: '2020/07/05',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
];

/* 전체 diary list 조회
GET /api/posts
*/
exports.list = (ctx) => {
  ctx.body = diaries;
};

/* 새로운 diary 작성
POST /api/posts
{ _id, title, body, date, location }
*/
exports.write = (ctx) => {
  // REST API의 Requiest Body는 ctx.request.body에서 조회 가능
  const { _id, title, body, date, location } = ctx.request.body;
  diaryId += 1;
  const diary = { _id, id: diaryId, title, body, date, location };
  diaries.push(diary);
  ctx.body = diary;
};

/* 특정 다이어리 조회
GET /api/posts/:id
*/
exports.read = (ctx) => {
  const { id } = ctx.params;
  // 주어진 id값으로 diary 찾기
  // 파라미터로 받아 온 값은 문자열 형식
  // 파라미터를 숫자로 변환 또는 비교할 d.id 값을 문자열로 변경
  const diary = diaries.find((d) => d.id.toString() === id);
  // diary가 없으면 오류 반환
  if (!diary) {
    ctx.status = 404;
    ctx.body = {
      message: '다이어리가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = diary;
};

/* 특정 다이어리 제거
DELETE /api/posts/:id
*/
exports.remove = (ctx) => {
  const { id } = ctx.params;
  // 제거할 diary의 id를 찾기
  const index = diaries.findIndex((d) => d.id.toString() === id);
  // 찾는 diary가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '다이어리가 존재하지 않습니다.',
    };
    return;
  }
  // index번째 diary 제거
  diaries.splice(index, 1);
  ctx.status = 204; // No Content
};

/* 특정 다이어리 수정(특정 부분 수정)
PATCH /api/posts/:id
{ title, body, date, location }
*/
exports.update = (ctx) => {
  // 특정 부분만 수정(교체)
  const { id } = ctx.params;
  // 해당 id를 가진 diary를 찾음
  const index = diaries.findIndex((d) => d.id.toString() === id);
  // diary가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  diaries[index] = {
    ...diaries[index],
    ...ctx.request.body,
  };
  ctx.body = diaries[index];
};

/* 특정 다이어리 수정(교체)
PUT /api/posts/:id
{ title, body, date, location }
*/
exports.replace = (ctx) => {
  // 전체 다이어리 정보를 입력하여 데이터를 통째로 교체
  const { _id, id } = ctx.params;
  // 해당하는 id를 가진 다이어리를 찾음
  const index = diaries.findIndex((d) => d.id.toString() === id);
  // 찾는 diary가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '다이어리가 존재하지 않습니다.',
    };
    return;
  }
  // 전체 diaries를 덮어 씌움
  // _id, id를 제외한 기본 정보를 날리고, 객체를 새로 생성
  diaries[index] = {
    _id,
    id,
    ...ctx.request.body,
  };
  ctx.body = diaries[index];
};
