import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card } from '../src/components/Card'

const handleClick = vi.fn()

describe('test card component', () => {
    it('match snapshot', () => {
        const { container } = render(<Card />);
        expect(container).toMatchSnapshot();
    })
})