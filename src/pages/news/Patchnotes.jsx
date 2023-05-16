import PatchnotesBlock from '../../components/news/PatchnotesBlock'

import { patchnotes } from './data'

const Patchnotes = () => {
  return (
    <section className="flex flex-col items-center py-32">
      <PatchnotesBlock patchnotes={patchnotes} />
    </section>
  )
}
export default Patchnotes
