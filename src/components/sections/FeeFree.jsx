import FeatureRow from './FeatureRow'
import MembershipVisual from '../mockups/MembershipVisual'

export default function FeeFree() {
  return (
    <FeatureRow
      id="fee-free"
      badge="Actually Fee Free"
      title="Fee-Free Forever"
      visual={<MembershipVisual />}
      reverse
    >
      We don&rsquo;t charge you fees and we don&rsquo;t put up paywalls. We&rsquo;re the bridge
      that connects job opportunities with the best candidates, with no middleman involved.
    </FeatureRow>
  )
}
