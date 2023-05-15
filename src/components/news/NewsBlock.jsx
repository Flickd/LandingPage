import '../../index.css'

const NewsBlock = ({ news }) => {
  return (
    <section className="flex flex-col items-center py-24">
      {news.map((elem) => (
        <article className="flex flex-col lg:flex-row justify-between px-12 py-8 w-[80%] my-12 border-2 border-white rounded-3xl bg-[#100020]">
          <div className="flex flex-col items-center lg:items-start lg:w-[60%]">
            <h1 className="font-bold text-[28px] pb-4">
              {elem.content.headline}
            </h1>
            <img src={elem.content.img} alt="" className="rounded-2xl" />
            <h2 className="font-bold text-[20px] pt-4 ">
              {elem.content.subHeadlineOne}
            </h2>
            <p className="mt-2 text-center lg:text-left">
              {elem.content.paragraphOne}
            </p>
            <p className="mt-2 italic text-center lg:text-left">
              {elem.content.paragraphTwo}
            </p>
          </div>
          <div className="flex flex-col lg:w-[35%] p-3">
            <h2 className="font-bold text-[20px] pb-4">
              {elem.content.subHeadlineTwo}
            </h2>
            <ul>
              {elem.content.patchnotes.map((patchnote) => (
                <li className="mb-1 listStyle">{patchnote}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  )
}
export default NewsBlock
