import { useState } from 'react'

import wallpaper1 from '../../assets/wallpaper1.png'
import wallpaper2 from '../../assets/wallpaper2.jpg'
import wallpaper3 from '../../assets/wallpaper3.jpg'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { RxDotFilled } from 'react-icons/rx'

const HomeSlideshow = () => {
  const slides = [
    {
      url: wallpaper1,
      title: 'Join an Alliance and battle for Supremacy!',
      paragraph:
        'Alliance Wars will determine the dominant force in the Universe. The fiercest and most skilled Starlings from across the realm have come to fight for glory and honor, with each alliance vying to prove its mettle in the ultimate test of strength and strategy. The battle will be hard-fought, with the outcome uncertain until the final clash of arms.',
    },
    {
      url: wallpaper2,
      title: 'Lorem Ipsum etc etc etc!',
      paragraph:
        ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    },
    {
      url: wallpaper3,
      title: 'Lorem Ipsum etc etc etc!',
      paragraph:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At',
    },
  ]

  const [currentImg, setCurrentImg] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentImg === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentImg - 1
    setCurrentImg(newIndex)
  }

  const nextSlide = () => {
    const isFirstSlide = currentImg === slides.length - 1
    const newIndex = isFirstSlide ? 0 : currentImg + 1
    setCurrentImg(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentImg(slideIndex)
  }

  return (
    <section className="relative z-10 flex flex-col items-center my-40">
      <div className="flex items-center justify-center gap-8">
        <div
          onClick={prevSlide}
          className="duration-300 cursor-pointer hover:text-[#fb7a0c]"
        >
          <HiChevronLeft size={64} />
        </div>

        <div
          style={{ backgroundImage: `url(${slides[currentImg].url})` }}
          className="lg:w-[854px] xl:h-[480px] duration-500 bg-center bg-cover rounded-3xl "
        ></div>

        <div
          onClick={nextSlide}
          className="cursor-pointer hover:text-[#fb7a0c] duration-300"
        >
          <HiChevronRight size={64} />
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[186px]">
        <h2 className="font-bold text-[24px] max-w-[512px] pt-4">
          {slides[currentImg].title}
        </h2>
        <p className="max-w-[786px] text-center pb-2 px-8">
          {slides[currentImg].paragraph}
        </p>
      </div>

      <div className="flex mt-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer"
          >
            <RxDotFilled
              color={`${slideIndex === currentImg ? '#fb7a0c' : 'white'}`}
              size={32}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeSlideshow
