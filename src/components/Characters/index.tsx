import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../utils/store";
import * as charactersActions from "../../store/reducers/characters";

function Characters() {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    setTimeout(() => {
      dispatch(charactersActions.setLoading(false));
    }, 1000);
  }, []);

  return (
    <div>
      {characters.isLoading ? <h1>Carregando...</h1> : <h1>Hello Character</h1>}
    </div>
  );
}

export default Characters;
