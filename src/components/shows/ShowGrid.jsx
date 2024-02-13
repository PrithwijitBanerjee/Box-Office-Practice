import ShowCard from './ShowCard'
import {useStarShows} from '../../lib/useStarShows'
import { FlexGrid } from '../commons/FlexGrid';

const ShowGrid = ({ shows }) => {
    const [starredShows,dispatch] = useStarShows();
    const onStarClick = showId => {
        const isStarredShows = starredShows.includes(showId);
        isStarredShows ? dispatch({type:'UNSTAR',showId}) : dispatch({type:'STAR',showId});
    }
    return (
        <FlexGrid>
            {
                shows?.length !== 0 && shows?.map(item => (
                    <ShowCard
                        key={item?.show?.id}
                        id={item?.show?.id}
                        name={item?.show?.name}
                        summary={item?.show?.summary}
                        image={item?.show?.image ? item?.show?.image?.medium : '/not-found-img.png'}
                        onStarClick={onStarClick}
                        isStarredShows={starredShows.includes(item?.show?.id)}
                    />
                ))
            }
        </FlexGrid>
    )
}

export default ShowGrid