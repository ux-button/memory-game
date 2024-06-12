import {render, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import { Card } from '../src/components/Card'

describe('test card component', () => {
    it('match snapshot', () => {
        const handleClick = vi.fn()
        const { container } = render(<Card />);
        expect(container).toMatchFileSnapshot();
    })
})