import React from "react"
import SectionTitle from "../Title/SectionTitle"

const Section = ({ title, children }) => {
  return (
    <section style={{ padding: "10rem 0 0 0" }}>
      <SectionTitle text={title} />
      <div style={{ padding: "7.5rem 0" }}>{children}</div>
    </section>
  )
}

export default Section
