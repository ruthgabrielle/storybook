import React from 'react'
import Button from '../src/components/Button/Button'
import ThemeProvider from '../src/theme/ThemeProvider'

export default function HomeScreen() {
    return (
        <ThemeProvider>
            <div>
                <h1> Home Page!</h1>
                <Button variant='accent'>
                    Simple Button
                </Button>
            </div>
        </ThemeProvider>
    )
}