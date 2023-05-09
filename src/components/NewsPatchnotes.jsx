import '../index.css'

const NewsPatchnotes = () => {
  const patchnotes = [
    {
      title: 'newYearsPatch',
      content: {
        headline: 'New Years Patch!',
        paragraph:
          "Are we all still here? Yes? Okay good, I hope you had a wonderful New Year and that all your dreams may come true! Now we didn't sit idly by during the year change, we continue to work on bringing improvements to you! So what did we do this past week? Ofcourse we made some changes that you will get to enjoy today, but there will also be a mention of 1 of several internal projects we are currently running",
        notes: [
          "Add server maintenance alert(with this included you will see an ingame timer that will show when the server restart will happen and you'll be kicked)",
          'Fix working sprites visible in flatbed',
          'Fix happening only attractor behavior',
          'Fix Falcons in bunkers attempting to shoot out of range',
          'Fix shop tabs missing translations',
          'Fix building preview sprite on upgrade screen',
          'Fix Friends Bunker overfilling',
          'Fix upgrading bunkers having wrong sprite in battle',
          'Changes to how locks are applied, you will no longer be kicked when maintenance gets enabled(you will however not be able to login again until maintenance ends) and you will no longer get planet destroyed in a war if the planet is supposed to have auto repaired already',
          'Increased throughput of alliance requests',
          'Balance changes to strike,mole and missile launcher',
        ],
      },
    },
    {
      title: 'newYearsPatch',
      content: {
        headline: 'New Years Patch!',
        paragraph:
          "Are we all still here? Yes? Okay good, I hope you had a wonderful New Year and that all your dreams may come true! Now we didn't sit idly by during the year change, we continue to work on bringing improvements to you! So what did we do this past week? Ofcourse we made some changes that you will get to enjoy today, but there will also be a mention of 1 of several internal projects we are currently running",
        notes: [
          "Add server maintenance alert(with this included you will see an ingame timer that will show when the server restart will happen and you'll be kicked)",
          'Fix working sprites visible in flatbed',
          'Fix happening only attractor behavior',
          'Fix Falcons in bunkers attempting to shoot out of range',
          'Fix shop tabs missing translations',
          'Fix building preview sprite on upgrade screen',
          'Fix Friends Bunker overfilling',
          'Fix upgrading bunkers having wrong sprite in battle',
          'Changes to how locks are applied, you will no longer be kicked when maintenance gets enabled(you will however not be able to login again until maintenance ends) and you will no longer get planet destroyed in a war if the planet is supposed to have auto repaired already',
          'Increased throughput of alliance requests',
          'Balance changes to strike,mole and missile launcher',
        ],
      },
    },
    {
      title: 'newYearsPatch',
      content: {
        headline: 'New Years Patch!',
        paragraph:
          "Are we all still here? Yes? Okay good, I hope you had a wonderful New Year and that all your dreams may come true! Now we didn't sit idly by during the year change, we continue to work on bringing improvements to you! So what did we do this past week? Ofcourse we made some changes that you will get to enjoy today, but there will also be a mention of 1 of several internal projects we are currently running",
        notes: [
          "Add server maintenance alert(with this included you will see an ingame timer that will show when the server restart will happen and you'll be kicked)",
          'Fix working sprites visible in flatbed',
          'Fix happening only attractor behavior',
          'Fix Falcons in bunkers attempting to shoot out of range',
          'Fix shop tabs missing translations',
          'Fix building preview sprite on upgrade screen',
          'Fix Friends Bunker overfilling',
          'Fix upgrading bunkers having wrong sprite in battle',
          'Changes to how locks are applied, you will no longer be kicked when maintenance gets enabled(you will however not be able to login again until maintenance ends) and you will no longer get planet destroyed in a war if the planet is supposed to have auto repaired already',
          'Increased throughput of alliance requests',
          'Balance changes to strike,mole and missile launcher',
        ],
      },
    },
  ]

  return (
    <section className="flex flex-col items-center py-24">
      {patchnotes.map((note) => (
        <article className="flex flex-col justify-between px-12 py-8 w-[80%] my-12 border-2 border-white rounded-3xl">
          <h1 className="font-bold text-[28px] text-center lg:text-left">
            {note.content.headline}
          </h1>
          <p className="mt-2 text-center lg:text-left">
            {note.content.paragraph}
          </p>
          <h2 className="mt-8 font-bold text-[20px]">Patchnotes:</h2>
          <ul className="mt-2">
            {note.content.notes.map((elem) => (
              <li className="mb-1 listStyle">{elem}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
export default NewsPatchnotes
