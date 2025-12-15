
// import '../../styles/Badges.js';
import styled, {css} from 'styled-components';
import {SIZES} from '../../styles/variables';

const Badge = styled.div`
    color: var(--black);
    font-family: Inter;
    font-weight: 700;
    font-style: Bold;
    height: 18px;
    width: 38px;
    font-size: 12px;
    line-height: 150%;
    border-radius: 8px;
    padding: 2px 4px;
    margin-left: 6px;
    width: 100%;

    p {
        margin: 0
    }

    &.neutral {
        background-color: var(--neutral);
    }

    &.success {
       background-color: var(--success);
    }

    &.warning {
        background-color: var(--warning);
    }

`;
export const BadgeComponent = ({type}) => {
    return (
        <Badge className={`badge ${type}`}>
            <p>{type}</p>
        </Badge>
    );
};