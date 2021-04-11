import { Card, CardMedia } from "@material-ui/core";
import { inject, observer } from "mobx-react";

export const Image = inject()(observer((props) =>  {

  const { title, height, width, src, classes } = props

  return (
      <Card className={classes} style={{width}} elevation={0}>
        <CardMedia 
          style={{height}}
          image={src}
          title={title}
        />
      </Card>
  )
}))
