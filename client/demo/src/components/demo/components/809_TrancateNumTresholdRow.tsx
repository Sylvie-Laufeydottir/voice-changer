import React, { useMemo } from "react"
import { useAppState } from "../../../001_provider/001_AppStateProvider"

export type TrancateNumTresholdRowProps = {
}

export const TrancateNumTresholdRow = (_props: TrancateNumTresholdRowProps) => {
    const appState = useAppState()

    const trancateNumTresholdRow = useMemo(() => {
        return (
            <div className="body-row split-3-7 left-padding-1 guided">
                <div className="body-item-title left-padding-1">Trancate Num</div>
                <div className="body-input-container">
                    <input type="number" min={5} max={300} step={1} value={appState.workletSetting.setting.numTrancateTreshold} onChange={(e) => {
                        appState.workletSetting.setSetting({
                            ...appState.workletSetting.setting,
                            numTrancateTreshold: Number(e.target.value)
                        })
                    }} />
                </div>
            </div>
        )
    }, [appState.workletSetting.setting, appState.workletSetting.setSetting])

    return trancateNumTresholdRow
}