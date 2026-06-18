import FeatureRow from './FeatureRow'
import GlobalReachVisual from '../mockups/GlobalReachVisual'

export default function GlobalReach() {
  return (
    <FeatureRow
      id="global-reach"
      badge="Global Reach"
      title="The First Fully Global Job Board, Anywhere, Ever"
      visual={<GlobalReachVisual />}
    >
      RemoteRecruit connects candidates with opportunities around the world. With today&rsquo;s
      remote-first workforce, you need to be able to find the best jobs and the best people for
      them, wherever they may be.
    </FeatureRow>
  )
}
