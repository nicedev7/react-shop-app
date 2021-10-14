import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'

type IndexProps = WithRouterProps

function Index(props: IndexProps) {
  props.router.push('/home')

  return null
}

export default withRouter(Index)
