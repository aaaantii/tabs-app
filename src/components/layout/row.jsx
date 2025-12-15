import styled from "styled-components";

const Row = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 16px;
`;


export const RowComponent = ({children}) => {
    return (
        <Row>
            {children}
        </Row>
    );
};