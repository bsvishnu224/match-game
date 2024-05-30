import './index.css'
const DisplayImg = props => {
  const {image} = props
  return (
    <li>
      <img src={image} alt="match" />

    </li>
  )
}
export default DisplayImg
