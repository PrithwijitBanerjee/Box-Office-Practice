import { getShowsByIds} from "../api/getTvMazeApi";
import { TextCenter } from "../components/commons/TextCenter";
import ShowGrid from "../components/shows/ShowGrid";
import { useStarShows } from "../lib/useStarShows"
import { useQuery } from '@tanstack/react-query'
const Starred = () => {
  const [starredItems] = useStarShows();
  const { data: starredShows, error: starredShowsError, isLoading } = useQuery({
    queryKey: ['starredItems', starredItems],
    queryFn: async () => {
       return await getShowsByIds(starredItems);
    },
    refetchOnWindowFocus: false
  });
  if (starredShowsError) {
    return <div>Something Went Wrong!</div>
  }
  if (isLoading) {
    return <TextCenter><h3>Loading...</h3></TextCenter>
  }

  if (starredShows?.length > 0) {
    return <>
      <ShowGrid shows={starredShows} />
    </>
  }

  return (
    <TextCenter><h3>No Items were starred!</h3></TextCenter>
  )
}

export default Starred