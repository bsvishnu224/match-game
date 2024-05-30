import './index.css'
const ImageItem = props => {
  const {eachImage, onClickThumbnail} = props
  const onClickthumbnail = () => {
    onClickThumbnail(eachImage.id, eachImage.imageUrl)
  }
  return (
    <li>
      <button onClick={onClickthumbnail}>
        <img
        
          className="img"
          src={eachImage.thumbnailUrl}
          alt="thumbnail"
        />
        </button>
    </li>
  )
}
export default ImageItem
