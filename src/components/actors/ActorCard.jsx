import { SearchCard, SearchImgWrapper } from "../commons/SearchCard"


const ActorCard = ({ name, image, country, birthday, deathday, gender }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes From ${country}` : 'No-Country Known'}</p>
      {!!birthday && <p>Born On {birthday}</p>}
      {/* {!!deathday ? <p>Died On {deathday}</p> : <p>Alive</p>} */}
      <p>{!!deathday ? `Died On ${deathday}` : 'Alive'}</p>
    </SearchCard>
  )
}

export default ActorCard