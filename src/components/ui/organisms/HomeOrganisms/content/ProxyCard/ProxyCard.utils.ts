const formattedDate = (i: number) => {
    const date = new Date(i * 1000)
    return (
        date.getFullYear() +
        '/' +
        String(date.getMonth() + 1).padStart(2, '0') +
        '/' +
        String(date.getDate()).padStart(2, '0')
    )
}

const pingCardColor = (ping: number, type: 'gradient' | 'single') => {
    const colors = {
        green: {
            gradient: 'from-transparent to-green-600',
            single: 'bg-green-600',
        },
        amber: {
            gradient: 'from-transparent to-amber-600',
            single: 'bg-amber-600',
        },
        red: {
            gradient: 'from-transparent to-red-600',
            single: 'bg-red-600',
        },
    }
    if (ping <= 100) {
        return colors['green'][type]
    }
    if (ping > 100 && ping <= 300) {
        return colors['amber'][type]
    }
    if (ping > 300) {
        return colors['red'][type]
    }
}

export { formattedDate, pingCardColor }
