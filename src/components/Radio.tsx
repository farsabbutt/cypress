'use client'
export const Radio = () => {
    const onRadioClick = () => {
        alert('radio')
    }

    return <div><input type="radio" className="radio" onClick={onRadioClick}></input> Option</div>
}