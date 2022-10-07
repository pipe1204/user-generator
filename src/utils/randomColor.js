export const randomColor = () => {
    const colors = ["#FA7070", '#FD841F', '#ADDDD0', '#FFDE00', '#FF74B1', '#182747', '#00FFD1', '#38E54D', '#5F9DF7', '#DFD3C3', '#2192FF']
    
    const random = colors[Math.floor(Math.random() * colors.length) + 1]

    return random
}