import { featureToggle } from '../../data/featureToggle'

export default function fetchFeatureToggle() {
  return {
    ...featureToggle,
  }
}
