import React, { IconButton, Spinner, SpinnerSize } from '@fluentui/react'

export function RefreshButton(props: {
  isRefreshing: boolean
  onRefresh(): void
}) {
  return props.isRefreshing ? (
    <Spinner
      size={SpinnerSize.small}
      styles={{ root: { padding: 8, cursor: 'wait' } }}
    />
  ) : (
    <IconButton iconProps={{ iconName: 'Refresh' }} onClick={props.onRefresh} />
  )
}
