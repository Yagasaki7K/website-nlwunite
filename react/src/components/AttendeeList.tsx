import AttendeeListDetails from "./AttendeeListDetails"

const AttendeeList = () => {
    return (
        <AttendeeListDetails>
            <div className="header">
                <h1>Participantes</h1>
                <div className="search">
                    <i className="uil uil-search"></i>
                    <input type="text" placeholder="Buscar Participante..." />
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
                            Array.from({ length: 8 }).map((_, index) => {
                                return (
                                    <tr key={index} className="effectOnHoverTR">
                                        <td>
                                            <input type="checkbox" name="" id="" />
                                        </td>
                                        <td>12345</td>
                                        <td>
                                            <div>
                                                <span className="name">Anderson Marlon</span>
                                                <span>anderson18.marlon@gmail.com</span>
                                            </div>
                                        </td>
                                        <td>7 dias atrás</td>
                                        <td>3 dias atrás</td>
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
                                Mostrando 10 de 228 itens
                            </td>
                            <td colSpan={3} className="pagination">
                                <div className="paginationDetail">
                                    <span>Página 1 de 23</span>

                                    <div className="buttonsNavigation">
                                        <button><i className="uil uil-angle-double-left"></i></button>
                                        <button><i className="uil uil-angle-left"></i></button>
                                        <button className="active"><i className="uil uil-angle-right"></i></button>
                                        <button className="active"><i className="uil uil-angle-double-right"></i></button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </AttendeeListDetails >
    )
}

export default AttendeeList