'use client'
export const Button = () => {
    const onButtonClick = () => {
        alert('haaay')
    }

    return <button className="button" onClick={onButtonClick}>Click me dude</button>
}