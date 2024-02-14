
import { Link, useParams } from 'react-router-dom'
import { getShowById } from '../api/getTvMazeApi';
import { useQuery } from "@tanstack/react-query"
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../components/commons/TextCenter';
import NotFoundImg from "../lib/not-found-img.png"
const Show = () => {
  const { showId } = useParams();
  const { data: showData, error: showErr, isLoading: loading } = useQuery({
    queryKey: ['showId', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false
  })
  if (showErr) {
    return <div>We have an error {showErr?.message}</div>
  }

  if (loading) {
    return <TextCenter><h2>Loading</h2></TextCenter>
  }
  return (
    <ShowPageWrapper>
      {
        !!showData && (
          <div>
            <BackHomeWrapper>
              <Link to='/'>Go Back To Home</Link>
            </BackHomeWrapper>
            <ShowMainData
              image={!!showData?.image ? showData?.image?.original : NotFoundImg}
              name={showData?.name}
              ratings={showData?.rating}
              genres={showData?.genres}
              summary={showData?.summary}
            />
            <InfoBlock>
              <h2>Details</h2>
              <Details
                status={showData?.status}
                network={showData?.network}
                premiered={showData?.premiered}
              />
            </InfoBlock>
            <InfoBlock>
              <h2>Seasons</h2>
              <Seasons
                seasons={showData?._embedded?.seasons}
              />
            </InfoBlock>
            <InfoBlock>
              <h2>Cast</h2>
              <Cast
                cast={showData?._embedded?.cast}
              />
            </InfoBlock>
          </div>)
      }
    </ShowPageWrapper>
  )
}

export default Show



const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;