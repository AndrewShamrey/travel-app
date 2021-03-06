import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incVariable, decVariable } from "../actions/control";
import Example from "../components/example/example";

const ExampleContainer = () => {
  const dispatch = useDispatch();
  const variable = useSelector((rootState) => rootState.control.variable);

  const onClickIncHandler = useCallback(() => {
    dispatch(incVariable());
  }, [dispatch]);

  const onClickDecHandler = useCallback(() => {
    dispatch(decVariable());
  }, [dispatch]);

  return (
    <div>
      <Example
        curContent={'+'}
        onClickHandler={onClickIncHandler}
      />
      <p>{variable}</p>
      <Example
        curContent={'-'}
        onClickHandler={onClickDecHandler}
      />
    </div>
  );
};

export default ExampleContainer;
