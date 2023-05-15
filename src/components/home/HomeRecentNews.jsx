import { Link } from 'react-router-dom'
import easter from '../../assets/Easter_update_q.png'
import dc from '../../assets/LOGO_GL_XMAS.png'
import silo from '../../assets/gl_Silo.webp'

const articles = [
  {
    img: easter,
    header: 'Galaxy Life easter and settings update!',
    subheader: 'April 8th 00:00 UTC - April 18th 00:00 UTC',
    paragraph:
      'Welcome to the galaxy-wide Easter egg hunt! Help your allies and obliterate your foes to collect as many eggs possible. The strongest and most strategic will get the biggest rewards.',
    link: 'news',
  },
  {
    img: dc,
    header: 'Whats new on the Galaxy Life discord?',
    subheader: '',
    paragraph:
      'Join the community and checkout all the creative art and ideas, other members have!',
    link: 'news',
  },
  {
    img: silo,
    header: 'Bugfixes and gameplay improvement!',
    subheader: '',
    paragraph:
      'Silos/Banks are now working as expected again, visual issues with star shields / spy capsules fixed and more.',
    link: 'news',
  },
]

const HomeRecentNews = () => {
  return (
    <section className="relative z-30 flex flex-col items-center justify-center w-full">
      <ul className="flex flex-col flex-wrap items-center w-full px-12 bg-[#100020] border-t-2 border-b-2 border-white bg-opacity-100 md:items-start md:flex-row md:justify-around">
        {articles.map((article) => (
          <li className="flex flex-col items-center my-8 md:w-[384px] opacity">
            <div className=" flex flex-col  min-h-[256px] gap-2">
              <div className="flex gap-2">
                <img
                  src={article.img}
                  alt="image"
                  className="w-[128px] h-[128px] min-w-[128px] min-h-[128px] rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">{article.header}</h2>
                  <h4 className="italic ">{article.subheader}</h4>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p>{article.paragraph}</p>
              </div>
            </div>

            <Link to={'/news'}>
              <div className="px-6 py-1 text-center border-2 border-[#fb7a0c] rounded-full">
                Check it out
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default HomeRecentNews
