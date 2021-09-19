import { Redirect } from 'react-router-dom'

function Authentication(props) {
  return <Redirect to={{
    pathname: '/login',
    state: {from: props.location.pathname}
  }} />
}

export default Authentication
