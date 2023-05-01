import easter from '../assets/easter.png'

const NewsBlock = () => {
  return (
    <section className="flex flex-col items-center py-20">
      <h1 className="text-[32px] text-center font-extrabold uppercase">
        Galaxy Life - easter update!
      </h1>
      <img
        src={easter}
        alt="easter image"
        className=" rounded-2xl w-[60%] mt-8"
      />
      <div className="flex flex-col lg:flex-row w-[60%]">
        <div className="py-12 border-b-2 border-white lg:w-1/2 lg:py-0 lg:pr-12 lg:my-12 lg:border-r-2 lg:border-b-0">
          <h2 className="text-[24px] font-bold uppercase">Easter contest!</h2>
          <p>
            Welcome to the galaxy-wide Easter egg hunt! Help your allies and
            obliterate your foes to collect as many eggs possible. The strongest
            and most strategic will get the biggest rewards.
          </p>
          <p>Easter starts April 8th 00:00 UTC and ends April 18th 00:00 UTC</p>
        </div>
        <div className="py-12 lg:w-1/2 lg:pl-12 lg:py-0 lg:my-12">
          <h2>With the easter update comes a settings update!</h2>
          <h3>Whats new?</h3>
          <ul>
            <li>20+ New missions</li>
            <li>
              New options menu: spyling mode, dirt skins, volume sliders, new
              languages, other stuff
            </li>
            <li>
              Refinery rework: cubes cost a fixed amount instead of %, coin
              rewards are fixed amount instead of %, rewards are actually random
            </li>
            <li>Battlelog string fix</li>
            <li>Shields will stay after doing attacks on NPCs</li>
            <li>Can no longer help destroyed buildings</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default NewsBlock
