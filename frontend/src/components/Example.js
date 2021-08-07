import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  [{
    src: 'lima.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'montevideo.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'roma.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'lima.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4'
  }],
  [{
    src: 'lima.jpg',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'montevideo.jpg',
    altText: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    src: 'roma.jpg',
    altText: 'Slide 7',
    caption: 'Slide 7'
  },
  {
    src: 'lima.jpg',
    altText: 'Slide 8',
    caption: 'Slide 8'
  }],
  [{
    src: 'lima.jpg',
    altText: 'Slide 9',
    caption: 'Slide 9'
  },
  {
    src: 'montevideo.jpg',
    altText: 'Slide 10',
    caption: 'Slide 10'
  },
  {
    src: 'roma.jpg',
    altText: 'Slide 11',
    caption: 'Slide 11'
  },
  {
    src: 'lima.jpg',
    altText: 'Slide 12',
    caption: 'Slide 12'
  }]
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
/* <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> src={`/assets/${ciudad.src}`} */
  const slides = items.map((item, index) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={index}>
      {item.map((ciudad) => {
        return(
      <div className="carousel-unidad" style={{backgroundImage:`url('./assets/${ciudad.src}')`}} >
      <p>{ciudad.caption}</p>
      </div>)
    })}
    </CarouselItem>
    )
  })

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;
