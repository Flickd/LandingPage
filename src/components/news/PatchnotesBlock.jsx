const PatchnotesBlock = ({ patchnotes }) => {
  return (
    <article className="flex flex-col items-center w-[80%] gap-24">
      {patchnotes.map((patchnote) => (
        <div className="border-2 border-white bg-[#100020] rounded-3xl w-full px-12 py-8">
          <h1 className="text-[24px] uppercase font-extrabold">
            {patchnote.headline}
          </h1>
          <p className="text-[12px] italic pb-4">{patchnote.date}</p>
          <p className="pb-4 font-bold">{patchnote.subtextOne}</p>
          <p className="pb-4 font-bold">{patchnote.subtextTwo}</p>
          <ul>
            {patchnote.notes.map((note) => (
              <li className="listStyle">{note}</li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  )
}
export default PatchnotesBlock
