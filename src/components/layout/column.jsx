import styled from "styled-components";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
`;


export const ColumnComponent = ({children}) => {
    return (
        <Column>
            {children}
        </Column>
    );
};