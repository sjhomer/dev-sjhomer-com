import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {GatsbyImage} from '../media'

export interface CtaLinkCardLink {
  label: string,
  href?: string,

  onClick?(): void,
}

export type CtaLinkCardProps = {
  title?: string,
  description?: string | JSX.Element,
  links?: CtaLinkCardLink[],
  imageData?: {
    src: string,
    alt: string,
  }
}

export default function CtaLinkCard({title, description, imageData, links = []}: CtaLinkCardProps) {
  const image = imageData ? <GatsbyImage {...imageData} /> : null

  return (
    <Card className={'cta-link-card'} variant="outlined">
      {image && <CardMedia>
        {image}
      </CardMedia>}
      <CardContent>
        {title && <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>}
        {description && <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>}
      </CardContent>
      {links?.length > 0 && <CardActions>
        {links?.map((link) =>
          // @ts-ignore
          <Button
            key={encodeURI(link.label)}
            size="small"
            href={link.href}
            onClick={link.onClick}
            target="_blank"
            disabled={!link.href && !link.onClick}
          >{link.label}
          </Button>)}
      </CardActions>}
    </Card>
  )
}
