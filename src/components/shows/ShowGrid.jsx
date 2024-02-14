import ShowCard from './ShowCard'
import {useStarShows} from '../../lib/useStarShows'
import { FlexGrid } from '../commons/FlexGrid';
import NotFoundImg from '../../lib/not-found-img.png'
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
                        image={item?.show?.image ? item?.show?.image?.medium : NotFoundImg}
                        onStarClick={onStarClick}
                        isStarredShows={starredShows.includes(item?.show?.id)}
                    />
                ))
            }
        </FlexGrid>
    )
}

export default ShowGrid