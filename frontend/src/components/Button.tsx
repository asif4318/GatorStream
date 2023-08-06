interface ClickableButton {
    callbackFunc?: () => void
    text?: string
    style?: ButtonStyle
    className?: string
}

enum ButtonStyle {
    Primary = 0,
    Secondary,
    Danger
}


function GetStyle(style: ButtonStyle): string {
    const defaultProperties = "rounded-lg border-none p-2 text-white "
    switch (style) {
        case ButtonStyle.Primary:
            return defaultProperties + "bg-cyan-600 "
        case ButtonStyle.Secondary:
            return defaultProperties + "bg-orange-400 "
        case ButtonStyle.Danger:
            return defaultProperties + "bg-red-400 "
    }
}


const Button = ({ callbackFunc = () => { }, text = "", style = ButtonStyle.Primary, className = "" }: ClickableButton) => {
    return (
        <button onClick={() => callbackFunc()} className={GetStyle(style) + className}>
            {text}
        </button>
    );
}

export { Button, ButtonStyle };