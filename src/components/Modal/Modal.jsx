import './modal.scss'
import cn from "classnames"

export const Modal = ({showModal, children, setShowModal }) => {

  return(
  
      <div className={cn("modal", { ["active"]: showModal })}>
        <div  className={cn("modal_content", { ["active"]: showModal })}  onClick={(e) => e.stopPropagation()}>
        {children}
        </div>
    </div>

  )
}