import { FlexGrid } from '../commons/FlexGrid'
import ActorCard from './ActorCard'

const ActorGrid = ({ actors }) => {
    return (
        <FlexGrid>
            {
                actors?.length !== 0 && actors?.map(item => (
                    <ActorCard
                        key={item?.person.id}
                        name={item?.person?.name}
                        image={item?.person?.image ? item?.person?.image?.medium : '/not-found-img.png'}
                        country={item?.person?.country ? item?.person?.country?.name : null}
                        birthday={item?.person?.birthday}
                        deathday={item?.person?.deathday}
                        gender={item?.person?.gender}
                    />
                ))
            }
        </FlexGrid>
    )
}

export default ActorGrid