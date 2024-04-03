import styled from "styled-components"

const AttendeeListDetails = styled.div`
    .header {
        display: flex;
        margin-top: -1rem;
        gap: 0.75rem;
        align-items: center;

        h1 {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .search {
            padding: 0.5rem 0.75rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 0.5rem;
            font-size: 0.875rem;
            width: 18rem;
            display: flex;
            align-items: center;
            text-align: center;
            gap: 0.75rem;

            i {
                color: #6ee7b7;
            }

            input {
                background: transparent;
                flex: 1;
                outline: none;
                border: none;
                color: #fff;
            }   
        }
    }

    .content {
        border-width: 1px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        table {
            width: 100%;

            tr {
                border-width: 1px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .effectOnHoverTR:hover {
                background: rgba(0, 0, 0, 0.2);
            }

            th, td {
                padding: 0.75rem 1rem;
                font-size: 0.875rem;

                input {
                    width: 0.875rem; 
                    height: 0.875rem; 
                    background-color: rgba(0, 0, 0, 0.2); 
                    border-radius: 0.25rem; 
                    border: 0.0625rem solid rgba(255, 255, 255, 0.1); 
                }
            }

            th {
                font-weight: 600;
                text-align: left;
            }

            td {
                color: #d4d4d4;

                div {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;

                    .name {
                        font-weight: 600;
                        color: #fff;
                    }
                }

                button {
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.375rem;
                    padding: 0.375rem;
                    cursor: pointer;

                    i {
                        width: 1rem;
                        height: 1rem;
                        color: #fff;
                    }
                }
            }

            .firstColumn {
                width: 2rem;
            }

            .lastColumn {
                width: 2rem;
            }

            .pagination {
                text-align: right;

                .paginationDetail {
                    display: inline-flex;
                    align-items: center;
                    flex-direction: row;
                    gap: 2rem;

                    .buttonsNavigation {
                        display: flex;
                        flex-direction: row;
                        gap: 0.375rem;

                        button {
                            background: #2b2b2b;
                            border: 1px solid rgba(255, 255, 255, 0.1);
                        }
                    
                        button:disabled {
                            background: #1f1e22;
                        }
                    }
                }
            }
        }
    }
`

export default AttendeeListDetails