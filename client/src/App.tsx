import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface IProps {
  increment: () => any;
}

const App: React.FC<IProps> = props => {
  useEffect(() => {
    props.increment();
  }, [props]);

  return <div className="App" />;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
