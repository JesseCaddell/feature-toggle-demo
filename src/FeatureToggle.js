import React from 'react'

export default function FeatureToggle({isEnable, featureName}) {
    if (isEnable) {
        return <p>{featureName}</p>
    }
    return <p>{`Feature ${featureName} is disabled`}</p>
}