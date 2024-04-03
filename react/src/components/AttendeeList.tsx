import { ChangeEvent, useState } from "react"
import AttendeeListDetails from "./AttendeeListDetails"
import { attendees } from "../data/attendees"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

const AttendeeList = () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(attendees.length / 10)

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
    }

    function goToFirstPage() {
        setPage(1)
    }

    function goToPreviousPage() {
        setPage(page - 1)
    }

    function goToNextPage() {
        setPage(page + 1)
    }

    function goToLastPage() {
        setPage(totalPages)
    }

    return (
        <AttendeeListDetails>
            <div className="header">
                <h1>Participantes</h1>
                <div className="search">
                    <i className="uil uil-search"></i>
                    <input onChange={onSearchInputChanged} type="text" placeholder="Buscar Participante..." />
                </div>
            </div>

            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th className="firstColumn">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th>Código</th>
                            <th>Participante</th>
                            <th>Data de inscrição</th>
                            <th>Data do check-in</th>
                            <th className="lastColumn"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            attendees.slice((page - 1) * 10, (page * 10)).map((attendee) => {
                                return (
                                    <tr key={attendee.id} className="effectOnHoverTR">
                                        <td>
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <td>{attendee.id}</td>
                                        <td>
                                            <div>
                                                <span className="name">{attendee.name}</span>
                                                <span>{attendee.email}</span>
                                            </div>
                                        </td>
                                        <td>{dayjs().to(attendee.createdAt)}</td>
                                        <td>{dayjs().to(attendee.checkedInAt)}</td>
                                        <td>
                                            <button><i className="uil uil-ellipsis-h"></i></button>
                                        </td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>
                                Mostrando 10 de {attendees.length} itens
                            </td>
                            <td colSpan={3} className="pagination">
                                <div className="paginationDetail">
                                    <span>Página {page} de {totalPages}</span>

                                    <div className="buttonsNavigation">
                                        <button onClick={goToFirstPage} disabled={page === 1}><i className="uil uil-angle-double-left"></i></button>
                                        <button onClick={goToPreviousPage} disabled={page === 1}><i className="uil uil-angle-left"></i></button>
                                        <button onClick={goToNextPage} disabled={page === totalPages}><i className="uil uil-angle-right"></i></button>
                                        <button onClick={goToLastPage} disabled={page === totalPages}><i className="uil uil-angle-double-right"></i></button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </AttendeeListDetails>
    )
}

export default AttendeeList