import React from "react"
import { Tooltip } from "@openneuro/components/tooltip"
import { Button } from "@openneuro/components/button"

export interface NemarButtonProps {
  datasetId: string
  onNemar: boolean
}

export const NemarButton: React.FC<NemarButtonProps> = ({
  datasetId,
  onNemar,
}) => {
  const url = `https://nemar.org/dataexplorer/detail?dataset_id=${datasetId}`
  return (
    <>
      {onNemar && (
        <div className="brainlife-block">
          <Tooltip
            tooltip="View and analyze this dataset on the NEMAR OpenNeuro portal for MEG, iEEG, and EEG data"
            flow="up"
            wrapText={true}
          >
            <Button
              className="brainlife-link"
              primary={true}
              size="small"
              onClick={() => {
                window.open(url, "_blank")
              }}
              label="NEMAR"
            />
          </Tooltip>
        </div>
      )}
    </>
  )
}
