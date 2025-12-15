import styled from 'styled-components';
import { BadgeComponent } from '../badge/badge';

const Row = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    height: 42px;
`;

const Tab = styled.div `
    display: flex;
    flex-direction: row;
    border-radius: 50px;
    padding: 16px 8px;
    color: var(--default);
    cursor: pointer;
    transition: opacity 0.3s ease;
    background-color: transparent;
    border: 1px solid var(--border-default-off);
    font-size: 14px;
    align-items: anchor-center;

    min-width: 46px;
    justify-content: center;

    &:hover {
        opacity: 0.8;
        background-color: var(--hover-background-off);
        border: 1px solid var(--hover-border-off);
    }

    ${props => props.$isactive ? `
        &.active {
            background-color: var(--focus);
            border: 1px solid var(--focus);
            color: var(--white);
        }

        &:hover {
            background-color: var(--hover);
            border: 1px solid var(--hover);
        }
    `:`` }
`;

const  Label = styled.div`
        font-family: Inter;
        font-weight: 700;
        margin: 0;`;

export const TabComponent = ({title, badge, isactive, onClick}) => {
    return (
        <Row>
            <Tab className={`tab ${isactive ? 'active' : ''}`} onClick={onClick} $isactive={isactive}>
                <Label className="Label">{title}</Label>
                {badge && <BadgeComponent type={badge} />}
            </Tab>
        </Row>
    );
};