import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {helloWorld} from './reduxToolkit/reducer'

function App() {
  const show = useSelector(state => state.toolkit.hello)
  const dispatch = useDispatch()
  return (
    <>{show} <button onClick = {()=>dispatch (helloWorld())}></button></>
  );
}

export default App;
