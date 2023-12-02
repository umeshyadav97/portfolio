import React from "react"
import "../themes/fonts.scss"
import "../styles/globals.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useRouter } from "next/router"
import { Provider as ReduxProvider } from "react-redux"
import PublicLayout from "@local/layouts/publicLayout"
import PrivateLayout from "@local/layouts/privateLayout"
import { defaultTheme } from "@local/themes/defaultTheme"
import { store } from "@local/redux/store"
import { CookiesProvider } from "react-cookie"
import CommonLayout from "@local/layouts/commonLayout"
import AppLoader from "@local/components/Loader/AppLoader"
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }) {
  const currentTheme = createTheme(defaultTheme)
  const path = useRouter()
  const isPublic = path.pathname.includes("/auth/")
  const isPrivate = path.pathname.includes("/user/")

  const Wrapper = isPublic ? PublicLayout : isPrivate ? PrivateLayout : CommonLayout

  return (
    <CookiesProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={currentTheme}>
          <AppLoader />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <ToastContainer />
        </ThemeProvider>
      </ReduxProvider>
    </CookiesProvider>
  )
}

export default MyApp
