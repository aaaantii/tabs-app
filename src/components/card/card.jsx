import styled from "styled-components";

const Card = styled.div`
    border-radius: 16px;
    background-color: var(--neutral);
    padding: 16px;
    color: var(--black);
    max-width: 340px;
`;

export const CardComponent = ({children}) => {
    return (
        <Card className="card">
            {children}
        </Card>
    );
};