import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const PlayListItem = props => {
  const {playlistDetails, onDeleteButton} = props
  const {imageUrl, name, genre, duration, id} = playlistDetails

  const onClickedDeleteBtn = () => {
    onDeleteButton(id)
  }

  return (
    <li className="playlist-item-container">
      <div className="item-container">
        <img src={imageUrl} alt="track" className="image" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          onClick={onClickedDeleteBtn}
          className="btn"
          data-testid="delete"
        >
          <AiOutlineDelete size={25} />
        </button>
      </div>
    </li>
  )
}

export default PlayListItem
