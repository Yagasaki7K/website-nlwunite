// USING DATABASE
// import { useEffect } from 'react'

import { ChangeEvent, useState } from "react"
import AttendeeListDetails from "./AttendeeListDetails"
import { attendees } from "../data/attendees"
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

// USING DATABASE
// interface Attendee {
//     id: string
//     name: string
//     email: string
//     createdAt: string
//     checkedInAt: string | null
// }

const AttendeeList = () => {
    const [search, setSearch] = useState(() => {
        const url = new URL(window.location.toString());

        if (url.searchParams.has('search')) {
            return url.searchParams.get('search') ?? '';
        }

        return '';
    });

    const [page, setPage] = useState(() => {
        const url = new URL(window.location.toString())

        if (url.searchParams.has('page')) {
            return Number(url.searchParams.get('page'))
        }

        return 1
    })

    // USING DATABASE
    // const [attendees, setAttendees] = useState<Attendee[]>([])

    const totalPages = Math.ceil(attendees.length / 10)

    // USING DATABASE
    // useEffect(() => {
    // const url = new URL('http://localhost:3333/events/1/attendees')

    // url.searchParams.set('pageIndex', String(page - 1))

    // if(search.length > 0) {
    //     url.searchParams.set('search', search)
    // }
    //
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => { setAttendees(data.attendees) })
    //     .then(data => { setPage(data.total) })
    //     .catch(error => console.log(error))
    // }, [page, search])

    function setCurrentPage(page: number) {
        const url = new URL(window.location.toString())
        url.searchParams.set('page', String(page))
        window.history.pushState({}, '', url.toString())
        setPage(page)
    }

    function setCurrentSearch(search: string) {
        const url = new URL(window.location.toString())
        url.searchParams.set('search', search)
        window.history.pushState({}, '', url.toString())
        setSearch(search)
    }

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        setCurrentSearch(event.target.value)
        setCurrentPage(1)
    }

    function goToFirstPage() {
        setCurrentPage(1)
    }

    function goToPreviousPage() {
        setCurrentPage(page - 1)
    }

    function goToNextPage() {
        setCurrentPage(page + 1)
    }

    function goToLastPage() {
        setCurrentPage(totalPages)
    }

    const filteredAttendees = typeof search === "string" && search !== ""
        ? attendees.filter((attendee) =>
            attendee.name.toLowerCase().includes(search.toLowerCase()) ||
            attendee.email.toLowerCase().includes(search.toLowerCase())
        )
        : attendees;

    return (
        <AttendeeListDetails>
            <div className="header">
                <h1>Participantes</h1>
                <div className="search">
                    <i className="uil uil-search"></i>
                    <input onChange={onSearchInputChanged} value={search} type="text" placeholder="Buscar Participante..." />
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
                            filteredAttendees.slice((page - 1) * 10, (page * 10)).map((attendee) => {
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
                                Mostrando {filteredAttendees.length} de {attendees.length} itens
                            </td>
                            <td colSpan={3} className="pagination">
                                <div className="paginationDetail">
                                    <span>Página {page} de {totalPages}</span>

                                    <div className="buttonsNavigation">
                                        <button onClick={goToFirstPage} disabled={page === 1}><i className="uil uil-angle-double-left"></i></button>
                                        <button onClick={goToPreviousPage} disabled={page === 1}><i className="uil uil-angle-left"></i></button>
                                        <button onClick={goToNextPage} disabled={page === totalPages || filteredAttendees.length <= 10}><i className="uil uil-angle-right"></i></button>
                                        <button onClick={goToLastPage} disabled={page === totalPages || filteredAttendees.length <= 10}><i className="uil uil-angle-double-right"></i></button>
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