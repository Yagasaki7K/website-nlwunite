import AttendeeList from "./components/AttendeeList"
import Header from "./components/Header"
import './index.css'

function App() {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
            </head>
            <Header />
            <AttendeeList />
        </>
    )
}

export default App