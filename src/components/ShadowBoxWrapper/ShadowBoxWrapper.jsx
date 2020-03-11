import React from "react"
import ShadowBoxWrapperStyle from "./style"

const ShadowBoxWrapper = ({ addClass, children, ...otherProps }) => {
  return (
    <ShadowBoxWrapperStyle
      className={`${
        addClass ? addClass : ""
      } shadow p-3 mt-5 mb-5 bg-white rounded`}
      {...otherProps}
    >
      {children}
    </ShadowBoxWrapperStyle>
  )
}

export default ShadowBoxWrapper
