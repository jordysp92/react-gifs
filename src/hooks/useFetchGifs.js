import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifsEffect(category, setState);
  }, [category]);
  return state;
};

const getGifsEffect = async (category, setState) => {
  const imgs = await getGifs(category);
  setState({
    data: imgs,
    loading: false,
  });
};
