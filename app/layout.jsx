import '@/assets/styles/globals.css'

export const metadata = {
    title: "PropertyPlus | Find The Perfect Rental",
    description: "Find your dream rental property",
    keywords: "rental, find rental, find properties"

}

const MainLayout = ({children}) => {
  return (  <html lang="en">
    <body>
        <div>{children}</div>
    </body>
</html>
)};

export default MainLayout;
