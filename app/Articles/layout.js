export const metadata ={
title:'Articles Page'
}
const layout = ({children}) => {
  return (
    <div>
      <h1>Nav bar</h1>
      <div style={{background:"blue"}}>
        {children}
      </div>
    </div>
  )
}

export default layout
