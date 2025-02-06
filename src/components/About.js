import React from 'react'

export default function About(props) {
  return (
    <div className={`text-center bg-${props.mode} text-${props.mode2}`}>
      <h1>Hello! There</h1>
      <p>This is the about section</p>
    </div>
  )
}
