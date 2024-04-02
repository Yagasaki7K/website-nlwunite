import styled from "styled-components"

const HeaderDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 2rem 0;

    nav {
        display: flex;
        align-items: center;
        gap: 1.25rem;

        a {
            font-weight: 500;
            font-size: 0.875rem;
            color: #fff;
            text-decoration: none;
        }

        .event {
            color: #c0bfc5;
        }
    }
`

export default HeaderDetails