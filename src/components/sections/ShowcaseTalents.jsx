import FeatureRow from './FeatureRow'
import ShowcaseVisual from '../mockups/ShowcaseVisual'

export default function ShowcaseTalents() {
  return (
    <FeatureRow
      id="showcase"
      badge="Custom Profile"
      title="Showcase Your Talents"
      visual={<ShowcaseVisual />}
    >
      Personalize your profile with everything that makes you unique. Add an introductory video
      and other media for a personal touch that stands out to employers and candidates.
    </FeatureRow>
  )
}
