import { render, screen } from '@testing-library/react'
import {TabComponent} from './tab';

const mockData = {
    title: 'Overview',
    badge: 'warning',
    isActive: true,
    onClick: () => {}
}

test("Tab renders successfully", () => {
    render(<TabComponent title={mockData.title} badge={mockData.badge} isActive={mockData.isActive} onClick={mockData.onClick}/>);

    const element = screen.getByText(/Overview/i);

    expect(element).toBeInTheDocument();
})

test("Tab renders badge successfully", () => {
    render(<TabComponent title={mockData.title} badge={mockData.badge} isActive={mockData.isActive} onClick={mockData.onClick}/>);

    const element = screen.getByText(/warning/i);

    expect(element).toBeInTheDocument();
})

test("Tab renders inactive state successfully", () => {
    render(<TabComponent title={mockData.title} badge={mockData.badge} isActive={false} onClick={mockData.onClick}/>);

    const element = screen.getByText(/Overview/i);

    expect(element).not.toHaveClass('active');
})

test("Tab renders onClick function successfully", () => {
    const onClick = jest.fn();
    render(<TabComponent title={mockData.title} badge={mockData.badge} isActive={mockData.isActive} onClick={onClick}/>);

    const element = screen.getByText(/Overview/i);
    element.click();

    expect(onClick).toHaveBeenCalled();
})

