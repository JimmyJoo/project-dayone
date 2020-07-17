/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkLine } from '@fortawesome/free-regular-svg-icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './Style/TimeLineList.module.scss';
import { MainContext } from '../Context/MainContext';
import image1 from '../Util/asset/image1.jpg';
import image2 from '../Util/asset/image2.jpg';
import image3 from '../Util/asset/image3.jpg';
import image4 from '../Util/asset/image4.jpg';

const cx = classNames.bind(styles);
let start = 10;
let end = 20;

const TimeLineList = () => {
  const context = useContext(MainContext);
  const { state, patchBookmark } = context;
  const { diaries } = state;
  const images = [image1, image2, image3, image4];

  const sortDiaries = diaries.sort((a, b) => b.id - a.id);
  const diaryAmount = sortDiaries.length;

  const [hasMoreState, setHasMoreState] = useState(diaryAmount > 10);
  const [renderDiaries, setRenderDiaries] = useState(
    diaryAmount < 10 ? sortDiaries : sortDiaries.slice(0, 10),
  );

  const getMoreDiaries = () => {
    console.log(renderDiaries, start, end);
    if (diaryAmount < end) {
      end = diaryAmount;
      setHasMoreState(false);
      console.log('no more', renderDiaries, start, end);
      return;
    }
    setRenderDiaries(renderDiaries.concat(sortDiaries.slice(start, end)));
    start += 10;
    end += 10;
  };
  console.log(start, end);

  const onChangeBookmark = ({ target }) => {
    const id = +target.attributes.id.nodeValue;
    patchBookmark(id, target.checked);
  };

  return (
    <ul className={cx('timelineWrapper')}>
      <InfiniteScroll
        dataLength={renderDiaries.length}
        next={getMoreDiaries}
        hasMore={hasMoreState}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p
            style={{
              textAlign: 'center',
            }}
          >
            <b style={{ display: 'block', marginTop: '97px' }}>
              모든 일기를 보셨습니다
            </b>
          </p>
        }
      >
        {renderDiaries.map((diary) => (
          <li key={diary.id} className={cx('timelineList')}>
            <Link
              to={`/diaryViewer/${diary.id}`}
              style={{ textDecoration: 'none' }}
            >
              <figure>
                <img
                  className={cx('thumbnail')}
                  src={
                    diary.imagePaths.length
                      ? diary.imagePaths[0]
                      : diary.id > 4
                      ? images[2]
                      : images[diary.id - 1]
                  }
                  alt="https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png"
                />
                <figcaption>
                  <div className={cx('title')}>{diary.title}</div>
                  <div className={cx('date')}>
                    {diary.date.split('-').join('. ')}
                  </div>
                  <p className={cx('content')}>{diary.content}</p>
                </figcaption>
              </figure>
            </Link>
            <input
              id={diary.id}
              type="checkbox"
              checked={diary.isBookmarked ? 'checked' : ''}
              onChange={onChangeBookmark}
            />
            <label htmlFor={diary.id}>
              <FontAwesomeIcon
                icon={diary.isBookmarked ? faBookmark : faBookmarkLine}
              />
            </label>
          </li>
        ))}
      </InfiniteScroll>
    </ul>
  );
};

export default TimeLineList;
