import './index.css'

const FlipImages = props => {
  const {list, isClicked, onClickFlipImage} = props
  const {image, name, id} = list

  const onClickImage = () => {
    onClickFlipImage(id, name)
  }

  return (
    <li className="list">
      <button
        className="flip-image-button"
        type="button"
        onClick={onClickImage}
        data-testid={name}
      >
        <img
          src={
            isClicked
              ? image
              : 'https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711276211/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC_qve3uj.jpg'
          }
          alt={name}
          className="flip-image"
        />
      </button>
    </li>
  )
}

export default FlipImages
