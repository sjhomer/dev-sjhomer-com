import * as React from 'react'
import MuiList from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'

export type ListItemData = {
  label: string
  caption?: string
  icon?: JSX.Element
}

interface ListProps {
  items: ListItemData[]
}

export default function List({items = [], ...props}: ListProps) {
  return <MuiList {...props} >
    {items.map(({label, caption = null, icon = null}) =>
      <ListItem key={encodeURI(label)}>
        <ListItemAvatar>
          {icon && <Avatar>
            {icon}
          </Avatar>}
        </ListItemAvatar>
        <ListItemText
          primary={label}
          secondary={caption}
        />
      </ListItem>
    )}
  </MuiList>
}