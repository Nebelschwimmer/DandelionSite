import './modal.scss'
import cn from "classnames";


export  function Modal ({setShowModal, showModal, children}) {



  return (
    <div className={cn("modal", { ["active"]: showModal })} onClick={()=>{setShowModal(false)}}>
        <div  className={cn("modal_content", { ["active"]: showModal })}  onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
    </div>
  );
}