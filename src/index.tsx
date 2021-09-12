app/pages/index.jsx:
import Head from "next/head"
import CssBaseline from "@material-ui/core/CssBaseline"
import SearchBar from "../components/SearchBar"

const Index = () => (
  <React.Fragment>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <CssBaseline />
    <SearchBar />
  </React.Fragment>
)

export default Index