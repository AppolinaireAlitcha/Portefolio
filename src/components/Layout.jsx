const Layout = ({children, className = ""}) => {
  return (
    <div className={`px-32 border-solid w-full inline-block z-0 bg-light dark:bg-dark xl:px-24 xl:py-10 lg:px-16 md:px-12 sm:px-8 md:pt-0 ${className}`}>
        {children}
    </div>
  )
}

export default Layout;