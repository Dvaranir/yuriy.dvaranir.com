import React from 'react'


export default function Technologies(technologies: any) {
    
  return (
    technologies.data.map(technology => (<span key={technology.id}>{technology.attributes.name}&nbsp;</span>))
  )
}
