import { useState } from "react";
import { searchForPeople, searchForShows } from "../api/getTvMazeApi";
import SearchFormEle from "../components/SearchFormEle";
import ShowGrid from "../components/shows/ShowGrid";
import ActorGrid from "../components/actors/ActorGrid";
import { useQuery } from '@tanstack/react-query'
import { useSearchStr } from "../lib/useSearchStr";
import { TextCenter } from '../components/commons/TextCenter'
import { Vortex } from "react-loader-spinner"
const Home = () => {
  const [searchStr, setSearchStr] = useSearchStr();
  const [option, setOption] = useState('shows');
  const [filter, setFilter] = useState(null);
  const { data: apiRes, error: apiErr, isLoading } = useQuery({
    queryKey: ['search', filter],
    queryFn: () => (filter?.option === 'shows') ? searchForShows(filter?.searchStr) : searchForPeople(filter?.searchStr),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter?.option || !!filter?.searchStr,
    refetchOnWindowFocus: false
  });
  const onSearchInputChange = event => {
    setSearchStr(event.target.value);
  }
  const onRadioOptionChange = ev => {
    setOption(ev.target.value);
  }
  const handleFormSubmit = async event => {
    event.preventDefault();
    setFilter({ searchStr, option });
  }
  // if (apiRes?.length === 0) {
  //   return <div> <h1>No Result Found...</h1> </div>
  // }
  const RenderApiData = () => {
    if (apiErr) {
      return <> Something Went Wrong! {apiErr?.message}</>
    }

    if (isLoading) {
      return <TextCenter>
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </TextCenter>
    }
    if (apiRes && apiRes?.length === 0) {
      return <TextCenter> <h2>No results found...</h2></TextCenter>
    }
    return (<>
      {
        apiRes && (apiRes[0]?.show) ? <ShowGrid shows={apiRes} /> : <ActorGrid actors={apiRes} />
      }
    </>)
  }

  // {
  //   if (item?.show) {
  //     return <div key={item?.show?.id}>{item?.show?.name}</div>
  //   }
  //   if (item?.person) {
  //     return <div key={item?.person?.id}>{item?.person?.name}</div>
  //   }
  // }
  return (
    <div>
      <SearchFormEle
        handleFormSubmit={handleFormSubmit}
        searchStr={searchStr}
        onSearchInputChange={onSearchInputChange}
        onRadioOptionChange={onRadioOptionChange}
        option={option}
      />
      <div>
        <RenderApiData />
      </div>
    </div>
  )
}

export default Home
