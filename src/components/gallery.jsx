
import { Upload } from "./upload";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Upload image</h2>
        </div>
        <Upload/>
      </div>
    </div>
  )
}
