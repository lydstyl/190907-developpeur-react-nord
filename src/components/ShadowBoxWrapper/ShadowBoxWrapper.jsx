import React from "react"

const ShadowBoxWrapper = ({ addClass, children, ...otherProps }) => {
  return (
    <div
      className={`${
        addClass ? addClass : ""
      } shadow p-3 mt-5 mb-5 bg-white rounded`}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default ShadowBoxWrapper
