import { render, screen } from '@testing-library/react'
import {BadgeComponent} from './badge';

const mockData = {
    warning: 'warning'
}

test("Badge renders successfully", () => {
    render(<BadgeComponent type={mockData.warning}/>);

    const element = screen.getByText(/warning/i);

    expect(element).toBeInTheDocument();
})

test("Badge renders warning state successfully", () => {
    const {container} = render(<BadgeComponent type={mockData.warning}/>);
    expect(container.querySelector('.warning')).toBeInTheDocument();
})

